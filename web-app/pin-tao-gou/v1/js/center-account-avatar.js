/* global Cropper */
var cropper, originDataUrl;

// 操作按钮相关
function setBtns() {
    $$('#btn-select, #btn-reselect').on('click', function () {
        $$('#input-avatar').trigger('click');
    });
    $$('#btn-submit').on('click', function () {
        var dataUrl = cropper.getCroppedCanvas().toDataURL('image/png', 0.5);
        $$.ajax({
            method: 'POST',
            url: './test.php',
            data: {
                imgData: dataUrl
            },
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
            },
            error: function (xhr, textStatus) {
                console.log(textStatus);
            }
        });
    });
}

// 实例化cropper
function setCropper() {
    var image = document.querySelector('#avatar-container>img');
    image.setAttribute('src', originDataUrl);
    if (cropper) {
        cropper.replace(originDataUrl);
    } else {
        cropper = new Cropper(image, {
            aspectRatio: 1,
            autoCropArea: 1
        });
    }
}

// 文件选择相关
function setInputFile() {
    $$('#input-avatar').on('change', function () {
        var tempFile = $$(this)[0].files[0];
        if (tempFile) {
            if (originDataUrl) {
                URL.revokeObjectURL(originDataUrl);
            }
            originDataUrl = URL.createObjectURL(tempFile);
            setCropper();
            $$('#btn-group-select').hide();
            $$('#btn-group-operate').show();
        }
    });
}

// 页面加载完成后执行
$$(function () {
    setBtns();
    setInputFile();
});