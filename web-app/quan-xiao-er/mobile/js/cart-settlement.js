// 切换账户支付方式
function selectPaymentAccount() {
    $('#page-content-payment-account-row-point').on('click', function () {
        if ($(this).find('i.iconfont').hasClass('icon-radiosunchecked')) {
            $(this).find('i.iconfont').removeClass('icon-radiosunchecked').addClass('icon-radioschecked');
            $('#page-layer').show();
            $('#page-layer-modal-point').show();
        } else {
            $(this).find('i.iconfont').removeClass('icon-radioschecked').addClass('icon-radiosunchecked');
        }
    });
    $('#page-content-payment-account-row-balance').on('click', function () {
        if ($(this).find('i.iconfont').hasClass('icon-radiosunchecked')) {
            $(this).find('i.iconfont').removeClass('icon-radiosunchecked').addClass('icon-radioschecked');
            $('#page-layer').show();
            $('#page-layer-modal-balance').show();
        } else {
            $(this).find('i.iconfont').removeClass('icon-radioschecked').addClass('icon-radiosunchecked');
        }
    });
}

// 切换第三方支付方式
function selectPaymentThird() {
    $('.page-content-payment-third-row').on('click', function () {
        $('.page-content-payment-third-row.active').removeClass('active')
            .find('i.iconfont').removeClass('icon-radioschecked').addClass('icon-radiosunchecked');
        $(this).addClass('active');
        $(this).find('i.iconfont').removeClass('icon-radiosunchecked').addClass('icon-radioschecked');
    });
}

// 模态框按钮
function setModelBtn() {
    $('.page-layer-modal').each(function () {
        var $this = $(this);
        $(this).find('.page-layer-modal-btn-cancel').on('click', function () {
            $this.hide();
            $('#page-layer').hide();
        });
    });
    $('#page-layer-modal-balance .page-layer-modal-btn-confirm').on('click', function () {
        window.location.href = './center-recharge.html';
    });
}

// 页面加载完成后执行
$(function () {
    selectPaymentAccount();
    selectPaymentThird();
    setModelBtn();
});