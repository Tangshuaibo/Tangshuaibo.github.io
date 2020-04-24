var Page = (function () {
    // 构造器
    function page () {}
    // 静态方法
    page.init = (function () {
        this.setCarousel();
    }).bind(page.prototype);
    // 设置轮播
    page.prototype.setCarousel = function () {
        new Swiper('#carousel', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            loop: true,
            pagination: {
                el: '#carousel>.swiper-pagination'
            },
        });
    }
    // 暴露构造器
    return page;
})();

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    Page.init();
});