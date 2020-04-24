var Page = (function () {
    'use strict'
    function page() {
        this.init();
    }
    // 设置carousel
    page.prototype.setCarousel = function () {
        var carousel = new Swiper('#carousel', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            loop: true,
            pagination: {
                el: '#carousel>.swiper-pagination'
            },
            navigation: {
                nextEl: '#carousel>.carousel-btn.next',
                prevEl: '#carousel>.carousel-btn.prev'
            },
        });
    }
    // 初始化
    page.prototype.init = function () {
        this.setCarousel();
        new TabSelector().init();
    }
    return page;
})();

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    var page = new Page();
});