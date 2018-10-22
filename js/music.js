/* global mdui APlayer ColorThief*/
var $$ = mdui.JQ;
var musicPlayerList = [];

// 创建音乐播放器
function createMusicPlayer(musicPlayerContainer) {
    var listMaxHeight;
    listMaxHeight = window.screen.availHeight * 0.5;
    var ap = new APlayer({
        container: musicPlayerContainer,
        listMaxHeight: listMaxHeight + 'px',
        theme: '#ff4081'
    });
    ap.on('listswitch', function (indexObj) {
        var index = indexObj.index;
        autoSetMusicPlayerTheme(ap, index);
    });
    musicPlayerList.push(ap);
    var musicPlayerBodyHight = $$(musicPlayerContainer).find('.aplayer-body').height();
    $$(musicPlayerContainer).css('height', listMaxHeight + musicPlayerBodyHight + 'px');
    if ($$(musicPlayerContainer).attr('id') !== 'music-player-primary') {
        $$(musicPlayerContainer).addClass('mdui-hidden');
    } else {
        $$(musicPlayerContainer).addClass('animated zoomIn');
    }
    return ap;
}

// 自动设置播放器主题色
function autoSetMusicPlayerTheme(musicPlayer, musicIndex) {
    var colorThief = new ColorThief();
    var colorString = '';
    var index = musicIndex;
    if (typeof musicPlayer.list.audios[index].theme === 'undefined') {
        colorThief.getColorAsync(musicPlayer.list.audios[index].cover, function (color) {
            colorString = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
            musicPlayer.theme(colorString, index);
        });
    }
}

// 洗牌算法
function shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// 新建音乐播放器
function newMusicPlayer() {
    if (musicPlayerList.length > 5) {
        mdui.alert('不能再多了😰最多创建3个');
    } else {
        mdui.prompt('请输入列表名称',
            function (value) {
                var tempHtml = '<div class="mdui-hoverable music-player"></div>';
                $$('.music-player').last().after(tempHtml);
                $$('.music-player').last().attr('data-name', value);
                var musicPlayerContainer = $$('.music-player').last()[0];
                createMusicPlayer(musicPlayerContainer);
                mdui.snackbar({
                    message: '创建成功',
                    buttonText: '知道了',
                    timeout: 1000
                });
            },
            function () {},
            {
                modal: true,
                defaultValue: '列表' + $$('.music-player').length,
                maxlength: 10
            }
        );
    }
}

// 添加音乐
function addMusic(musicPlayer, musicInfoList) {
    musicPlayer.list.add(musicInfoList);
    // 清空列表按钮
    $$(musicPlayer.container).find('.aplayer-music')
        .append('<i class="mdui-icon material-icons button-clear-list">clear_all</i>');
    $$(musicPlayer.container).find('.button-clear-list').on('click', function () {
        if ($$(musicPlayer.container).attr('id') === 'music-player-primary') {
            mdui.snackbar({
                message: '<( _ _ )>主列表不可清空',
                buttonText: '知道了',
                timeout: 1000
            });
        } else {
            clearMusicList(musicPlayer);
        }
    });
    // 列表项操作
    $$(musicPlayer.container).find('li').each(function (i) {
        if (!$$(this).hasClass('mdui-ripple')) {
            $$(this).addClass('mdui-ripple mdui-ripple-pink');
            if ($$(musicPlayer.container).attr('id') === 'music-player-primary') {
                $$(this).find('.aplayer-list-author')
                    .before('<i class="mdui-icon material-icons button-add-music">add_circle_outline</i>');
            } else {
                $$(this).find('.aplayer-list-author')
                    .before('<i class="mdui-icon material-icons button-remove-music">remove_circle_outline</i>');
            }
        }
        var audioToAddInfo = musicPlayer.list.audios[i];
        audioToAddInfo.type = 'auto';
        $$(this).find('.button-add-music').on('click', function (event) {
            var selectorContainer = '<div class="selector-add-music-to"><span>添加到……</span></div>';
            $$(document.body).append(selectorContainer);
            $$('.selector-add-music-to div').remove();
            $$.each(musicPlayerList, function (i, item) {
                if (i > 0) {
                    var playerName = $$(item.container).attr('data-name');
                    var tempHtml = '<div class="mdui-ripple mdui-ripple-white music-player-to-add">' + playerName + '</div>';
                    $$('.selector-add-music-to').append(tempHtml);
                    $$('.selector-add-music-to .music-player-to-add').last().one('click', function (event) {
                        addMusic(item, audioToAddInfo);
                        $$('.selector-add-music-to').remove();
                        mdui.snackbar({
                            message: '添加成功',
                            buttonText: '知道了'
                        });
                        event.stopPropagation();
                    });
                }
            });
            $$('.selector-add-music-to').css({
                'top': event.clientY + 12 + 'px',
                'left': event.clientX - $$('.selector-add-music-to').width() + 'px',
            });
            event.stopPropagation();
        });
        $$(this).find('.button-remove-music').one('click', function (event) {
            var musicToRemoveIndex = parseInt($$(this).parent().children('.aplayer-list-index').text()) - 1;
            removeMusic(musicPlayer, musicToRemoveIndex);
            event.stopPropagation();
        });
        $$(window).on('click resize', function () {
            $$('.selector-add-music-to').remove();
        });
        $$('#button-change-music-player-list, #button-remove-music-player-list').on('click', function () {
            $$('.selector-add-music-to').remove();
        });
    });
}

