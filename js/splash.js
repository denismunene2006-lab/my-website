/* Splash screen controller - shows only after the page finishes loading
   Uses sessionStorage to track if splash has been shown in the current session

   Robustness fix: the page must never be left with unclickable buttons. All
   page content is gated behind `body.splash-done` (see splash.css), so this
   controller always guarantees that class is added via multiple fallbacks.
*/
(function(){
  var overlay = document.getElementById('splash-overlay');
  if(!overlay) return;

  var SPLASH_SESSION_KEY = 'dlabs_splash_shown';
  var SPLASH_DURATION = 4000;
  var LOAD_GRACE = 2000;   // if `load` is slow, don't stall the splash waiting for it
  var HARD_UNLOCK = SPLASH_DURATION + 2000; // hard safety net after splash starts

  var splashStarted = false;
  var unlocked = false;

  function unlockPage(){
    document.documentElement.classList.remove('splash-lock');
    document.body.classList.remove('splash-lock');
  }

  function hideSplash(){
    if(unlocked) return; // guard so fallback timers can't double-run
    unlocked = true;
    overlay.classList.add('hidden');
    overlay.classList.remove('visible');
    document.body.classList.add('splash-done');
    setTimeout(function(){
      overlay.style.display = 'none';
      unlockPage();
    }, 700);
  }

  function startSplash(){
    if(splashStarted) return; // guard against load + fallback firing twice
    splashStarted = true;
    overlay.style.display = 'flex';
    overlay.classList.remove('hidden');
    overlay.classList.add('visible');
    document.documentElement.classList.add('splash-lock');
    document.body.classList.add('splash-lock');
    // Primary dismiss timer...
    setTimeout(hideSplash, SPLASH_DURATION);
    // ...plus a hard safety net so a throttled/blocked timer can never leave
    // the page locked (buttons unclickable).
    setTimeout(hideSplash, HARD_UNLOCK);
  }

  // Already shown this session -> skip the splash and unlock immediately so
  // the page is interactive right away.
  if(sessionStorage.getItem(SPLASH_SESSION_KEY) === 'true'){
    overlay.style.display = 'none';
    document.body.classList.add('splash-done');
    unlockPage();
    return;
  }

  try {
    sessionStorage.setItem(SPLASH_SESSION_KEY, 'true');
  } catch(e){
    // Storage may be blocked (private mode / disabled). Not fatal - the splash
    // will simply show again; the page still unlocks correctly.
  }

  // Start the splash as soon as the DOM is ready rather than waiting for the
  // full `load` event. `load` can hang on third-party scripts/fonts/images,
  // which previously left the page hidden & unclickable.
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    startSplash();
  } else {
    document.addEventListener('DOMContentLoaded', startSplash, { once:true });
    // Backstop in case DOMContentLoaded itself never fires.
    setTimeout(startSplash, LOAD_GRACE);
  }

  document.addEventListener('click', function(e){
    if(overlay && overlay.classList.contains('visible')){
      e.stopPropagation();
    }
  }, true);
})();

