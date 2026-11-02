/* Works carousel: endless loop, auto-advance, swipe and drag, arrows, dots, pause button.
   Reads window.SAANSA_WORKS (js/works-data.js) and fills #works-carousel.
   Styles: css/carousel.css */
(function () {
  'use strict';

  var root = document.getElementById('works-carousel');
  var data = (window.SAANSA_WORKS || []).slice();
  if (!root || !data.length) return;

  var viewport = root.querySelector('.cs-viewport');
  var track = root.querySelector('.cs-track');
  var dotsEl = root.querySelector('.cs-dots');
  var prevBtn = root.querySelector('.cs-prev');
  var nextBtn = root.querySelector('.cs-next');
  var toggleBtn = root.querySelector('.cs-toggle');

  var N = data.length;
  var delay = parseInt(root.getAttribute('data-autoplay'), 10) || 4500;
  var reduceMq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var DURATION = 560;

  var pv = 1;            // slides visible at once
  var index = 0;         // position in the track, counting the cloned slides
  var slideW = 0;
  var busy = false;
  var userPlaying = !reduceMq.matches;
  var hovering = false, focused = false, offscreen = false, dragging = null;
  var timer = null, finishTimer = null, resizeTimer = null;

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  /* Photo first, then the web fallback, then the drawn illustration. */
  function buildMedia(item) {
    var media = el('div', 'cs-media');
    var sources = [item.image, item.fallback].filter(Boolean);
    var img = new Image();
    var i = 0;
    img.alt = item.alt || item.title || '';
    img.decoding = 'async';
    img.draggable = false;
    if (item.position) img.style.objectPosition = item.position;

    function useArt() {
      if (img.parentNode) media.removeChild(img);
      var tpl = item.art && document.getElementById(item.art);
      if (tpl && tpl.content) media.appendChild(tpl.content.cloneNode(true));
      media.setAttribute('role', 'img');
      media.setAttribute('aria-label', img.alt);
    }
    function tryNext() {
      if (i < sources.length) img.src = sources[i++];
      else useArt();
    }
    img.addEventListener('error', tryNext);
    media.appendChild(img);
    tryNext();
    return media;
  }

  function makeSlide(item, isClone, realIndex) {
    var li = el('li', 'cs-slide');
    var card = el('figure', 'cs-card');
    var body = el('figcaption', 'cs-body');
    card.appendChild(buildMedia(item));
    if (item.place) body.appendChild(el('span', 'cs-place', item.place));
    body.appendChild(el('h3', 'cs-title', item.title));
    if (item.text) body.appendChild(el('p', 'cs-text', item.text));
    card.appendChild(body);
    li.appendChild(card);
    if (isClone) {
      li.setAttribute('aria-hidden', 'true');
      li.setAttribute('inert', '');
    } else {
      li.setAttribute('role', 'group');
      li.setAttribute('aria-roledescription', 'slide');
      li.setAttribute('aria-label', (realIndex + 1) + ' of ' + N);
    }
    return li;
  }

  function readPV() {
    var v = parseInt(getComputedStyle(root).getPropertyValue('--cs-per-view'), 10) || 1;
    return Math.max(1, Math.min(v, N > 1 ? N - 1 : 1));
  }
  function offsetBase() { return N > 1 ? pv : 0; }
  function currentReal() { return (((index - offsetBase()) % N) + N) % N; }

  function measure() { slideW = viewport.clientWidth / pv; }

  function setPos(animate, dragOffset) {
    track.style.transition = animate ? '' : 'none';
    track.style.transform = 'translate3d(' + (-index * slideW + (dragOffset || 0)) + 'px,0,0)';
    if (!animate) void track.offsetWidth;   // commit the jump before the next animated move
  }

  function build(realIdx) {
    var i;
    pv = readPV();
    track.textContent = '';
    if (N > 1) for (i = N - pv; i < N; i++) track.appendChild(makeSlide(data[i], true, i));
    for (i = 0; i < N; i++) track.appendChild(makeSlide(data[i], false, i));
    if (N > 1) for (i = 0; i < pv; i++) track.appendChild(makeSlide(data[i], true, i));
    index = offsetBase() + (realIdx || 0);
    measure();
    setPos(false);
    updateDots();
  }

  /* After an animated move onto a cloned slide, jump to the matching real slide without animation. */
  function settle() {
    clearTimeout(finishTimer);
    finishTimer = setTimeout(function () {
      if (index >= N + pv) index -= N;
      else if (index < pv) index += N;
      setPos(false);
      busy = false;
    }, reduceMq.matches ? 0 : DURATION + 40);
  }

  function go(delta) {
    if (N < 2 || busy) return;
    busy = true;
    index += delta;
    setPos(true);
    updateDots();
    settle();
  }

  function goTo(realIdx) {
    if (N < 2 || busy || realIdx === currentReal()) return;
    busy = true;
    index = offsetBase() + realIdx;
    setPos(true);
    updateDots();
    settle();
  }

  /* Dots */
  function buildDots() {
    dotsEl.textContent = '';
    data.forEach(function (item, i) {
      var b = el('button', 'cs-dot');
      b.type = 'button';
      b.setAttribute('aria-label', 'Show ' + item.title + ' (' + (i + 1) + ' of ' + N + ')');
      b.addEventListener('click', function () { goTo(i); sync(); });
      dotsEl.appendChild(b);
    });
  }
  function updateDots() {
    var real = currentReal();
    Array.prototype.forEach.call(dotsEl.children, function (d, i) {
      var on = i === real;
      d.classList.toggle('is-active', on);
      if (on) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
    });
  }

  /* Autoplay: runs only while nothing is holding it back. */
  function shouldRun() {
    return userPlaying && N > 1 && !hovering && !focused && !offscreen && !dragging && !document.hidden;
  }
  function sync() {
    clearInterval(timer);
    timer = null;
    if (shouldRun()) timer = setInterval(function () { go(1); }, delay);
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', userPlaying ? 'false' : 'true');
      toggleBtn.setAttribute('aria-label', userPlaying ? 'Pause slideshow' : 'Play slideshow');
    }
    track.setAttribute('aria-live', userPlaying ? 'off' : 'polite');
  }

  /* Swipe and drag */
  viewport.addEventListener('pointerdown', function (e) {
    if (N < 2 || busy) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = { id: e.pointerId, x: e.clientX, y: e.clientY, t: Date.now(), dx: 0, moved: false };
    sync();
  });
  viewport.addEventListener('pointermove', function (e) {
    if (!dragging || e.pointerId !== dragging.id) return;
    var dx = e.clientX - dragging.x;
    if (!dragging.moved) {
      if (Math.abs(dx) < 6) return;
      if (Math.abs(e.clientY - dragging.y) > Math.abs(dx)) { dragging = null; sync(); return; }
      dragging.moved = true;
      root.classList.add('is-dragging');
      try { viewport.setPointerCapture(e.pointerId); } catch (err) {}
    }
    dragging.dx = Math.max(-slideW, Math.min(slideW, dx));
    setPos(false, dragging.dx);
  });
  function endDrag() {
    if (!dragging) return;
    var d = dragging;
    dragging = null;
    root.classList.remove('is-dragging');
    if (d.moved) {
      try { viewport.releasePointerCapture(d.id); } catch (err) {}
      var velocity = d.dx / Math.max(1, Date.now() - d.t);
      var threshold = Math.min(80, slideW * 0.18);
      if (d.dx < -threshold || velocity < -0.45) go(1);
      else if (d.dx > threshold || velocity > 0.45) go(-1);
      else setPos(true);
    }
    sync();
  }
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);

  viewport.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); sync(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); sync(); }
  });

  /* Hold the autoplay while the visitor is interacting or looking elsewhere. */
  root.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { hovering = true; sync(); } });
  root.addEventListener('pointerleave', function () { hovering = false; sync(); });
  root.addEventListener('focusin', function (e) {
    try { focused = e.target.matches(':focus-visible'); } catch (err) { focused = false; }
    sync();
  });
  root.addEventListener('focusout', function () { focused = false; sync(); });
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      offscreen = !entries[0].isIntersecting;
      sync();
    }, { threshold: 0.15 }).observe(root);
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); sync(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { go(1); sync(); });
  if (toggleBtn) toggleBtn.addEventListener('click', function () { userPlaying = !userPlaying; sync(); });
  if (reduceMq.addEventListener) {
    reduceMq.addEventListener('change', function () { userPlaying = !reduceMq.matches; sync(); });
  }

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var real = currentReal();
      if (readPV() !== pv) build(real);
      else { measure(); setPos(false); }
    }, 120);
  });

  /* Start */
  if (N < 2) root.classList.add('is-single');
  buildDots();
  build(0);
  sync();
})();
