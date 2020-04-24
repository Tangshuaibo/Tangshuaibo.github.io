// 设置picker
function setBankPicker() {
    new MobileSelect({
        trigger: '#input-bank-name-selector',
        title: '银行选择',
        wheels: [
            {
                data: [
                    '中国工商银行',
                    '中国农业银行',
                    '中国建设银行',
                    '中国银行',
                    '交通银行',
                    '招商银行',
                    '平安银行',
                    '中信银行',
                    '兴业银行',
                    '民生银行',
                    '光大银行'
                ]
            }
        ],
        triggerDisplayData: false,
        callback: function (indexArr, data) {
            $$('#input-bank-name').val(data[0]);
        }
    });
}

// 页面加载完成后执行
$$(function () {
    setBankPicker();
});