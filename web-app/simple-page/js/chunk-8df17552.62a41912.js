(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8df17552"],{8379:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page-login"}},[r("Icon",{attrs:{id:"page-login-btn-back",name:"arrow-left"},on:{click:e.jumpToPreviousPage}}),r("VanImage",{attrs:{id:"page-login-icon",round:"",width:"144px",height:"144px",fit:"cover",src:a("db7c")},on:{click:e.jumpToPageHome}}),r("Form",{ref:"pageLoginForm",attrs:{id:"page-login-form","show-error":!1},on:{submit:function(t){return e.doSubmitFormValues(t,e.urls.getRSAPubKey,e.urls.postLoginVal)}}},[r("Field",{ref:"loginFieldUserName",attrs:{name:"userName",label:"用户名",placeholder:"请输入6至20个字符（字母或数字）",rules:e.rulesUserName},model:{value:e.formValues.userName,callback:function(t){e.$set(e.formValues,"userName",t)},expression:"formValues.userName"}}),r("Field",{ref:"loginFieldPassword",attrs:{type:"password",name:"password",label:"密码",placeholder:"请输入8至20个字符（字母或数字）",rules:e.rulesPassword},model:{value:e.formValues.password,callback:function(t){e.$set(e.formValues,"password",t)},expression:"formValues.password"}}),r("div",{attrs:{id:"page-login-btns"}},[r("Button",{attrs:{id:"page-login-btn-submit",round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 登录 ")]),r("Button",{attrs:{id:"page-login-btn-register",round:"",block:"",type:"default","native-type":"button"},on:{click:e.jumpToPageRegistration}},[e._v(" 没有账号？点我注册 ")])],1)],1)],1)},s=[],o=(a("caad"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),a("96cf"),a("1da1")),n=(a("9a83"),a("f564")),i=(a("4056"),a("44bf")),u=(a("c3a6"),a("ad06")),c=(a("38d5"),a("772a")),d=(a("be7f"),a("565f")),l=(a("66b9"),a("b650")),m=a("9ab4"),g=a("a0d1"),p=a("3853"),f={name:"PageLogin",components:{Button:l["a"],Field:d["a"],Form:c["a"],Icon:u["a"],VanImage:i["a"]},data:function(){return{urls:{getRSAPubKey:p["c"],postLoginVal:p["n"]},routePath:{pathFrom:"",pathTo:""},formValues:{userName:"",password:""},rulesUserName:[{required:!0,message:"请填写用户名"},{message:"",validator:this.checkUserNameFormat}],rulesPassword:[{required:!0,message:"请填写密码"},{message:"",validator:this.checkPasswordFormat}]}},beforeRouteEnter:function(e,t,a){a((function(a){a.routePath={pathFrom:t.path,pathTo:e.path}}))},beforeRouteLeave:function(e,t,a){this.$refs.pageLoginForm.resetValidation(),a()},methods:{checkUserNameFormat:function(e,t){var a=/^[a-z0-9]+$/i,r=!1;return a.test(e)?e.length<6?t.message="字符不应少于6个":e.length>20?t.message="字符不应多于20个":r=!0:t.message="不应包含除字母和数字以外的字符",r},checkPasswordFormat:function(e,t){var a=/^[a-z0-9]+$/i,r=!1;return a.test(e)?e.length<8?t.message="字符不应少于8个":e.length>20?t.message="字符不应多于20个":r=!0:t.message="不应包含除字母和数字以外的字符",r},notifyBadConnection:function(){Object(n["a"])({type:"danger",message:"连接服务器失败"})},getRSAPubKey:function(e){return Object(g["d"])().get(e).then((function(e){return e.data.payload.key})).catch((function(e){return Promise.reject(e)}))},postRSAEncryptedMsg:function(e,t,a){var r=this;return Object(g["c"])(t).post(e,a).then((function(e){return e})).catch((function(e){var t,a,s=null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message;return(null===s||void 0===s?void 0:s.includes("key: 'RequestUserLogin.userName'"))&&(r.$refs.loginFieldUserName.validateMessage="用户名格式不正确"),(null===s||void 0===s?void 0:s.includes("key: 'RequestUserLogin.password'"))&&(r.$refs.loginFieldPassword.validateMessage="密码格式不正确"),"user does not exist"===s&&(r.$refs.loginFieldUserName.validateMessage="用户名不存在"),"crypto/bcrypt: hashedPassword is not the hash of the given password"===s&&(r.$refs.loginFieldPassword.validateMessage="密码不正确"),Promise.reject(e)}))},submitFormValues:function(e,t,a){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var o,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,r.getRSAPubKey(t);case 2:return o=s.sent,e.password=Object(m["a"])(e.password),s.next=6,r.postRSAEncryptedMsg(a,o,e);case 6:return n=s.sent,s.abrupt("return",n);case 8:case"end":return s.stop()}}),s)})))()},doSubmitFormValues:function(e,t,a){var r=this;if(this.$store.getters.isConnected)return this.submitFormValues(e,t,a).then((function(e){r.$store.dispatch("updateAppJWTString",e.headers.authorization),Object(n["a"])({type:"success",message:"登录成功"}),r.$router.replace(r.routePath.pathFrom)})).catch((function(){r.$store.getters.isConnected?Object(n["a"])({type:"danger",message:"登录失败"}):r.notifyBadConnection()}));this.notifyBadConnection()},jumpToPreviousPage:function(){this.$router.back()},jumpToPageHome:function(){this.$router.push("/")},jumpToPageRegistration:function(){this.$router.replace("/registration")},jumpToPageFrom:function(){this.routePath.pathFrom!==this.routePath.pathTo?this.$router.replace(this.routePath.pathFrom):this.jumpToPageHome()}}},h=f,b=(a("d940"),a("2877")),v=Object(b["a"])(h,r,s,!1,null,"ff57960c",null);t["default"]=v.exports},"9ab4":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("3452"),s=a.n(r);function o(e){"string"!==typeof e&&(e=JSON.stringify(e));var t=s.a.SHA256(e),a=s.a.enc.Base64.stringify(t);return a}},"9d85":function(e,t,a){},d940:function(e,t,a){"use strict";var r=a("9d85"),s=a.n(r);s.a},db7c:function(e,t,a){e.exports=a.p+"img/default_avatar.db6e1d54.png"}}]);
//# sourceMappingURL=chunk-8df17552.62a41912.js.map