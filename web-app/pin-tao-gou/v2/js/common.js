/* global mdui */
var $$ = mdui.JQ;

// 头部按钮功能
function setBtnHeader() {
    // 后退
    $$('#header-btn-back:not(.mdui-invisible)').on('click', function () {
        history.back();
    });
    // 回到首页
    $$('#header-btn-home:not(.mdui-invisible)').on('click', function () {
        location.href = './home.html';
    });
}

// 检测是否有底部导航栏，设置底部内边距
function checkBottomNav() {
    if ($$('#app-footer').length === 0) {
        $$('body').removeClass('mdui-bottom-nav-fixed');
    }
}

// 设置下拉选择框，修复多个下拉选择框切换过快后无法显示的bug
function setSelectDropDown() {
    $$('.mdui-select').on('click', function () {
        if ($$(this).hasClass('mdui-select-closing') && $$(this).hasClass('mdui-select-open')) {
            $$(this).removeClass('mdui-select-closing');
        }
    });
}

// 选择图片
function selectPicture() {
    $$('.form-img-container').each(function () {
        var imgInput = $$(this).find('.form-input-img');
        var img = $$(this).find('.form-img');
        if (imgInput.length !== 0) {
            img.on('click', function () {
                imgInput.trigger('click');
            });
        }
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
    if ($$('#input-address').length !== 0) {
        var tempValue = {};
        var tempInputValue = '';
        new CityPicker({
            inputId: 'input-address',
            title: '选择相关地址',
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
                $$('#input-address').val(tempInputValue);
            }
        });
    }
}

// 查看大图
function viewLargerImage() {
    if ($$('#image-viewer').length !== 0) {
        // 设置大图查看对话框
        var imageViewerDialog = new mdui.Dialog('#image-viewer');
        $$('#image-viewer').on('closed.mdui.dialog', function () {
            $$(this).css('top', 'unset');
        });
        // 查看商品图片大图
        $$('.list-item-img').on('click', function () {
            var tempSrc = $$(this).find('img').attr('src');
            $$('#image-viewer>img').attr('src', tempSrc);
            imageViewerDialog.open();
        });
        // 查看表单图片大图
        $$('.form-img-container').each(function () {
            var imgInput = $$(this).find('.form-input-img');
            var img = $$(this).find('.form-img');
            if (imgInput.length === 0) {
                img.on('click', function () {
                    var tempSrc = $$(this).css('background-image')
                        .replace('url("', '').replace('")', '');
                    $$('#image-viewer>img').attr('src', tempSrc);
                    imageViewerDialog.open();
                });
            }
        });
    }
}

// 页面加载完成后执行
$$(function () {
    setBtnHeader();
    checkBottomNav();
    setSelectDropDown();
    selectPicture();
    setCityPicker();
    viewLargerImage();
});