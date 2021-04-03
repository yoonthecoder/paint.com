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

  const loginBtn = document.querySelector('.login-btn');
  const closeBtn = document.querySelector('.close-btn');
  const loginModal = document.querySelector('.login-modal');
  const loginSignupBtn = document.querySelector('.login-signup-btn')
  const signupModal = document.querySelector('.signup-modal');
  const signupBtn = document.querySelector('.signup-btn');
  const signupCloseBtn = document.querySelector('.signup-close-btn');
  

  loginBtn.addEventListener('click', function() {
    loginModal.style.display = "block";
      closeBtn.addEventListener('click',function() {
        loginModal.style.display = "none";
      })
      loginSignupBtn.addEventListener('click',function() {
        loginModal.style.display = "none";     
        signupModal.style.display = "block";
      })
  });

  signupBtn.addEventListener('click',function() {
    signupModal.style.display= "block";
    if(signupModal.style.display = "block"){
      signupCloseBtn.addEventListener('click',function() {
        signupModal.style.display ="none";
      });
    }
  });

// Mobile Menu

const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-items');


menu.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});



  