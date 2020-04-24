// 显隐任务卡片
function toggleTaskCard() {
    var taskCard = $$('#task-card');
    var triggerCard = $$('#trigger-card');
    var btnHideTaskCard = $$('#btn-hide-task-card');
    var btnShowTaskCard = $$('#btn-show-task-card');
    btnHideTaskCard.on('click', function () {
        taskCard.hide();
        triggerCard.show();
    });
    btnShowTaskCard.on('click', function () {
        taskCard.show();
        triggerCard.hide();
    });
}

// 页面加载完成后执行
$$(function () {
    toggleTaskCard();
});