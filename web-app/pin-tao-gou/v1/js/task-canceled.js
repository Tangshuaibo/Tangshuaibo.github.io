// 显示任务撤销原因
function showTaskCanceledReason() {
    $$('.table-data-reason').on('click', function () {
        var tempReason = $$(this).data('reason');
        mdui.alert(tempReason, '撤销原因', function () {}, {
            confirmText: '关闭',
            modal: true
        });
    });
}

// 页面加载完成后执行
$$(function () {
    showTaskCanceledReason();
});