(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{507:function(e,v,t){"use strict";t.r(v);var _=t(4),r=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("img",{attrs:{src:e.$page.randImgAPI,alt:e.$page.randImgAlt}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("参考文章：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.runoob.com/w3cnote/viewport-deep-understanding.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("viewport 深入理解"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Flexible实现手淘H5页面的终端适配"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.w3cplus.com/css/vw-for-layout.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("再聊移动端页面的适配"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.w3cplus.com/mobile/vw-layout-in-vue.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何在Vue项目中使用vw实现移动端适配"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/u013778905/article/details/78073566",target:"_blank",rel:"noopener noreferrer"}},[e._v("移动Web开发基础-Viewport"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/u013778905/article/details/78343806",target:"_blank",rel:"noopener noreferrer"}},[e._v("移动Web开发基础-百分比+flex布局方案"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/u013778905/article/details/78534287",target:"_blank",rel:"noopener noreferrer"}},[e._v("移动Web开发基础-rem布局"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/u013778905/article/details/78729468",target:"_blank",rel:"noopener noreferrer"}},[e._v("移动Web开发基础-利用VW单位适配布局"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"_1-理想的适配效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-理想的适配效果"}},[e._v("#")]),e._v(" 1. 理想的适配效果")]),e._v(" "),t("p",[e._v("假设我们有一设计图，设计图宽度750px，图内某div块宽度200px，该div块内文字大小32px。")]),e._v(" "),t("p",[e._v("如果想要在屏幕宽度375px的手机上完整展示该设计图的内容，那么需要让浏览器缩小该750px的设计图，以在屏幕上完整显示所有内容。")]),e._v(" "),t("h2",{attrs:{id:"_2-关于-meta-name-viewport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-关于-meta-name-viewport"}},[e._v("#")]),e._v(" 2. 关于"),t("code",[e._v('<meta name="viewport">')])]),e._v(" "),t("p",[e._v("我们可以把手机屏幕想象成一个可调焦距的放大镜，把网页想象成一张报纸。用户就是拿着放大镜看报纸的人。")]),e._v(" "),t("p",[e._v("在标签"),t("code",[e._v('<meta name="viewport" content="...">')]),e._v("中，属性值"),t("code",[e._v("width")]),e._v("指的是放大镜的可视范围，属性值"),t("code",[e._v("initial-scale")]),e._v("指的是放大镜对可视范围的默认缩放比例。")]),e._v(" "),t("p",[e._v("这里用下面的例子进行简单说明：")]),e._v(" "),t("ol",[t("li",[t("p",[t("code",[e._v('<meta name="viewport" content="width=750, initial-scale=0.5">')]),e._v("：放大镜的可视范围的宽度是750px，同时放大镜会对可视范围的图像默认缩放0.5倍。")])]),e._v(" "),t("li",[t("p",[t("code",[e._v('<meta name="viewport" content="width=device-width, initial-scale=2">')]),e._v("：放大镜的可视范围的宽度是设备屏幕的宽度，同时放大镜会对可视范围的图像默认缩放2倍。")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("实际应用中，我们对网页进行缩放（即对"),t("code",[e._v("initial-scale")]),e._v("进行设置）时，无需关心高清屏的dpr，因为dpr只与屏幕显示效果的细腻程度有关，而与网页本身无关。类比以下就是，我们用来看报纸的放大镜，它的显示细腻程度与缩放能力是两个完全不同的属性。")]),e._v(" "),t("p",[e._v("例如，我们用两个显示细腻程度不同的放大镜，去看报纸上同一个16px大小的文字，只要它们的"),t("code",[e._v("initial-scale")]),e._v("都为1，我们看到的这个文字就都是16px的。只不过，用显示细腻程度高放大镜去看报纸，我们的眼睛会更舒服。")]),e._v(" "),t("p",[e._v("但是，产品经理可能会说：同一张图，在dpr=3的屏幕上，就是比在dpr=1的屏幕上，看起来模糊。额，好吧，那是因为这张图片的分辨率太低了，被高清屏这个“照妖镜”找出了原型。我们可以直接把所有图片都换成高清图片，也可以为不同dpr的屏幕提供不同分辨率的图片。")]),e._v(" "),t("p",[e._v("产品经理还可能说：一条1px粗细的线，在dpr=3的屏幕上，就是比在dpr=1的屏幕上，看起来粗。唉，那是因为本来就是这么设计的，dpr=3的屏幕用了3排物理像素点显示这条线，而dpr=1的屏幕只用了1排物理像素点。如果某些人不爽这种情况的话，我们就把1px写成0.3px好了。")])]),e._v(" "),t("h2",{attrs:{id:"_3-推荐的适配方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-推荐的适配方案"}},[e._v("#")]),e._v(" 3. 推荐的适配方案")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("vw")]),e._v("单位进行适配：")]),e._v(" "),t("ol",[t("li",[e._v("在html文件内的"),t("code",[e._v("<head>")]),e._v("内添加"),t("code",[e._v('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">')]),e._v("。")]),e._v(" "),t("li",[e._v("对html文件内各个元素的属性，无论是宽度、高度还是字体大小，都可以使用"),t("code",[e._v("vw")]),e._v("作为单位。")]),e._v(" "),t("li",[e._v("对于线条必须是1px粗细之类的要求，那还是用"),t("code",[e._v("px")]),e._v("作为单位好了。")])]),e._v(" "),t("h2",{attrs:{id:"_4-关于lib-flexible适配方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-关于lib-flexible适配方案"}},[e._v("#")]),e._v(" 4. 关于"),t("code",[e._v("lib-flexible")]),e._v("适配方案")]),e._v(" "),t("p",[e._v("库的地址："),t("a",{attrs:{href:"https://github.com/amfe/lib-flexible",target:"_blank",rel:"noopener noreferrer"}},[e._v("amfe/lib-flexible: 可伸缩布局方案"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("这个方案，很多人还没搞清楚它的原理就被拿来乱用，对此官方很久以前就做了说明：")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[e._v("由于"),t("code",[e._v("viewport")]),e._v("单位得到众多浏览器的兼容，"),t("code",[e._v("lib-flexible")]),e._v("这个过渡方案已经可以放弃使用，不管是现在的版本还是以前的版本，都存有一定的问题。建议大家开始使用"),t("code",[e._v("viewport")]),e._v("来替代此方案。"),t("code",[e._v("vw")]),e._v("的兼容方案可以参阅《"),t("a",{attrs:{href:"https://www.w3cplus.com/mobile/vw-layout-in-vue.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何在Vue项目中使用vw实现移动端适配"),t("OutboundLink")],1),e._v("》一文。")])]),e._v(" "),t("p",[e._v("虽然我们不应在实际项目中使用该方案，但是有必要了解它的原理：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("在n年以前，vw/vh等viewport的单位存在兼容问题，于是大佬想到了用rem单位模拟vw单位；")])]),e._v(" "),t("li",[t("p",[e._v("假设可视窗口宽度为375px，设计稿宽度为750px，设计稿内某div元素宽度240px，dpr为1，如果使用vw作为单位：")]),e._v(" "),t("ul",[t("li",[e._v("(1) 100vw === 375px；")]),e._v(" "),t("li",[e._v("(2) 240px/750px = x/100vw，获得x=32vw；")]),e._v(" "),t("li",[e._v("(3) 即在375px的视口中，该元素宽度占比32%（即120px）；")])])]),e._v(" "),t("li",[t("p",[e._v("现在要用rem模拟vw，先设定100rem === 100vw：")]),e._v(" "),t("ul",[t("li",[e._v("(1) 那么 100rem === 100vw === 375px；")]),e._v(" "),t("li",[e._v("(2) 1rem === 1vw === 3.75px；")]),e._v(" "),t("li",[e._v("(3) 所以应该有"),t("code",[e._v('<html style="font-size: 3.75px;">')]),e._v("；")]),e._v(" "),t("li",[e._v("(4) 上面提到的div元素，用rem表示为32rem；")])])]),e._v(" "),t("li",[t("p",[e._v("但是浏览器支持的font-size最小为12px或10px，于是更改设定为 10rem === 100vw：")]),e._v(" "),t("ul",[t("li",[e._v("(1) 10rem === 100vw === 375px；")]),e._v(" "),t("li",[e._v("(2) 1rem === 10vw === 37.5px；")]),e._v(" "),t("li",[e._v("(3) 于是"),t("code",[e._v('<html style="font-size: 37.5px;">')]),e._v("；")]),e._v(" "),t("li",[e._v("(4) 然后那个div宽度，用rem表示就应该为3.2rem（32vw === 3.2rem）；")])])]),e._v(" "),t("li",[t("p",[e._v("如果屏幕为高清屏，假设dpr=3，那么修改"),t("code",[e._v('<meta name="viewport" content="...">')]),e._v("进行缩放：")]),e._v(" "),t("ul",[t("li",[e._v("(1) 视口为375px，那么在这375px的狭小宽度内，实际显示的宽度是 375px * 3 = 1125px；")]),e._v(" "),t("li",[e._v("(2) 对实际宽度进行缩小，缩小率 scale = 1/dpr（即1/3， 0.333333），那么设定"),t("code",[e._v('<meta name="viewport" content="initial-scale=0.333333">')]),e._v("；")]),e._v(" "),t("li",[e._v("(3) 10rem === 100vw === 1125px，所以 1rem === 112.5px；")]),e._v(" "),t("li",[e._v("(4) 于是"),t("code",[e._v('<html style="font-size: 112.5px;">')]),e._v("；")]),e._v(" "),t("li",[e._v("(5) 然后那个占比32%的div，在1125px中实际宽度为 112.5px * 3.2rem = 360px（也就是 1125px * 0.32 = 360px）；")])])]),e._v(" "),t("li",[t("p",[e._v("由以上我们知道，手机淘宝早期的"),t("code",[e._v("lib-flexible")]),e._v("方案做了以下工作：")]),e._v(" "),t("ul",[t("li",[e._v("(1) 设定"),t("code",[e._v('<meta name="viewport" content="initial-scale=缩放率">')]),e._v("，其中缩放率 scale = 1/dpr;")]),e._v(" "),t("li",[e._v("(2) 动态计算根元素html的font-size（也就是1rem），根据：10rem === 100vw === 视口宽度 * dpr；")]),e._v(" "),t("li",[e._v("(3) 计算目标元素的rem长度，无论设计稿是640px、是750px还是任意宽度，只要得到目标元素在稿内的宽度占比：若占比25%，即为25vw，那么 width/10rem = 25vw/100vw，求得写css中的 width: 2.5rem;")])])]),e._v(" "),t("li",[t("p",[e._v("注意事项：")]),e._v(" "),t("ul",[t("li",[e._v("(1) 根据dpr进行缩放的目的是，解决1px在不同dpr屏幕下看起来粗细不一致的问题（如果对1px问题不敏感，则根据dpr进行缩放的这一步，可以省略）；")]),e._v(" "),t("li",[e._v("(2) 该方案不推荐使用rem作为文字的单位，推荐根据dpr计算px，原因是防止出现类似13.2333px这种在某些浏览器上会使文字显示模糊的文字大小的情况（不过大多数适配方案都允许了小数大小的文字存在，所以这一步可以省略）；")]),e._v(" "),t("li",[e._v("(3) 由于动态设定了根元素html的font-size，所以会改变整个页面的字体的默认大小，甚至可能是几百px（所以需要消除根节点文字太大的影响）；")]),e._v(" "),t("li",[e._v("(4) 于是设定body元素的默认font-size为(12 * dpr)px（其中乘以dpr是因为，页面缩小后12px的文字，看起来只有6px甚至4px）。")])])])]),e._v(" "),t("h2",{attrs:{id:"其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" 其它🍜")]),e._v(" "),t("p",[e._v("遇到或想到相关内容后再做补充……")])])}),[],!1,null,null,null);v.default=r.exports}}]);