/* global $ */

// 显隐用户已购码模态框
function toggleWinnerBoughtCodes() {
    $('#goods-reveal-right-winner-info-bought>span.check').on('click', function () {
        $('#goods-reveal-code-bought').show();
    });
    $('#goods-reveal-code-bought-header-btn-close').on('click', function () {
        $('#goods-reveal-code-bought').hide();
    });
}

// 设置相关信息列表导航项
function setRelatedInfoNav() {
    var setSliderPosition = function (event) {
        var tempLeft = $('#related-info-nav-list>li.active>span').offset().left - $('#related-info-nav').offset().left;
        var tempWidth = $('#related-info-nav-list>li.active>span').width();
        if (event === 'load') {
            $('#related-info-nav-slider').css({
                'left': tempLeft,
                'width': tempWidth
            });
        } else {
            $('#related-info-nav-slider').animate({
                'left': tempLeft,
                'width': tempWidth
            });
        }
    };
    $('#related-info-nav-list>li').each(function (i) {
        $(this).on('click', function () {
            $('#related-info-nav-list>li').removeClass('active');
            $(this).addClass('active');
            setSliderPosition();
            $('#related-info-tabs>div').hide();
            $('#related-info-tabs>div').eq(i).show();
        });
    });
    setSliderPosition('load');
}

// 显隐参与记录选项卡购买码列表框
function toggleCodesBoughtContainer() {
    $('#related-info-tabs-participation-body-list>ul>li .btn-check').each(function (i) {
        $(this).on('click', function () {
            var tempTop = (i * 40 + 20 - 115) + 'px';
            $('#related-info-tabs-participation-code-container').css('top', tempTop).show();
        });
    });
    $('#related-info-tabs-participation-code-container .code-container-header-btn').on('click', function () {
        $('#related-info-tabs-participation-code-container').hide();
    });
}

// 页面加载完成后执行
$(function () {
    toggleWinnerBoughtCodes();
    setRelatedInfoNav();
    toggleCodesBoughtContainer();
});