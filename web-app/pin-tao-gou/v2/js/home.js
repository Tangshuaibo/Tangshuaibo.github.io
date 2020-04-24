// 设置下拉选择器
function setSelectorDropDown() {
    // 淘宝标签单账号选择
    $$('#selector-account-taobao-label').on('change', function () {
        if($$(this).val() === '添加新账号') {
            location.href = './home-account-taobao.html';
        }
    });
}

// 页面加载完成后执行
$$(function () {
    setSelectorDropDown();
});