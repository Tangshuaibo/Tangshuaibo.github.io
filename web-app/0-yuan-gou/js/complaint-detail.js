// ChatBox
var ChatBox = (function () {
    // 构造器
    function chatBox(option) {
        this.container = document.querySelector(option.eleCon);
        this.input = document.querySelector(option.eleInp);
        this.list = this.container.querySelector('.chat-box-list');
        this.init();
    }
    // 原型方法
    chatBox.prototype = {
        // constructor指向
        constructor: chatBox,
        // 获取当前时间
        getCurrentTime: function () {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            if (month <= 9) {
                month = '0' + month;
            }
            if (day <= 9) {
                day = '0' + day;
            }
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            if (hour <= 9) {
                hour = '0' + hour;
            }
            if (minute <= 9) {
                minute = '0' + minute;
            }
            if (second <= 9) {
                second = '0' + second;
            }
            var currentTime = year + '-' + month + '-' + day + ' ' +
                hour + ':' + minute + ':' + second;
            return currentTime;
        },
        // 滚动到对话框底部
        scrollBottom: function (mode, container) {
            var con = container;
            switch (mode) {
                case 'direct': {
                    con.scrollTop = con.scrollHeight;
                    break;
                }
                case 'animated': {
                    var tempLength = con.scrollHeight - con.offsetHeight - con.scrollTop;
                    var tempStep = null;
                    if (tempLength > 0) {
                        if (tempLength < con.scrollTop) {
                            tempStep = 5;
                        } else {
                            tempStep = 10;
                        }
                        var tempInterval = setInterval(function () {
                            con.scrollTop += tempStep;
                            if (con.scrollTop >= con.scrollHeight - con.offsetHeight) {
                                clearInterval(tempInterval);
                            }
                        }, 1);
                    }
                    break;
                }
            }
        },
        // 渲染新增图片
        renderImage: function (dataUrl) {
            var tempItem = '<li class="chat-box-item user">\
                                <div class="chat-box-item-content">\
                                        <div class="name">\
                                            <span>低种姓(用户)</span>\
                                        </div>\
                                        <div class="bubble">\
                                            <span class="bubble-box">\
                                                <img src="' + dataUrl + '" alt="img">\
                                            </span>\
                                        </div>\
                                        <div class="time">\
                                            <span>' + this.getCurrentTime() + '</span>\
                                        </div>\
                                </div>\
                                <div class="chat-box-item-avatar"\
                                    style="background-image: url(./temp-img/complaint-detail/avatar2.jpg)"\
                                ></div>\
                            </li>';
            this.list.innerHTML += tempItem;
        },
        // 渲染新增文本
        renderText: function (text) {
            var tempItem = '<li class="chat-box-item user">\
                                <div class="chat-box-item-content">\
                                    <div class="name">\
                                        <span>低种姓(用户)</span>\
                                    </div>\
                                    <div class="bubble">\
                                        <span class="bubble-box">\
                                            <pre>' + text + '</pre>\
                                        </span>\
                                    </div>\
                                    <div class="time">\
                                        <span>' + this.getCurrentTime() + '</span>\
                                    </div>\
                                </div>\
                                <div class="chat-box-item-avatar"\
                                    style="background-image: url(./temp-img/complaint-detail/avatar2.jpg)"\
                                ></div>\
                            </li>';
            this.list.innerHTML += tempItem;
        },
        // 设置图片选择
        setImageSelect: function () {
            // 一些常量
            var MAXSIZE = 3 * Math.pow(1024, 2);
            var FILETYPE = /.jpg|.jpeg|.png|.bmp/i;
            var _this = this;
            // 一些页面元素
            var btnImg = this.input.querySelector('.btn-img');
            var inputImg = btnImg.querySelector('input[type=file]');
            // 一些事件监听
            btnImg.addEventListener('click', function () {
                inputImg.dispatchEvent(new MouseEvent('click'));
            });
            inputImg.addEventListener('change', function () {
                var tempFile = this.files[0];
                if (tempFile) {
                    if (tempFile.type.match(FILETYPE)) {
                        if (tempFile.size < MAXSIZE) {
                            _this.renderImage(URL.createObjectURL(tempFile));
                            _this.scrollBottom('animated', document.querySelector('#app'));
                        } else {
                            alert('图片大小应不超过3mb，请重新选择');
                        }
                    } else {
                        alert('图片格式应为jpg/jpeg/png，请重新选择');
                    }
                }
            });
        },
        // 设置文本发送
        setTextSend: function () {
            var btnSend = this.input.querySelector('.btn-send');
            var inputText = this.input.querySelector('.textarea');
            var _this = this;
            btnSend.addEventListener('click', function () {
                if (inputText.innerText !== '') {
                    _this.renderText(inputText.innerText);
                    inputText.innerHTML = '';
                    _this.scrollBottom('animated', document.querySelector('#app'));
                } else {
                    alert('发送内容不能为空');
                }
            });
        },
        // 初始化
        init: function () {
            this.setTextSend();
            this.setImageSelect();
        }
    };
    // 暴露构造器
    return chatBox;
})();

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 初始化chatbox
    var tempChatBox = new ChatBox({
        eleCon: '#chat-box-container',
        eleInp: '#chat-box-input'
    });
    // 默认滚动到底部
    tempChatBox.scrollBottom('direct', document.querySelector('#app'));
    document.querySelectorAll('.bubble-box>img').forEach(function () {
        this.addEventListener('load', function () {
            tempChatBox.scrollBottom('direct', document.querySelector('#app'));
        });
    });
});