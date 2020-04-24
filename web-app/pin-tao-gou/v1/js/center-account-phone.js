// 操作浏览器历史记录
var setHistoryState = {
    replaceStep1State: function () {
        history.replaceState({step: 'step1'}, 'step1', '#step1');
    },
    pushStep2State: function () {
        history.pushState({step: 'step2'}, 'step2', '#step2');
    }
}

// 设置按钮
function setBtns() {
    $$('#btn-next').on('click', function () {
        $$('#tab-step-1').hide();
        $$('#tab-step-2').show();
        if ('pushState' in history) {
            setHistoryState.pushStep2State();
        }
    });
}

// 设置浏览器前进后退刷新按钮
function setPopState() {
    if ('pushState' in history) {
        var switchStep = function (stepName) {
            switch (stepName) {
                case 'step1': {
                    $$('#tab-step-1').show();
                    $$('#tab-step-2').hide();
                    break;
                }
                case 'step2': {
                    $$('#tab-step-1').hide();
                    $$('#tab-step-2').show();
                    break;
                }
            }
        }
        $$(window).on('load popstate', function () {
            if (history.state) {
                switchStep(history.state.step);
            } else {
                setHistoryState.replaceStep1State();
            }
        });
    }
}

// 页面加载完成后执行
$$(function () {
    setBtns();
    setPopState();
});