// footer year
var yearEl = document.getElementById('year');
if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

// mobile nav toggle
var navToggle = document.getElementById('navToggle');
var mainNav = document.getElementById('mainNav');
if(navToggle && mainNav){
  navToggle.addEventListener('click', function(){
    var isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  mainNav.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      mainNav.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// scroll-triggered reveal
var revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  revealEls.forEach(function(el){ io.observe(el); });
} else {
  revealEls.forEach(function(el){ el.classList.add('in-view'); });
}

// subtle parallax on the hero chart card (skipped for reduced-motion users)
var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var heroVisualCard = document.querySelector('.hero-visual-card');
if(heroVisualCard && !reducedMotion){
  window.addEventListener('scroll', function(){
    var y = window.scrollY;
    if(y < 700){
      heroVisualCard.style.transform = 'translateY(' + (y * 0.06).toFixed(1) + 'px)';
    }
  }, { passive:true });
}