// 移除音乐
function removeMusic(musicPlayer, musicIndex) {
    musicPlayer.list.remove(musicIndex);
}

// 清空播放列表
function clearMusicList(musicPlayer) {
    musicPlayer.list.clear();
}

// 显示隐藏可以移除的播放器列表
var toggleMusicPlayerListToRemove = {
    showList: function () {
        $$('#music-player-remove-list-container').show();
        $$('.music-player-to-remove-container').each(function (i) {
            var thisItem =  $$(this);
            thisItem.css('visibility', 'hidden');
            var tempTimeout = setTimeout(function () {
                thisItem.css({
                    'visibility': 'visible',
                    'pointer-events': 'none'
                }).removeClass('animated fadeOutLeft').addClass('animated fadeInLeft')
                    .on('animationend', function () {
                        thisItem.css('pointer-events', 'auto');
                    });
                clearTimeout(tempTimeout);
            }, 100 * i);
        });
    },
    hideList: function () {
        $$('.music-player-to-remove-container').each(function (i) {
            var thisItem =  $$(this);
            var tempTimeout = setTimeout(function () {
                thisItem.css('pointer-events', 'none').removeClass('animated fadeInLeft').addClass('animated fadeOutLeft')
                    .on('animationend', function () {
                        thisItem.css('pointer-events', 'auto');
                        $$('#music-player-remove-list-container').hide().empty();
                        clearTimeout(tempTimeout);
                    });
            }, 100 * i);
        });
    }
};

// 显示隐藏可以改变的播放器列表
var toggleMusicPlayerListToChange = {
    showList: function () {
        $$('#music-player-change-list-container').show();
        $$('.music-player-to-change-container').each(function (i) {
            var thisItem =  $$(this);
            thisItem.css('visibility', 'hidden');
            var tempTimeout = setTimeout(function () {
                thisItem.css({
                    'visibility': 'visible',
                    'pointer-events': 'none'
                }).removeClass('animated fadeOutLeft').addClass('animated fadeInLeft')
                    .on('animationend', function () {
                        thisItem.css('pointer-events', 'auto');
                    });
                clearTimeout(tempTimeout);
            }, 100 * i);
        });
    },
    hideList: function () {
        $$('.music-player-to-change-container').each(function (i) {
            var thisItem =  $$(this);
            var tempTimeout = setTimeout(function () {
                thisItem.css('pointer-events', 'none').removeClass('animated fadeInLeft').addClass('animated fadeOutLeft')
                    .on('animationend', function () {
                        thisItem.css('pointer-events', 'auto');
                        $$('#music-player-change-list-container').hide().empty();
                        clearTimeout(tempTimeout);
                    });
            }, 100 * i);
        });
    }
};

// 生成可以移除的播放器列表
function setToRemoveMusicPlayer() {
    $$('#music-player-remove-list-container').empty();
    $$.each(musicPlayerList, function (i, item) {
        if (i > 0) {
            var playerName = $$(item.container).attr('data-name');
            var tempHtml = '<div class="music-player-to-remove-container"><div class="mdui-ripple mdui-ripple-white music-player-to-remove">' + playerName + '</div></div>';
            $$('#music-player-remove-list-container').append(tempHtml);
            $$('#music-player-remove-list-container .music-player-to-remove').last().one('click', function () {
                if (!$$(musicPlayerList[i].container).hasClass('mdui-hidden')) {
                    $$('#music-player-primary').removeClass('mdui-hidden').addClass('animated zoomIn');
                }
                $$(musicPlayerList[i].container).remove();
                musicPlayerList[i].destroy();
                musicPlayerList.splice(i, 1);
                mdui.snackbar({
                    message: '删除成功',
                    buttonText: '知道了',
                    timeout: 1000
                });
                toggleMusicPlayerListToRemove.hideList();
            });
        }
    });
}

