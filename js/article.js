/* global mdui Vue */
var $$ = mdui.JQ;

// 文章卡片组件
var templateHtml = '\
    <div class="article-card-container mdui-col-xs-12 mdui-col-sm-8 mdui-col-offset-sm-2 mdui-m-y-2 animated zoomIn">\
        <div class="mdui-card mdui-hoverable">\
            <div class="mdui-card-media">\
                <img :src="imgSrc"/>\
                <div class="mdui-card-media-covered">\
                    <div class="mdui-card-primary">\
                        <div class="mdui-card-primary-title">{{articleTitle}}</div>\
                        <div class="mdui-card-primary-subtitle">{{articleSubtitle}}</div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
';
Vue.component('article-card', {
    props: [
        'imgSrc',
        'articleTitle',
        'articleSubtitle'
    ],
    template: templateHtml
});

// 实例化Vue对象
new Vue({
    el: '.article-cards-container',
    data: function () {
        return {
            articlesInfo: []
        };
    },
    created: function () {
        var thisVM = this;
        $$.ajax({
            method: 'POST',
            url: './content/article/demo/demo.json',
            data: {
                key1: 'val1',
                key2: 'val2'
            },
            success: function (articleInfo) {
                var item = JSON.parse(articleInfo);
                thisVM.articlesInfo.push(item);
            },
            error: function (xhr, textStatus) {
                window.console.log(textStatus);
            }
        });
    }
});