(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{2252:function(t,e,i){"use strict";i.r(e);var a=i(2),s=i(8),l=i(61),n=i(69),r=i(51),c=i(90),o=Object(a.c)({setup(){var t=Object(a.v)(),e=Object(a.w)(),{localePath:i}=Object(a.t)(),o=Object(n.d)({query:r.A,variables:{code:t.value.params.id}});Object(a.x)((()=>o.data),(()=>{var t;if(!o.loading){var a=o.data;if(s.isRight(a)){var n=JSON.parse(null===(t=a.right.shortcode)||void 0===t?void 0:t.request);Object(c.w)(Object(l.safelyExtractRESTRequest)(n,Object(c.b)())),e.push({path:i("/")})}}}));return{E:s,shortcodeDetails:o,reloadApplication:()=>{window.location.reload()}}},data:()=>({invalidLink:!1,shortcodeID:""}),mounted(){"string"==typeof this.$route.params.id&&(this.shortcodeID=this.$route.params.id),this.invalidLink=!this.shortcodeID}}),d=i(15),v=Object(d.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-col items-center justify-between"},[t.invalidLink?i("div",{staticClass:"flex flex-col items-center justify-center flex-1"},[i("i",{staticClass:"pb-2 opacity-75 material-icons"},[t._v("error_outline")]),t._v(" "),i("h1",{staticClass:"text-center heading"},[t._v("\n      "+t._s(t.$t("error.invalid_link"))+"\n    ")]),t._v(" "),i("p",{staticClass:"mt-2 text-center"},[t._v("\n      "+t._s(t.$t("error.invalid_link_description"))+"\n    ")])]):i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[t.shortcodeDetails.loading?i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[i("SmartSpinner")],1):i("div",[!t.shortcodeDetails.loading&&t.E.isLeft(t.shortcodeDetails.data)?i("div",{staticClass:"flex flex-col items-center p-4"},[i("i",{staticClass:"pb-2 opacity-75 material-icons"},[t._v("error_outline")]),t._v(" "),i("h1",{staticClass:"text-center heading"},[t._v("\n          "+t._s(t.$t("error.invalid_link"))+"\n        ")]),t._v(" "),i("p",{staticClass:"mt-2 text-center"},[t._v("\n          "+t._s(t.$t("error.invalid_link_description"))+"\n        ")]),t._v(" "),i("p",{staticClass:"mt-4"},[i("ButtonSecondary",{attrs:{to:"/",svg:"home",filled:"",label:t.$t("app.home")}}),t._v(" "),i("ButtonSecondary",{attrs:{svg:"refresh-cw",label:t.$t("app.reload"),filled:""},nativeOn:{click:function(e){return t.reloadApplication.apply(null,arguments)}}})],1)]):t._e(),t._v(" "),!t.shortcodeDetails.loading&&t.E.isRight(t.shortcodeDetails.data)?i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[i("h1",{staticClass:"heading"},[t._v("\n          "+t._s(t.$t("state.loading"))+"\n        ")])]):t._e()])])])}),[],!1,null,null,null);e.default=v.exports;installComponents(v,{SmartSpinner:i(143).default,ButtonSecondary:i(85).default})}}]);