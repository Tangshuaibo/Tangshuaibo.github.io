// 根据hash切换选项卡
function switchTabByHash () {
    var tempHash = location.hash;
    if (tempHash === '') {
        // 默认选项卡
        $('#list-tab-selector>.tab-selector-item[data-hash="#all"]').trigger('click');
    } else {
        // 触发选项卡
        var itemList = $('#list-tab-selector');
        var tempItem = $('#list-tab-selector>.tab-selector-item[data-hash="'+ tempHash +'"]');
        tempItem.trigger('click');
        // 居中选项卡按钮
        var itemListWidth = itemList.innerWidth();
        var tempItemWidth = tempItem.outerWidth();
        var tempItemLeft = tempItem[0].offsetLeft;
        if (tempItemLeft + tempItemWidth / 2 > itemListWidth / 2) {
            var tempScrollLeft = tempItemLeft + tempItemWidth / 2 - itemListWidth / 2;
            itemList.scrollLeft(tempScrollLeft);
        } else {
            itemList.scrollLeft(0);
        }
    }
}

// 手动切换选项卡及hash
function switchTab () {
    $('#list-tab-selector>.tab-selector-item').on('click', function () {
        var tempHash = $(this).data('hash');
        if (location.hash !== tempHash) {
            if (location.hash === '') {
                location.replace(location.href + tempHash);
            } else {
                location.replace(location.href.replace(location.hash, tempHash));
            }
        }
    });
}

// 页面加载完成后执行
$(function () {
    switchTab();
    switchTabByHash();
});