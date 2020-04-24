// 切换菜单选项
function changeListItem() {
    $('#left-classification-list>li').on('click', function () {
        $('#left-classification-list>li.active').removeClass('active');
        $(this).addClass('active');
    });
}

// 显示商品卡片
function showGoodsCards() {
    var cardList = $('#right-goods-list');
    var protoCard = $('#right-goods-list>li:first-of-type');
    for (var i = 0; i < 20; i++) {
        cardList.append(protoCard.clone());
        var lastCard = $('#right-goods-list>li:last-of-type');
        lastCard.find('.goods-card-link-img>img').attr('src', './temp-img/goods/mobile.jpg');
        lastCard.find('.goods-card-link-info-title').text('加肥加大码仙女装韩版春装胖mm衬衫马甲刺绣最爱套装毛衣两件套潮');
        lastCard.find('.goods-card-link-info-coupon>span.reach').text('2');
        lastCard.find('.goods-card-link-info-coupon>span.minus').text('5');
        lastCard.find('.goods-card-link-info-gift>span').text('(第39期)华为（HUAWEI） 荣耀10 游戏手机 幻影蓝 全网通6GB+128GB');
        lastCard.find('.goods-card-link-info-progress-current').css('width', '40%');
        lastCard.css('display', 'block');
    }
}

// 页面加载完成后执行
$(function () {
    changeListItem();
    showGoodsCards();
});