// 限制文本框字数
function limitInput() {
    $('#page-content-text>textarea').on('keyup', function () {
        var currentLength = $(this).val().length;
        var maxLength = $(this).attr('maxlength');
        var snackbarShown = false;
        if (currentLength >= maxLength && !snackbarShown) {
            $('#page-content-snackbar').show();
            snackbarShown = true;
            var tempTimeout = setTimeout(function () {
                clearTimeout(tempTimeout);
                $('#page-content-snackbar').hide();
                snackbarShown = false;
            }, 1000);
        }
    });
    $('#page-content-text>input').on('input', function () {
        $(this).val($(this).val().replace(/[^\d]/g, ''));
    });
}

// 提交输入的信息
function setBtnSubmit() {
    $('#page-content-btn-submit').on('click', function () {
        var textareaText = $('#page-content-text>textarea').val();
        var inputText = $('#page-content-text>input').val();
        var jsonPost = JSON.stringify({
            textareaText: textareaText,
            inputText: inputText
        });
        window.console.log(jsonPost);
        // $.ajax({
        //     url: '',
        //     type: 'POST',
        //     data: jsonPost,
        //     success: function (result, status, xhr) {
        //         window.console.log(status);
        //     },
        //     error: function (xhr, status) {
        //         window.console.log(status);
        //     }
        // });
    });
}

// 页面加载完成后执行
$(function () {
    limitInput();
    setBtnSubmit();
});