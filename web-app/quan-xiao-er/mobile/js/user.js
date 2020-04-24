// 显隐选项卡
function toggleTabs() {
    $('#page-content-menu-list>li').each(function () {
        $(this).on('click', function () {
            $('#page-content-menu-list>li.active').removeClass('active');
            $(this).addClass('active');
            var tabTarget = $(this).data('target');
            $('#page-content-tab>div').each(function () {
                var tabId = $(this).data('id');
                if (tabTarget === tabId) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    });
}

// 页面加载完成后执行
$(function () {
    toggleTabs();
});