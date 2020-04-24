// 设置头像选择
function setSelectorAvatar () {
    var data = {
        tempFile: null,
        tempDataUrl: null
    };
    $('#avatar-user').on('click', function () {
        $('#input-avatar').trigger('click');
    });
    $('#input-avatar').on('change', function () {
        data.tempFile = this.files[0];
        if (data.tempFile) {
            data.tempDataUrl = URL.createObjectURL(data.tempFile);
            $('#avatar-user').css({
                'background-image': 'url(' + data.tempDataUrl + ')'
            });
        } else {
            URL.revokeObjectURL(data.tempDataUrl);
        }
    });
}

// 设置地区选择
function setCityPicker () {
    var cityPicker = new CityPicker({
        inputId: 'btn-area',
        data: city,
        success: function (arr) {
            var tempArea = '';
            arr.forEach(function (item, index) {
                tempArea += item.value;
            });
            $('#btn-area').text(tempArea);
        }
    });
}

// 设置淘宝账号绑定
function setBindingAccount () {
    var boxAccountTb = {
        show: function () {
            $('#layer-mask').addClass('show');
            $('#box-account-tb').addClass('show');
        },
        hide: function () {
            $('#layer-mask').removeClass('show');
            $('#box-account-tb').removeClass('show');
        }
    }
    $('#btn-account-tb').on('click', function () {
        boxAccountTb.show();
    });
    $('#btn-submit-account-tb').on('click', function () {
        var tempAccount = $('#input-account-tb').val();
        if (tempAccount !== '') {
            $('#btn-account-tb').text(tempAccount);
        }
        boxAccountTb.hide();
    });
    $('#btn-cancel-account-tb').on('click', function () {
        boxAccountTb.hide();
    });
    $('#layer-mask').on('click', function (event) {
        var tempClassList = event.target.classList;
        if (tempClassList.contains('layer-mask', 'show')) {
            boxAccountTb.hide();
        }
    });
}

// 设置手机号绑定
function setBindingPhone () {
    var boxNumberPhone = {
        show: function () {
            $('#layer-mask').addClass('show');
            $('#box-number-phone').addClass('show');
        },
        hide: function () {
            $('#layer-mask').removeClass('show');
            $('#box-number-phone').removeClass('show');
        }
    }
    $('#btn-number-phone').on('click', function () {
        boxNumberPhone.show();
    });
    $('#btn-submit-number-phone').on('click', function () {
        var tempAccount = $('#input-number-phone').val();
        if (tempAccount !== '') {
            $('#btn-number-phone').text(tempAccount);
        }
        boxNumberPhone.hide();
    });
    $('#btn-cancel-number-phone').on('click', function () {
        boxNumberPhone.hide();
    });
    $('#layer-mask').on('click', function (event) {
        var tempClassList = event.target.classList;
        if (tempClassList.contains('layer-mask', 'show')) {
            boxNumberPhone.hide();
        }
    });
}

// 页面加载完成后执行
$(function () {
    setCityPicker();
    setBindingPhone();
    setBindingAccount();
    setSelectorAvatar();
});