const moblie_nav = document.querySelector(".moblie-nav-btn");
  const nav_header = document.querySelector(".header");
  const toggleNavbar=() =>{
  nav_header.classList.toggle('active');
  }
  moblie_nav.addEventListener('click',()=> toggleNavbar());