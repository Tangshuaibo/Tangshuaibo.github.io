/* global $ */

// 切换显示卡片
function changeCardShown() {
    $('.login-card-content-register-link span').on('click', function () {
        $('.login-card').fadeOut('fast', function () {
            $('.register-card').fadeIn('fast');
        });
    });
    $('.login-card-content-forget-pwd span').on('click', function () {
        $('.login-card').fadeOut('fast', function () {
            $('.reset-card').fadeIn('fast');
        });
    });
    $('.register-card-title-back').on('click', function () {
        $('.register-card').fadeOut('fast', function () {
            $('.login-card').fadeIn('fast');
        });
    });
    $('.reset-card-title-back').on('click', function () {
        $('.reset-card').fadeOut('fast', function () {
            $('.login-card').fadeIn('fast');
        });
    });
}

// 显示或隐藏输入的密码
function togglePassword() {
    $('.password-eye').each(function () {
        $(this).on('click', function () {
            var thisEye = $(this).find('.fa');
            if (thisEye.hasClass('fa-eye')) {
                thisEye.removeClass('fa-eye').addClass('fa-eye-slash');
                $(this).parent().find('input').attr('type', 'password');
            } else {
                thisEye.removeClass('fa-eye-slash').addClass('fa-eye');
                $(this).parent().find('input').attr('type', 'text');
            }
        });
    });
}

// 页面加载完成后执行
$(function () {
    changeCardShown();
    togglePassword();
});