/* Light / Dark switch. Without this script the page is light, or dark when the system is.
   A choice is kept in this browser only (localStorage); nothing is sent anywhere.
   It also closes an open language menu on a click elsewhere or Escape. */
(function () {
  var root = document.documentElement;
  var KEY = 'pagegloss-theme';
  root.classList.add('js');

  function saved() {
    try { var v = localStorage.getItem(KEY); return v === 'light' || v === 'dark' ? v : null; } catch (e) { return null; }
  }
  function systemDark() {
    try { return window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) { return false; }
  }
  function current() {
    return saved() || (systemDark() ? 'dark' : 'light');
  }
  function paint() {
    var t = current();
    var buttons = document.querySelectorAll('.theme button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', String(buttons[i].getAttribute('data-theme') === t));
    }
  }
  function choose(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    paint();
  }

  var pick = saved();
  if (pick) { root.setAttribute('data-theme', pick); }

  function wire() {
    var buttons = document.querySelectorAll('.theme button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () { choose(this.getAttribute('data-theme')); });
    }
    paint();
    // The language menu works as a plain <details>; this only closes it on a click elsewhere or Escape.
    document.addEventListener('click', function (e) {
      var menus = document.querySelectorAll('.lang-menu[open]');
      for (var j = 0; j < menus.length; j++) {
        if (!menus[j].contains(e.target)) { menus[j].removeAttribute('open'); }
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') { return; }
      var menus = document.querySelectorAll('.lang-menu[open]');
      for (var j = 0; j < menus.length; j++) {
        menus[j].removeAttribute('open');
        menus[j].querySelector('summary').focus();
      }
    });
    try {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function () { if (!saved()) { paint(); } };
      if (mq.addEventListener) { mq.addEventListener('change', onChange); } else if (mq.addListener) { mq.addListener(onChange); }
    } catch (e) {}
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', wire); } else { wire(); }
})();
