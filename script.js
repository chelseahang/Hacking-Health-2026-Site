// =============================================================
// Tiny script for: mobile nav toggle, auto-close on link click,
// active nav highlighting, and updating the footer year.
// You don't normally need to edit this file.
// =============================================================

(function () {
  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Active nav link ---
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === '') currentPage = 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === currentPage) {
      a.classList.add('active');
      // Also mark parent dropdown button as active
      var parentDropdown = a.closest('.nav-dropdown');
      if (parentDropdown) {
        parentDropdown.querySelector('.nav-dropdown-btn').classList.add('active');
      }
    }
  });

  // --- Guides dropdown toggle ---
  document.querySelectorAll('.nav-dropdown-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var dropdown = btn.closest('.nav-dropdown');
      var isOpen = dropdown.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });
  // Close dropdown when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-dropdown.is-open').forEach(function (d) {
      d.classList.remove('is-open');
      d.querySelector('.nav-dropdown-btn').setAttribute('aria-expanded', 'false');
    });
  });

  // --- Footer year ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
