/* MIS SCRIPT */


// Transiciones Vanila JS
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