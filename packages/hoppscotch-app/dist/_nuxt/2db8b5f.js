(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1993:function(e,t,s){"use strict";s.r(t);var n=s(25),a={};a.props={env:{key:"env",required:!0,type:Object},status:{key:"status",required:!0,type:null},global:{key:"global",required:!1,type:Boolean,default:!1}},a.setup=function(e,t){return{t:Object(n.d)(),getIcon:function(e){switch(e){case"additions":return"add_circle";case"updations":return"check_circle";case"deletions":return"remove_circle"}},getStyle:function(e){switch(e){case"additions":return"text-green-500";case"updations":return"text-yellow-500";case"deletions":return"text-red-500"}},getTooltip:function(e){switch(e){case"additions":return"environment.added";case"updations":return"environment.updated";case"deletions":return"environment.deleted"}}}};var i=a,r=s(22),c=Object(r.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex items-center justify-between px-4 py-2"},[s("div",{staticClass:"flex items-center"},[s("i",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"mr-4 material-icons cursor-help",class:e.getStyle(e.status),attrs:{title:""+e.t(e.getTooltip(e.status))}},[e._v("\n      "+e._s(e.getIcon(e.status))+"\n    ")]),e._v(" "),s("span",{staticClass:"text-secondaryDark"},[e._v("\n      "+e._s(e.env.key)+"\n    ")]),e._v(" "),s("span",{staticClass:"text-secondaryDark"},[e._v("\n      "+e._s("   —   "+e.env.value)+"\n    ")]),e._v(" "),"updations"===e.status?s("span",{staticClass:"text-secondaryLight"},[e._v("\n      "+e._s("   ←   "+e.env.previousValue)+"\n    ")]):e._e()]),e._v(" "),e.global?s("span",{staticClass:"px-1 rounded bg-accentLight text-accentContrast text-tiny"},[e._v("\n    Global\n  ")]):e._e()])}),[],!1,null,null,null);t.default=c.exports}}]);