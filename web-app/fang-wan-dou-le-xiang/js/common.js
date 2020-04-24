// 公共部分
var Common = (function () {
    // 构造器
    function common () {}

    // 设置页面头部
    common.prototype.setHeader = function () {
        var btnBack = document.querySelector('#header-back');
        var btnHome = document.querySelector('#header-home');
        if (btnBack) {
            btnBack.addEventListener('click', function () {
                history.back();
            });
        }
        if (btnHome) {
            btnHome.addEventListener('click',  function () {
                location.href = './index.html';
            });
        }
    }

    // 设置页面上下边距
    common.prototype.setMainPadding = function () {
        var nodeApp = document.querySelector('#app');
        var nodeHeader = nodeApp.querySelector('.header');
        var nodeFooter = nodeApp.querySelector('.footer');
        if (nodeHeader) {
            nodeApp.style.setProperty('padding-top', nodeHeader.offsetHeight + 'px');
        }
        if (nodeFooter) {
            nodeApp.style.setProperty('padding-bottom', nodeFooter.offsetHeight + 'px');
        }
    }

    // 初始化
    common.prototype.init = function () {
        this.setHeader();
        this.setMainPadding();
    }

    // 暴露构造器
    return common;
})();

// tab选项卡
var TabSelector = (function () {
    // 构造器
    function tabSelector () {}

    // 显示默认tab
    tabSelector.prototype.showTabDefault = function () {
        var selectorActive = document.querySelector('.tab-selector-item.active');
        if (selectorActive) {
            var tempTarget = selectorActive.dataset.target;
            document.getElementById(tempTarget).classList.add('active');
        }
    }

    // 设置tab切换
    tabSelector.prototype.setTabSwitch = function () {
        document.querySelectorAll('.tab-selector-item').forEach(function (node) {
            node.addEventListener('click', function () {
                if (!this.classList.contains('active')) {
                    this.parentNode.querySelector('.tab-selector-item.active').classList.remove('active');
                    this.classList.add('active');
                    var tempTarget = this.dataset.target;
                    var tabActive = document.querySelector('.tab-item.active');
                    if (tabActive) {
                        tabActive.classList.remove('active');
                    }
                    document.getElementById(tempTarget).classList.add('active');
                }
            }, false);
        });
    }

    // 初始化
    tabSelector.prototype.init = function () {
        this.showTabDefault();
        this.setTabSwitch();
    }

    // 暴露构造器
    return tabSelector;
})();

// 可折叠面板
var PanelCollapse = (function () {
    // 构造器
    function panelCollapse () {}

    // 设置面板展开折叠
    panelCollapse.prototype.setToggle = function () {
        document.querySelectorAll('.panel-collapse-header').forEach(function (node) {
            var panelItem = node.parentNode;
            var panelArrow = panelItem.querySelector('.arrow');
            var panelBody = panelItem.querySelector('.panel-collapse-body');
            var panelHeaderHeight = node.offsetHeight;
            var panelBodyHeight = panelBody.offsetHeight;
            var tempHeight = panelHeaderHeight + panelBodyHeight;
            (function () {
                if (panelItem.classList.contains('active')) {
                    panelArrow.className = 'arrow fa fa-chevron-up';
                    panelItem.style.setProperty('height', tempHeight + 'px');
                }
            })();
            node.addEventListener('click', function () {
                if (!panelItem.classList.contains('active')) {
                    panelArrow.className = 'arrow fa fa-chevron-up';
                    panelItem.style.setProperty('height', tempHeight + 'px');
                } else {
                    panelArrow.className = 'arrow fa fa-chevron-down';
                    panelItem.style.setProperty('height', panelHeaderHeight + 'px');
                }
                panelItem.classList.toggle('active');
            });
        });
    }

    // 初始化
    panelCollapse.prototype.init = function () {
        this.setToggle();
    }

    // 暴露构造器
    return panelCollapse;
})();

// 数字加减
var Spinner = (function () {
    function spinner(option) {
        this.nodeList = '.spinner';
        this.step = 1;
        Object.assign(this, {
            nodeList: document.querySelectorAll(option.selector),
            step: option.step,
        }).init();
    }
    spinner.prototype.setBtn = function () {
        this.nodeList.forEach(function (thisItem) {
            var btnMinus = thisItem.querySelector('.spinner-btn.minus');
            var btnPlus = thisItem.querySelector('.spinner-btn.plus');
            var inputNum = thisItem.querySelector('.spinner-input');
            var min = inputNum.dataset.min;
            var max = inputNum.dataset.max;
            var step = this.step;
            var tempNum = parseInt(inputNum.value);
            if (btnMinus) {
                if (min && tempNum <= min) {
                    btnMinus.classList.add('disable');
                }
                btnMinus.addEventListener('click', function () {
                    tempNum = parseInt(inputNum.value) - step;
                    if (min && tempNum > min || !min) {
                        inputNum.value = tempNum;
                    } else {
                        inputNum.value = min;
                        this.classList.add('disable');
                    }
                    if (max && parseInt(inputNum.value) < max) {
                        btnPlus.classList.remove('disable');
                    }
                });
            }
            if (btnPlus) {
                if (max && tempNum >= max) {
                    btnPlus.classList.add('disable');
                }
                btnPlus.addEventListener('click', function () {
                    tempNum = parseInt(inputNum.value) + step;
                    if (max && tempNum < max || !max) {
                        inputNum.value = tempNum;
                    } else {
                        inputNum.value = max;
                        this.classList.add('disable');
                    }
                    if (min && parseInt(inputNum.value) > min) {
                        btnMinus.classList.remove('disable');
                    }
                });
            }
        }, this);
    }
    spinner.prototype.setInput = function () {
        this.nodeList.forEach(function (thisItem) {
            var btnMinus = thisItem.querySelector('.spinner-btn.minus');
            var btnPlus = thisItem.querySelector('.spinner-btn.plus');
            var inputNum = thisItem.querySelector('.spinner-input');
            var min = inputNum.dataset.min;
            var max = inputNum.dataset.max;
            inputNum.addEventListener('input', function () {
                this.value = this.value.replace(/[^\-?\d]|^0/g, '').replace(/^-0/g, '-');
                if (min && parseInt(this.value) < min) {
                    this.value = min;
                }
                if (max && parseInt(this.value) > max) {
                    this.value = max;
                }
            });
            inputNum.addEventListener('blur', function () {
                if (this.value === '') {
                    if (min) {
                        this.value = min;
                    } else {
                        this.value = 0;
                    }
                }
                if (min && parseInt(this.value) <= min) {
                    btnMinus.classList.add('disable');
                } else {
                    btnMinus.classList.remove('disable');
                }
                if (max && parseInt(this.value) >= max) {
                    btnPlus.classList.add('disable');
                } else {
                    btnPlus.classList.remove('disable');
                }
            });
        });
    }
    spinner.prototype.init = function () {
        this.setBtn();
        this.setInput();
    }
    return spinner;
})();

// polyFill
function setPolyFill () {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
}

// 入口函数
document.addEventListener('DOMContentLoaded', function () {
    setPolyFill();
    new Common().init();
}, false);