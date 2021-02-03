/* MIS SCRIPT */

// MENU
const burgerIcon = document.querySelector('#navbar-menu-burguer');
const navbarMenu = document.querySelector('#navbar-menu-items');

// Cuando se pulsa cambiamos la propiedad is-active
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
});


// WOW Init
var swiper = new Swiper(".swiper-container", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    }
})
// WOW
new WOW().init()

