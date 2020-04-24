// 获取当前时间
function getCurrentTime() {
    var date = new Date();
    var seperator1 = '-';
    var seperator2 = ':';
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (day >= 0 && day <= 9) {
        day = '0' + day;
    }
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (hour <= 9) {
        hour = '0' + hour;
    }
    if (minute <= 9) {
        minute = '0' + minute;
    }
    if (second <= 9) {
        second = '0' + second;
    }
    var currentTime = year + seperator1 + month + seperator1 + day + ' '
                    + hour + seperator2 + minute + seperator2 + second;
    return currentTime;
}

// 显示临时图片
function showReplyImage() {
    var maxSize = 3 * Math.pow(1024, 2);
    // 检测图片大小
    var checkTempFileSize = function (fileObj) {
        if (fileObj) {
            if (fileObj.size > maxSize) {
                mdui.dialog({
                    title: '图片过大',
                    content: '图片大小应不超过3M，请重新选择',
                    modal: true,
                    history: false,
                    closeOnEsc: false,
                    buttons: [
                        {
                            text: '我知道了'
                        }
                    ]
                });
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    };
    // 获取临时图片地址
    var getTempDataUrl = function (fileObj) {
        var tempDataUrl = null;
        if (fileObj) {
            tempDataUrl = URL.createObjectURL(fileObj);
        } else {
            URL.revokeObjectURL(fileObj);
            tempDataUrl = null;
        }
        return tempDataUrl;
    };
    // 添加临时图片
    var addTempImg = function (dataUrl) {
        if (dataUrl) {
            var dialogList = $$('#main-dialogue>ul');
            var userItem = $$('li.list-item-user.proto').clone();
            dialogList.append(userItem);
            dialogList.append('<li class="mdui-divider mdui-m-y-0"></li>');
            var lastItem = $$('li.list-item-user').last();
            var lastItemImg = lastItem.find('.conversation-content>img');
            var lastItemTime = lastItem.find('.conversation-time');
            lastItemImg.attr('src', dataUrl).show();
            lastItemTime.text(getCurrentTime());
            lastItem.removeClass('proto');
            window.scrollTo(0, document.documentElement.scrollHeight);
        }
    }
    // 清理已选文件
    var clearTempImg = function (inputObj) {
        inputObj.val('');
    }
    // 触发文件选择
    $$('#btn-footer-image').on('click', function () {
        $$('#input-footer-image').trigger('click');
    });
    // 文件改变相关
    $$('#input-footer-image').on('change', function () {
        var tempFile = $$(this)[0].files[0];
        if (checkTempFileSize(tempFile)) {
            addTempImg(getTempDataUrl(tempFile));
            clearTempImg($$(this));
        }
    });
}

// 显示临时回复
function showReplyText() {
    // 添加临时新回复
    var addTempReply = function () {
        var inputReply = $$('#footer-textarea>textarea');
        if (inputReply.val() !== '') {
            var dialogList = $$('#main-dialogue>ul');
            var userItem = $$('li.list-item-user.proto').clone();
            dialogList.append(userItem);
            dialogList.append('<li class="mdui-divider mdui-m-y-0"></li>');
            var lastItem = $$('li.list-item-user').last();
            var lastItemText = lastItem.find('.conversation-content-text');
            var lastItemTime = lastItem.find('.conversation-time');
            lastItemText.text(inputReply.val()).show();
            lastItemTime.text(getCurrentTime());
            lastItem.removeClass('proto');
            window.scrollTo(0, document.documentElement.scrollHeight);
        }
    };
    // 清除输入区域
    var clearInputArea = function () {
        $$('#footer-textarea>textarea').val('');
        mdui.updateTextFields();
    }
    // 发送按钮
    $$('#btn-footer-send').on('click', function () {
        addTempReply();
        clearInputArea();
    });
}

// 页面加载完成后执行
$$(function () {
    showReplyImage();
    showReplyText();
});