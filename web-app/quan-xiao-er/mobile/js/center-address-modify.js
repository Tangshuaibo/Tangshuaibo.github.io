// 重置各输入框
function resetInput() {
    var initialName = $('input[name="input-name"]').val();
    var initialNumber = $('input[name="input-number"]').val();
    var initialTextareaAddress = $('textarea[name="textarea-address"]').val();
    var initialCode = $('input[name="input-code"]').val();
    var initialAddress = $('#city-picker-container>input').val();
    $('#page-content-btn-reset').on('click', function () {
        $('input[name="input-name"]').val(initialName);
        $('input[name="input-number"]').val(initialNumber);
        $('textarea[name="textarea-address"]').val(initialTextareaAddress);
        $('input[name="input-code"]').val(initialCode);
        $('#city-picker-container>input').citypicker('setValue', initialAddress);
    });
}

// 页面加载完成后执行
$(function () {
    resetInput();
});