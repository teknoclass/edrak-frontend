// Get Years For Copyright In Footer
document.querySelector('footer .copyright span.years').innerHTML = new Date().getFullYear();
// Set Active Class To Navbar Links
document.addEventListener("DOMContentLoaded", () => {
    const url = window.location.pathname;
    const activePage = url.substring(url.lastIndexOf('/') + 1);
    const links = document.querySelectorAll('.navbar-nav li.nav-item a.nav-link');

    links.forEach(link => {
        const linkPage = link.href.substring(link.href.lastIndexOf('/') + 1);

        if (activePage === linkPage) {
            link.closest("a").classList.add("active");
        }
    });
});
// Swiper Main Hero: Home Page;
var swiperHomePage = new Swiper(".swiper-main-hero", {
    slidesPerView: 1,
    loop: document.querySelector(".swiper-main-hero .swiper-slide").length > 1,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    effect: "slide",
    speed: 1500,
    navigation: {
        nextEl: ".swiper-main-hero .swiper-button-next",
        prevEl: ".swiper-main-hero .swiper-button-prev",
    }
});
