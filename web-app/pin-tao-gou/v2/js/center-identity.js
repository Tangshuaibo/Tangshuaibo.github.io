// 操作浏览器历史记录
var setHistoryState = {
    replaceInfoState: function () {
        history.replaceState({tab: 'info'}, 'info', '#info');
    },
    pushExampleState: function () {
        history.pushState({tab: 'example'}, 'example', '#example');
    }
}

// 显示示例页面
function showPageExample() {
    $$('#btn-view-example').on('click', function () {
        $$('#main-tab-info').hide();
        $$('#main-tab-example').show();
        if ('pushState' in history) {
            setHistoryState.pushExampleState();
        }
    });
}

// 浏览器前进后退刷新
function setPopState() {
    if ('pushState' in history) {
        var switchTab = function (tabName) {
            switch (tabName) {
                case 'info': {
                    $$('#main-tab-info').show();
                    $$('#main-tab-example').hide();
                    break;
                }
                case 'example': {
                    $$('#main-tab-info').hide();
                    $$('#main-tab-example').show();
                    break;
                }
            }
        };
        $$(window).on('load popstate', function () {
            if (history.state) {
                switchTab(history.state.tab);
            } else {
                setHistoryState.replaceInfoState();
            }
        });
    }
}

// 页面加载完成后执行
$$(function () {
    showPageExample();
    setPopState();
});