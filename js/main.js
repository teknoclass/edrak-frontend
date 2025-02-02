
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
// Start Swiper Script
const mainHeroSwiper = new Swiper(".main-hero .swiper-container", {
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 500,
});
const educationalSwiper = new Swiper(".educational-furniture .swiper-container", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 500,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        }
    },
});
const educationalEnvSwiper = new Swiper(".educational-environments .swiper-container", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 500,
    spaceBetween: 10,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },

    },
});
const partnersSwiper = new Swiper(".our-partners .swiper-container", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    speed: 500,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1360: {
            slidesPerView: 4,
        }
    },
});
const projectsSwiper = new Swiper(".our-projects .swiper-container", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 500,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    },
});
const saidAboutUsSwiper = new Swiper(".said-aboutus .swiper-container", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 500,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    },
});
const videoSwiper = new Swiper(".video-section .swiper-container", {
    navigation: {
        prevEl: ".video-section .swiper-button-prev",
        nextEl: ".video-section .swiper-button-next",
    },
    slidesPerView: 1,
    spaceBetween: 30,
});
// Start Product Thumb Slider
const swiper = new Swiper(".product-details-page .thumbs-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

const swiper2 = new Swiper(".product-details-page .swiper-product-view", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});
// End Product Thumb Slider
const newsHeroswiper = new Swiper(".news-hero .swiper-container", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".news-hero .swiper-pagination",
        clickable: true,
    },
});