/* global $ */

// 文章点赞
function likeThisArticle() {
    var likeIcon = $('#unbox-content-article-btn-like>i.fa');
    var likeText = $('#unbox-content-article-btn-like>span.text');
    likeIcon.on('click', function () {
        if (likeIcon.hasClass('fa-heart-o')) {
            likeIcon.removeClass('fa-heart-o').addClass('fa-heart');
            likeText.text('已羡慕');
        } else {
            likeIcon.addClass('fa-heart-o').removeClass('fa-heart');
            likeText.text('羡慕');
        }
    });
}

// 页面加载完成后执行
$(function () {
    likeThisArticle();
});