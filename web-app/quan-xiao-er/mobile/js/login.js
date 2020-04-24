// 按钮功能
function  setButtonFunction() {
    // 返回
    $('#login-card-header-link').on('click', function () {
        window.history.back();
    });
    // 显示注册卡片
    $('#login-card-other-register').on('click', function () {
        $('#login-card').hide();
        $('#register-card').show();
    });
    // 显示找回密码卡片
    $('#login-card-other-retrieve').on('click', function () {
        $('#login-card').hide();
        $('#retrieve-card').show();
    });
    // 显示登录卡片
    $('#register-card').find('.card-header-back').on('click', function () {
        $('#register-card').hide();
        $('#login-card').show();
    });
    $('#retrieve-card').find('.card-header-back').on('click', function () {
        $('#retrieve-card').hide();
        $('#login-card').show();
    });
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
    // 是否同意注册卡片服务协议
    $('#register-card-btn-agreement').on('click', function () {
        var iconCheckbox = $(this).find('i.iconfont');
        var btnRegisiter = $(this).parents('#register-card-form').find('.card-form-btn-submit>button');
        if (iconCheckbox.hasClass('icon-check-box-outline')) {
            iconCheckbox.removeClass('icon-check-box-outline').addClass('icon-check-box-outline-blank');
            btnRegisiter.addClass('disabled');
        } else {
            iconCheckbox.removeClass('icon-check-box-outline-blank').addClass('icon-check-box-outline');
            btnRegisiter.removeClass('disabled');
        }
    });
}

// 页面加载完成后执行
$(function () {
    setButtonFunction();
});