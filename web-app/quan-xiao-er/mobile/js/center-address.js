/* global Swiper */

// 显示地址卡片
function showAddressCards() {
    new Swiper('.address-card>.swiper-container', {
        width: 360
    });
}

// 页面加载完成执行
$(function () {
    showAddressCards();
});