// 按钮功能
function  setButtonFunction() {
    // 显隐输入的密码
    $('.card-form-row-eye').each(function () {
        $(this).on('click', function () {
            var iconEye = $(this).find('i.iconfont');
            if (iconEye.hasClass('icon-md-eye-off')) {
                iconEye.removeClass('icon-md-eye-off').addClass('icon-md-eye');
                $(this).prev('.card-form-row-input-password').attr('type', 'text');
            } else {
                iconEye.removeClass('icon-md-eye').addClass('icon-md-eye-off');
                $(this).prev('.card-form-row-input-password').attr('type', 'password');
            }
        });
    });
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