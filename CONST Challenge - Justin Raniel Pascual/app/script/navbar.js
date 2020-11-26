const navbarBtn = document.querySelector('#navbar__button');
const navbarMenu = document.querySelector('#navbar__menu');
navbarBtn.addEventListener('click', ()=>{
    if(navbarMenu.classList.contains('navbar--mobile--close')) {
        navbarMenu.classList.remove('navbar--mobile--close');
        navbarBtn.classList.add('navbar__menu--open');
    } else {
        navbarMenu.classList.add('navbar--mobile--close');
        navbarBtn.classList.remove('navbar__menu--open');
    }
});