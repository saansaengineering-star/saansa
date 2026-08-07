<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Saansa Engineering & Tech Solution Pvt. Ltd. | Pokhara, Nepal</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              blue: '#0F2C59',
              teal: '#008080',
              accent: '#F86F03',
              light: '#F8F9FA'
            }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased">

  <!-- Header / Navigation -->
  <header class="sticky top-0 z-50 bg-brand-blue text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
      <div class="flex items-center space-x-3">
        <div class="bg-brand-accent p-2 rounded-lg font-bold text-xl text-white">S</div>
        <div>
          <span class="font-bold text-lg tracking-wide block leading-none">SAANSA</span>
          <span class="text-xs text-slate-300 font-light tracking-wider">ENGINEERING & TECH SOLUTION</span>
        </div>
      </div>
      <nav class="hidden md:flex space-x-8 font-medium">
        <a href="#about" class="hover:text-brand-accent transition">About Us</a>
        <a href="#services" class="hover:text-brand-accent transition">Services</a>
        <a href="#contact" class="hover:text-brand-accent transition">Contact</a>
      </nav>
      <a href="#contact" class="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-md shadow transition">
        Get Quote
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative bg-gradient-to-r from-slate-900 via-brand-blue to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto text-center space-y-6">
      <span class="inline-block bg-teal-900/60 text-teal-300 border border-teal-500/30 text-xs uppercase px-3 py-1.5 rounded-full font-semibold tracking-wider">
        Registered in Pokhara-08, Kaski
      </span>
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
        Reliable Engineering, Procurement & Technical Execution
      </h1>
      <p class="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light">
        Your trusted partner for high-precision technical consultancy, specialized industrial equipment supply, and turn-key installation services across Nepal.
      </p>
      <div class="pt-4 flex justify-center gap-4">
        <a href="#services" class="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
          Explore Services
        </a>
        <a href="#contact" class="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-semibold px-6 py-3 rounded-md transition">
          Contact Us
        </a>
      </div>
    </div>
  </section>

  <!-- Services Grid -->
  <section id="services" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-brand-blue">Core Capabilities</h2>
      <p class="text-slate-600 mt-2">Comprehensive engineering and technological services tailored for institutional & commercial projects.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Service 1 -->
      <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
        <div class="w-12 h-12 bg-teal-50 text-brand-teal rounded-lg flex items-center justify-center font-bold text-xl mb-4">01</div>
        <h3 class="text-xl font-bold text-brand-blue mb-2">Engineering Supply</h3>
        <p class="text-slate-600 text-sm leading-relaxed">Sourcing and supplying certified engineering components, materials, and specialized hardware ensuring international quality benchmarks.</p>
      </div>

      <!-- Service 2 -->
      <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
        <div class="w-12 h-12 bg-teal-50 text-brand-teal rounded-lg flex items-center justify-center font-bold text-xl mb-4">02</div>
        <h3 class="text-xl font-bold text-brand-blue mb-2">Procurement Management</h3>
        <p class="text-slate-600 text-sm leading-relaxed">End-to-end strategic procurement services, vendor management, and cost-effective material acquisition for infrastructure projects.</p>
      </div>

      <!-- Service 3 -->
      <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
        <div class="w-12 h-12 bg-teal-50 text-brand-teal rounded-lg flex items-center justify-center font-bold text-xl mb-4">03</div>
        <h3 class="text-xl font-bold text-brand-blue mb-2">Engineering Consultancy</h3>
        <p class="text-slate-600 text-sm leading-relaxed">Expert advisory, technical feasibility studies, structural/electro-mechanical design support, and technical audit solutions.</p>
      </div>

      <!-- Service 4 -->
      <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
        <div class="w-12 h-12 bg-teal-50 text-brand-teal rounded-lg flex items-center justify-center font-bold text-xl mb-4">04</div>
        <h3 class="text-xl font-bold text-brand-blue mb-2">Supply & Installation</h3>
        <p class="text-slate-600 text-sm leading-relaxed">Turnkey delivery and on-site professional installation of heavy machinery, technical plant equipment, and digital tech systems.</p>
      </div>
    </div>
  </section>

  <!-- Location & Details -->
  <section id="about" class="bg-slate-100 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span class="text-brand-accent font-semibold text-sm uppercase">Local Roots, Global Standards</span>
        <h2 class="text-3xl font-bold text-brand-blue mt-1 mb-4">Based in Pokhara, Serving All of Nepal</h2>
        <p class="text-slate-600 leading-relaxed mb-4">
          **Saansa Engineering & Tech Solution Pvt. Ltd.** operates out of Pokhara Ward No. 08, Kaski district. We combine localized industry experience with technical rigor to support public, commercial, and industrial ventures.
        </p>
        <ul class="space-y-2 text-slate-700 font-medium">
          <li class="flex items-center gap-2">✓ Registered Engineering Enterprise</li>
          <li class="flex items-center gap-2">✓ Certified Technical Personnel</li>
          <li class="flex items-center gap-2">✓ On-Time Procurement & Turnkey Execution</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-xl shadow border border-slate-200 space-y-4">
        <h3 class="text-lg font-bold text-brand-blue border-b pb-2">Company Information</h3>
        <div>
          <span class="text-xs text-slate-400 uppercase font-semibold block">Registered Address</span>
          <span class="font-medium text-slate-700">Pokhara - 08, Kaski, Gandaki Province, Nepal</span>
        </div>
        <div>
          <span class="text-xs text-slate-400 uppercase font-semibold block">Primary Focus</span>
          <span class="font-medium text-slate-700">Engineering Consultancy, Procurement & Equipment Installation</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 max-w-4xl mx-auto px-4">
    <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-brand-blue">Contact Our Engineering Team</h2>
        <p class="text-slate-600 mt-2">Send us your project requirements or RFQs directly.</p>
      </div>

      <form class="space-y-6" onsubmit="event.preventDefault(); alert('Inquiry sent successfully!');">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Full Name / Organization</label>
            <input type="text" required class="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-blue">
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Phone / Email</label>
            <input type="text" required class="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-blue">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
          <select class="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-blue">
            <option>Engineering Consultancy</option>
            <option>Procurement Management</option>
            <option>Engineering Material Supply</option>
            <option>Equipment Supply & Installation</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Project Details / Message</label>
          <textarea rows="4" required class="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Describe your project requirements..."></textarea>
        </div>

        <button type="submit" class="w-full bg-brand-blue hover:bg-slate-800 text-white font-bold py-3.5 rounded-md transition shadow-md">
          Submit Inquiry
        </button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
    <p>© Saansa Engineering and Tech Solution Pvt. Ltd. | Pokhara-08, Kaski, Nepal</p>
  </footer>

</body>
</html>
