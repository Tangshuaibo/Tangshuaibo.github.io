// 重置各输入框
function resetInput() {
    $('#page-content-btn-reset').on('click', function () {
        $('.page-row>input, .page-row>textarea').val('');
        $('#city-picker-container>input').citypicker('reset');
    });
}

// 页面加载完成后执行
$(function () {
    resetInput();
});