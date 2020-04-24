/* global $ */

// 加载商品卡片
function showGoodsCards () {
    var goodsCardsList = $('#reveal-content-cards-list');
    var goodsCard = $('#reveal-content-cards-list>li:first-of-type');
    for (var i = 0; i < 24; i++) {
        goodsCardsList.append(goodsCard.clone());
        var thisGoodsCard = $('#reveal-content-cards-list>li:last-of-type');
        thisGoodsCard.find('.goods-card-left-img>img').attr('src', './temp-img/reveal/pot.jpg');
        thisGoodsCard.find('.goods-card-right-user-avatar>img').attr('src', './temp-img/reveal/avatar2.jpg');
        thisGoodsCard.find('.goods-card-right-user-info-name>a')
            .text('野兽先辈').attr('href', '');
        thisGoodsCard.find('.goods-card-right-user-info-address>span').text('福建省厦门市');
        thisGoodsCard.find('.goods-card-right-user-info-code>span').text('10002228');
        thisGoodsCard.find('.goods-card-right-user-info-num>span').text('50');
        thisGoodsCard.find('.goods-card-right-goods-title>a')
            .text('(第2512期)苏泊尔（SUPOR）玻璃电水壶热水壶高硼硅玻璃电热水壶 ').attr('href', '');
        thisGoodsCard.find('.goods-card-right-goods-price>span.price').text('109.00');
        thisGoodsCard.find('.goods-card-right-goods-time>span').text('04');
        thisGoodsCard.find('.goods-card-right-button-detail').attr('href', '');
        thisGoodsCard.css('display', 'inline-block');
    }
}

// 页面加载完成后执行
$(function () {
    showGoodsCards();
});