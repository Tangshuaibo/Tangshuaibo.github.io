/* global Cropper */

// cropper相关
function setCropper() {
    var image = document.getElementById('page-content-img');
    var cropper = new Cropper(image, {
        aspectRatio: 1
    });
    // 销毁cropper实例
    $('#page-content-btn-reset').on('click', function () {
        cropper.destroy();
    });
    // 上传图片文件
    $('#page-content-btn-submit').on('click', function () {
        cropper.getCroppedCanvas().toBlob(function (blob) {
            const formData = new FormData();
            formData.append('avatar', blob, 'avatar.png');
            // $.ajax('/path/to/upload', {
            //     method: "POST",
            //     data: formData,
            //     processData: false,
            //     contentType: false,
            //     success() {
            //         window.console.log('Upload success');
            //     },
            //     error() {
            //         window.console.log('Upload error');
            //     },
            // });
        }, 'image/png');
    });
}

// 设置按钮功能
function setBtnFunc() {
    // 选择文件
    $('#page-content-btn-select').on('click', function () {
        $('#page-content-input').trigger('click');
        $('#page-content-input').on('change', function () {
            var tempSrc = getObjectURL(this.files[0]);
            $('#page-content-img').attr('src', tempSrc).show();
            $('#page-content-btn-select').hide();
            $('#page-content-btn-reset').show();
            $('#page-content-btn-submit').show();
            setCropper();
        });
    });
    // 重置选择
    $('#page-content-btn-reset').on('click', function () {
        $('#page-content-input').val('');
        $('#page-content-img').hide().attr('src', '');
        $('#page-content-btn-select').show();
        $(this).hide();
        $('#page-content-btn-submit').hide();
    });
}

// 获取input文件的本地路径
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL!=undefined) {
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) {
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) {
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}

// 页面加载完成后执行
$(function () {
    setBtnFunc();
});