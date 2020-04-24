// 切换选项卡
function changeTab () {
    $('#page-menu-list>li').on('click', function () {
        var tabTarget = $(this).data('target');
        $('#page-menu-list>li.active').removeClass('active');
        $(this).addClass('active');
        $('.page-tab').each(function () {
            var tabId = $(this).data('id');
            if (tabId === tabTarget) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
}

// 页面加载完成后执行
$(function () {
    changeTab();
});