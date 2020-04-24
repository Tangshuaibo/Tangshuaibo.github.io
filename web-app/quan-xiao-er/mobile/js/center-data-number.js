// 按钮功能
function  setButtonFunction() {
    // 获取验证码
    $('.card-form-row-btn-code').each(function () {
        $(this).on('click', function () {
            $(this).addClass('disabled').text(60);
            var thisBtnCode = $(this);
            var i = 60;
            var tempInterval = setInterval(function () {
                i--;
                thisBtnCode.text(i);
                if (i === 0) {
                    clearInterval(tempInterval);
                    thisBtnCode.removeClass('disabled').text('获取验证码');
                }
            }, 1000);
        });
    });
}

// 页面加载完成后执行
$(function () {
    setButtonFunction();
});