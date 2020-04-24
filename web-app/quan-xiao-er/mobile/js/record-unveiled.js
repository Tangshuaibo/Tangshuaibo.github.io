// 显示卡片列表
function showRecordCard() {
    var cardList = $('#record-unveiled-list');
    var protoCard = $('#record-unveiled-list>li:first-of-type');
    for (var i = 0; i < 10; i++) {
        cardList.append(protoCard.clone());
        var lastCard = $('#record-unveiled-list>li:last-of-type');
        lastCard.find('.record-unveiled-list-item-card').attr('href', './user.html');
        lastCard.find('.record-unveiled-list-item-header>span.number').text('10');
        lastCard.find('.record-unveiled-list-item-header>span.time').text('2018-11-04 13:09:03');
        lastCard.find('.record-unveiled-list-item-content-avatar>img').attr('src', './temp-img/record-unveiled/avatar_2.jpg');
        lastCard.find('.record-unveiled-list-item-content-info-name>span').text('葫芦娃救爷爷');
        lastCard.find('.record-unveiled-list-item-content-info-address>span').text('河北省石家庄市');
        lastCard.find('.record-unveiled-list-item-content-info-code>span').text('1000010');
        lastCard.find('.record-unveiled-list-item-content-info-number>span').text('76');
        lastCard.css('display', 'block');
    }
}

// 页面加载完成后执行
$(function () {
    showRecordCard();
});