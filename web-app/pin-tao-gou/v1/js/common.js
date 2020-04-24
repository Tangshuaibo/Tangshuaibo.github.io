/* global mdui */
var $$ = mdui.JQ;

// 头部按钮功能
function setBtnHeader() {
    // 后退
    $$('#header-btn-back:not(.mdui-invisible)').on('click', function () {
        history.back();
    });
    // 回到首页
    $$('#header-btn-home:not(.mdui-invisible)').on('click', function () {
        location.href = './home.html';
    });
}

// 检测是否有底部导航栏，设置底部内边距
function checkBottomNav() {
    if ($$('#app-footer').length === 0) {
        $$('body').removeClass('mdui-bottom-nav-fixed');
    }
}

// 页面加载完成后执行
$$(function () {
    setBtnHeader();
    checkBottomNav();
});