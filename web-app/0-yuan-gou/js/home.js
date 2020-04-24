// 设置公告滚动
function setMarquee () {
    $('.notice-content.marquee').each(function () {
        var _this = $(this);
        var setThisMarquee = function () {
            var tempContentWidth = _this.width();
            var tempText = _this.find('span.text');
            var tempTextWidth = tempText.width();
            tempText.animate({
                left: -tempTextWidth + 'px'
            }, 5000, 'linear', function () {
                tempText.css({
                    left: tempContentWidth + 'px'
                });
                setThisMarquee();
            });
        }
        setThisMarquee();
    });
}

// 页面加载完成执行
$(function () {
    setMarquee();
});