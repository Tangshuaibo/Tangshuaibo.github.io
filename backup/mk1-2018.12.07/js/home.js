/* global mdui */
var $$ = mdui.JQ;

// 首页默认隐藏抽屉式导航
function hideLeftDrawer() {
    if ($$(window).width() > 1024) {
        $$('#appbar').find('button').eq(0).trigger('click');
    }
}

// 设置搜索引擎
function setSearchEngine() {
    // 更改下拉菜单按钮样式
    $$('#current-search-engine-button-expand').on('click', function (event) {
        $$(this).hide();
        $$('#current-search-engine-button-collapse').show();
        $$('#search-engine-list').removeClass('fadeOut').addClass('fadeIn');
        event.stopPropagation();
    });
    $$('#current-search-engine-button-collapse').on('click', function () {
        $$(this).hide();
        $$('#current-search-engine-button-expand').show();
        $$('#search-engine-list').removeClass('fadeIn').addClass('fadeOut');
    });
    $$(window).on('click', function () {
        if ($$('#current-search-engine-button-expand').css('display') === 'none') {
            $$('#current-search-engine-button-collapse').trigger('click');
        }
    });
    // 更改搜索引擎图标与表单
    $$('#search-engine-list img').each(function () {
        $$(this).on('click', function () {
            $$('#current-search-engine-logo').attr('src', $$(this).attr('src'));
            $$('#search-engine-list').removeClass('fadeIn').addClass('fadeOut');
            $$('#current-search-engine-button-collapse').hide();
            $$('#current-search-engine-button-expand').show();
            var imgIndex = $$(this).index();
            $$('#search-engine-form form').each(function () {
                if ($$(this).index() === imgIndex) {
                    $$(this).show();
                } else {
                    $$(this).hide();
                }
            });
        });
    });
}

// 设置鼠标进入链接时效果
function setLinkAnimation() {
    $$('#website-container a').parent().on('mouseenter', function () {
        $$(this).children().addClass('mdui-text-color-pink');
        $$(this).addClass('animated tada').on('animationend', function () {
            $$(this).children().removeClass('mdui-text-color-pink');
            $$(this).removeClass('animated tada');
        });
    });
}

// 设置不触发canvas的情况
function notTriggerCanvas() {
    $$('#website-container a').parent().on('mousedown touchstart', function (event) {
        event.stopPropagation();
    });
    $$('#search-engine-form').on('mousedown touchstart', function (event) {
        event.stopPropagation();
    });
}

// live2d相关按钮操作
function setLive2dButton() {
    $$(window).on('load resize', function () {
        if ($$(document).width() <= 860) {
            $$('#button-show-live-2d').hide();
        } else {
            $$('#button-show-live-2d').show();
        }
    });
    $$('.hide-button').on('click', function () {
        $$('#button-show-live-2d').css({
            'visibility': 'visible',
            'opacity': '1'
        });
    });
    $$('#button-show-live-2d').on('click', function () {
        $$(this).css('opacity', '0').transitionEnd(function () {
            $$(this).css('visibility', 'hidden');
        });
        $$('#landlord').css('display', 'block');
    });
}

// 页面加载完成后执行
$$(function () {
    setSearchEngine();
    hideLeftDrawer();
    setLinkAnimation();
    notTriggerCanvas();
    setLive2dButton();
});