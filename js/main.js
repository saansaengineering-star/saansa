/* Page behaviour: phone menu, logo fallback, today's marker in the working hours, copy buttons. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // Phone menu
  var header = document.querySelector('.site-top');
  var menuBtn = document.querySelector('.menu-btn');
  if (header && menuBtn) {
    var setOpen = function (open) {
      header.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    menuBtn.addEventListener('click', function () { setOpen(!header.classList.contains('is-open')); });
    document.querySelectorAll('#site-nav a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Show the drawn "S" mark if the logo file is missing.
  var logo = document.querySelector('.brand-logo');
  if (logo) {
    var swap = function () {
      logo.hidden = true;
      var mark = logo.nextElementSibling;
      if (mark) mark.hidden = false;
    };
    if (logo.complete && logo.naturalWidth === 0) swap();
    else logo.addEventListener('error', swap);
  }

  // Hide the footer logo if the file is missing.
  document.querySelectorAll('.foot-logo').forEach(function (img) {
    img.addEventListener('error', function () { img.hidden = true; });
  });

  // Highlight today (Nepal time) in the working hours row.
  try {
    var today = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'Asia/Kathmandu' }).format(new Date());
    var cell = document.querySelector('#days [data-day="' + today + '"]');
    if (cell) { cell.classList.add('today'); cell.setAttribute('aria-current', 'date'); }
  } catch (e) {}

  // Copy buttons. If the clipboard is refused, select the text so the visitor can copy it.
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var label = btn.textContent;
      function done(text) { btn.textContent = text; setTimeout(function () { btn.textContent = label; }, 1600); }
      function selectText() {
        var el = document.getElementById(btn.getAttribute('data-target'));
        if (!el) return;
        var r = document.createRange(); r.selectNodeContents(el);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        done('Selected');
      }
      try {
        navigator.clipboard.writeText(btn.getAttribute('data-copy')).then(function () { done('Copied'); }, selectText);
      } catch (e) { selectText(); }
    });
  });
})();
