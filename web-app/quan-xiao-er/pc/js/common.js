/* global $ */

// 滚动一定距离后显示隐藏的菜单
function toggleHiddenHeaderMenu() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('#header-hidden').fadeIn();
        } else {
            $('#header-hidden').fadeOut();
        }
    });
}

// 回到顶部
function scrollToTop() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
}

// 页面加载完成后执行
$(function () {
    toggleHiddenHeaderMenu();
    scrollToTop();
});