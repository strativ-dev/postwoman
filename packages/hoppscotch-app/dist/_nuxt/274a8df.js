(window.webpackJsonp=window.webpackJsonp||[]).push([[92,93,94,95],{925:function(o,r,e){"use strict";e.d(r,"b",(function(){return k})),e.d(r,"d",(function(){return y})),e.d(r,"a",(function(){return j})),e.d(r,"c",(function(){return w}));var t=e(43),c=(e(54),e(1085),e(13),e(898)),a=e(951),n=e(1087),l=e(894),i=e(1086),d=e(913),s=e(1077),m=e(981),u=e(1084),v=e(1088),p=e(1090),b=e(954),g=e(1091),f=e(1089),h=e(982),k=c.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground, .cm-content ::selection, .cm-line ::selection":{backgroundColor:"var(--accent-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),y=c.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground, .cm-content ::selection, .cm-line ::selection":{backgroundColor:"var(--accent-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),x="var(--editor-name-color)",C="var(--editor-constant-color)",j=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:x},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:C},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:x},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:C},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),w=[Object(s.d)(),Object(s.c)(),Object(c.j)(),Object(i.a)(),Object(n.a)({openText:"▾",closedText:"▸"}),l.g.allowMultipleSelections.of(!0),Object(d.p)(),a.b.fallback,Object(u.a)(),Object(v.a)(),Object(b.a)(),Object(f.a)(),Object(c.i)(),Object(p.a)(),Object(p.b)(),c.k.of([].concat(Object(t.a)(v.b),Object(t.a)(m.a),Object(t.a)(p.c),Object(t.a)(i.b),Object(t.a)(n.b),Object(t.a)(g.a),Object(t.a)(b.c),Object(t.a)(h.a)))]},926:function(o,r,e){"use strict";e.d(r,"a",(function(){return g})),e.d(r,"b",(function(){return f}));var t=e(241),c=e(242),a=(e(57),e(92),e(131),e(5),e(2)),n=e(894),l=e(980),i=e(898),d=e(16),s=e(73),m=e(104),u=/(<<\w+>>)/g,v=function(o){return Object(l.b)((function(r,e,t){for(var c,a,n,l,i=r.state.doc.lineAt(e),m=i.from,v=i.to,p=i.text,b=e,g=e;b>m&&/\w/.test(p[b-m-1]);)b--;for(;g<v&&/\w/.test(p[g-m]);)g++;if(b===e&&t<0||g===e&&t>0||!u.test(p.slice(b-m-2,g-m+2)))return null;var f=null!==(a=null===(c=o.find((function(o){return o.key===p.slice(b-m,g-m)})))||void 0===c?void 0:c.sourceEnv)&&void 0!==a?a:"choose an environment",h=null!==(l=null===(n=o.find((function(o){return o.key===p.slice(b-m,g-m)})))||void 0===n?void 0:n.value)&&void 0!==l?l:"not found",k=Object(s.parseTemplateStringE)(h,o),y=d.isLeft(k)?"error":k.right;return{pos:b,end:v,above:!0,arrow:!0,create:function(){var o=document.createElement("span"),r=document.createElement("xmp");return r.textContent=y,o.appendChild(document.createTextNode("".concat(f," "))),o.appendChild(r),o.className="tooltip-theme",{dom:o}}}}),{hoverTime:1})};var p=function(o){return new i.e({regexp:u,decoration:function(r){return function(o,r){var e=r.find((function(r){return r.key===o.slice(2,-2)}))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-400 text-red-50 hover:bg-red-600";return i.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5"," ").concat(e)})}(r[0],o)}})},b=function(o){var r=p(o);return i.g.define((function(o){return{decorations:r.createDeco(o),update:function(o){this.decorations=r.updateDeco(o,this.decorations)}}}),{decorations:function(o){return o.decorations}})},g=function(){function o(r,e){var c=this;Object(t.a)(this,o),this.editorView=e,this.compartment=new n.e,this.envs=[],this.envs=Object(m.i)(),r(m.b,(function(o){var r;c.envs=o,null===(r=c.editorView.value)||void 0===r||r.dispatch({effects:c.compartment.reconfigure([v(c.envs),b(c.envs)])})}))}return Object(c.a)(o,[{key:"extension",get:function(){return this.compartment.of([v(this.envs),b(this.envs)])}}]),o}(),f=function(){function o(r,e){var c=this;Object(t.a)(this,o),this.editorView=e,this.compartment=new n.e,this.envs=[],Object(a.x)(r,(function(o){var r;c.envs=o,null===(r=c.editorView.value)||void 0===r||r.dispatch({effects:c.compartment.reconfigure([v(c.envs),b(c.envs)])})}),{immediate:!0})}return Object(c.a)(o,[{key:"extension",get:function(){return this.compartment.of([v(this.envs),b(this.envs)])}}]),o}()},950:function(o,r,e){"use strict";e.d(r,"b",(function(){return t})),e.d(r,"a",(function(){return c}));e(57);var t={"application/json":"json","application/ld+json":"json","application/hal+json":"json","application/vnd.api+json":"json","application/xml":"xml","application/x-www-form-urlencoded":"multipart","multipart/form-data":"multipart","text/html":"html","text/plain":"plain"};function c(o){return/\bjson\b/i.test(o)}}}]);