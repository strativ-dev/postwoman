(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{2266:function(e,t,n){"use strict";n.r(t);var a=n(2),l={setup:function(e,t){return{language:Object(a.n)(null)}}},o=l,i=n(22),c=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"inline-flex"},[n("tippy",{ref:"language",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"pr-8",attrs:{title:e.$t("settings.choose_language"),outline:"",svg:"languages",label:""+e.$i18n.locales.find((function(t){return t.code==e.$i18n.locale})).name}})],1)]},proxy:!0}])},[e._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},e._l(e.$i18n.locales,(function(t,a){return n("NuxtLink",{key:"locale-"+a,attrs:{to:e.switchLocalePath(t.code)},on:{click:function(t){e.language.tippy().hide()}}},[n("SmartItem",{attrs:{label:t.name,"active-info-icon":e.$i18n.locale===t.code,"info-icon":e.$i18n.locale===t.code?"done":null}})],1)})),1)])],1)}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{ButtonSecondary:n(105).default,SmartItem:n(128).default})}}]);