(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1820:function(r,e,t){"use strict";t.r(e);var s=t(2),a=Object(s.c)({props:{radius:{type:Number,default:12},progress:{type:Number,default:50},stroke:{type:Number,default:4}},data(){var r=this.radius-2*this.stroke;return{normalizedRadius:r,circumference:2*r*Math.PI}},computed:{strokeDashoffset(){return this.circumference-this.progress/100*this.circumference}}}),i=t(15),c=Object(i.a)(a,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("svg",{attrs:{height:2*r.radius,width:2*r.radius}},[t("circle",{staticClass:"stroke-green-500",attrs:{"stroke-width":r.stroke,fill:"transparent",r:r.normalizedRadius,cx:r.radius,cy:r.radius}}),r._v(" "),t("circle",{style:{strokeDashoffset:r.strokeDashoffset},attrs:{"stroke-width":r.stroke,stroke:"currentColor",fill:"transparent",r:r.normalizedRadius,cx:r.radius,cy:r.radius,"stroke-dasharray":r.circumference+" "+r.circumference}})])}),[],!1,null,null,null);e.default=c.exports}}]);