/* global mdui */
var $$ = mdui.JQ;

// 设置弹幕
function setBarrage() {
    var windowHeight = $$(window).height();
    var barrageTop = 0;
    $$('#splash-screen-barrage div').each(function () {
        // 设置弹幕到最顶端距离
        if (barrageTop >= windowHeight - 50) {
            barrageTop = 0;
        } else {
            barrageTop += 75;
        }
        // 设置弹幕样式
        $$(this).css('top', barrageTop + 'px');
        // 按一定频率弹出弹幕
        var thisDiv = $$(this);
        var timeDelay = 0;
        var divIndex = $$(this).index();
        if (divIndex % 2 === 0) {
            timeDelay = 200 * (divIndex + 1);
        } else {
            timeDelay = 300 * (divIndex + 1);
        }
        var tempTimeout = setTimeout(function () {
            thisDiv.addClass('barrage-active');
            clearTimeout(tempTimeout);
            // 清理已显示弹幕
            var tempTimeout2 = setTimeout(function () {
                thisDiv.remove();
                clearTimeout(tempTimeout2);
            }, 5000);
        },timeDelay);
    });
}

// 跳转到首页
function replaceLocatin() {
    var timeDelay = $$('#splash-screen-barrage div').length * 300 + 5000;
    var tempTimeout = setTimeout(function () {
        location.assign('./home.html');
        clearTimeout(tempTimeout);
    }, timeDelay);
}

// 页面加载完成后执行
$$(function () {
    setBarrage();
    replaceLocatin();
});