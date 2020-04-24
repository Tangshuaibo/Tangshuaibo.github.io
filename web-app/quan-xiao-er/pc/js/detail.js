/* global $ */

// 设置商品推荐卡片大图显示
function setRecommondCardImageShown() {
    var imgList = $('#recommond-card-0-left-img-list ul li, #recommond-card-0-right-img-list ul li');
    imgList.each(function () {
        $(this).on('mouseenter', function () {
            imgList.each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            var tempSrc = $(this).find('img').attr('src');
            $('#recommond-card-0-left-img img').attr('src', tempSrc);
        });
    });
}

// 设置商品推荐购买框的值
function setRecommondCardBuyCounterValue() {
    var inputBuy = $('#recommond-card-0 .recommond-card-right-buy-counter-input');
    var btnMinus = $('#recommond-card-0 .recommond-card-right-buy-counter-minus');
    var btnAdd = $('#recommond-card-0 .recommond-card-right-buy-counter-add');
    var btnNumList = $('#recommond-card-0 .recommond-card-right-buy-num-list ul li');
    var inputVal = 1;
    var numRemain = $('#recommond-card-0 .recommond-card-right-detail-number-remain span').text();
    btnMinus.on('click', function () {
        inputBuy.val(function (i, oldVal) {
            if (inputVal > 1) {
                inputVal = parseInt(oldVal) - 1;
            }
            return inputVal;
        });
    });
    btnAdd.on('click', function () {
        inputBuy.val(function (i, oldVal) {
            if (parseInt(oldVal) < parseInt(numRemain)) {
                inputVal = parseInt(oldVal) + 1;
            }
            return inputVal;
        });
    });
    btnNumList.each(function () {
        $(this).on('click', function () {
            var newVal = parseInt($(this).text());
            inputBuy.val(newVal);
        });
    });
    inputBuy.on('change', function () {
        if (inputBuy.val() <= 1) {
            inputBuy.val(1);
        } else if (inputBuy.val() >= parseInt(numRemain)) {
            inputBuy.val(parseInt(numRemain));
        }
        inputVal = inputBuy.val();
    });
}

// 切换商品相关信息详情选项卡内容
function setGoodsInfoTabContent() {
    var goodsInfoTabMenuItemList = $('#goods-info-detail .goods-info-tab-menu>ul>li');
    var goodsInfoTabList = $('#goods-info-detail .goods-info-tab-content>div');
    goodsInfoTabMenuItemList.each(function (i) {
        $(this).on('click', function () {
            if (!$(this).hasClass('active')) {
                goodsInfoTabMenuItemList.removeClass('active');
                $(this).addClass('active');
                goodsInfoTabList.hide();
                goodsInfoTabList.eq(i).show();
            }
        });
    });
}

// 页面加载完成后执行
$(function () {
    setRecommondCardImageShown();
    setRecommondCardBuyCounterValue();
    setGoodsInfoTabContent();
});