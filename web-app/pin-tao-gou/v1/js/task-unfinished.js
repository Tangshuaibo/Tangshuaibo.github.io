// 提交任务截图相关
function addScreenShot() {
    // 添加任务截图
    $$('#btn-add-screen-shot').on('click', function () {
        $$('.task-screen-shot.proto:not(:first-of-type)').remove();
        var taskScreenShotComponent = $$('.task-screen-shot.proto').clone();
        $$('.task-screen-shot-container').append(taskScreenShotComponent);
        var lastItem = $$('.task-screen-shot').last();
        var lastItemInput = lastItem.find('.task-screen-shot-input');
        var lastItemBtn = lastItem.find('.task-screen-shot-img-del');
        var lastItemImg = lastItem.find('.task-screen-shot-img');
        var tempFile, tempDataUrl;
        lastItemInput.trigger('click');
        lastItemInput.on('change', function () {
            tempFile = this.files[0];
            if (tempFile) {
                tempDataUrl = URL.createObjectURL(tempFile);
                lastItemImg.css({
                    'background-image': 'url("' + tempDataUrl + '")'
                });
                lastItem.removeClass('proto');
            } else {
                URL.revokeObjectURL(tempDataUrl);
            }
        });
        // 更换任务截图
        lastItemImg.on('click', function () {
            lastItemInput.trigger('click');
        });
        // 删除任务截图
        lastItemBtn.on('click', function () {
            lastItem.remove();
        });
    });
}

// 申请撤销待操作任务相关
function setApplyCancellation() {
    // 实例化对话框
    var dialogApplyCancellation = new mdui.Dialog('#dialog-apply-cancellation', {
        modal: true,
        closeOnEsc: false
    });
    // 打开对话框
    $$('.btn-apply-cancellation').on('click', function () {
        dialogApplyCancellation.open();
    });
    // 改变对话框状态
    var textareaCancellationReason = $$('#textarea-cancellation-reason');
    $$('input[name="group-reason-cancellation"]').on('change', function () {
        var tempValue = $$(this).val();
        if (tempValue === "其他原因") {
            textareaCancellationReason.show();
        } else {
            textareaCancellationReason.hide();
        }
        dialogApplyCancellation.handleUpdate();
    });
    // 关闭对话框
    $$('#btn-dialog-cancellation-cancel').on('click', function () {
        dialogApplyCancellation.close();
    });
}

// 页面加载完成后执行
$$(function () {
    addScreenShot();
    setApplyCancellation();
});