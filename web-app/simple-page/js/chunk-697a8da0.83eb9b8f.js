(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-697a8da0"],{5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),s=r("7b0b"),o=r("50c4"),i=r("a691"),u=r("1d80"),c=r("8aa5"),l=r("14c3"),d=Math.max,g=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var v=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,P=v?"$":"$0";return[function(r,a){var n=u(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!v&&b||"string"===typeof a&&-1===a.indexOf(P)){var s=r(t,e,this,a);if(s.done)return s.value}var u=n(e),f=String(this),p="function"===typeof a;p||(a=String(a));var m=u.global;if(m){var y=u.unicode;u.lastIndex=0}var F=[];while(1){var $=l(u,f);if(null===$)break;if(F.push($),!m)break;var k=String($[0]);""===k&&(u.lastIndex=c(f,o(u.lastIndex),y))}for(var S="",j=0,R=0;R<F.length;R++){$=F[R];for(var x=String($[0]),E=d(g(i($.index),f.length),0),N=[],T=1;T<$.length;T++)N.push(h($[T]));var V=$.groups;if(p){var A=[x].concat(N,E,f);void 0!==V&&A.push(V);var U=String(a.apply(void 0,A))}else U=w(x,f,E,N,V,a);E>=j&&(S+=f.slice(j,E)+U,j=E+x.length)}return S+f.slice(j)}];function w(e,r,a,n,o,i){var u=a+e.length,c=n.length,l=m;return void 0!==o&&(o=s(o),l=p),t.call(i,l,(function(t,s){var i;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(u);case"<":i=o[s.slice(1,-1)];break;default:var l=+s;if(0===l)return t;if(l>c){var d=f(l/10);return 0===d?t:d<=c?void 0===n[d-1]?s.charAt(1):n[d-1]+s.charAt(1):t}i=n[l-1]}return void 0===i?"":i}))}}))},8379:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"page-login"}},[a("Icon",{attrs:{id:"page-login-btn-back",name:"arrow-left"},on:{click:e.jumpToPreviousPage}}),a("VanImage",{attrs:{id:"page-login-icon",round:"",width:"144px",height:"144px",fit:"cover",src:r("db7c")},on:{click:e.jumpToPageHome}}),a("Form",{ref:"pageLoginForm",attrs:{id:"page-login-form","show-error":!1},on:{submit:function(t){return e.doSubmitFormValues(t,e.urls.getRSAPubKey,e.urls.postLoginVal)}}},[a("Field",{ref:"loginFieldUserName",attrs:{name:"userName",label:"用户名",placeholder:"请输入6至20个字符（字母或数字）",rules:e.rulesUserName},model:{value:e.formValues.userName,callback:function(t){e.$set(e.formValues,"userName",t)},expression:"formValues.userName"}}),a("Field",{ref:"loginFieldPassword",attrs:{type:"password",name:"password",label:"密码",placeholder:"请输入8至20个字符（字母或数字）",rules:e.rulesPassword},model:{value:e.formValues.password,callback:function(t){e.$set(e.formValues,"password",t)},expression:"formValues.password"}}),a("div",{attrs:{id:"page-login-btns"}},[a("Button",{attrs:{id:"page-login-btn-submit",round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 登录 ")]),a("Button",{attrs:{id:"page-login-btn-register",round:"",block:"",type:"default","native-type":"button"},on:{click:e.jumpToPageRegistration}},[e._v(" 没有账号？点我注册 ")])],1)],1)],1)},n=[],s=(r("caad"),r("d3b7"),r("ac1f"),r("2532"),r("5319"),r("96cf"),r("1da1")),o=(r("9a83"),r("f564")),i=(r("4056"),r("44bf")),u=(r("c3a6"),r("ad06")),c=(r("38d5"),r("772a")),l=(r("be7f"),r("565f")),d=(r("66b9"),r("b650")),g=r("9ab4"),f=r("a0d1"),p=r("3853"),m={name:"PageLogin",components:{Button:d["a"],Field:l["a"],Form:c["a"],Icon:u["a"],VanImage:i["a"]},data:function(){return{urls:{getRSAPubKey:p["c"],postLoginVal:p["n"]},routePath:{pathFrom:"",pathTo:""},formValues:{userName:"",password:""},rulesUserName:[{required:!0,message:"请填写用户名"},{message:"",validator:this.checkUserNameFormat}],rulesPassword:[{required:!0,message:"请填写密码"},{message:"",validator:this.checkPasswordFormat}]}},beforeRouteEnter:function(e,t,r){r((function(r){r.routePath={pathFrom:t.path,pathTo:e.path}}))},beforeRouteLeave:function(e,t,r){this.$refs.pageLoginForm.resetValidation(),r()},methods:{checkUserNameFormat:function(e,t){var r=/^[a-z0-9]+$/i,a=!1;return r.test(e)?e.length<6?t.message="字符不应少于6个":e.length>20?t.message="字符不应多于20个":a=!0:t.message="不应包含除字母和数字以外的字符",a},checkPasswordFormat:function(e,t){var r=/^[a-z0-9]+$/i,a=!1;return r.test(e)?e.length<8?t.message="字符不应少于8个":e.length>20?t.message="字符不应多于20个":a=!0:t.message="不应包含除字母和数字以外的字符",a},notifyBadConnection:function(){Object(o["a"])({type:"danger",message:"连接服务器失败"})},getRSAPubKey:function(e){return Object(f["d"])().get(e).then((function(e){return e.data.payload.key})).catch((function(e){return Promise.reject(e)}))},postRSAEncryptedMsg:function(e,t,r){var a=this;return Object(f["c"])(t).post(e,r).then((function(e){return e})).catch((function(e){var t,r,n=null===e||void 0===e||null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message;return(null===n||void 0===n?void 0:n.includes("key: 'RequestUserLogin.userName'"))&&(a.$refs.loginFieldUserName.validateMessage="用户名格式不正确"),(null===n||void 0===n?void 0:n.includes("key: 'RequestUserLogin.password'"))&&(a.$refs.loginFieldPassword.validateMessage="密码格式不正确"),"user does not exist"===n&&(a.$refs.loginFieldUserName.validateMessage="用户名不存在"),"crypto/bcrypt: hashedPassword is not the hash of the given password"===n&&(a.$refs.loginFieldPassword.validateMessage="密码不正确"),Promise.reject(e)}))},submitFormValues:function(e,t,r){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.getRSAPubKey(t);case 2:return s=n.sent,e.password=Object(g["a"])(e.password),n.next=6,a.postRSAEncryptedMsg(r,s,e);case 6:return o=n.sent,n.abrupt("return",o);case 8:case"end":return n.stop()}}),n)})))()},doSubmitFormValues:function(e,t,r){var a=this;if(this.$store.getters.isConnected)return this.submitFormValues(e,t,r).then((function(e){a.$store.dispatch("updateAppJWTString",e.headers.authorization),Object(o["a"])({type:"success",message:"登录成功"}),a.$router.replace(a.routePath.pathFrom)})).catch((function(){a.$store.getters.isConnected?Object(o["a"])({type:"danger",message:"登录失败"}):a.notifyBadConnection()}));this.notifyBadConnection()},jumpToPreviousPage:function(){this.$router.back()},jumpToPageHome:function(){this.$router.push("/")},jumpToPageRegistration:function(){this.$router.replace("/registration")},jumpToPageFrom:function(){this.routePath.pathFrom!==this.routePath.pathTo?this.$router.replace(this.routePath.pathFrom):this.jumpToPageHome()}}},h=m,v=(r("d940"),r("2877")),b=Object(v["a"])(h,a,n,!1,null,"ff57960c",null);t["default"]=b.exports},"9ab4":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r("3452"),n=r.n(a);function s(e){"string"!==typeof e&&(e=JSON.stringify(e));var t=n.a.SHA256(e),r=n.a.enc.Base64.stringify(t);return r}},"9d85":function(e,t,r){},d940:function(e,t,r){"use strict";var a=r("9d85"),n=r.n(a);n.a},db7c:function(e,t,r){e.exports=r.p+"img/default_avatar.db6e1d54.png"}}]);
//# sourceMappingURL=chunk-697a8da0.83eb9b8f.js.map