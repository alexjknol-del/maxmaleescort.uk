// maxmaleescort.uk

// Mobile menu
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') menu.classList.remove('open');
    });
  }
})();

// Cookie notice (technical only, no tracking)
(function () {
  var KEY = 'mmx_cookie_ok';
  var banner = document.getElementById('cookie');
  if (!banner) return;
  var stored;
  try { stored = window.localStorage.getItem(KEY); } catch (e) { stored = null; }
  if (!stored) banner.classList.add('show');
  var ok = document.getElementById('cookie-ok');
  if (ok) ok.addEventListener('click', function () {
    try { window.localStorage.setItem(KEY, '1'); } catch (e) {}
    banner.classList.remove('show');
  });
})();

// Year
(function () {
  var now = new Date().getFullYear();
  document.querySelectorAll('.js-year').forEach(function (el) { el.textContent = now; });
})();
