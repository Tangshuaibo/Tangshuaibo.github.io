// 个人中心选择截图
function selectPicture() {
    $$('.form-img-container').each(function () {
        var imgInput = $$(this).find('.form-input-img');
        var img = $$(this).find('.form-img');
        img.on('click', function () {
            imgInput.trigger('click');
        });
        var tempDataUrl;
        imgInput.on('change', function () {
            var tempFile = this.files[0];
            if (tempFile) {
                if (tempFile.size > 3 * Math.pow(1024, 2)) {
                    mdui.alert('文件不能大于3M，请重新选择', '文件过大', function () {}, {
                        confirmText: '知道了'
                    });
                } else {
                    if (tempDataUrl) {
                        URL.revokeObjectURL(tempDataUrl);
                    }
                    tempDataUrl = URL.createObjectURL(tempFile);
                    img.css({
                        'background-image': 'url("' + tempDataUrl + '")'
                    });
                }
            }
        });
    });
}

// 账号绑定设置城市选择
function setCityPicker() {
    if ($$('#input-account-address').length !== 0) {
        var tempValue = {};
        var tempInputValue = '';
        new CityPicker({
            inputId: 'input-account-address',
            title: '选择收货地址',
            style: {
                sureColor: '#1e83d3'
            },
            data: city,
            success: function(arr) {
                if (arr[2]) {
                    tempValue.tempProvince = arr[0].value;
                    tempValue.tempCity = arr[1].value;
                    tempValue.tempDistrict = arr[2].value;
                    tempInputValue = [tempValue.tempProvince, tempValue.tempCity, tempValue.tempDistrict].join('/');
                } else {
                    delete tempValue.tempProvince;
                    tempValue.tempCity = arr[0].value;
                    tempValue.tempDistrict = arr[1].value;
                    tempInputValue = [tempValue.tempCity, tempValue.tempDistrict].join('/');
                }
                console.log(tempValue);
                $$('#input-account-address').val(tempInputValue);
            }
        });
    }
}

// 查看相关截图大图
function viewLargerImage() {
    var accountScreenShotViewer = new mdui.Dialog('#account-screen-shot-viewer');
    $$('.account-screen-shot').on('click', function () {
        var tempSrc = $$(this).find('.account-screen-shot-img').css('background-image')
                        .replace('url("', '').replace('")', '');
        $$('#account-screen-shot-viewer>img').attr('src', tempSrc);
        accountScreenShotViewer.open();
    });
}

// 设置已绑定账号列表项删除按钮
function setBtnItemDel() {
    $$('.btn-item-delete').on('click', function () {
        return false;
    });
}

// 页面加载完成后执行
$$(function () {
    selectPicture();
    setCityPicker();
    setBtnItemDel();
    viewLargerImage();
});