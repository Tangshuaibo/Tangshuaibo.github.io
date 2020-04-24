// 缩放页面
function scalePage(originalWidth) {
    var scaleFunction = function () {
        var availWidth = window.screen.availWidth;
        if (availWidth < originalWidth) {
            var scale = availWidth / originalWidth;
            $('meta[name="viewport"]').attr({
                'content': 'width=device-width, initial-scale=' + scale + ', user-scalable=no'
            });
        }
    };
    scaleFunction();
    $(window).on('resize', function () {
        scaleFunction();
    });
}

// 头部按钮功能
function setHeaderBtn() {
    $('#header-back').on('click', function () {
        window.history.back();
    });
    $('#header-home').on('click', function () {
        $(location).prop('href', './index.html');
    });
}

// 页面加载完成后执行
$(function () {
    scalePage(750);
    setHeaderBtn();
});