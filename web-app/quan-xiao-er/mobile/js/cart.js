/* global Swiper */

// 显示购物车商品卡片
function showCartCard() {
    var protoCard = $('#top-cart-list>li:first-of-type');
    var cardList = $('#top-cart-list');
    for (var i = 0; i < 10; i++) {
        cardList.append(protoCard.clone());
        var lastCard = $('#top-cart-list>li:last-of-type');
        lastCard.find('.cart-card-top-left-img>img').attr('src', './temp-img/cart/goods_2.jpg');
        lastCard.find('.cart-card-top-left-info-title').text('2018夏季新款大码女装条纹T恤胖mm宽松显瘦200斤绑带衬衣连衣裙潮');
        lastCard.find('.cart-card-top-left-info-remain>span').text('7400');
        lastCard.find('.cart-card-bottom-gift-img>img').attr('src', './temp-img/cart/gift_2.jpg');
        lastCard.find('.cart-card-bottom-gift-title>span.text').text('第(117)期 荣耀 V10 高配版 6GB 64GB 幻夜黑 移动联通电信4G全面屏游戏手机 双卡双待');
        lastCard.show();
    }
}

// 显示购物车卡片删除按钮
function showBtnDelete() {
    new Swiper('.cart-card-top>.swiper-container', {
        width: 180
    });
}

// 设置购物车商品数量
function setNumInput() {
    $('#top-cart-list>li').each(function () {
        var btnMinus = $(this).find('.cart-card-top-left-info-calculator-counter>span.minus');
        var btnPlus = $(this).find('.cart-card-top-left-info-calculator-counter>span.plus');
        var boxInput = $(this).find('.cart-card-top-left-info-calculator-counter>input');
        var spanNumRemain = $(this).find('.cart-card-top-left-info-remain>span');
        var spanTotalPrice = $(this).find('.cart-card-top-left-info-calculator-price>span.total-price');
        var unitPrice = parseFloat(spanTotalPrice.text());
        var limitNumInput = function () {
            var numRemain = parseInt(spanNumRemain.text());
            var currentNum = parseInt(boxInput.val());
            if (currentNum < 1 || isNaN(currentNum)) {
                boxInput.val(1);
            }
            if (currentNum > numRemain) {
                boxInput.val(numRemain);
            }
            var totalPrice = (boxInput.val() * unitPrice).toFixed(2);
            spanTotalPrice.text(totalPrice);
            setCartTotalPrice();
        };
        btnMinus.on('click', function () {
            var oldNum = parseInt(boxInput.val());
            var newNum = oldNum - 1;
            boxInput.val(newNum);
            limitNumInput();
        });
        btnPlus.on('click', function () {
            var oldNum = parseInt(boxInput.val());
            var newNum = oldNum + 1;
            boxInput.val(newNum);
            limitNumInput();
        });
        boxInput.on('change', function () {
            boxInput.val(boxInput.val().replace(/\D/gi, ''));
            limitNumInput();
        });
    });
}

// 设置购物车总价
function setCartTotalPrice() {
    var cartTotalPrice = 0;
    var spanCartTotalPrice = $('#bottom-checkout-info>span.total-price');
    $('#top-cart-list>li:not(:first-of-type)').each(function () {
        var spanSingleTotalPrice = $(this).find('.cart-card-top-left-info-calculator-price>span.total-price');
        var singleTotalPrice = parseFloat(spanSingleTotalPrice.text());
        cartTotalPrice += singleTotalPrice;
        spanCartTotalPrice.text(cartTotalPrice.toFixed(2));
    });
}

// 页面加载完成后执行
$(function () {
    showCartCard();
    setCartTotalPrice();
    showBtnDelete();
    setNumInput();
});