/* global mdui */
var $$ = mdui.JQ;

// 手动加载清除视频
function toggleIframe() {
    $$('.video-card').each(function () {
        var videoIframe = $$(this).find('iframe');
        var videoSrc = videoIframe.attr('data-src');
        var buttonActiveIframe = $$(this).find('.button-active-iframe');
        buttonActiveIframe.on('click', function () {
            if (videoIframe.attr('src') === videoSrc) {
                videoIframe.removeAttr('src');
                buttonActiveIframe.attr('mdui-tooltip', '{content:"加载视频"}');
                buttonActiveIframe.find('i').text('play_arrow');
            } else {
                videoIframe.attr('src', videoSrc);
                buttonActiveIframe.attr('mdui-tooltip', '{content:"清除视频"}');
                buttonActiveIframe.find('i').text('stop');
            }
        });
    });
}

// 视频全屏时隐藏应用栏与抽屉式导航
function setNavigationZindex() {
    $$(document).on('fullscreenchange mozfullscreenchange webkitfullscreenchange', function () {
        var appbar = $$('#appbar');
        var leftDrawer = $$('#left-drawer');
        if (appbar.css('z-index') === '1000') {
            appbar.css('z-index', '-1');
        } else {
            appbar.css('z-index', '1000');
        }
        if (leftDrawer.css('z-index') === '5000') {
            leftDrawer.css('z-index', '-1');
        } else {
            leftDrawer.css('z-index', '5000');
        }
    });
}

// 复制视频链接
function copyVideoLink() {
    $$('.button-copy-video-link').each(function () {
        var urlText = $$(this).prev().attr('href');
        $$(this).on('click', function () {
            $$('#temp-video-link-container').css('display', 'block').val(urlText);
            document.getElementById('temp-video-link-container').select();
            if (document.execCommand('copy')) {
                $$('#temp-video-link-container').css('display', 'none');
                mdui.alert('复制成功');
            }
        });
    });
}

// 获取视频卡片相对于父元素的偏移
function getVideoCardPosition() {
    var videoCardPosition = [];
    $$('.video-card').each(function () {
        videoCardPosition.push($$(this).position());
    });
    return videoCardPosition;
}

// 设置卡片移动后的显示动画
function setVideoCardPositionTransition(videoCardPositionStart) {
    var videoCardPositionEnd = getVideoCardPosition();
    $$.each(videoCardPositionStart, function (i, positionStart) {
        var topStart = positionStart.top;
        var leftStart = positionStart.left;
        var topEnd = videoCardPositionEnd[i].top;
        var leftEnd = videoCardPositionEnd[i].left;
        if (topStart !== topEnd || leftStart !== leftEnd) {
            var thisCard = $$('.video-card').eq(i);
            thisCard.css('opacity', '0').removeClass('zoomIn');
            var tempTimeout = setTimeout(function () {
                thisCard.css('opacity', '1').addClass('zoomIn');
                clearTimeout(tempTimeout);
            }, 500);
        }
    });
}

