//Mobile Nav
const ham = document.querySelector('nav > button');
const mobileNav = document.querySelector('.mobile-nav');

ham.addEventListener('click', e => {
    ham.classList.toggle('ham-active')
    mobileNav.classList.toggle('mobile-active')
})