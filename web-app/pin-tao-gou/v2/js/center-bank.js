// 设置picker
function setBankPicker() {
    new MobileSelect({
        trigger: '#input-bank-name-selector',
        title: '银行选择',
        wheels: [
            {
                data: [
                    '工商银行',
                    '招商银行',
                    '建设银行',
                    '农业银行',
                    '中国银行',
                    '衡水银行',
                    '沧州银行'
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