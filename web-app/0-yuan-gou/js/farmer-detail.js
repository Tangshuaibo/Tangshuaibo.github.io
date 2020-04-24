// 启动筛选
function startFilter() {
    console.log('发送筛选请求……');
}

// 设置日期选择器
function setDatePicker () {
    var tempVal, tempValStart, tempValEnd, datePickerStart, datePickerEnd;
    var inputSearch = $('#input-header-search');
    var setTempVal = function (dateStringA, dateStringB) {
        var dateObjA = new Date(dateStringA);
        var dateObjB = new Date(dateStringB);
        var tempVal = '';
        if (dateObjA.getTime() < dateObjB.getTime()) {
            tempVal = dateStringA + ' 至 ' + dateStringB;
        } else {
            tempVal = dateStringB + ' 至 ' + dateStringA;
        }
        return tempVal;
    };
    (function () {
        datePickerStart = new DateTimePicker.Date({
            lang: 'zh-CN'
        });
        datePickerStart.hide();
        datePickerStart.on('selected', function (formatValue, now) {
            tempVal = tempValStart = tempValEnd = null;
            tempValStart = formatValue;
            tempVal = tempValStart + ' 至 ';
            inputSearch.val(tempVal);
            datePickerEnd.show();
        });
        datePickerStart.on('canceled', function () {
            if (!tempValEnd || tempValEnd === '') {
                tempVal = tempValStart = tempValEnd = null;
                inputSearch.val(tempVal);
            }
        });
        datePickerStart.on('cleared', function () {
            tempVal = tempValStart = tempValEnd = null;
            inputSearch.val(tempVal);
        });
    })();
    (function () {
        datePickerEnd = new DateTimePicker.Date({
            lang: 'zh-CN'
        });
        datePickerEnd.hide();
        datePickerEnd.on('selected', function (formatValue, now) {
            tempValEnd = formatValue;
            tempVal = setTempVal(tempValStart, tempValEnd);
            inputSearch.val(tempVal);
            startFilter();
        });
        datePickerEnd.on('canceled', function () {
            tempVal = tempValStart = tempValEnd = null;
            inputSearch.val(tempVal);
        });
        datePickerEnd.on('cleared', function () {
            tempVal = tempValStart = tempValEnd = null;
            inputSearch.val(tempVal);
        });
    })();
    inputSearch.on('click', function () {
        datePickerStart.show();
    });
}

// 页面加载完成后执行
$(function () {
    setDatePicker();
});