// 展开收缩视频卡片
function toggleVideoCardCollapse() {
    $$('.video-card').each(function () {
        var thisCard = $$(this);
        var nextCard = $$(this).next('.video-card');
        var collapseButton = $$(this).find('.button-collapse-video-card');
        collapseButton.on('click', function () {
            // 获取所有卡片初始位置
            var videoCardPositionStart = getVideoCardPosition();
            // 获取当前卡片起始位置
            var thisVideoCardPositionStart = thisCard.position();
            // 触发展开或收缩动画
            thisCard.toggleClass('mdui-col-sm-6');
            if (thisCard.hasClass('mdui-col-sm-6')) {
                thisCard.removeClass('video-card-unfold').addClass('video-card-fold');
                collapseButton.children('i').first().text('fullscreen');
                collapseButton.attr('mdui-tooltip', '{content:"展开"}');
                // 卡片收回后其他卡片动画
                thisCard.transitionEnd(function () {
                    // 获取当前卡片最后位置
                    var thisVideoCardPositionEnd = thisCard.position();
                    var topStart = thisVideoCardPositionStart.top;
                    var leftStart = thisVideoCardPositionStart.left;
                    var topEnd = thisVideoCardPositionEnd.top;
                    var leftEnd = thisVideoCardPositionEnd.left;
                    // 根据下一张卡片情况决定是否有动画效果
                    if (nextCard.hasClass('mdui-col-sm-6')) {
                        setVideoCardPositionTransition(videoCardPositionStart);
                    } else {
                        if (topStart !== topEnd || leftStart !== leftEnd) {
                            setVideoCardPositionTransition(videoCardPositionStart);
                        }
                    }
                });
            } else {
                thisCard.removeClass('video-card-fold').addClass('video-card-unfold');
                collapseButton.children('i').first().text('fullscreen_exit');
                collapseButton.attr('mdui-tooltip', '{content:"折叠"}');
            }
            // 重置文本截断
            thisCard.find('.video-card-text-truncate').each(function () {
                var thisDom = $$(this);
                thisDom.removeAttr('style');
                var heightLow = thisDom.addClass('mdui-text-truncate').height();
                thisDom.css('height', heightLow + 'px');
            });
        });
    });
}

// 打开或关闭文本截断
function toggleCardTextTruncate() {
    $$('.video-card-text-truncate').each(function () {
        var thisDom = $$(this);
        var parentDom = $$(this).parent();
        var heightHigh = 0;
        var heightLow = 0;
        var tempHeightA = 0;
        var tempHeightB = 0;
        // 点击后打开或关闭文本截断
        parentDom.on('click', function () {
            thisDom.removeAttr('style');
            tempHeightA = thisDom.toggleClass('mdui-text-truncate').height();
            tempHeightB = thisDom.toggleClass('mdui-text-truncate').height();
            heightHigh = Math.max(tempHeightA, tempHeightB);
            heightLow = Math.min(tempHeightA, tempHeightB);
            thisDom.css('height', thisDom.height() + 'px');
            if (heightHigh !== heightLow) {
                var tempTimeout = setTimeout(function () {
                    // 设置文本截断动画
                    if (thisDom.hasClass('mdui-text-truncate')) {
                        thisDom.css('height', heightHigh + 'px').removeClass('mdui-text-truncate');
                    } else {
                        thisDom.css('height', heightLow + 'px').transitionEnd(function () {
                            thisDom.addClass('mdui-text-truncate');
                        });
                    }
                    clearTimeout(tempTimeout);
                }, 100);
            }
        });
        // 窗口改变大小，自动重置文本截断
        $$(window).on('resize', function () {
            thisDom.removeAttr('style');
            var heightLow = thisDom.addClass('mdui-text-truncate').height();
            thisDom.css('height', heightLow + 'px');
        });
    });
}

// 回到页面顶部
function backToTop() {
    var scrollTop = 0;
    var currentScrollTop = 0;
    var lastScrollTop = 0;
    $$(window).on('scroll', function () {
        scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop > 100) {
            $$('#button-back-to-top').css({
                'visibility': 'visible',
                'opacity': '1'
            });
        } else {
            $$('#button-back-to-top').css({
                'visibility': 'hidden',
                'opacity': '0'
            });
        }
    });
    $$('#button-back-to-top').on('click', function () {
        currentScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var tempInterval = setInterval(function () {
            window.scrollBy(0, -20);
            lastScrollTop = currentScrollTop;
            currentScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (currentScrollTop === 0 || lastScrollTop < currentScrollTop) {
                clearTimeout(tempInterval);
            }
        }, 10);
    });
}

// 页面加载完成后执行
$$(function () {
    toggleIframe();
    copyVideoLink();
    toggleVideoCardCollapse();
    toggleCardTextTruncate();
    setNavigationZindex();
    backToTop();
});