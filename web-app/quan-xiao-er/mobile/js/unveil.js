// 显示即将揭晓卡片
function showUnveilingCard() {
    var cardList = $('#unveiled-goods-list');
    var protoUnveilingCard = $('#unveiled-goods-list>li.unveiling-card-item').first();
    for (var i = 0; i < 5; i++) {
        cardList.append(protoUnveilingCard.clone());
        var lastUnveilingCard = $('#unveiled-goods-list>li.unveiling-card-item').last();
        lastUnveilingCard.find('.unveiling-card-img').attr('href', './unveil-detail.html');
        lastUnveilingCard.find('.unveiling-card-img>img').attr('src', './temp-img/unveil/unveiling_goods_2.jpg');
        lastUnveilingCard.find('.unveiling-card-title').text('(第2258期) 玛丽黛佳（MARIEDALGAR）元气橙花素颜霜 50g(保湿补水 提亮 隔离 学生裸妆 遮瑕 懒人霜 )');
        lastUnveilingCard.find('.unveiling-card-price>span.price').text('128');
        lastUnveilingCard.find('.unveiling-card-count-down>span.minute').text('01');
        lastUnveilingCard.find('.unveiling-card-count-down>span.second').text('02');
        lastUnveilingCard.find('.unveiling-card-count-down>span.millisecond').text('10');
        lastUnveilingCard.css('display', 'inline-block');
    }
}

// 显示已揭晓卡片
function showUnveiledCard() {
    var cardList = $('#unveiled-goods-list');
    var protoUnveiledCard = $('#unveiled-goods-list>li.unveiled-card-item').first();
    for (var i = 0; i < 5; i++) {
        cardList.append(protoUnveiledCard.clone());
        var lastUnveiledCard = $('#unveiled-goods-list>li.unveiled-card-item').last();
        lastUnveiledCard.find('.unveiled-card-img').attr('href', '././unveil-detail.html');
        lastUnveiledCard.find('.unveiled-card-img>img').attr('src', './temp-img/unveil/goods_2.jpg');
        lastUnveiledCard.find('.unveiled-card-winner').attr('href', '');
        lastUnveiledCard.find('.unveiled-card-winner-avatar>img').attr('src', './temp-img/unveil/avatar_2.jpg');
        lastUnveiledCard.find('.unveiled-card-winner-info-name').text('好烦啊，两秒中奖一次');
        lastUnveiledCard.find('.unveiled-card-winner-info-num>span').text('74');
        lastUnveiledCard.find('.unveiled-card-code>span').text('10000086');
        lastUnveiledCard.find('.unveiled-card-time>span.number').text('5');
        lastUnveiledCard.find('.unveiled-card-time>span.unit').text('小时');
        lastUnveiledCard.css('display', 'inline-block');
    }
}

// 更换即将揭晓卡片内容
function changeUnveilingCardContent(unveilingCardItem, winnerInfo) {
    if (winnerInfo) {
        var protoUnveiledCardContent = $('#unveiled-goods-list>li.unveiled-card-item').first().find('div.unveiled-card');
        unveilingCardItem.removeClass('unveiling-card-item').addClass('unveiled-card-item')
            .empty().append(protoUnveiledCardContent.clone());
        unveilingCardItem.find('.unveiled-card-img').attr('href', winnerInfo.goodsUrl);
        unveilingCardItem.find('.unveiled-card-img>img').attr('src', winnerInfo.goodsImgSrc);
        unveilingCardItem.find('.unveiled-card-winner').attr('href', winnerInfo.winnerUrl);
        unveilingCardItem.find('.unveiled-card-winner-avatar>img').attr('src', winnerInfo.winnerAvatarSrc);
        unveilingCardItem.find('.unveiled-card-winner-info-name').text(winnerInfo.winnerName);
        unveilingCardItem.find('.unveiled-card-winner-info-num>span').text(winnerInfo.times);
        unveilingCardItem.find('.unveiled-card-code>span').text(winnerInfo.code);
        unveilingCardItem.find('.unveiled-card-time>span.number').text(winnerInfo.time.number);
        unveilingCardItem.find('.unveiled-card-time>span.unit').text(winnerInfo.time.unit);
    }
}

// 设置卡片倒计时
function setCountdown() {
    $('.unveiling-card').each(function () {
        var thisCardItem = $(this).parent();
        var countdownTimer = $(this).find('.unveiling-card-count');
        var waitingText = $(this).find('.unveiling-card-waiting');
        var spanMinute = $(this).find('.unveiling-card-count-down>span.minute');
        var spanSecond = $(this).find('.unveiling-card-count-down>span.second');
        var spanMillisecond = $(this).find('.unveiling-card-count-down>span.millisecond');
        var minute = parseInt(spanMinute.text());
        var second = parseInt(spanSecond.text());
        var millisecond = parseInt(spanMillisecond.text());
        var textMinute, textSecond, textMilliSecond;
        var tempInterval = setInterval(function () {
            millisecond = millisecond - 1;
            if (millisecond === -1) {
                second = second - 1;
                millisecond = 10;
            }
            if (second === -1) {
                minute = minute - 1;
                second = 59;
            }
            if (millisecond < 10) {
                textMilliSecond = '0' + millisecond;
            } else {
                textMilliSecond = millisecond;
            }
            if (second < 10) {
                textSecond = '0' + second;
            } else {
                textSecond = second;
            }
            if (minute < 10) {
                textMinute= '0' + minute;
            } else {
                textMinute= minute;
            }
            spanMillisecond.text(textMilliSecond);
            spanSecond.text(textSecond);
            spanMinute.text(textMinute);
            if (minute === -1) {
                clearInterval(tempInterval);
                spanMillisecond.text('00');
                spanSecond.text('00');
                spanMinute.text('00');
                var tempTimeout = setTimeout(function () {
                    countdownTimer.hide();
                    waitingText.show();
                    clearTimeout(tempTimeout);
                    var tempTimeout2 = setTimeout(function () {
                        var winnerInfo = {
                            goodsUrl: '',
                            goodsImgSrc: './temp-img/unveil/unveiling_goods_2.jpg',
                            winnerUrl: '',
                            winnerAvatarSrc: './temp-img/unveil/unveiling_avatar_2.jpg',
                            winnerName: '怎么中奖的老是我？',
                            times: '35',
                            code: '10000010',
                            time: {
                                number: '01',
                                unit: '分钟'
                            }
                        };
                        changeUnveilingCardContent(thisCardItem, winnerInfo);
                        clearTimeout(tempTimeout2);
                    }, 1000);
                }, 500);
            }
        }, 100);
    });
}

// 页面加载完成后执行
$(function () {
    showUnveilingCard();
    showUnveiledCard();
    setCountdown();
});