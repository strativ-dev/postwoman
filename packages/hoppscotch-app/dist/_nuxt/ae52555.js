(window.webpackJsonp=window.webpackJsonp||[]).push([[55,7,107],{1071:function(e,t,r){"use strict";var o=r(26),n=r(29),a=r(45),l=r(40),i=r(106),c=r(65),d=r(312),s=r(83),u=r(162),v=r(313),m=r(521),p=r(64),f=r(122),b=p("replace"),g=RegExp.prototype,h=n.TypeError,y=l(v),k=l("".indexOf),x=l("".replace),O=l("".slice),j=Math.max,w=function(e,t,r){return r>e.length?-1:""===t?r:k(e,t,r)};o({target:"String",proto:!0},{replaceAll:function(e,t){var r,o,n,l,v,p,C,E,_,S=i(this),$=0,I=0,B="";if(null!=e){if((r=d(e))&&(o=s(i("flags"in g?e.flags:y(e))),!~k(o,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(n=u(e,b))return a(n,e,S,t);if(f&&r)return x(s(S),e,t)}for(l=s(S),v=s(e),(p=c(t))||(t=s(t)),C=v.length,E=j(1,C),$=w(l,v,0);-1!==$;)_=p?s(t(v,$,l)):m(v,l,$,[],void 0,t),B+=O(l,I,$)+_,I=$+C,$=w(l,v,$+E);return I<l.length&&(B+=O(l,I)),B}})},1934:function(e,t,r){"use strict";r.r(t);r(92),r(5),r(98),r(77),r(57),r(10),r(95),r(99),r(70),r(12),r(11),r(15),r(8),r(14);var o=r(42),n=r(43),a=(r(512),r(58),r(54),r(13),r(120),r(163),r(243)),l=r.n(a),i=r(2),c=r(16),d=r(73),s=r(104),u=r(25);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var b=Object(i.c)({props:{show:Boolean,action:{type:String,default:"edit"},editingEnvironmentIndex:{type:[Number,String],default:null},envVars:{type:Function,default:function(){return[]}}},setup:function(e){return{globalVars:Object(u.g)(s.m,[]),workingEnv:Object(i.a)((function(){return"Global"===e.editingEnvironmentIndex?{name:"Global",variables:Object(s.l)()}:"new"===e.action?{name:"",variables:e.envVars()}:null!==e.editingEnvironmentIndex?Object(s.k)(e.editingEnvironmentIndex):null})),envList:Object(u.g)(s.g,[])||e.envVars()}},data:function(){return{name:null,vars:[],clearIcon:"trash-2"}},computed:{evnExpandError:function(){var e,t=p(this.vars);try{for(t.s();!(e=t.n()).done;){var r=e.value,o=Object(d.parseTemplateStringE)(r.value,this.vars);if(c.isLeft(o))return console.error("error",o.left),!0}}catch(e){t.e(e)}finally{t.f()}return!1},liveEnvs:function(){var e=this;return this.evnExpandError?[]:"Global"===this.$props.editingEnvironmentIndex?Object(n.a)(this.vars.map((function(t){return m(m({},t),{},{source:e.name})}))):[].concat(Object(n.a)(this.vars.map((function(t){return m(m({},t),{},{source:e.name})}))),Object(n.a)(this.globalVars.map((function(e){return m(m({},e),{},{source:"Global"})}))))}},watch:{show:function(){var e,t,r,o;this.name=null!==(t=null===(e=this.workingEnv)||void 0===e?void 0:e.name)&&void 0!==t?t:null,this.vars=l()(null!==(o=null===(r=this.workingEnv)||void 0===r?void 0:r.variables)&&void 0!==o?o:[])}},methods:{clearContent:function(){var e=this;this.vars=[],this.clearIcon="check",this.$toast.success("".concat(this.$t("state.cleared"))),setTimeout((function(){return e.clearIcon="trash-2"}),1e3)},addEnvironmentVariable:function(){this.vars.push({key:"",value:""})},removeEnvironmentVariable:function(e){this.vars.splice(e,1)},saveEnvironment:function(){if(this.name){"new"===this.action&&(Object(s.d)(this.name),Object(s.p)(this.envList.length-1));var e={name:this.name,variables:this.vars};"Global"===this.editingEnvironmentIndex?Object(s.r)(e.variables):"new"===this.action?Object(s.s)(this.envList.length-1,e):Object(s.s)(this.editingEnvironmentIndex,e),this.hideModal()}else this.$toast.error("".concat(this.$t("environment.invalid_name")))},hideModal:function(){this.name=null,this.$emit("hide-modal")}}}),g=r(22),h=Object(g.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("SmartModal",{attrs:{title:e.$t("environment."+e.action)},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[r("div",{staticClass:"flex flex-col px-2"},[r("div",{staticClass:"relative flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelEnvEdit",placeholder:" ",type:"text",autocomplete:"off",disabled:"Global"===e.editingEnvironmentIndex},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveEnvironment.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"selectLabelEnvEdit"}},[e._v("\n          "+e._s(e.$t("action.label"))+"\n        ")])]),e._v(" "),r("div",{staticClass:"flex items-center justify-between flex-1"},[r("label",{staticClass:"p-4",attrs:{for:"variableList"}},[e._v("\n          "+e._s(e.$t("environment.variable_list"))+"\n        ")]),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.clear_all"),svg:e.clearIcon},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{svg:"plus",title:e.$t("add.new")},nativeOn:{click:function(t){return e.addEnvironmentVariable.apply(null,arguments)}}})],1)]),e._v(" "),e.evnExpandError?r("div",{staticClass:"w-full px-4 py-2 mb-2 overflow-auto font-mono text-red-400 whitespace-normal rounded bg-primaryLight"},[e._v("\n        "+e._s(e.$t("environment.nested_overflow"))+"\n      ")]):e._e(),e._v(" "),r("div",{staticClass:"border rounded divide-y divide-dividerLight border-divider"},[e._l(e.vars,(function(t,o){return r("div",{key:"variable-"+o,staticClass:"flex divide-x divide-dividerLight"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"variable.key"}],staticClass:"flex flex-1 px-4 py-2 bg-transparent",attrs:{placeholder:""+e.$t("count.variable",{count:o+1}),name:"param"+o},domProps:{value:t.key},on:{input:function(r){r.target.composing||e.$set(t,"key",r.target.value)}}}),e._v(" "),r("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.value",{count:o+1}),envs:e.liveEnvs,name:"value"+o},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"variable.value"}}),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{id:"variable",title:e.$t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.removeEnvironmentVariable(o)}}})],1)],1)})),e._v(" "),0===e.vars.length?r("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[r("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/blockchain.svg",loading:"lazy",alt:""+e.$t("empty.environments")}}),e._v(" "),r("span",{staticClass:"pb-4 text-center"},[e._v("\n            "+e._s(e.$t("empty.environments"))+"\n          ")]),e._v(" "),r("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.$t("add.new"),filled:""},nativeOn:{click:function(t){return e.addEnvironmentVariable.apply(null,arguments)}}})],1):e._e()],2)])]},proxy:!0},{key:"footer",fn:function(){return[r("span",[r("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.saveEnvironment.apply(null,arguments)}}}),e._v(" "),r("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,2408841258)}):e._e()}),[],!1,null,null,null);t.default=h.exports;installComponents(h,{ButtonSecondary:r(105).default,SmartEnvInput:r(983).default,ButtonPrimary:r(203).default,SmartModal:r(130).default})},925:function(e,t,r){"use strict";r.d(t,"b",(function(){return y})),r.d(t,"d",(function(){return k})),r.d(t,"a",(function(){return j})),r.d(t,"c",(function(){return w}));var o=r(43),n=(r(54),r(1085),r(13),r(898)),a=r(951),l=r(1087),i=r(894),c=r(1086),d=r(913),s=r(1077),u=r(981),v=r(1084),m=r(1088),p=r(1090),f=r(954),b=r(1091),g=r(1089),h=r(982),y=n.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground, .cm-content ::selection, .cm-line ::selection":{backgroundColor:"var(--accent-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k=n.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground, .cm-content ::selection, .cm-line ::selection":{backgroundColor:"var(--accent-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),x="var(--editor-name-color)",O="var(--editor-constant-color)",j=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:x},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:O},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:x},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:O},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),w=[Object(s.d)(),Object(s.c)(),Object(n.j)(),Object(c.a)(),Object(l.a)({openText:"▾",closedText:"▸"}),i.g.allowMultipleSelections.of(!0),Object(d.p)(),a.b.fallback,Object(v.a)(),Object(m.a)(),Object(f.a)(),Object(g.a)(),Object(n.i)(),Object(p.a)(),Object(p.b)(),n.k.of([].concat(Object(o.a)(m.b),Object(o.a)(u.a),Object(o.a)(p.c),Object(o.a)(c.b),Object(o.a)(l.b),Object(o.a)(b.a),Object(o.a)(f.c),Object(o.a)(h.a)))]},926:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var o=r(241),n=r(242),a=(r(57),r(92),r(131),r(5),r(2)),l=r(894),i=r(980),c=r(898),d=r(16),s=r(73),u=r(104),v=/(<<\w+>>)/g,m=function(e){return Object(i.b)((function(t,r,o){for(var n,a,l,i,c=t.state.doc.lineAt(r),u=c.from,m=c.to,p=c.text,f=r,b=r;f>u&&/\w/.test(p[f-u-1]);)f--;for(;b<m&&/\w/.test(p[b-u]);)b++;if(f===r&&o<0||b===r&&o>0||!v.test(p.slice(f-u-2,b-u+2)))return null;var g=null!==(a=null===(n=e.find((function(e){return e.key===p.slice(f-u,b-u)})))||void 0===n?void 0:n.sourceEnv)&&void 0!==a?a:"choose an environment",h=null!==(i=null===(l=e.find((function(e){return e.key===p.slice(f-u,b-u)})))||void 0===l?void 0:l.value)&&void 0!==i?i:"not found",y=Object(s.parseTemplateStringE)(h,e),k=d.isLeft(y)?"error":y.right;return{pos:f,end:m,above:!0,arrow:!0,create:function(){var e=document.createElement("span"),t=document.createElement("xmp");return t.textContent=k,e.appendChild(document.createTextNode("".concat(g," "))),e.appendChild(t),e.className="tooltip-theme",{dom:e}}}}),{hoverTime:1})};var p=function(e){return new c.e({regexp:v,decoration:function(t){return function(e,t){var r=t.find((function(t){return t.key===e.slice(2,-2)}))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-400 text-red-50 hover:bg-red-600";return c.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5"," ").concat(r)})}(t[0],e)}})},f=function(e){var t=p(e);return c.g.define((function(e){return{decorations:t.createDeco(e),update:function(e){this.decorations=t.updateDeco(e,this.decorations)}}}),{decorations:function(e){return e.decorations}})},b=function(){function e(t,r){var n=this;Object(o.a)(this,e),this.editorView=r,this.compartment=new l.e,this.envs=[],this.envs=Object(u.i)(),t(u.b,(function(e){var t;n.envs=e,null===(t=n.editorView.value)||void 0===t||t.dispatch({effects:n.compartment.reconfigure([m(n.envs),f(n.envs)])})}))}return Object(n.a)(e,[{key:"extension",get:function(){return this.compartment.of([m(this.envs),f(this.envs)])}}]),e}(),g=function(){function e(t,r){var n=this;Object(o.a)(this,e),this.editorView=r,this.compartment=new l.e,this.envs=[],Object(a.x)(t,(function(e){var t;n.envs=e,null===(t=n.editorView.value)||void 0===t||t.dispatch({effects:n.compartment.reconfigure([m(n.envs),f(n.envs)])})}),{immediate:!0})}return Object(n.a)(e,[{key:"extension",get:function(){return this.compartment.of([m(this.envs),f(this.envs)])}}]),e}()},983:function(e,t,r){"use strict";r.r(t);var o=r(241),n=r(242),a=(r(57),r(146),r(986),r(161),r(1066),r(58),r(131),r(5),r(2)),l=r(898),i=r(894),c=r(243),d=r.n(c),s=r(980),u=r(925),v=r(926),m=r(25),p=r(104),f={};f.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null}},f.setup=function(e,t){var r=e,c=t.emit,f=Object(a.n)(r.value),b=Object(a.n)(),g=Object(a.n)(null);Object(a.x)((function(){return r.value}),(function(e){var t,r,o=e.replaceAll("\n",""),n=null===(t=b.value)||void 0===t?void 0:t.state.doc.toJSON().join(b.value.state.lineBreak);f.value===o&&e===n||(f.value=o,null===(r=b.value)||void 0===r||r.dispatch({filter:!1,changes:{from:0,to:b.value.state.doc.length,insert:o}}))}),{immediate:!0,flush:"sync"});var h=null,y=null,k=Object(m.g)(p.b,[]),x=Object(a.a)((function(){return r.envs?r.envs.map((function(e){return{key:e.key,value:e.value,sourceEnv:e.source}})):k.value})),O=new v.b(x,b),j=function(e){var t=[u.d,Object(s.d)({position:"absolute"}),O,Object(l.m)(r.placeholder),l.d.domEventHandlers({paste:function(e){var t,r;h=e,y=null!==(r=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))&&void 0!==r?r:""}}),l.g.fromClass(function(){function e(){Object(o.a)(this,e)}return Object(n.a)(e,[{key:"update",value:function(e){if(e.docChanged){var t=d()(f.value);f.value=e.state.doc.toJSON().join(e.state.lineBreak);var r=d()(f.value).replaceAll("\n","");if(c("input",r),c("change",r),!!e.transactions.find((function(e){return e.isUserEvent("input.paste")}))&&h){var o=y;Object(a.f)((function(){c("paste",{pastedValue:o,prevValue:t})}))}else h=null,y=null}}}]),e}())];b.value=new l.d({parent:e,state:i.g.create({doc:r.value,extensions:t})})};return Object(a.i)((function(){g.value&&(b.value||j(g.value))})),Object(a.x)(g,(function(){var e;g.value?b.value||j(g.value):(null===(e=b.value)||void 0===e||e.destroy(),b.value=void 0)})),{emit:c,editor:g}};var b=f,g=r(22),h=Object(g.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[r("div",{ref:"editor",staticClass:"flex flex-1",class:e.styles,attrs:{placeholder:e.placeholder},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.emit("enter",t))},function(t){return e.emit("keydown",t)}],keyup:function(t){return e.emit("keyup",t)},click:function(t){return e.emit("click",t)}}})])}),[],!1,null,null,null);t.default=h.exports},986:function(e,t,r){r(1071)}}]);