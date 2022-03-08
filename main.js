// show links
((burger) => {
  
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', ()=> {
    
    burger.children[0].classList.toggle('active');
    burger.children[1].classList.toggle('active');
    burger.children[2].classList.toggle('active');
    document.body.classList.toggle('collapse');
    document.body.classList.toggle('no-scroll')
    navLinks.classList.toggle('show');
    
  });
  
  
})(document.querySelector('.burger-btn'));


// line animation navlink hover
((navLink) => {
  
  navLink.forEach(link => {
    link.addEventListener('mouseenter', ()=> {
      
      link.classList.remove('back');
      link.classList.remove('move');
      link.classList.add('show');
      
    });
    link.addEventListener('mouseleave', ()=> {
      
      link.classList.add('move');
      link.classList.remove('show');
      setTimeout(()=> link.classList.add('back'), 200);
      
    });
    
  });
  
})(document.querySelectorAll('.nav-link'));

const h1 = document.querySelector('h1');
const heading = 'Next generation digital banking';
const words = heading.split('');
words.forEach(word => {
  const span = document.createElement('span');
  span.classList.add('heading-word');
  span.innerHTML = word;
  h1.append(span);
});


if(bodyWidth > 800) {
  anime({
    targets: '.bg-intro img',
    keyframes: [
      { translateY: -40 },
      { translateX: 105 },
      { translateY: 40 },
      { translateX: 20 },
      { translateY: 10 },
      { translateX: -5 }
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });
}
