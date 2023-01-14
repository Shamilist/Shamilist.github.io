(function() {
const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.pageYOffset > 50) {
        header.classList.add('header__active');
    } else {
        header.classList.remove('header__active');
    }
}
} ());


(function() {
const burgeritem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav')
const close = document.querySelector('.header__nav-close')

burgeritem.addEventListener('click', () => {
menu.classList.add('header__nav-active');
})

close.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
    })
    } ());