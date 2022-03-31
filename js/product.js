/* ========== Products Slider =========== */
const swiper = new Swiper('.mySwiper', {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 70,
    pagination: {
        el: '.custom-pagination',
        clickable: true,
    },
    breakpoints: {
        567: {
            slidesPerView: 2,
        },
        996: {
            slidesPerView: 3,
        },
    },
});