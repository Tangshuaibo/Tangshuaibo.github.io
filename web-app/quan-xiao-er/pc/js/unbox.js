/* global $ */

// 晒单点赞按钮
function toggleButtonLike(unboxCardObj) {
    var thisLikeBtn = unboxCardObj.find('.unbox-card-bottom-btn-like');
    var thisLikeBtnIcon = unboxCardObj.find('.unbox-card-bottom-btn-like>i');
    thisLikeBtn.on('click', function() {
        if (thisLikeBtnIcon.hasClass('fa-heart-o')) {
            thisLikeBtnIcon.removeClass('fa-heart-o').addClass('fa-heart');
        } else {
            thisLikeBtnIcon.removeClass('fa-heart').addClass('fa-heart-o');
        }
    });
}

// 显示晒单卡片
function showUnboxCards() {
    var unboxCardList = $('#unbox-content-cards-list');
    var unboxCard = $('#unbox-content-cards-list>li:first-of-type');
    for (var i = 0; i < 20; i++) {
        unboxCardList.append(unboxCard.clone());
        var thisUnboxCard = $('#unbox-content-cards-list>li:last-of-type');
        thisUnboxCard.find('.unbox-card-top-img>a').attr('href', '');
        thisUnboxCard.find('.unbox-card-top-img>a>img').attr('src', './temp-img/unbox/unbox2.jpg');
        thisUnboxCard.find('.unbox-card-top-title>a')
            .text('oppo手机中到啦').attr('href', '');
        thisUnboxCard.find('.unbox-card-top-brief>span').text('没想到我真的中了，太开心了。物流很快，服务很好。');
        thisUnboxCard.find('.unbox-card-top-time>span').text('3月22日 09:26');
        thisUnboxCard.find('.unbox-card-bottom-user-avatar>img').attr('src', './temp-img/unbox/avatar2.jpg');
        thisUnboxCard.find('.unbox-card-bottom-user-name>a')
            .text('1594***4683').attr('href', '');
        thisUnboxCard.find('.unbox-card-bottom-btn-like>span').text('2');
        thisUnboxCard.find('.unbox-card-bottom-btn-comment>a').attr('href', '');
        thisUnboxCard.find('.unbox-card-bottom-btn-comment>a>span').text('3');
        thisUnboxCard.css('display', 'inline-block');
        toggleButtonLike(thisUnboxCard);
    }
}

// 页面加载完成后执行
$(function() {
    showUnboxCards();
});