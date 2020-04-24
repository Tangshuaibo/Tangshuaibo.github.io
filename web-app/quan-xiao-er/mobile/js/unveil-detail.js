// 倒计时器
function setCountdownTimer() {
    var spanMinute = $('.page-unveiling-card-content-counter>span.minute');
    var spanSecond = $('.page-unveiling-card-content-counter>span.second');
    var spanMillisecond = $('.page-unveiling-card-content-counter>span.millisecond');
    var minute = parseInt(spanMinute.text());
    var second = parseInt(spanSecond.text());
    var millisecond = parseInt(spanMillisecond.text());
    var prefixZero = function (num, n) {
        return (Array(n).join(0) + num).slice(-n);
    };
    var tempInterval = setInterval(function () {
        millisecond--;
        if (millisecond === -1) {
            second--;
            millisecond = 10;
        }
        if (second === -1) {
            minute--;
            second = 59;
        }
        spanMillisecond.text(prefixZero(millisecond, 2));
        spanSecond.text(prefixZero(second, 2));
        spanMinute.text(prefixZero(minute, 2));
        if (minute === -1) {
            clearInterval(tempInterval);
            spanMillisecond.text('00');
            spanSecond.text('00');
            spanMinute.text('00');
            var tempTimeout = setTimeout(function () {
                clearTimeout(tempTimeout);
                $('.page-unveiling-card-content-counter').hide();
                $('.page-unveiling-card-content-calculating').show();
                var tempTimeout2 = setTimeout(function () {
                    clearTimeout(tempTimeout2);
                    $('#page-unveiling').hide();
                    $('#page-winner').show();
                    $('title').text('揭晓详情');
                    $('#header-text').text('揭晓详情');
                }, 1000);
            }, 500);
        }
    }, 100);
}

// 页面加载完成后执行
$(function () {
    setCountdownTimer();
});