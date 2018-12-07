/* global mdui */
var $$ = mdui.JQ;
var pathName = location.pathname;

// 设置工具栏标题
function setToolbarTitle() {
    if (pathName.search('/home.html') !== -1) {
        $$('#toolbar-title').text('首页');
    } else if (pathName.search('/article.html') !== -1) {
        $$('#toolbar-title').text('文章');
    } else if (pathName.search('/video.html') !== -1) {
        $$('#toolbar-title').text('视频');
    } else if (pathName.search('/music.html') !== -1) {
        $$('#toolbar-title').text('音乐');
    } else {
        $$('#toolbar-title').text('？？');
    }
}

// 设置工具栏搜索功能
function setSearchFunction() {
    // 禁用首页的搜索按钮
    if (pathName.search('/home.html') !== -1) {
        $$('#toobar-search-button').hide();
    } else {
        $$('#toobar-search-button').show();
    }
    // 定义记录输入框最近内容的变量
    var lastInputText = '';
    // 设置搜索按钮相关动画
    $$('#toobar-search-button').on('click', function () {
        $$(this).addClass('mdui-hidden');
        $$('#toobar-textfield-expandable').removeClass('mdui-hidden');
        $$('#toobar-textfield-expandable-input-box').val(lastInputText);
        var tempTimeout = setTimeout(function () {
            $$('#toobar-textfield-expandable-search-button').trigger('click');
            $$('#toolbar-title').addClass('mdui-hidden');
            clearTimeout(tempTimeout);
        }, 50);
    });
    $$('#toobar-textfield-expandable-close-button').on('click', function () {
        $$('#toolbar-title').removeClass('mdui-hidden').addClass('animated fadeIn');
        $$('#toobar-textfield-expandable').transitionEnd(function () {
            $$('#toobar-textfield-expandable').addClass('mdui-hidden');
            $$('#toobar-search-button').removeClass('mdui-hidden');
        });
    });
    // 设置搜索功能
    $$('#toobar-textfield-expandable-input-box').on('change', function () {
        // 获取用户输入内容
        var inputText = $$(this).val();
        var inputTextRegExp = new RegExp(inputText, 'i');
        // 记录最后一次输入的内容
        lastInputText = inputText;
        // 视频页搜索功能
        if (pathName.search('/video.html') !== -1) {
            $$('.video-card').each(function () {
                var showThisCard = false;
                var thisCard = $$(this);
                thisCard.css('opacity', '0');
                thisCard.find('.video-card-text-truncate').each(function () {
                    if ($$(this).text().search(inputTextRegExp) !== -1) {
                        showThisCard = true;
                        var newText = $$(this).text()
                            .replace(inputTextRegExp, '<span class="mdui-color-blue mdui-text-color-white">$&</span>');
                        $$(this).html(newText);
                    }
                });
                if (showThisCard) {
                    thisCard.show().removeClass('zoomIn');
                    var tempTimeout = setTimeout(function () {
                        thisCard.addClass('zoomIn').css('opacity', '1');
                        clearTimeout(tempTimeout);
                    }, 50);
                } else {
                    $$(this).removeClass('zoomIn').hide();
                }
            });
        }
        // 音乐页搜索功能
        if (pathName.search('/music.html') !== -1) {
            $$('.aplayer-list>ol>li').each(function () {
                var thisMusicName = $$(this).find('.aplayer-list-title').text();
                var thisMusicArtist = $$(this).find('.aplayer-list-author').text();
                if (thisMusicName.search(inputTextRegExp) !== -1 || thisMusicArtist.search(inputTextRegExp) !== -1) {
                    $$(this).show();
                } else {
                    $$(this).hide();
                }
            });
        }
    });
}

// 设置自动隐藏应用栏
function toggleAppbarScrollHide() {
    var headroomAppbar = new mdui.Headroom('#appbar');
    $$(window).on('load resize', function () {
        if ($$(this).width() < 1024) {
            headroomAppbar.enable();
        } else {
            headroomAppbar.disable();
        }
    });
}

// 激活抽屉式导航列表项
function activeDrawerListItem() {
    $$('#left-drawer-list .mdui-list-item').removeClass('mdui-list-item-active');
    if (pathName.search('/home.html') !== -1) {
        $$('#left-drawer-list-home').addClass('mdui-list-item-active');
    } else if (pathName.search('/article.html') !== -1) {
        $$('#left-drawer-list-article').addClass('mdui-list-item-active mdui-collapse-item-open');
    } else if (pathName.search('/video.html') !== -1) {
        $$('#left-drawer-list-video').addClass('mdui-list-item-active');
    } else if (pathName.search('/music.html') !== -1) {
        $$('#left-drawer-list-music').addClass('mdui-list-item-active');
    } else {
        $$('#left-drawer-list .mdui-list-item').removeClass('mdui-list-item-active');
    }
}

// 设置抽屉式导航列表项链接
function setDrawerListItemLink() {
    $$('#left-drawer-list-home').on('click', function () {
        location.assign('./home.html');
    });
    // $$('#left-drawer-list-article').one('click', function () {
    //     mdui.alert('文章功能开发中<( _ _ )>', function () {
    //         var thisSnackbar = mdui.snackbar({
    //             message: '(oﾟvﾟ)ノ李姐万岁！',
    //             buttonText: '好的',
    //             onButtonClick: function(){
    //                 thisSnackbar.close();
    //             },
    //         });
    //     });
    // });
    $$('#left-drawer-list-video').on('click', function () {
        location.assign('./video.html');
    });
    $$('#left-drawer-list-music').on('click', function () {
        location.assign('./music.html');
    });
    $$('#left-drawer-list-article>ul>li').eq(0).on('click',function () {
        location.assign('./article.html');
    });
}

// 页面加载完成后执行
$$(function () {
    setToolbarTitle();
    setDrawerListItemLink();
    toggleAppbarScrollHide();
    activeDrawerListItem();
    setSearchFunction();
});