// 生成可以切换与重命名的播放器列表
function setToChangeMusicPlayer() {
    $$('#music-player-change-list-container').empty();
    $$.each(musicPlayerList, function (i, item) {
        var playerName = $$(item.container).attr('data-name');
        var tempHtml = '<div class="music-player-to-change-container"><div class="mdui-ripple mdui-ripple-white music-player-to-change">' + playerName + '</div></div>';
        $$('#music-player-change-list-container').append(tempHtml);
        // 用于检测按下事件的定时器
        var tempTimeout;
        var renameMusicPlayer = false;
        // 点击切换列表
        $$('#music-player-change-list-container .music-player-to-change').last().one('mouseup touchend', function () {
            clearTimeout(tempTimeout);
            if (!renameMusicPlayer) {
                $$.each(musicPlayerList, function (i, item) {
                    $$(item.container).removeClass('animated zoomIn').addClass('mdui-hidden');
                });
                $$(item.container).removeClass('mdui-hidden').addClass('animated zoomIn');
            }
            toggleMusicPlayerListToChange.hideList();
        });
        // 长按重命名列表
        $$('#music-player-change-list-container .music-player-to-change').last().one('mousedown touchstart', function () {
            tempTimeout = setTimeout(function () {
                renameMusicPlayer = true;
                toggleMusicPlayerListToChange.hideList();
                mdui.prompt('请输入新的列表名称',
                    function (value) {
                        $$(item.container).attr('data-name', value);
                        mdui.snackbar({
                            message: '重命名成功',
                            buttonText: '知道了',
                            timeout: 1000
                        });
                    },
                    function () {},
                    {
                        modal: true,
                        defaultValue: $$(item.container).attr('data-name'),
                        maxlength: 10
                    }
                );
            }, 800);
        });
    });
}

// 底部按钮操作
function setButtonFunction() {
    // 新建列表按钮
    $$('#button-new-music-player-list').on('click', function () {
        toggleMusicPlayerListToRemove.hideList();
        toggleMusicPlayerListToChange.hideList();
        newMusicPlayer();
    });
    // 删除列表按钮
    $$('#button-remove-music-player-list').on('click', function (event) {
        toggleMusicPlayerListToChange.hideList();
        if (musicPlayerList.length <= 1) {
            mdui.snackbar({
                message: '没有可删除的列表',
                buttonText: '知道了',
                timeout: 1000
            });
        } else {
            if ($$('#music-player-remove-list-container').css('display') === 'none') {
                setToRemoveMusicPlayer();
                toggleMusicPlayerListToRemove.showList();
            } else {
                toggleMusicPlayerListToRemove.hideList();
            }
        }
        event.stopPropagation();
    });
    // 更换列表按钮
    $$('#button-change-music-player-list').on('click', function () {
        toggleMusicPlayerListToRemove.hideList();
        if ($$('#music-player-change-list-container').css('display') === 'none') {
            setToChangeMusicPlayer();
            toggleMusicPlayerListToChange.showList();
        } else {
            toggleMusicPlayerListToChange.hideList();
        }
        event.stopPropagation();
    });
}

