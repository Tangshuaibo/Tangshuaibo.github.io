(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd2439a0"],{1276:function(e,t,n){"use strict";var r=n("d784"),o=n("44e7"),i=n("825a"),a=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),g=[].push,p=Math.min,h=4294967295,m=!f((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),i=void 0===n?h:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);var s,c,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,f+"g");while(s=d.call(m,r)){if(c=m.lastIndex,c>p&&(u.push(r.slice(p,s.index)),s.length>1&&s.index<r.length&&g.apply(u,s.slice(1)),l=s[0].length,p=c,u.length>=i))break;m.lastIndex===s.index&&m.lastIndex++}return p===r.length?!l&&m.test("")||u.push(""):u.push(r.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=a(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var a=n(r,e,this,o,r!==t);if(a.done)return a.value;var d=i(e),f=String(this),g=s(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),w=new g(m?d:"^(?:"+d.source+")",b),k=void 0===o?h:o>>>0;if(0===k)return[];if(0===f.length)return null===u(w,f)?[f]:[];var y=0,P=0,C=[];while(P<f.length){w.lastIndex=m?P:0;var O,x=u(w,m?f:f.slice(P));if(null===x||(O=p(l(w.lastIndex+(m?0:P)),f.length))===y)P=c(f,P,v);else{if(C.push(f.slice(y,P)),C.length===k)return C;for(var N=1;N<=x.length-1;N++)if(C.push(x[N]),C.length===k)return C;P=y=O}}return C.push(f.slice(y)),C}]}),!m)},"159b":function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var s in o){var c=r[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{a(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=n("ae40"),a=o("forEach"),s=i("forEach");e.exports=a&&s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},2241:function(e,t,n){"use strict";var r,o=n("c31d"),i=n("2b0e"),a=n("d282"),s=n("ea8e"),c=n("b1d2"),l=n("6605"),u=n("b650"),d=Object(a["a"])("dialog"),f=d[0],g=d[1],p=d[2],h=f({mixins:[Object(l["a"])()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(e){var t=this;this.$emit(e),this.value&&(this.beforeClose?(this.loading[e]=!0,this.beforeClose(e,(function(n){!1!==n&&t.loading[e]&&t.onClose(e),t.loading.confirm=!1,t.loading.cancel=!1}))):this.onClose(e))},onClose:function(e){this.close(),this.callback&&this.callback(e)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var e,t=this,n=this.$createElement,r=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[c["d"],g("footer",{buttons:r})]},[this.showCancelButton&&n(u["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||p("cancel")},class:g("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&n(u["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||p("confirm")},class:[g("confirm"),(e={},e[c["b"]]=r,e)],style:{color:this.confirmButtonColor},on:{click:function(){t.handleAction("confirm")}}})])}},render:function(){var e,t=arguments[0];if(this.shouldRender){var n=this.message,r=this.messageAlign,o=this.slots(),i=this.slots("title")||this.title,a=i&&t("div",{class:g("header",{isolated:!n&&!o})},[i]),c=(o||n)&&t("div",{class:g("content")},[o||t("div",{domProps:{innerHTML:n},class:g("message",(e={"has-title":i},e[r]=r,e))})]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[g(),this.className],style:{width:Object(s["a"])(this.width)}},[a,c,this.genButtons()])])}}}),m=n("a142");function v(e){return document.body.contains(e)}function b(){r&&r.$destroy(),r=new(i["a"].extend(h))({el:document.createElement("div"),propsData:{lazyRender:!1}}),r.$on("input",(function(e){r.value=e}))}function w(e){return m["f"]?Promise.resolve():new Promise((function(t,n){r&&v(r.$el)||b(),Object(o["a"])(r,w.currentOptions,e,{resolve:t,reject:n})}))}w.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(e){r["confirm"===e?"resolve":"reject"](e)}},w.alert=w,w.confirm=function(e){return w(Object(o["a"])({showCancelButton:!0},e))},w.close=function(){r&&(r.value=!1)},w.setDefaultOptions=function(e){Object(o["a"])(w.currentOptions,e)},w.resetDefaultOptions=function(){w.currentOptions=Object(o["a"])({},w.defaultOptions)},w.resetDefaultOptions(),w.install=function(){i["a"].use(h)},w.Component=h,i["a"].prototype.$dialog=w;t["a"]=w},"2fcb":function(e,t,n){},"327e":function(e,t,n){},"3b63":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page-settings"}},[r("NavBar",{attrs:{title:"设置",border:"",fixed:"",placeholder:"","left-arrow":""},on:{"click-left":e.jumpToPreviousPage}}),r("VanImage",{attrs:{id:"page-settings-main-icon",round:"",width:"100px",height:"100px",fit:"cover",src:n("db7c")}}),r("h3",{attrs:{id:"page-settings-main-nickname"}},[e._v(" "+e._s(e.appUserInfo.nickName)+" ")]),r("CellGroup",{attrs:{title:"基本信息"}},[r("Cell",{attrs:{title:"UID",value:e.appUserInfo.uid,center:""}}),r("Cell",{attrs:{title:"用户名",value:e.appUserInfo.userName,center:""}}),r("Cell",{attrs:{title:"注册时间",value:e.appUserInfo.createdAt,center:""}})],1),r("CellGroup",{attrs:{title:"信息修改"}},[r("Cell",{attrs:{title:"修改昵称","is-link":"",center:""},on:{click:e.togglePopupNickname}}),r("Cell",{attrs:{title:"修改密码","is-link":"",center:""},on:{click:e.togglePopupPassword}})],1),r("CellGroup",{attrs:{title:"数据同步"}},[r("Cell",{attrs:{title:"上传数据",value:"上传本地数据至云端","is-link":"",center:""},on:{click:e.uploadUserData}}),r("Cell",{attrs:{title:"下载数据",value:"下载云端数据至本地","is-link":"",center:""},on:{click:e.downloadUserData}})],1),r("div",{attrs:{id:"page-settings-main-btns"}},[r("Button",{attrs:{id:"page-settings-main-btn-unregistration",type:"danger",block:"",round:""},on:{click:e.deleteUserAccount}},[e._v(" 注销账号 ")]),r("Button",{attrs:{id:"page-settings-main-btn-logout",type:"warning",block:"",round:""},on:{click:e.requestToLogout}},[e._v(" 退出登录 ")])],1),r("PageSettingsNickname",{attrs:{show:e.showPopupNickname},on:{"update:show":function(t){e.showPopupNickname=t}}}),r("PageSettingsPassword",{attrs:{show:e.showPopupPassword},on:{"update:show":function(t){e.showPopupPassword=t}}})],1)},o=[];n("99af"),n("4160"),n("d81d"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("159b"),n("ddb0");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return i(e)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260");function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n("fb6a"),n("b0c0"),n("25f0");function c(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return a(e)||s(e)||c(e)||l()}n("e17f");var d=n("2241"),f=(n("96cf"),n("1da1")),g=(n("9a83"),n("f564")),p=(n("4056"),n("44bf")),h=(n("68ef"),n("9d70"),n("3743"),n("8a0b"),n("d282")),m=n("b1d2"),v=n("ad06"),b=Object(h["a"])("nav-bar"),w=b[0],k=b[1],y=w({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var e=this.$createElement,t=this.slots("left");return t||[this.leftArrow&&e(v["a"],{class:k("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&e("span",{class:k("text")},[this.leftText])]},genRight:function(){var e=this.$createElement,t=this.slots("right");return t||(this.rightText?e("span",{class:k("text")},[this.rightText]):void 0)},genNavBar:function(){var e,t=this.$createElement;return t("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[k({fixed:this.fixed}),(e={},e[m["a"]]=this.border,e)]},[t("div",{class:k("left"),on:{click:this.onClickLeft}},[this.genLeft()]),t("div",{class:[k("title"),"van-ellipsis"]},[this.slots("title")||this.title]),t("div",{class:k("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(e){this.$emit("click-left",e)},onClickRight:function(e){this.$emit("click-right",e)}},render:function(){var e=arguments[0];return this.placeholder&&this.fixed?e("div",{class:k("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}}),P=(n("5c56"),n("2638")),C=n.n(P),O=n("ba31"),x=Object(h["a"])("cell-group"),N=x[0],B=x[1];function j(e,t,n,r){var o,i=e("div",C()([{class:[B(),(o={},o[m["e"]]=t.border,o)]},Object(O["b"])(r,!0)]),[null==n.default?void 0:n.default()]);return t.title||n.title?e("div",[e("div",{class:B("title")},[n.title?n.title():t.title]),i]):i}j.props={title:String,border:{type:Boolean,default:!0}};var S=N(j),U=(n("1a04"),n("7744")),$=(n("66b9"),n("b650")),E=n("3853"),A=n("3022"),I=n("a0d1"),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Popup",{attrs:{id:"page-settings-password",position:"bottom",closeable:"","safe-area-inset-bottom":"","close-on-click-overlay":!1},on:{open:e.onPopupOpen,close:e.onPopupClose},model:{value:e.showPopup,callback:function(t){e.showPopup=t},expression:"showPopup"}},[n("div",{staticClass:"van-hairline--bottom",attrs:{id:"page-settings-password-title"}},[e._v(" 修改密码 ")]),n("Form",{ref:"pageSettingsPasswordFrom",attrs:{id:"page-settings-password-form","show-error":!1},on:{submit:e.doSubmitFormValues}},[n("Field",{ref:"fieldOldPassword",attrs:{name:"oldPassword",type:"password",label:"旧密码",placeholder:"请输入8至20个字符（字母或数字）",rules:e.rulesOldPassword},model:{value:e.formValues.oldPassword,callback:function(t){e.$set(e.formValues,"oldPassword",t)},expression:"formValues.oldPassword"}}),n("Field",{ref:"fieldNewPassword",attrs:{name:"newPassword",type:"password",label:"新密码",placeholder:"请输入8至20个字符（字母或数字）",rules:e.rulesNewPassword},model:{value:e.formValues.newPassword,callback:function(t){e.$set(e.formValues,"newPassword",t)},expression:"formValues.newPassword"}}),n("Field",{ref:"fieldConfirmation",attrs:{name:"confirmation",type:"password",label:"密码确认",placeholder:"请再次输入密码",rules:e.rulesConfirmation},model:{value:e.formValues.confirmation,callback:function(t){e.$set(e.formValues,"confirmation",t)},expression:"formValues.confirmation"}}),n("div",{attrs:{id:"page-settings-password-btns"}},[n("Button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 确认修改 ")])],1)],1)],1)},R=[],L=(n("caad"),n("2532"),n("8a58"),n("e41f")),D=(n("38d5"),n("772a")),V=(n("be7f"),n("565f")),T=n("9ab4"),_={name:"PageSettingsPassword",components:{Button:$["a"],Field:V["a"],Form:D["a"],Popup:L["a"]},props:{show:{type:Boolean,default:!1}},data:function(){return{patchingPassword:!1,urls:{getRSAPubKey:E["c"],patchPassword:E["j"]},formValues:{oldPassword:"",newPassword:"",confirmation:""},rulesOldPassword:[{required:!0,message:"请填写密码"},{message:"",validator:this.checkPasswordFormat}],rulesNewPassword:[{required:!0,message:"请填写密码"},{message:"",validator:this.checkPasswordFormat},{message:"新密码应与旧密码不同",validator:this.distinguishPassword}],rulesConfirmation:[{required:!0,message:"请再次填写新密码"},{message:"两次填写的新密码不一致",validator:this.confirmPassword}]}},computed:{showPopup:{get:function(){return this.show},set:function(e){this.$emit("update:show",e)}},isConnected:function(){return this.$store.getters.isConnected},isLoggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{checkPasswordFormat:function(e,t){var n=/^[a-z0-9]+$/i,r=!1;return n.test(e)?e.length<8?t.message="字符不应少于8个":e.length>20?t.message="字符不应多于20个":r=!0:t.message="不应包含除字母和数字以外的字符",r},distinguishPassword:function(e){return this.formValues.oldPassword!==e},confirmPassword:function(e){return this.formValues.newPassword===e},onPopupOpen:function(){Object.assign(this.formValues,{oldPassword:"",newPassword:"",confirmation:""})},onPopupClose:function(){this.$refs.pageSettingsPasswordFrom.resetValidation()},notifyBadConnection:function(){Object(g["a"])({type:"danger",message:"连接服务器失败"})},getRSAPubKey:function(){return Object(I["d"])().get(this.urls.getRSAPubKey).then((function(e){return e.data.payload.key})).catch((function(e){return Promise.reject(e)}))},patchRSAEncryptedMsg:function(e,t){var n=this;return Object(I["c"])(e).patch(this.urls.patchPassword,t).then((function(e){return e})).catch((function(e){var t,r,o=null===e||void 0===e||null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message;return"crypto/bcrypt: hashedPassword is not the hash of the given password"===o&&(n.$refs.fieldOldPassword.validateMessage="输入的旧密码不正确"),(null===o||void 0===o?void 0:o.includes("RequestUserPasswordChange.newPassword"))&&(n.$refs.fieldNewPassword.validateMessage="请再次检查新密码"),Promise.reject(e)}))},submitFormValues:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getRSAPubKey();case 2:return r=n.sent,o={oldPassword:Object(T["a"])(e.oldPassword),newPassword:Object(T["a"])(e.newPassword)},n.next=6,t.patchRSAEncryptedMsg(r,o);case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()},doSubmitFormValues:function(e){var t=this;this.patchingPassword||(this.patchingPassword=!0,this.isConnected?this.submitFormValues(e).then((function(e){Object(g["a"])({type:"success",message:"密码修改成功"}),t.showPopup=!1,Promise.allSettled([t.$store.dispatch("updateAppJWTString",void 0),t.$store.dispatch("updateAppUserInfo",void 0)]).then((function(){t.$router.replace("/login")}))})).catch((function(){t.isConnected&&t.isLoggedIn&&Object(g["a"])({type:"danger",message:"密码修改失败"})})).finally((function(){t.patchingPassword=!1})):this.notifyBadConnection())}}},q=_,M=(n("54d8"),n("2877")),G=Object(M["a"])(q,F,R,!1,null,"44a32f3b",null),z=G.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Popup",{attrs:{id:"page-settings-nickname",position:"bottom",closeable:"","safe-area-inset-bottom":"","close-on-click-overlay":!1},on:{open:e.onPopupOpen,close:e.onPopupClose},model:{value:e.showPopup,callback:function(t){e.showPopup=t},expression:"showPopup"}},[n("div",{staticClass:"van-hairline--bottom",attrs:{id:"page-settings-nickname-title"}},[e._v(" 修改昵称 ")]),n("Form",{ref:"pageSettingsNicknameForm",attrs:{id:"page-settings-nickname-form","show-error":!1},on:{submit:e.doSubmitFormValues}},[n("Field",{ref:"fieldOldNickname",attrs:{name:"oldNickname",label:"旧昵称",placeholder:"请输入1至30个字符（字母/数字/汉字）",rules:e.rulesOldNickname,disabled:""},model:{value:e.formValues.oldNickname,callback:function(t){e.$set(e.formValues,"oldNickname",t)},expression:"formValues.oldNickname"}}),n("Field",{ref:"fieldNewNickname",attrs:{name:"newNickname",label:"新昵称",placeholder:"请输入1至30个字符（字母/数字/汉字）",rules:e.rulesNewNickname},model:{value:e.formValues.newNickname,callback:function(t){e.$set(e.formValues,"newNickname",t)},expression:"formValues.newNickname"}}),n("div",{attrs:{id:"page-settings-nickname-btns"}},[n("Button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 确认修改 ")])],1)],1)],1)},J=[],K={name:"PageSettingsNickname",components:{Button:$["a"],Field:V["a"],Form:D["a"],Popup:L["a"]},props:{show:{type:Boolean,default:!1}},data:function(){return{patchingNickname:!1,urls:{patchNickname:E["i"]},formValues:{oldNickname:"",newNickname:""},rulesOldNickname:[{required:!0,message:"请填写旧昵称"},{message:"",validator:this.checkNicknameFormat}],rulesNewNickname:[{required:!0,message:"请填写新昵称"},{message:"",validator:this.checkNicknameFormat},{message:"新昵称应与旧昵称不同",validator:this.distinguishNickname}]}},computed:{showPopup:{get:function(){return this.show},set:function(e){this.$emit("update:show",e)}},isConnected:function(){return this.$store.getters.isConnected},isLoggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{checkNicknameFormat:function(e,t){var n=/^[\u4e00-\u9fa5\w]+$/,r=!1;return n.test(e)?e.length<1?t.message="字符不应少于1个":e.length>30?t.message="字符不应多于30个":r=!0:t.message="只能使用：字母/数字/汉字",r},distinguishNickname:function(e){return this.formValues.oldNickname!==e},onPopupOpen:function(){Object.assign(this.formValues,{oldNickname:this.$store.state.appUserInfo.nickName,newNickname:""})},onPopupClose:function(){this.$refs.pageSettingsNicknameForm.resetValidation()},notifyBadConnection:function(){Object(g["a"])({type:"danger",message:"连接服务器失败"})},patchAESEncryptedMsg:function(e){var t=this;return Object(I["b"])().patch(this.urls.patchNickname,e).then((function(e){return e})).catch((function(e){var n,r,o=null===e||void 0===e||null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message;return"mismatched old nickname"===o&&(t.$refs.fieldOldNickname.validateMessage="旧昵称不匹配"),(null===o||void 0===o?void 0:o.includes("RequestUserNicknameChange.oldNickname"))&&(t.$refs.fieldOldNickname.validateMessage="请再次检查旧昵称"),(null===o||void 0===o?void 0:o.includes("RequestUserNicknameChange.newNickname"))&&(t.$refs.fieldNewNickname.validateMessage="请再次检查新昵称"),Promise.reject(e)}))},submitFormValues:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={oldNickname:t.formValues.oldNickname,newNickname:t.formValues.newNickname},e.next=3,t.patchAESEncryptedMsg(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},doSubmitFormValues:function(e){var t=this;this.patchingNickname||(this.patchingNickname=!0,this.isConnected?this.submitFormValues(e).then((function(){Object(g["a"])({type:"success",message:"昵称修改成功"}),t.$store.dispatch("updateAppUserInfo",{nickName:t.formValues.newNickname}).then((function(){t.showPopup=!1}))})).catch((function(){t.isConnected&&t.isLoggedIn&&Object(g["a"])({type:"danger",message:"昵称修改失败"})})).finally((function(){t.patchingNickname=!1})):this.notifyBadConnection())}}},W=K,X=(n("d809"),Object(M["a"])(W,H,J,!1,null,"a0e5af74",null)),Y=X.exports,Q={name:"PageSettings",components:{Button:$["a"],Cell:U["a"],CellGroup:S,NavBar:y,VanImage:p["a"],PageSettingsNickname:Y,PageSettingsPassword:z},data:function(){return{isDeletingUserAccount:!1,isLoggingOut:!1,isUploadingUserData:!1,isDownloadingUserData:!1,urls:{urlDeleteAccount:E["b"],urlGetUserLogout:E["g"],urlPostUserBookmark:E["m"],urlPostUserBackground:E["l"],urlGetUserBookmark:E["e"],urlGetUserBackground:E["d"]},showPopupPassword:!1,showPopupNickname:!1}},computed:{appUserInfo:function(){return this.$store.state.appUserInfo},isConnected:function(){return this.$store.getters.isConnected},isLoggedIn:function(){return this.$store.getters.isLoggedIn}},watch:{isConnected:function(e){e||this.notifyBadConnection()},isLoggedIn:function(e){e||(this.$router.replace("/login"),this.notifyLoginAgain())}},methods:{jumpToPreviousPage:function(){this.$router.back()},togglePopupNickname:function(){this.showPopupNickname=!0},togglePopupPassword:function(){this.showPopupPassword=!0},notifyBadConnection:function(){Object(g["a"])({type:"danger",message:"连接服务器失败"})},notifyLoginAgain:function(){Object(g["a"])({type:"warning",message:"请重新登录"})},notifyRequestFrequencyHigh:function(){Object(g["a"])({type:"warning",message:"请求过于频繁，请稍后重试"})},clearLocalDate:function(){this.$store.dispatch("updateAppJWTString",void 0),this.$store.dispatch("updateAppUserInfo",void 0)},deleteUserAccount:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isDeletingUserAccount){t.next=2;break}return t.abrupt("return");case 2:return e.isDeletingUserAccount=!0,t.next=5,d["a"].confirm({title:"警告",message:"请再次确认是否注销账户"}).then((function(){return!0})).catch((function(){return!1}));case 5:if(n=t.sent,n){t.next=8;break}return t.abrupt("return");case 8:if(e.isConnected){t.next=11;break}return e.notifyBadConnection(),t.abrupt("return");case 11:Object(I["a"])().delete(e.urls.urlDeleteAccount).then((function(){Object(g["a"])({type:"success",message:"注销成功"}),e.clearLocalDate(),e.$router.replace("/")})).catch((function(){e.isConnected&&e.isLoggedIn&&Object(g["a"])({type:"danger",message:"账号注销失败"})})).finally((function(){e.isDeletingUserAccount=!1}));case 12:case"end":return t.stop()}}),t)})))()},requestToLogout:function(){var e=this;this.isLoggingOut||(this.isLoggingOut=!0,this.isConnected?Object(I["a"])().get(this.urls.urlGetUserLogout).then((function(){Object(g["a"])({type:"success",message:"退出登录成功"}),e.clearLocalDate(),e.$router.replace("/")})).catch((function(){e.isConnected&&e.isLoggedIn&&Object(g["a"])({type:"danger",message:"退出登录失败"})})).finally((function(){e.isLoggingOut=!1})):this.notifyBadConnection())},postUserBookmarks:function(){var e=this,t=this.$store.state.appAESSecrets,n=this.$store.state.appUserBookmarks,r=new FormData,o=n.map((function(e){return{title:null===e||void 0===e?void 0:e.title,url:null===e||void 0===e?void 0:e.url,iconName:e.iconName}})),i=Object(A["b"])(t.iv,t.key,o),a=n.map((function(e){return e.iconFile}));return r.append("detail",i),a.forEach((function(e){r.append("icon",e)})),new Promise((function(t,n){return Object(I["d"])().post(e.urls.urlPostUserBookmark,r).then((function(){Object(g["a"])({type:"success",duration:2e3,message:"书签信息上传成功",onClose:function(){return t()}})})).catch((function(r){return e.isConnected?e.isLoggedIn?(console.error(r),void Object(g["a"])({type:"danger",duration:2e3,message:"书签信息上传失败",onClose:function(){return t()}})):n(new Error("user is not logged in")):n(new Error("server disconnected"))}))}))},postUserBackground:function(){var e=this,t=this.$store.state.appAESSecrets,n=this.$store.state.appUserBackground,r=new FormData,o={titleColor:n.bmTitleColor,imageName:n.bgImgName},i=Object(A["b"])(t.iv,t.key,o);return r.append("detail",i),(null===n||void 0===n?void 0:n.bgImgFile)&&r.append("image",n.bgImgFile),new Promise((function(t,n){return Object(I["d"])().post(e.urls.urlPostUserBackground,r).then((function(){Object(g["a"])({type:"success",duration:2e3,message:"背景信息上传成功",onClose:function(){return t()}})})).catch((function(r){return e.isConnected?e.isLoggedIn?(console.error(r),void Object(g["a"])({type:"danger",duration:2e3,message:"背景信息上传失败",onClose:function(){return t()}})):n(new Error("user is not logged in")):n(new Error("server disconnected"))}))}))},downloadUserBookmarks:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r,o,i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],r=[],t.next=4,new Promise((function(t,n){return Object(I["a"])().get(e.urls.urlGetUserBookmark).then((function(e){var n;return t(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.payload)})).catch((function(t){return e.isConnected?e.isLoggedIn?(console.error(t),void Object(g["a"])({type:"danger",duration:2e3,message:"书签信息下载失败",onClose:function(){return n(t)}})):n(new Error("user is not logged in")):n(new Error("server disconnected"))}))}));case 4:o=t.sent,n.push.apply(n,u(o)),i=regeneratorRuntime.mark((function e(){var t,n,o,i,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=s[a],i="".concat(E["a"]).concat(null===o||void 0===o?void 0:o.iconPath),c=null===o||void 0===o||null===(t=o.iconPath)||void 0===t?void 0:t.split("/").pop(),l="image/".concat(null===o||void 0===o||null===(n=o.iconPath)||void 0===n?void 0:n.split(".").pop()),u={title:null===o||void 0===o?void 0:o.title,url:null===o||void 0===o?void 0:o.url,iconName:c,iconSrc:void 0,iconFile:void 0},e.next=7,Object(I["d"])().get(i,{responseType:"blob"}).then((function(e){return new Promise((function(t,n){var r=null===e||void 0===e?void 0:e.data;if(!(null===r||void 0===r?void 0:r.size))return n(new Error("invalid icon file ".concat(c)));var o=new FileReader;o.addEventListener("load",(function(){return u.iconSrc=o.result,u.iconFile=new File([r],c,{type:l}),t()})),o.addEventListener("error",(function(){return n(new Error("failed to convert icon file ".concat(c)))})),o.addEventListener("abort",(function(){return n(new Error("icon file ".concat(c," conversion aborted")))})),o.readAsDataURL(r)})).catch((function(e){console.error(e)})).finally((function(){r.push(u)}))})).catch((function(){console.log("failed to access image from ".concat(i)),r.push(u)}));case 7:case"end":return e.stop()}}),e)})),a=0,s=n;case 8:if(!(a<s.length)){t.next=13;break}return t.delegateYield(i(),"t0",10);case 10:a++,t.next=8;break;case 13:return t.abrupt("return",new Promise((function(t,n){return e.$store.dispatch("saveAppUserBookmarks",r).then((function(){Object(g["a"])({type:"success",duration:2e3,message:"书签信息更新完成",onClose:function(){return t()}})})).catch((function(e){Object(g["a"])({type:"danger",duration:2e3,message:"书签信息更新失败",onClose:function(){return n(e)}})}))})));case 14:case"end":return t.stop()}}),t)})))()},downloadUserBackground:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r,o,i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,n){return Object(I["a"])().get(e.urls.urlGetUserBackground).then((function(e){var n;return t(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.payload)})).catch((function(t){return e.isConnected?e.isLoggedIn?void Object(g["a"])({type:"danger",duration:2e3,message:"背景信息下载失败",onClose:function(){return n(t)}}):n(new Error("user is not logged in")):n(new Error("server disconnected"))}))}));case 2:return n=t.sent,r="".concat(E["a"]).concat(null===n||void 0===n?void 0:n.imagePath),o=null===n||void 0===n?void 0:n.imagePath.split("/").pop(),i="image/".concat(null===n||void 0===n?void 0:n.imagePath.split(".").pop()),t.next=8,new Promise((function(t,n){return Object(I["d"])().get(r,{responseType:"blob"}).then((function(e){var r=null===e||void 0===e?void 0:e.data;if(!(null===r||void 0===r?void 0:r.size))return n(new Error("invalid image file ".concat(o)));var a=new FileReader;a.addEventListener("load",(function(){var e={bgImgDataURL:a.result,bgImgFile:new File([r],o,{type:i})};return t(e)})),a.addEventListener("error",(function(){return n(new Error("failed to convert image file ".concat(o)))})),a.addEventListener("abort",(function(){return n(new Error("image file ".concat(o," conversion aborted")))})),a.readAsDataURL(r)})).catch((function(){return e.isConnected?e.isLoggedIn?(console.log("failed to access image from ".concat(r)),void Object(g["a"])({type:"danger",duration:2e3,message:"背景信息下载失败",onClose:function(){return t({bgImgDataURL:void 0,bgImgFile:void 0})}})):n(new Error("user is not logged in")):n(new Error("server disconnected"))}))})).catch((function(e){console.error(e)}));case 8:return a=t.sent,s={bmTitleColor:null===n||void 0===n?void 0:n.titleColor,bgImgName:o,bgImgFile:null===a||void 0===a?void 0:a.bgImgFile,bgImgDataURL:null===a||void 0===a?void 0:a.bgImgDataURL},t.abrupt("return",new Promise((function(t,n){return e.$store.dispatch("saveAppUserBackground",s).then((function(){Object(g["a"])({type:"success",duration:2e3,message:"背景信息更新完成",onClose:function(){return t()}})})).catch((function(e){Object(g["a"])({type:"danger",duration:2e3,message:"背景信息更新失败",onClose:function(){return n(e)}})}))})));case 11:case"end":return t.stop()}}),t)})))()},uploadUserData:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isUploadingUserData){t.next=3;break}return e.notifyRequestFrequencyHigh(),t.abrupt("return");case 3:return e.isUploadingUserData=!0,t.prev=4,t.next=7,e.postUserBookmarks();case 7:return t.next=9,e.postUserBackground();case 9:return t.prev=9,setTimeout((function(){e.isUploadingUserData=!1}),1e4),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[4,,9,12]])})))()},downloadUserData:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isDownloadingUserData){t.next=3;break}return e.notifyRequestFrequencyHigh(),t.abrupt("return");case 3:return e.isDownloadingUserData=!0,t.prev=4,t.next=7,e.downloadUserBookmarks();case 7:return t.next=9,e.downloadUserBackground();case 9:return t.prev=9,setTimeout((function(){e.isDownloadingUserData=!1}),1e4),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[4,,9,12]])})))()}}},Z=Q,ee=(n("d092"),Object(M["a"])(Z,r,o,!1,null,"29e6b9dd",null));t["default"]=ee.exports},4160:function(e,t,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},4797:function(e,t,n){},"4df4":function(e,t,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),l=n("35a1");e.exports=function(e){var t,n,u,d,f,g,p=o(e),h="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,b=void 0!==v,w=l(p),k=0;if(b&&(v=r(v,m>2?arguments[2]:void 0,2)),void 0==w||h==Array&&a(w))for(t=s(p.length),n=new h(t);t>k;k++)g=b?v(p[k],k):p[k],c(n,k,g);else for(d=w.call(p),f=d.next,n=new h;!(u=f.call(d)).done;k++)g=b?i(d,v,[u.value,k],!0):u.value,c(n,k,g);return n.length=k,n}},5319:function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),i=n("7b0b"),a=n("50c4"),s=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("14c3"),d=Math.max,f=Math.min,g=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,w=v?"$":"$0";return[function(n,r){var o=c(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!v&&b||"string"===typeof r&&-1===r.indexOf(w)){var i=n(t,e,this,r);if(i.done)return i.value}var c=o(e),g=String(this),p="function"===typeof r;p||(r=String(r));var h=c.global;if(h){var y=c.unicode;c.lastIndex=0}var P=[];while(1){var C=u(c,g);if(null===C)break;if(P.push(C),!h)break;var O=String(C[0]);""===O&&(c.lastIndex=l(g,a(c.lastIndex),y))}for(var x="",N=0,B=0;B<P.length;B++){C=P[B];for(var j=String(C[0]),S=d(f(s(C.index),g.length),0),U=[],$=1;$<C.length;$++)U.push(m(C[$]));var E=C.groups;if(p){var A=[j].concat(U,S,g);void 0!==E&&A.push(E);var I=String(r.apply(void 0,A))}else I=k(j,g,S,U,E,r);S>=N&&(x+=g.slice(N,S)+I,N=S+j.length)}return x+g.slice(N)}];function k(e,n,r,o,a,s){var c=r+e.length,l=o.length,u=h;return void 0!==a&&(a=i(a),u=p),t.call(s,u,(function(t,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>l){var d=g(u/10);return 0===d?t:d<=l?void 0===o[d-1]?i.charAt(1):o[d-1]+i.charAt(1):t}s=o[u-1]}return void 0===s?"":s}))}}))},"54d8":function(e,t,n){"use strict";var r=n("4797"),o=n.n(r);o.a},"5c56":function(e,t,n){},"8a0b":function(e,t,n){},"8a58":function(e,t,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75")},"9ab4":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("3452"),o=n.n(r);function i(e){"string"!==typeof e&&(e=JSON.stringify(e));var t=o.a.SHA256(e),n=o.a.enc.Base64.stringify(t);return n}},a630:function(e,t,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:a},{from:o})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a8eb:function(e,t,n){},b0c0:function(e,t,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,a=i.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(e){return""}}})},d092:function(e,t,n){"use strict";var r=n("327e"),o=n.n(r);o.a},d809:function(e,t,n){"use strict";var r=n("a8eb"),o=n.n(r);o.a},db7c:function(e,t,n){e.exports=n.p+"img/default_avatar.db6e1d54.png"},e17f:function(e,t,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("2fcb")},fb6a:function(e,t,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),a=n("23cb"),s=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),f=n("ae40"),g=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),m=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!g||!p},{slice:function(e,t){var n,r,u,d=c(this),f=s(d.length),g=a(e,f),p=a(void 0===t?f:t,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,g,p);for(r=new(void 0===n?Array:n)(v(p-g,0)),u=0;g<p;g++,u++)g in d&&l(r,u,d[g]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-cd2439a0.c565a456.js.map