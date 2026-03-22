(function(){
  var burger=document.querySelector('.nav-burger');
  var overlay=document.querySelector('.nav-overlay');
  if(!burger||!overlay)return;
  burger.addEventListener('click',function(){
    overlay.classList.toggle('is-open');
    document.body.classList.toggle('nav-menu-open');
    burger.setAttribute('aria-expanded',overlay.classList.contains('is-open'));
  });
  overlay.addEventListener('click',function(e){
    if(e.target===overlay){overlay.classList.remove('is-open');document.body.classList.remove('nav-menu-open');burger.setAttribute('aria-expanded','false');}
  });
  overlay.querySelectorAll('.nav-mobile a').forEach(function(a){
    a.addEventListener('click',function(){overlay.classList.remove('is-open');document.body.classList.remove('nav-menu-open');burger.setAttribute('aria-expanded','false');});
  });
})();
