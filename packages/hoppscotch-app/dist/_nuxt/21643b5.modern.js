(window.webpackJsonp=window.webpackJsonp||[]).push([[100,25,97],{1156:function(e,t,r){"use strict";r.r(t);r(9);var n=r(155),o=(r(253),r(70)),s=r(17),a={setup:(e,t)=>({SIDEBAR_ON_LEFT:Object(s.j)("SIDEBAR_ON_LEFT"),mdAndLarger:Object(o.useBreakpoints)(o.breakpointsTailwind).greater("md"),COLUMN_LAYOUT:Object(s.j)("COLUMN_LAYOUT"),SIDEBAR:Object(s.j)("SIDEBAR")})};a.components=Object.assign({Splitpanes:n.b,Pane:n.a},a.components);var i=a,l=r(15),c=Object(l.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Splitpanes",{staticClass:"smart-splitter",class:{"!flex-row-reverse":e.SIDEBAR_ON_LEFT&&e.mdAndLarger},attrs:{rtl:e.SIDEBAR_ON_LEFT&&e.mdAndLarger,horizontal:!e.mdAndLarger}},[r("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:"75","min-size":"65"}},[r("Splitpanes",{staticClass:"smart-splitter",attrs:{horizontal:e.COLUMN_LAYOUT}},[r("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:e.COLUMN_LAYOUT?45:50}},[e._t("primary")],2),e._v(" "),r("Pane",{staticClass:"flex flex-col hide-scrollbar !overflow-auto",attrs:{size:e.COLUMN_LAYOUT?65:50}},[e._t("secondary")],2)],1)],1),e._v(" "),e.SIDEBAR?r("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:"25","min-size":"20"}},[e._t("sidebar")],2):e._e()],1)}),[],!1,null,null,null);t.default=c.exports},1690:function(e,t,r){var n=r(1805);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(108).default)("93b9735e",n,!0,{sourceMap:!1})},1770:function(e,t,r){"use strict";r.r(t);var n=r(2),o={info:"\tℹ️ [INFO]:\t",client:"\t⬅️ [SENT]:\t",server:"\t➡️ [RECEIVED]:\t"};function s(e){return o[e]}var a=r(18),i={};i.props={log:{type:Array,default:()=>[]},title:{type:String,default:""}},i.setup=(e,t)=>{var r=Object(a.d)(),o=e,i=Object(n.n)(null);return Object(n.x)((()=>o.log),(()=>{i.value&&(i.value.scrollHeight-i.value.scrollTop-i.value.clientHeight<5&&Object(n.f)((()=>i.value.scrollTop=i.value.scrollHeight)))})),{source:s,t:r,logsRef:i}};var l=i,c=(r(1804),r(15)),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col flex-1"},[r("div",{staticClass:"sticky top-0 z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight"},[r("label",{staticClass:"py-2 font-semibold text-secondaryLight",attrs:{for:"log"}},[e._v("\n      "+e._s(e.title)+"\n    ")])]),e._v(" "),r("div",{ref:"logsRef",staticClass:"realtime-log",attrs:{name:"log"}},[e.log?r("span",{staticClass:"space-y-2"},e._l(e.log,(function(t,n){return r("span",{key:"entry-"+n,staticClass:"font-mono",style:{color:t.color}},[e._v(e._s(t.ts)+e._s(e.source(t.source))+e._s(t.payload))])})),0):r("span",[e._v(e._s(e.t("response.waiting_for_connection")))])])])}),[],!1,null,"cffadd62",null);t.default=u.exports},1803:function(e,t,r){var n=r(147),o=r(1876),s=r(1877),a=Math.max,i=Math.min;e.exports=function(e,t,r){var l,c,u,d,f,p,v=0,h=!1,g=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=l,n=c;return l=c=void 0,v=t,d=e.apply(n,r)}function b(e){return v=e,f=setTimeout(x,t),h?y(e):d}function S(e){var r=e-p;return void 0===p||r>=t||r<0||g&&e-v>=u}function x(){var e=o();if(S(e))return _(e);f=setTimeout(x,function(e){var r=t-(e-p);return g?i(r,u-(e-v)):r}(e))}function _(e){return f=void 0,m&&l?y(e):(l=c=void 0,d)}function w(){var e=o(),r=S(e);if(l=arguments,c=this,p=e,r){if(void 0===f)return b(p);if(g)return clearTimeout(f),f=setTimeout(x,t),y(p)}return void 0===f&&(f=setTimeout(x,t)),d}return t=s(t)||0,n(r)&&(h=!!r.leading,u=(g="maxWait"in r)?a(s(r.maxWait)||0,t):u,m="trailing"in r?!!r.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),v=0,l=p=c=f=void 0},w.flush=function(){return void 0===f?d:_(o())},w}},1804:function(e,t,r){"use strict";r(1690)},1805:function(e,t,r){var n=r(107)(!1);n.push([e.i,".realtime-log[data-v-cffadd62] {\n  padding: 1rem;\n  background-color: transparent;\n  color: var(--secondary-color);\n  overflow: auto;\n  height: 256px;\n}\n.realtime-log[data-v-cffadd62], .realtime-log span[data-v-cffadd62] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.realtime-log span[data-v-cffadd62] {\n  display: block;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}",""]),e.exports=n},1876:function(e,t,r){var n=r(98);e.exports=function(){return n.Date.now()}},1877:function(e,t,r){var n=r(1878),o=r(147),s=r(258),a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=i.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):a.test(e)?NaN:+e}},1878:function(e,t,r){var n=r(1879),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},1879:function(e,t){var r=/\s/;e.exports=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},2159:function(e,t,r){"use strict";r.r(t);var n=r(2),o=(r(253),r(1803)),s=r.n(o),a=r(122),i=r(292),l=r(18),c=Object(n.c)({setup:()=>({connectionSSEState:Object(l.h)(i.b,!1,i.j),connectingState:Object(l.h)(i.a,!1,i.i),server:Object(l.h)(i.c,"",i.k),eventType:Object(l.h)(i.d,"",i.l),sse:Object(l.h)(i.g,null,i.o),log:Object(l.h)(i.e,[],i.m)}),data:()=>({isUrlValid:!0}),computed:{serverValid(){return this.isUrlValid}},watch:{server(){this.debouncer()}},created(){this.worker=this.$worker.createRejexWorker(),this.worker.addEventListener("message",this.workerResponseHandler)},destroyed(){this.worker.terminate()},methods:{debouncer:s()((function(){this.worker.postMessage({type:"sse",url:this.server})}),1e3),workerResponseHandler(e){var{data:t}=e;t.url===this.url&&(this.isUrlValid=t.result)},toggleSSEConnection(){return this.connectionSSEState?this.stop():this.start()},start(){if(this.connectingState=!0,this.log=[{payload:this.$t("state.connecting_to",{name:this.server}),source:"info",color:"var(--accent-color)"}],"undefined"!=typeof EventSource)try{this.sse=new EventSource(this.server),this.sse.onopen=()=>{this.connectingState=!1,this.connectionSSEState=!0,this.log=[{payload:this.$t("state.connected_to",{name:this.server}),source:"info",color:"var(--accent-color)",ts:(new Date).toLocaleTimeString()}],this.$toast.success(this.$t("state.connected"))},this.sse.onerror=()=>{this.handleSSEError()},this.sse.onclose=()=>{this.connectionSSEState=!1,Object(i.h)({payload:this.$t("state.disconnected_from",{name:this.server}),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),this.$toast.error(this.$t("state.disconnected"))},this.sse.addEventListener(this.eventType,(e=>{var{data:t}=e;Object(i.h)({payload:t,source:"server",ts:(new Date).toLocaleTimeString()})}))}catch(e){this.handleSSEError(e),this.$toast.error(this.$t("error.something_went_wrong"))}else this.log=[{payload:this.$t("error.browser_support_sse"),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}];Object(a.b)({platform:"sse"})},handleSSEError(e){this.stop(),this.connectionSSEState=!1,Object(i.h)({payload:this.$t("error.something_went_wrong"),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),null!==e&&Object(i.h)({payload:e,source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()})},stop(){this.sse.close(),this.sse.onclose()}}}),u=r(15),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AppPaneLayout",{scopedSlots:e._u([{key:"primary",fn:function(){return[r("div",{staticClass:"sticky top-0 z-10 flex flex-shrink-0 p-4 overflow-x-auto space-x-2 bg-primary hide-scrollbar"},[r("div",{staticClass:"inline-flex flex-1 space-x-2"},[r("div",{staticClass:"flex flex-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.server,expression:"server"}],staticClass:"flex flex-1 w-full px-4 py-2 border rounded-l bg-primaryLight border-divider text-secondaryDark",class:{error:!e.serverValid},attrs:{id:"server",type:"url",autocomplete:"off",placeholder:e.$t("sse.url"),disabled:e.connectionSSEState},domProps:{value:e.server},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.serverValid&&e.toggleSSEConnection()},input:function(t){t.target.composing||(e.server=t.target.value)}}}),e._v(" "),r("label",{staticClass:"px-4 py-2 font-semibold truncate border-t border-b bg-primaryLight border-divider text-secondaryLight",attrs:{for:"event-type"}},[e._v("\n            "+e._s(e.$t("sse.event_type"))+"\n          ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.eventType,expression:"eventType"}],staticClass:"flex flex-1 w-full px-4 py-2 border rounded-r bg-primaryLight border-divider text-secondaryDark",attrs:{id:"event-type",spellcheck:"false",disabled:e.connectionSSEState},domProps:{value:e.eventType},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.serverValid&&e.toggleSSEConnection()},input:function(t){t.target.composing||(e.eventType=t.target.value)}}})]),e._v(" "),r("ButtonPrimary",{staticClass:"w-32",attrs:{id:"start",disabled:!e.serverValid,name:"start",label:e.connectionSSEState?e.$t("action.stop"):e.$t("action.start"),loading:e.connectingState},nativeOn:{click:function(t){return e.toggleSSEConnection.apply(null,arguments)}}})],1)])]},proxy:!0},{key:"secondary",fn:function(){return[r("RealtimeLog",{attrs:{title:e.$t("sse.log"),log:e.log}})]},proxy:!0}])})}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{ButtonPrimary:r(170).default,RealtimeLog:r(1770).default,AppPaneLayout:r(1156).default})}}]);