// 页面加载完成后执行
$$(function () {
    // 创建音乐播放器
    var musicPlayerPrimary = createMusicPlayer(document.getElementsByClassName('music-player')[0]);
    createMusicPlayer(document.getElementsByClassName('music-player')[1]);
    // 激活底部按钮功能
    setButtonFunction();
    // 初始化主音乐播放器
    addMusic(musicPlayerPrimary, shuffle([
        {
            name: 'ジャッジメント・ナイツ・オブ・サンダー ～伝説の勇者',
            artist: 'YOFFY',
            url: 'https://music.163.com/song/media/outer/url?id=541480311',
            cover: 'https://p1.music.126.net/dZ75abOh_Fm0uVXdbriSdA==/109951163168048607.jpg?param=130y130',
        },
        {
            name: 'キミの记忆',
            artist: '川村ゆみ',
            url: 'https://music.163.com/song/media/outer/url?id=403180',
            cover: 'https://p1.music.126.net/1u0epGLkeAEez46pY-sTAw==/737772302249800.jpg?param=130y130',
        },
        {
            name: 'So Happy',
            artist: '内田彩',
            url: 'https://music.163.com/song/media/outer/url?id=557579297',
            cover: 'https://p2.music.126.net/-fC5f84-5_IfhCXl27esVA==/109951163291545313.jpg?param=130y130',
        },
        {
            name: 'Thank you, my twilight',
            artist: 'the pillows',
            url: 'https://music.163.com/song/media/outer/url?id=1306496768',
            cover: 'https://p1.music.126.net/-ukKNxel1uRr1dMsNy5q8A==/109951163537739885.jpg?param=130y130',
        },
        {
            name: 'Ride on Shooting Star',
            artist: 'the pillows',
            url: 'https://music.163.com/song/media/outer/url?id=839961',
            cover: 'https://p1.music.126.net/b8zS6tklN3WF7iWyJmbslQ==/613527488310775.jpg?param=130y130',
        },
        {
            name: '言えない 言えない',
            artist: 'Hilcrhyme',
            url: 'https://music.163.com/song/media/outer/url?id=34274291',
            cover: 'https://p2.music.126.net/GvSp3dqyvBK_auKAMaTBJA==/7959364675604768.jpg?param=130y130',
        },
        {
            name: 'ほろよい',
            artist: '辻詩音',
            url: 'https://music.163.com/song/media/outer/url?id=448316045',
            cover: 'https://p2.music.126.net/LdYemYBR_IiERIfM3uMsEg==/109951163339791625.jpg?param=130y130',
        },
        {
            name: 'POSE',
            artist: '辻詩音',
            url: 'https://music.163.com/song/media/outer/url?id=448316040',
            cover: 'https://p2.music.126.net/LdYemYBR_IiERIfM3uMsEg==/109951163339791625.jpg?param=130y130',
        },
        {
            name: 'Lost in wonderland',
            artist: '辻詩音',
            url: 'https://music.163.com/song/media/outer/url?id=448316041',
            cover: 'https://p1.music.126.net/LdYemYBR_IiERIfM3uMsEg==/109951163339791625.jpg?param=130y130',
        },
        {
            name: 'FLYING FAFNIR',
            artist: 'TRUSTRICK',
            url: 'https://music.163.com/song/media/outer/url?id=30031177',
            cover: 'https://p1.music.126.net/bxZ-dKlHxbPhUDLdszjSVw==/7698780417729153.jpg?param=130y130',
        },
        {
            name: '月下麗人',
            artist: 'BUCK-TICK',
            url: 'https://music.163.com/song/media/outer/url?id=22700595',
            cover: 'https://p1.music.126.net/I97fQHZPJZN_W7rkudxCaA==/728976209237989.jpg?param=130y130',
        },
        {
            name: 'Die tomorrow',
            artist: 'coldrain',
            url: 'https://music.163.com/song/media/outer/url?id=22787673',
            cover: 'https://p2.music.126.net/6-4zivVHxVWWjrks3utAjw==/728976209238011.jpg?param=130y130',
        },
        {
            name: 'Gospel of the Throttle',
            artist: 'Minutes Til Midnight',
            url: 'https://music.163.com/song/media/outer/url?id=32683650',
            cover: 'https://p2.music.126.net/zxX4SG_4Qu07M5DUfXUymw==/7993449534418179.jpg?param=130y130',
        },
        {
            name: 'Roundabout',
            artist: 'Yes',
            url: 'https://music.163.com/song/media/outer/url?id=20789751',
            cover: 'https://p1.music.126.net/rtJSQ_qc7aIAxl5OM0ltBQ==/2529976256612243.jpg?param=130y130',
        },
        {
            name: 'Run Through The Jungle',
            artist: 'Creedence Clearwater Revival',
            url: 'https://music.163.com/song/media/outer/url?id=1142686',
            cover: 'https://p2.music.126.net/a2rev1e1CLhWjN1tgoeKeQ==/836728348780650.jpg?param=130y130',
        },
        {
            name: 'Fortunate Son',
            artist: 'Creedence Clearwater Revival',
            url: 'https://music.163.com/song/media/outer/url?id=5057892',
            cover: 'https://p2.music.126.net/vvKMFRcrwafqvxBXeEVyRA==/2540971372812671.jpg?param=130y130',
        },
        {
            name: 'Gimme Shelter',
            artist: 'The Rolling Stones',
            url: 'https://music.163.com/song/media/outer/url?id=4338428',
            cover: 'https://p1.music.126.net/PNN9bEfe50OMy80Jma8KMA==/6622358534649448.jpg?param=130y130',
        },
        {
            name: 'The Times They Are A-Changin\'',
            artist: 'Bob Dylan',
            url: 'https://music.163.com/song/media/outer/url?id=5042273',
            cover: 'https://p2.music.126.net/5QewaPSYQ7HgoC0zKDYHMA==/2534374302689297.jpg?param=130y130',
        },
        {
            name: 'God Is Dead?',
            artist: 'Black Sabbath',
            url: 'https://music.163.com/song/media/outer/url?id=26217506',
            cover: 'https://p1.music.126.net/1k0Kn6pOrdpG67DubRK2Rw==/2404631929971092.jpg?param=130y130',
        },
        {
            name: 'Mad Hatter',
            artist: 'Avenged Sevenfold',
            url: 'https://music.163.com/song/media/outer/url?id=1310995075',
            cover: 'https://p2.music.126.net/5cUiyISKOn2HusA-jsZn6A==/109951163557240534.jpg?param=130y130',
        }
    ]));
});