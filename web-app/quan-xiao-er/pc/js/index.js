/* global $ */

// 设置首页分页加载商品卡片数
function setGoodsCardShown() {
    var goodsCardsContainer = $('#page-content-goods-cards-list');
    var goodsCardHtml = goodsCardsContainer.html();
    for (var i = 0; i < 40; i++) {
        goodsCardsContainer.append(goodsCardHtml);
        var thisGoodsCard = $('#page-content-goods-cards-list>li:last-of-type');
        thisGoodsCard.find('.goods-card-img').attr('href', '');
        thisGoodsCard.find('.goods-card-img>img').attr('src', './temp-img/index/cosmetic.jpg');
        thisGoodsCard.find('.goods-card-detail-price-new>span.price').text('42');
        thisGoodsCard.find('.goods-card-detail-price-coupon>span.price').text('65');
        thisGoodsCard.find('.goods-card-detail-title>a')
            .text('【温碧泉】透芯净水乳三件套').attr('href', '');
        thisGoodsCard.find('.goods-card-detail-number>span').text('44512');
        thisGoodsCard.show();
    }
    $('#page-content-goods-cards-list>li').each(function (i) {
        if (i % 4 !== 0) {
            $(this).css('margin', '0 20px 20px 0');
        }
    });
}

// 页面加载完成后执行
$(function () {
    setGoodsCardShown();
});