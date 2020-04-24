// 播放器相关
var videoPlayer = {
    // 声明播放器变量
    dplayer: null,
    // 初始化播放器
    initVideoPlayer: function () {
        this.dplayer = new DPlayer({
            container: document.querySelector('#video-player'),
            video: {
                url: './video/movie.mp4',
                pic: './img/center/avatar.png'
            }
        });
    },
    // 设置卡片按钮
    setCardBtns: function () {
        var dplayer = this.dplayer;
        $$('#card-btn-back').on('click', function () {
            history.back();
        });
        $$('#card-btn-replay').on('click', function () {
            dplayer.seek(0);
        });
    }
};

// 页面加载完成后执行
$$(function () {
    videoPlayer.initVideoPlayer();
    videoPlayer.setCardBtns();
});