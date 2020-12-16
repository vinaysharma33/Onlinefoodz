// This code is for Hamburger sign

burger = document.querySelector('.hamburger');
navbar = document.querySelector('.nav');
navlist = document.querySelector('.navlist');

burger.addEventListener('click',()=>{
    navlist.classList.toggle('visible-resp');
    navbar.classList.toggle('height-resp');
});



