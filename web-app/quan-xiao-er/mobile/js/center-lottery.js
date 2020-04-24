// 转动锤子
function rotateHammer() {
    var imgEgg = $('#page-game-stationary>img');
    $('#page-game-movable, #page-game-stationary>img').on('click', function () {
        var hammer = $('#page-game-movable');
        if (imgEgg.eq(1).css('display') === 'none') {
            hammer.addClass('raise-hammer').on('animationend', function () {
                hammer.removeClass('raise-hammer').addClass('drop-hammer').on('animationend', function () {
                    imgEgg.eq(0).hide();
                    imgEgg.eq(1).show();
                    imgEgg.eq(2).fadeIn(500, function () {
                        showLotteryResult();
                    });
                    hammer.removeClass('drop-hammer').addClass('bounce-hammer').on('animationend', function () {
                        hammer.removeClass('bounce-hammer');
                    });
                });
            });
        } else {
            if ($('#page-snackbar').css('display') === 'none') {
                $('#page-snackbar').show();
                var tempTimeout = setTimeout(function () {
                    $('#page-snackbar').hide();
                    clearTimeout(tempTimeout);
                }, 1000);
            }
        }
    });
}

// 显示抽奖结果
function showLotteryResult() {
    $('#page-result').show();
    var tempTimeout = setTimeout(function () {
        clearTimeout(tempTimeout);
        $('#page-result-loading').hide();
        $('#page-result-detail').show();
    }, 1000);
}

// 页面加载完成后执行
$(function () {
    rotateHammer();
});