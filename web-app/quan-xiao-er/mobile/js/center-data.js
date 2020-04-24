// 模态框按钮功能
function setBtnModal() {
    var btnCancel = $('.page-modal').find('.page-modal-btn-cancel');
    var btnConfirm = $('.page-modal').find('.page-modal-btn-confirm');
    btnCancel.on('click', function () {
        $('#page-modal-layer').hide();
        $('.page-modal').hide();
    });
    btnConfirm.on('click', function () {
        $('#page-modal-layer').hide();
        $('.page-modal').hide();
    });
}

// 显示模态框
function showModal() {
    $('#page-link-item-nickname').on('click', function () {
        $('#page-modal-nickname').show();
        $('#page-modal-layer').show();
    });
    $('#page-item-signature').on('click', function () {
        $('#page-modal-signature').show();
        $('#page-modal-layer').show();
    });
}

// 各模态框确认按钮功能
function setBtnConfirm() {
    $('#page-modal-nickname').find('.page-modal-btn-confirm').on('click', function () {
        var tempInputValue = $('#page-modal-nickname').find('.page-modal-input>input').val();
        window.console.log(tempInputValue);
        if (tempInputValue === '') {
            $('#page-snackbar-nothing').show();
            var tempTimeout = setTimeout(function () {
                $('#page-snackbar-nothing').hide();
                clearTimeout(tempTimeout);
            }, 1000);
        }
    });
    $('#page-modal-signature').find('.page-modal-btn-confirm').on('click', function () {
        var tempInputValue = $('#page-modal-signature').find('.page-modal-input>input').val();
        window.console.log(tempInputValue);
        if (tempInputValue === '') {
            $('#page-snackbar-nothing').show();
            var tempTimeout = setTimeout(function () {
                $('#page-snackbar-nothing').hide();
                clearTimeout(tempTimeout);
            }, 1000);
        }
    });
}

// 页面加载完成后执行
$(function () {
    setBtnModal();
    showModal();
    setBtnConfirm();
});