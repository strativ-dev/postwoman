(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1834:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));o(35),o(41),o(831),o(198),o(62),o(109);var n=o(2),s=o(18);function a(e,t){var o=Object(n.n)("download"),a=Object(s.j)(),d=Object(s.d)();return{downloadIcon:o,downloadResponse:()=>{var n=t.value,s=new Blob([n],{type:e}),l=document.createElement("a"),c=URL.createObjectURL(s);l.href=c,l.download="".concat(c.split("/").pop().split("#")[0].split("?")[0]),document.body.appendChild(l),l.click(),o.value="check",a.success("".concat(d("state.download_started"))),setTimeout((()=>{document.body.removeChild(l),URL.revokeObjectURL(c),o.value="download"}),1e3)}}}},2259:function(e,t,o){"use strict";o.r(t);o(35),o(41),o(831),o(198),o(9);var n=o(2),s=o(2211),a=o.n(s),d=o(1834),l={};l.props={response:{key:"response",required:!0,type:Object}},l.setup=(e,t)=>{var o=e,s=Object(n.a)((()=>URL.createObjectURL(new Blob([o.response.body],{type:"application/pdf"})))),{downloadIcon:a,downloadResponse:l}=Object(d.a)("application/pdf",Object(n.a)((()=>o.response.body)));return{pdfsrc:s,downloadIcon:a,downloadResponse:l}},l.components=Object.assign({VuePdfEmbed:a.a},l.components);var c=l,r=o(15),i=Object(r.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col flex-1"},[o("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},[o("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.$t("response.body"))+"\n    ")]),e._v(" "),o("div",{staticClass:"flex"},[e.response.body?o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"downloadResponse",attrs:{title:e.$t("action.download_file"),svg:e.downloadIcon},nativeOn:{click:function(t){return e.downloadResponse.apply(null,arguments)}}}):e._e()],1)]),e._v(" "),o("vue-pdf-embed",{staticClass:"flex flex-1 overflow-auto border-b hide-scrollbar border-dividerLight",attrs:{source:e.pdfsrc,type:"application/pdf"}})],1)}),[],!1,null,null,null);t.default=i.exports;installComponents(i,{ButtonSecondary:o(85).default})}}]);