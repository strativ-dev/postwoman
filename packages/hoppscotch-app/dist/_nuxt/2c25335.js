(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{2357:function(t,e,n){"use strict";n.r(e);var r=n(20),i=(n(5),n(61),n(2)),o=n(23),c=n(78),a=n(25),s=Object(i.c)({props:{show:Boolean},setup:function(){return{subscribeToStream:Object(a.i)().subscribeToStream}},data:function(){return{form:{email:""},signingInWithGoogle:!1,signingInWithGitHub:!1,signingInWithMicrosoft:!1,signingInWithEmail:!1,mode:"sign-in"}},mounted:function(){var t=this;this.subscribeToStream(o.c,(function(e){e&&t.hideModal()}))},methods:{showLoginSuccess:function(){this.$toast.success("".concat(this.$t("auth.login_success")))},signInWithGoogle:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.signingInWithGoogle=!0,e.prev=1,e.next=4,Object(o.o)();case 4:t.showLoginSuccess(),t.$router.push("/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),"auth/account-exists-with-different-credential"===e.t0.code?(n=e.t0.credential,t.$toast.info("".concat(t.$t("auth.account_exists")),{duration:0,closeOnSwipe:!1,action:{text:"".concat(t.$t("action.yes")),onClick:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(r,i){var c,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.n)();case 2:return c=e.sent,a=c.user,e.next=7,Object(o.h)(a,n);case 7:t.showLoginSuccess(),i.goAway(0);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})):t.$toast.error("".concat(t.$t("error.something_went_wrong")));case 12:t.signingInWithGoogle=!1;case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))()},signInWithGithub:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i,c,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.signingInWithGitHub=!0,e.prev=1,e.next=4,Object(o.n)();case 4:n=e.sent,i=Object(o.e)(n),c=i.accessToken,Object(o.m)(n.providerId,c),t.showLoginSuccess(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),"auth/account-exists-with-different-credential"===e.t0.code?(a=e.t0.credential,t.$toast.info("".concat(t.$t("auth.account_exists")),{duration:0,closeOnSwipe:!1,action:{text:"".concat(t.$t("action.yes")),onClick:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.o)();case 2:return i=e.sent,c=i.user,e.next=6,Object(o.h)(c,a);case 6:t.showLoginSuccess(),r.goAway(0);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})):t.$toast.error("".concat(t.$t("error.something_went_wrong")));case 15:t.signingInWithGitHub=!1;case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))()},signInWithMicrosoft:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.signingInWithMicrosoft=!0,e.prev=1,e.next=4,Object(o.p)();case 4:t.showLoginSuccess(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),"auth/account-exists-with-different-credential"===e.t0.code?(n=e.t0.credential,t.$toast.info("".concat(t.$t("auth.account_exists")),{duration:0,closeOnSwipe:!1,action:{text:"".concat(t.$t("action.yes")),onClick:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(r,i){var c,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.n)();case 2:return c=e.sent,a=c.user,e.next=6,Object(o.h)(a,n);case 6:t.showLoginSuccess(),i.goAway(0);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})):t.$toast.error("".concat(t.$t("error.something_went_wrong")));case 11:t.signingInWithMicrosoft=!1;case 12:case"end":return e.stop()}}),e,null,[[1,7]])})))()},signInWithEmail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.signingInWithEmail=!0,n={url:"".concat("https://hoppscotch.io","/enter"),handleCodeInApp:!0},e.next=4,Object(o.q)(t.form.email,n).then((function(){t.mode="email-sent",Object(c.c)("emailForSignIn",t.form.email)})).catch((function(e){console.error(e),t.$toast.error(e.message),t.signingInWithEmail=!1})).finally((function(){t.signingInWithEmail=!1}));case 4:case"end":return e.stop()}}),e)})))()},hideModal:function(){this.mode="sign-in",this.$toast.clear(),this.$emit("hide-modal")}}}),u=s,h=n(22),g=Object(h.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"sign-in"===t.mode?n("div",{staticClass:"flex flex-col px-2 space-y-2"},[n("SmartItem",{attrs:{loading:t.signingInWithGoogle,svg:"auth/google",label:""+t.$t("auth.continue_with_google")},nativeOn:{click:function(e){return t.signInWithGoogle.apply(null,arguments)}}})],1):t._e()}),[],!1,null,null,null);e.default=g.exports;installComponents(g,{SmartItem:n(128).default})}}]);