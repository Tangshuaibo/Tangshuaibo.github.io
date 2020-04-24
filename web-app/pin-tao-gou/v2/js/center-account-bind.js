// 操作浏览器历史记录
var setHistoryState = {
    replaceBindedState: function () {
        history.replaceState({tab: 'binded'}, 'binded', '#binded');
    },
    pushBindState: function () {
        history.pushState({tab: 'bind'}, 'bind', '#bind');
    },
    pushExampleState: function () {
        history.pushState({tab: 'example'}, 'example', '#example');
    }
}

// 显示指定面板
var setTabShown = {
    showTabBind: function () {
        $$('#main-account-bind').show();
        $$('#main-account-binded').hide();
        $$('#main-account-example').hide();
    },
    showTabBinded: function () {
        $$('#main-account-bind').hide();
        $$('#main-account-binded').show();
        $$('#main-account-example').hide();
    },
    showTabExample: function () {
        $$('#main-account-bind').hide();
        $$('#main-account-binded').hide();
        $$('#main-account-example').show();
    }
}

// 设置按钮
function setBtns() {
    // 显示账号绑定操作面板
    $$('#btn-account-add').on('click', function () {
        setTabShown.showTabBind();
        if ('pushState' in history) {
            setHistoryState.pushBindState();
        }
    });
    // 显示账号绑定示例面板
    $$('#btn-account-example').on('click', function () {
        setTabShown.showTabExample();
        if ('pushState' in history) {
            setHistoryState.pushExampleState();
        }
    });
}

// 设置浏览器前进后退刷新按钮
function setPopState() {
    if ('pushState' in history) {
        var switchStep = function (tabName) {
            switch (tabName) {
                case 'bind': {
                    setTabShown.showTabBind();
                    break;
                }
                case 'binded': {
                    setTabShown.showTabBinded();
                    break;
                }
                case 'example': {
                    setTabShown.showTabExample();
                    break;
                }
            }
        }
        $$(window).on('load popstate', function () {
            if (history.state) {
                switchStep(history.state.tab);
            } else {
                setHistoryState.replaceBindedState();
            }
        });
    }
}

// 页面加载完成后执行
$$(function () {
    setBtns();
    setPopState();
});