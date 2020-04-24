/* global $ */

// 切换二维码显示
function setQRcodeShown() {
    $('#main-top-right-download-links>div').each(function (i) {
        $(this).on('mouseenter', function () {
            if (i === 0) {
                $('#main-top-right-download-code>img').attr({
                    'src': './img/common/QR_code_ios.png',
                    'title': 'ios客户端二维码'
                });
                $('#main-top-right-download-code>span').text('扫码下载ios客户端');
            } else {
                $('#main-top-right-download-code>img').attr({
                    'src': './img/common/QR_code_android.png',
                    'title': '安卓客户端二维码'
                });
                $('#main-top-right-download-code>span').text('扫码下载安卓客户端');
            }
        });
    });
}

// 页面加载完成后执行
$(function () {
    setQRcodeShown();
});