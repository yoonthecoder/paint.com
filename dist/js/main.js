// AOS
AOS.init();


// Navbar Scroll effect 
window.addEventListener("scroll", function() {
    let navbar = document.getElementsByTagName('nav')[0];
    
    if(window.pageYOffset > 0) {
      navbar.classList.add('scroll-nav');
      navbar.style.transition= "all 0.1s";
    }else {
      navbar.classList.remove("scroll-nav");
    }
  });