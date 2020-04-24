// 设置轮播
function setCarousel () {
    var goodsSwiper = new Swiper('#carousel-goods', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '#carousel-goods .swiper-pagination',
            bulletActiveClass: 'pagination-bullet-active'
        },
    });
}

// 页面加载完成后执行
$(function () {
    setCarousel();
});