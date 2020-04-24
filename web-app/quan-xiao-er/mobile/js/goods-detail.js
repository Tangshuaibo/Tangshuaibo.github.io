/* global Swiper */

// 轮播图
function initCarousel() {
    new Swiper('#page-carousel', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '#page-carousel-pagination',
            clickable :true,
        }
    });
}

// 页面加载完成后执行
$(function () {
    initCarousel();
});