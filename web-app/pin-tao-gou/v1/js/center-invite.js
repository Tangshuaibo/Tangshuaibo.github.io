// 初始化分享插件
function initShareJs() {
    socialShare('#list-share-btn-group',{
        url                 : '', // 网址，默认使用 window.location.href
        source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title               : '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        origin              : '', // 分享 @ 相关 twitter 账号
        description         : '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image               : '', // 图片, 默认取网页中第一个img标签
        sites               : ['qzone', 'qq', 'weibo', 'wechat', 'douban'], // 启用的站点
        // disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
        wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
        wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
    });
}

// 页面加载完成后执行
$$(function () {
    initShareJs();
});