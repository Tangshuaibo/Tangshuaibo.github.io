// 显示卖出记录条目
function showRecordSoldItem() {
    var recordList = $('#record-sold-list');
    var protoItem = $('#record-sold-list>li:first-of-type');
    for (var i = 0; i < 10; i++) {
        recordList.append(protoItem.clone());
        var lastItem = $('#record-sold-list>li:last-of-type');
        lastItem.find('.record-sold-list-item-link').attr('href', './user.html');
        lastItem.find('.record-sold-list-item-avatar>img').attr('src', './temp-img/record-sold/avatar_2.jpg');
        lastItem.find('.record-sold-list-item-info-name').text('下水道里的美人鱼');
        lastItem.find('.record-sold-list-item-info-number>span').text('35');
        lastItem.find('.record-sold-list-item-info-time').text('2018-11-28 07:37:56');
        lastItem.css('display', 'block');
    }
}

// 页面加载完成后执行
$(function () {
    showRecordSoldItem();
});