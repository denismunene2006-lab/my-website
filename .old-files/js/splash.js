/* Splash screen controller - shows only after the page finishes loading
   Uses sessionStorage to track if splash has been shown in the current session
*/
(function(){
  var overlay = document.getElementById('splash-overlay');
  if(!overlay) return;

  var SPLASH_SESSION_KEY = 'dlabs_splash_shown';
  var SPLASH_DURATION = 4000;

  function unlockPage(){
    document.documentElement.classList.remove('splash-lock');
    document.body.classList.remove('splash-lock');
  }

  function hideSplash(){
    overlay.classList.add('hidden');
    overlay.classList.remove('visible');
    document.body.classList.add('splash-done');
    setTimeout(function(){
      overlay.style.display = 'none';
      unlockPage();
    }, 700);
  }

  function showSplash(){
    overlay.style.display = 'flex';
    overlay.classList.remove('hidden');
    overlay.classList.add('visible');
    document.documentElement.classList.add('splash-lock');
    document.body.classList.add('splash-lock');
    setTimeout(hideSplash, SPLASH_DURATION);
  }

  if(sessionStorage.getItem(SPLASH_SESSION_KEY) === 'true'){
    overlay.style.display = 'none';
    unlockPage();
    document.body.classList.add('splash-done');
    return;
  }

  sessionStorage.setItem(SPLASH_SESSION_KEY, 'true');

  if(document.readyState === 'complete'){
    showSplash();
  } else {
    window.addEventListener('load', showSplash, {once:true});
  }

  document.addEventListener('click', function(e){
    if(overlay && overlay.classList.contains('visible')){
      e.stopPropagation();
    }
  }, true);
})();
