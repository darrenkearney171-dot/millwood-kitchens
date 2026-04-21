function toggleNav() {
  var nav = document.getElementById('mobileNav');
  var btn = document.getElementById('menuBtn');
  var open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
  btn.innerHTML = open
    ? '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 2l16 16M18 2L2 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    : '<svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
}

document.addEventListener('click', function(e) {
  var header = document.querySelector('.site-header');
  if (header && !header.contains(e.target)) {
    var nav = document.getElementById('mobileNav');
    var btn = document.getElementById('menuBtn');
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    }
  }
});
