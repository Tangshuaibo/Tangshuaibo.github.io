// 显示提示信息
function showHintAndCard() {
    var tempTimeOut = setTimeout(function () {
        $('#record-unbox-hint-loading').hide();
        $('#record-unbox-hint-bottom').show();
        showUnboxCard();
        clearTimeout(tempTimeOut);
    }, 1000);
}

// 显示晒单卡片
function showUnboxCard() {
    var cardList = $('#record-unbox-list');
    var protoCard = $('#record-unbox-list>li:first-of-type');
    for (var i = 0; i < 10; i++) {
        cardList.append(protoCard.clone());
        var lastCard = $('#record-unbox-list>li:last-of-type');
        lastCard.find('.record-unbox-list-item-left').attr('href', './user.html');
        lastCard.find('.record-unbox-list-item-left-avatar>img').attr('src', './temp-img/record-unbox/avatar_2.jpg');
        lastCard.find('.record-unbox-list-item-left-name').text('炒鸡战士洛克');
        lastCard.find('.record-unbox-list-item-right').attr('href', './unbox.html');
        lastCard.find('.record-unbox-list-item-right-content-title').text('oppo手机中到啦');
        lastCard.find('.record-unbox-list-item-right-content-text').text('没想到我真的中了，太开心了。物流很快，服务很好。');
        lastCard.find('.record-unbox-list-item-right-content-img>img').eq(0).attr('src', './temp-img/record-unbox/goods2_1.jpg');
        lastCard.find('.record-unbox-list-item-right-content-img>img').eq(1).attr('src', './temp-img/record-unbox/goods2_2.jpg');
        lastCard.find('.record-unbox-list-item-right-content-img>img').eq(2).attr('src', './temp-img/record-unbox/goods2_3.jpg');
        lastCard.css('display', 'block');
    }
}

// 页面加载完成后执行
$(function () {
    showHintAndCard();
});