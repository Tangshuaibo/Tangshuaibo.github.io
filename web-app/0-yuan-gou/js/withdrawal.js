// 设置银行卡绑定模态框
function setModalBankBind () {
    var boxBankBind = {
        show: function () {
            $('#layer-mask').addClass('show');
            $('#box-bank-bind').addClass('show');
        },
        hide: function () {
            $('#layer-mask').removeClass('show');
            $('#box-bank-bind').removeClass('show');
        }
    }
    $('#btn-band-bind').on('click', function () {
        boxBankBind.show();
    });
    $('#btn-cancel-bank-bind').on('click', function () {
        boxBankBind.hide();
    });
    $('#layer-mask').on('click', function (event) {
        var tempClassList = event.target.classList;
        if (tempClassList.contains('layer-mask', 'show')) {
            boxBankBind.hide();
        }
    });
    new MobileSelect({
        trigger: '#input-bank',
        title: '银行选择',
        wheels: [
            {
                data: [
                    '工商银行',
                    '建设银行',
                    '农业银行',
                    '衡水银行'
                ]
            }
        ],
        triggerDisplayData: false,
        callback: function (indexArr, data) {
            $('#input-bank').val(data[0]);
        }
    });
}

// 设置获取验证码
function setCodeCountdown () {
    var btnCodeClick = (function (btnObj) {
        var clickable = true;
        return function (btnText, btnSecond) {
            if (clickable) {
                clickable = false;
                var tempNum = btnSecond;
                btnObj.innerText = tempNum + 's';
                var tempInterval = setInterval(function () {
                    btnObj.innerText = --tempNum + 's';
                    if (tempNum <= 0) {
                        clearInterval(tempInterval);
                        btnObj.innerText = btnText;
                        tempNum = btnSecond;
                        clickable = true;
                    }
                }, 1000);
            }
        };
    })(document.getElementById('btn-code-bank'));
    $('#btn-code-bank').on('click', function () {
        btnCodeClick('获取验证码', 60);
    });
}

// 页面加载完成后执行
$(function () {
    setModalBankBind();
    setCodeCountdown();
});