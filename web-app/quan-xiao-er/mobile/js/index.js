/* global Swiper */

// 首页轮播
function initCarousel() {
    new Swiper('#carousel>div.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination :{
            el: '.swiper-pagination',
            clickable :true,
        }
    });
}

// 首页中奖轮播
function winnerCarousel() {
    $('#revealed-header-winner-list').append($('#revealed-header-winner-list>li:first-of-type').clone());
    var winnerList = $('#revealed-header-winner-list');
    var winnerListLength = $('#revealed-header-winner-list>li').length;
    var i = 1;
    var tempTop = 0;
    setInterval(function () {
        if (i === winnerListLength) {
            i = 1;
            tempTop = -0.28;
            winnerList.css('top', '0rem').animate({
                'top': tempTop + 'rem'
            }, 1000);
        } else {
            tempTop -= 0.28;
            i++;
            winnerList.animate({
                'top': tempTop + 'rem'
            }, 1000);
        }
    }, 3000);
}

// 显示推荐商品卡片
function showGoodsCards() {
    var protoCard = $('#recommended-goods-list>li:first-of-type');
    var cardsList = $('#recommended-goods-list');
    for (var i = 0; i < 10; i++) {
        cardsList.append(protoCard.clone());
        var lastCard = $('#recommended-goods-list>li:last-of-type');
        lastCard.find('.recommended-goods-card-link').attr('href', './goods-detail.html');
        lastCard.find('.recommended-goods-card-link-img>img').attr('src', './temp-img/index/camera.jpg');
        lastCard.find('.recommended-goods-card-link-title').text('加肥加大女装心机上衣200斤胖mm最爱夏季新款宽松亮丝小狗短袖t恤');
        lastCard.find('.recommended-goods-card-link-coupon>span.reach').text('60');
        lastCard.find('.recommended-goods-card-link-coupon>span.minus').text('30');
        lastCard.find('.recommended-goods-card-link-gift>span').text('松下（Panasonic）AG-DVX200MC 4K摄影机');
        lastCard.find('.recommended-goods-card-link-number-list>li.sold>span.colored').text('1000');
        lastCard.find('.recommended-goods-card-link-number-list>li.total>span.colored').text('3000');
        lastCard.find('.recommended-goods-card-link-number-list>li.remain>span.colored').text('2000');
        lastCard.find('.recommended-goods-card-button-link').attr('href', './cart.html');
        lastCard.find('.recommended-goods-card-link-progress-current').css('width', '40%');
        lastCard.show();
    }
}

// 页面加载完成后执行
$(function () {
    initCarousel();
    winnerCarousel();
    showGoodsCards();
});