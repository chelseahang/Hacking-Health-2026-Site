(function () {
  var SESSION_KEY = 'hhto-auth';
  var PASSWORD    = 'TorontoInnovate2026!';

  if (sessionStorage.getItem(SESSION_KEY) === '1') return;

  // Hide body content until authenticated
  document.documentElement.style.overflow = 'hidden';

  var overlay = document.createElement('div');
  overlay.id = 'auth-overlay';
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'z-index:99999',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'background:#0a0a0a',
    'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  ].join(';');

  overlay.innerHTML = [
    '<div style="background:#111;border:1px solid #2a2a2a;border-radius:12px;padding:2.5rem 2rem;width:100%;max-width:380px;text-align:center;box-shadow:0 4px 24px rgba(168,85,247,0.18);">',
      '<img src="assets/sanofi-logo.png" alt="Sanofi" style="height:32px;margin:0 auto 1.5rem;display:block;" />',
      '<h2 style="color:#fff;font-size:1.25rem;margin:0 0 0.25rem;">Hacking Health Toronto</h2>',
      '<p style="color:#a1a1aa;font-size:0.9rem;margin:0 0 1.75rem;">Enter the password to continue</p>',
      '<input id="auth-input" type="password" placeholder="Password" autocomplete="current-password" style="',
        'width:100%;box-sizing:border-box;',
        'background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;',
        'color:#fff;font-size:1rem;padding:0.65rem 0.9rem;',
        'outline:none;margin-bottom:0.75rem;',
        'transition:border-color 0.2s;',
      '" />',
      '<button id="auth-submit" style="',
        'width:100%;padding:0.7rem;border:none;border-radius:8px;',
        'background:#a855f7;color:#fff;font-size:1rem;font-weight:600;',
        'cursor:pointer;transition:background 0.2s;',
      '">Enter</button>',
      '<p id="auth-error" style="color:#f87171;font-size:0.85rem;margin:0.75rem 0 0;min-height:1.2em;"></p>',
    '</div>',
  ].join('');

  document.body.appendChild(overlay);

  var input  = document.getElementById('auth-input');
  var btn    = document.getElementById('auth-submit');
  var errMsg = document.getElementById('auth-error');

  function attempt() {
    if (input.value === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      document.documentElement.style.overflow = '';
      overlay.remove();
    } else {
      errMsg.textContent = 'Incorrect password. Please try again.';
      input.value = '';
      input.focus();
      input.style.borderColor = '#f87171';
      setTimeout(function () {
        input.style.borderColor = '#2a2a2a';
      }, 1500);
    }
  }

  btn.addEventListener('click', attempt);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') attempt();
  });
  btn.addEventListener('mouseover', function () { btn.style.background = '#9333ea'; });
  btn.addEventListener('mouseout',  function () { btn.style.background = '#a855f7'; });

  // Focus input after paint
  setTimeout(function () { input.focus(); }, 50);
})();
