/* global echarts */

// 显示趋势图
function showChart() {
    var trendChart = echarts.init(document.getElementById('trend-chart'), 'customed-theme');
    var tempData = [
        {
            phase: 1,
            number: 15
        },
        {
            phase: 2,
            number: 35
        },
        {
            phase: 3,
            number: 20
        },
        {
            phase: 4,
            number: 18
        },
        {
            phase: 5,
            number: 25
        },
        {
            phase: 6,
            number: 30
        }
    ];
    trendChart.setOption({
        grid: {
            bottom: 110
        },
        tooltip: {
            trigger: 'axis',
            textStyle: {
                fontSize: 24
            },
            axisPointer: {
                lineStyle: {
                    width: 2
                }
            }
        },
        xAxis: {
            name: '商品期数',
            nameLocation:'center',
            nameGap: 40,
            nameTextStyle: {
                fontSize: 24
            },
            axisLabel: {
                fontSize: 24
            },
            axisLine: {
                lineStyle: {
                    width: 2
                }
            },
            axisTick: {
                lineStyle: {
                    width: 2
                }
            },
            data: tempData.map(function (item) {
                return item.phase;
            })
        },
        yAxis: {
            name: '参与人次',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 24
            },
            axisLabel: {
                margin: 16,
                fontSize: 24
            },
            axisLine: {
                lineStyle: {
                    width: 2
                }
            },
            axisTick: {
                lineStyle: {
                    width: 2
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    width: 2
                }
            }
        },
        dataZoom: [
            {
                type: 'slider',
                xAxisIndex: 0,
                start: 0,
                end: 100,
                textStyle: {
                    fontSize: 24
                }
            }
        ],
        series: {
            name: '参与人次',
            type: 'line',
            lineStyle: {
                width: 2
            },
            symbolSize: 10,
            itemStyle: {
                borderWidth: 2
            },
            data: tempData.map(function (item) {
                return item.number;
            })
        }
    });
}

// 显示往期列表
function showRecordItem() {
    var cardList = $('#record-winner-list');
    var protoCard = $('#record-winner-list>li:first-of-type');
    for (var i = 0; i < 10; i++) {
        cardList.append(protoCard.clone());
        var lastCard = $('#record-winner-list>li:last-of-type');
        lastCard.find('.phase').text('1253');
        lastCard.find('.winner-avatar>img').attr('href', './temp-img/record-trend/avatar_2.jpg');
        lastCard.find('.code').text('10000086');
        lastCard.find('.number').text('104');
        lastCard.css('display', 'block');
    }
}

// 页面加载完成后执行
$(function () {
    showChart();
    showRecordItem();
});