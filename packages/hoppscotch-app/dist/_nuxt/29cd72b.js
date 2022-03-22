(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1075:function(e,t,n){"use strict";n.r(t);n(512);var i=n(2),o=n(73),s=n(25),l=n(112),r=Object(i.c)({props:{request:{type:Object,default:function(){}},collectionIndex:{type:Number,default:null},folderIndex:{type:Number,default:null},folderName:{type:String,default:null},requestIndex:[Number,String],doc:Boolean,saveRequest:Boolean,collectionsType:{type:Object,default:function(){}},picked:{type:Object,default:function(){}},collectionID:{type:String,default:null}},setup:function(){return{active:Object(s.g)(l.p,null),tippyActions:Object(i.n)(null),options:Object(i.n)(null),edit:Object(i.n)(null),deleteAction:Object(i.n)(null),duplicate:Object(i.n)(null)}},data:function(){return{dragging:!1,requestMethodLabels:{get:"text-green-500",post:"text-yellow-500",put:"text-blue-500",delete:"text-red-500",default:"text-gray-500"},confirmRemove:!1}},computed:{isSelected:function(){return this.picked&&"teams-request"===this.picked.pickedType&&this.picked.requestID===this.requestIndex}},methods:{selectRequest:function(){this.active&&"team-collection"===this.active.originLocation&&this.active.requestID===this.requestIndex?Object(l.x)(null):this.$props.saveRequest?this.$emit("select",{picked:{pickedType:"teams-request",requestID:this.requestIndex}}):Object(l.w)(Object(o.safelyExtractRESTRequest)(Object(o.translateToNewRequest)(this.request),Object(l.b)()),{originLocation:"team-collection",requestID:this.requestIndex})},dragStart:function(e){var t=e.dataTransfer;this.dragging=!this.dragging,t.setData("requestIndex",this.requestIndex)},removeRequest:function(){this.$emit("remove-request",{collectionIndex:this.$props.collectionIndex,folderName:this.$props.folderName,requestIndex:this.$props.requestIndex})},getRequestLabelColor:function(e){return this.requestMethodLabels[e.toLowerCase()]||this.requestMethodLabels.default}}}),c=n(22),a=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[n("div",{staticClass:"flex items-stretch group",attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center w-16 px-2 truncate cursor-pointer",class:e.getRequestLabelColor(e.request.method),on:{click:function(t){e.doc||e.selectRequest()}}},[e.isSelected?n("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:"check-circle"}}):n("span",{staticClass:"truncate"},[e._v("\n        "+e._s(e.request.method)+"\n      ")])],1),e._v(" "),n("span",{staticClass:"flex items-center flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){e.doc||e.selectRequest()}}},[n("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.request.name)+"\n      ")]),e._v(" "),e.active&&"team-collection"===e.active.originLocation&&e.active.requestID===e.requestIndex?n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"relative h-1.5 w-1.5 flex flex-shrink-0 mx-3",attrs:{title:""+e.$t("collection.request_in_use")}},[n("span",{staticClass:"absolute inline-flex flex-shrink-0 w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"}),e._v(" "),n("span",{staticClass:"relative inline-flex flex-shrink-0 rounded-full h-1.5 w-1.5 bg-green-500"})]):e._e()]),e._v(" "),n("div",{staticClass:"flex"},[e.saveRequest||e.doc?e._e():n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"rotate-ccw",title:e.$t("action.restore")},nativeOn:{click:function(t){e.doc||e.selectRequest()}}}),e._v(" "),n("span",["VIEWER"!==e.collectionsType.selectedTeam.myRole?n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,236607011)},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:e.duplicate.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-request",{collectionIndex:e.collectionIndex,folderIndex:e.folderIndex,folderName:e.folderName,request:e.request,requestIndex:e.requestIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:e.$t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(t){return function(){e.$emit("duplicate-request",{request:e.request,requestIndex:e.requestIndex,collectionID:e.collectionID}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)]):e._e()],1)],1)]),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("confirm.remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=a.exports;installComponents(a,{SmartIcon:n(129).default,ButtonSecondary:n(105).default,SmartItem:n(128).default,SmartConfirmModal:n(376).default})}}]);