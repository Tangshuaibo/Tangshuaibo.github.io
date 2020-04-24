// 切换充值项
function changeRechargeItem() {
    $('.page-recharge-amount-item').on('click', function () {
        $('.page-recharge-amount-item.active').removeClass('active');
        $('#page-recharge-amount>input').removeClass('active');
        $(this).addClass('active');
        var amount = parseInt($(this).find('span.number').text()).toFixed(2);
        $('#page-recharge-text>span.number').text(amount);
    });
    $('#page-recharge-amount>input').on('focus', function () {
        $('.page-recharge-amount-item.active').removeClass('active');
        $(this).addClass('active');
        if($(this).val()) {
            $('#page-recharge-text>span.number').text($(this).val());
        } else {
            $('#page-recharge-text>span.number').text('0.00');
        }
    });
}

// 输入充值金额
function inputRechargeAmount() {
    $('#page-recharge-amount>input').on('input', function () {
        var value = $(this).val();
        $(this).val(value.replace(/[^0-9.]/g,''));
    });
    $('#page-recharge-amount>input').on('change', function () {
        if ($(this).val()) {
            var value = parseFloat($(this).val());
            $(this).val(value.toFixed(2));
            $('#page-recharge-text>span.number').text($(this).val());
        }
    });
}

// 切换支付方式
function changePaymentMethod() {
    $('#page-recharge-bottom-content-list>li').on('click', function () {
        $('.recharge-method-item-checkbox>i.icon-radioschecked')
            .removeClass('icon-radioschecked').addClass('icon-radiosunchecked');
        $(this).find('.recharge-method-item-checkbox>i.iconfont')
            .removeClass('icon-radiosunchecked').addClass('icon-radioschecked');
    });
}

// 页面加载完成后执行
$(function () {
    changeRechargeItem();
    inputRechargeAmount();
    changePaymentMethod();
});