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

// 显隐回复框
var toggleTabReply = {
    headerText: function () {
        return $$('#header-text');
    },
    tabInfo: function () {
        return $$('#main-tab-info');
    },
    tabReply: function () {
        return $$('#main-tab-reply');
    },
    textareaReply: function () {
        return $$('#textarea-reply');
    },
    complaintFooter: function () {
        return $$('#complaint-footer');
    },
    showTabReply: function () {
        this.headerText().text('发布回复');
        this.tabInfo().hide();
        this.complaintFooter().hide();
        this.tabReply().show().trigger('show');
    },
    hideTabReply: function () {
        this.headerText().text('申诉详情');
        this.tabInfo().show();
        this.complaintFooter().show();
        this.tabReply().hide().trigger('hide');
    }
}

// 设置浏览器history
var setHistory = {
    replaceStateInfo: function () {
        if (history.replaceState) {
            history.replaceState({tab: 'info'}, 'info', '#info');
        }
    },
    pushStateReply: function () {
        if (history.pushState) {
            history.pushState({tab: 'reply'}, 'reply', '#reply');
        }
    }
}

// 设置显隐发布回复框按钮
function showTextareaReply() {
    $$('#footer-textarea>textarea').on('focus', function () {
        toggleTabReply.showTabReply();
        setHistory.pushStateReply();
    });
    $$('#btn-complete-filling').on('click', function () {
        if (history.pushState) {
            history.back();
        } else {
            toggleTabReply.hideTabReply();
        }
    });
}

// 设置文本框输入相关
function setTextareaInput() {
    var tabReply = $$('#main-tab-reply');
    var textReply = $$('#textarea-reply');
    var textareaFooterContainer = $$('#footer-textarea');
    var textareaFooter = $$('#footer-textarea>textarea');
    var textareaReplyLength = $$('#textarea-reply-length');
    textReply.on('input', function () {
        textareaReplyLength.text($$(this).val().length);
        textareaFooter.val($$(this).val());
    });
    tabReply.on('hide',function () {
        mdui.updateTextFields(textareaFooterContainer);
        $$('body').css({
            'padding-bottom': $$('#complaint-footer').height() + 'px'
        });
    });
}

// 设置浏览器前进后退刷新
function setBrowserPopstate() {
    var switchTab = function (tabName) {
        switch (tabName) {
            case 'info': {
                toggleTabReply.hideTabReply();
                break;
            }
            case 'reply': {
                toggleTabReply.showTabReply();
                break;
            }
        }
    }
    $$(window).on('popstate load', function () {
        if (history.state) {
            switchTab(history.state.tab);
        } else {
            setHistory.replaceStateInfo();
        }
    });
}

// 设置发送按钮
function setBtnSend() {
    $$('#btn-footer-send').on('click', function () {
        var textReply = $$('#textarea-reply');
        var textareaFooter = $$('#footer-textarea>textarea');
        var textareaFooterContainer = $$('#footer-textarea');
        textReply.val('');
        textareaFooter.val('');
        mdui.updateTextFields(textareaFooterContainer);
        $$('body').css({
            'padding-bottom': '52px'
        });
    });
}

// 页面加载完成后执行
$$(function () {
    toggleTaskCard();
    setTextareaInput();
    showTextareaReply();
    setBrowserPopstate();
    setBtnSend();
});