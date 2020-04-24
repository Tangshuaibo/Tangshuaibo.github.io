/* global $ */

// 设置显示的文章
function setArticleShown() {
    var navItems = $('.page-nav-item-list>li');
    navItems.each(function () {
        $(this).on('click', function () {
            var articleTitle = $(this).text();
            navItems.removeClass('active');
            $(this).addClass('active');
            $('#page-article-title').text(articleTitle);
            $('#page-article-content').empty();
        });
    });
}

// 页面加载完成后执行
$(function () {
    setArticleShown();
});