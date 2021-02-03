/* MIS SCRIPT */


// TRANSICIONES
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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

// MENU
const burgerIcon = document.querySelector('#navbar-menu-burguer');
const navbarMenu = document.querySelector('#navbar-menu-items');

// Cuando se pulsa cambiamos la propiedad is-active
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});
