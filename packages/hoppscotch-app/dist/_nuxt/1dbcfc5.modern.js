(window.webpackJsonp=window.webpackJsonp||[]).push([[45,46],{1001:function(e,t,o){"use strict";o.r(t);o(35),o(41),o(831),o(198),o(96);var n=o(2),i=o(18),l=o(95),r=Object(n.c)({name:"Folder",props:{folder:{type:Object,default:()=>{}},folderIndex:{type:Number,default:null},collectionIndex:{type:Number,default:null},folderPath:{type:String,default:null},doc:Boolean,saveRequest:Boolean,isFiltered:Boolean,collectionsType:{type:Object,default:()=>{}},picked:{type:Object,default:()=>{}}},setup(){var e=Object(i.d)();return{tippyActions:Object(n.n)(null),options:Object(n.n)(null),folderAction:Object(n.n)(null),edit:Object(n.n)(null),deleteAction:Object(n.n)(null),exportAction:Object(n.n)(null),t:e}},data:()=>({showChildren:!1,dragging:!1,confirmRemove:!1,prevCursor:"",cursor:""}),computed:{isSelected(){return this.picked&&"my-folder"===this.picked.pickedType&&this.picked.folderPath===this.folderPath},getCollectionIcon(){return this.isSelected?"check-circle":(this.showChildren||this.isFiltered)&&(this.showChildren||this.isFiltered)?"folder-open":"folder"}},methods:{exportFolder(){var e=JSON.stringify(this.folder),t=new Blob([e],{type:"application/json"}),o=document.createElement("a"),n=URL.createObjectURL(t);o.href=n,o.download="".concat(this.folder.name,".json"),document.body.appendChild(o),o.click(),this.$toast.success(this.$t("state.download_started").toString()),setTimeout((()=>{document.body.removeChild(o),URL.revokeObjectURL(n)}),1e3)},toggleShowChildren(){this.$props.saveRequest&&this.$emit("select",{picked:{pickedType:"my-folder",collectionIndex:this.collectionIndex,folderName:this.folder.name,folderPath:this.folderPath}}),this.showChildren=!this.showChildren},removeFolder(){this.picked&&"my-folder"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.$emit("select",{picked:null}),Object(l.v)(this.folderPath),this.$toast.success("".concat(this.$t("state.deleted")))},dropEvent(e){var{dataTransfer:t}=e;this.dragging=!this.dragging;var o=t.getData("folderPath"),n=t.getData("requestIndex");Object(l.q)(o,n,this.folderPath)},removeRequest(e){var{requestIndex:t}=e;this.picked&&"my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===t&&this.$emit("select",{picked:null}),Object(l.w)(this.folderPath,t)}}}),s=o(15),c=Object(s.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[o("div",{staticClass:"flex items-stretch group",on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent.apply(null,arguments)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[o("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.toggleShowChildren()}}},[o("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.getCollectionIcon}})],1),e._v(" "),o("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.toggleShowChildren()}}},[o("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.folder.name?e.folder.name:e.folder.title)+"\n      ")])]),e._v(" "),o("div",{staticClass:"flex"},[o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"folder-plus",title:e.t("folder.new")},nativeOn:{click:function(t){return e.$emit("add-folder",{folder:e.folder,path:e.folderPath})}}}),e._v(" "),o("span",[o("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),o("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"n",void 0,t.key,void 0)?null:e.folderAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"x",void 0,t.key,void 0)?null:e.exportAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[o("SmartItem",{ref:"folderAction",attrs:{svg:"folder-plus",label:e.t("folder.new"),shortcut:["N"]},nativeOn:{click:function(t){return function(){e.$emit("add-folder",{folder:e.folder,path:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-folder",{folder:e.folder,folderIndex:e.folderIndex,collectionIndex:e.collectionIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("SmartItem",{ref:"exportAction",attrs:{svg:"download",label:e.$t("export.title"),shortcut:["X"]},nativeOn:{click:function(t){return function(){e.exportFolder(),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),e.showChildren||e.isFiltered?o("div",{staticClass:"flex"},[o("div",{staticClass:"bg-dividerLight cursor-nsResize flex ml-5.5 transform transition w-1 hover:bg-dividerDark hover:scale-x-125",on:{click:function(t){return e.toggleShowChildren()}}}),e._v(" "),o("div",{staticClass:"flex flex-col flex-1 truncate"},[e._l(e.folder.folders,(function(t,n){return o("CollectionsMyFolder",{key:"subFolder-"+n,attrs:{folder:t,"folder-index":n,"collection-index":e.collectionIndex,doc:e.doc,"save-request":e.saveRequest,"collections-type":e.collectionsType,"folder-path":e.folderPath+"/"+n,picked:e.picked},on:{"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},"update-team-collections":function(t){return e.$emit("update-team-collections")},select:function(t){return e.$emit("select",t)},"remove-request":e.removeRequest}})})),e._v(" "),e._l(e.folder.requests,(function(t,n){return o("CollectionsMyRequest",{key:"request-"+n,attrs:{request:t,"collection-index":e.collectionIndex,"folder-index":e.folderIndex,"folder-name":e.folder.name,"folder-path":e.folderPath,"request-index":n,doc:e.doc,picked:e.picked,"save-request":e.saveRequest,"collections-type":e.collectionsType},on:{"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)},"remove-request":e.removeRequest}})})),e._v(" "),e.folder.folders&&0===e.folder.folders.length&&e.folder.requests&&0===e.folder.requests.length?o("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[o("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 mb-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:""+e.t("empty.folder")}}),e._v(" "),o("span",{staticClass:"text-center"},[e._v("\n          "+e._s(e.t("empty.folder"))+"\n        ")])]):e._e()],2)]):e._e(),e._v(" "),o("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.t("confirm.remove_folder")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeFolder}})],1)}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{SmartIcon:o(105).default,ButtonSecondary:o(85).default,SmartItem:o(104).default,CollectionsMyFolder:o(1001).default,CollectionsMyRequest:o(995).default,SmartConfirmModal:o(312).default})},995:function(e,t,o){"use strict";o.r(t);var n=o(2),i=o(61),l=o(18),r=o(90),s=Object(n.c)({props:{request:{type:Object,default:()=>{}},collectionIndex:{type:Number,default:null},folderIndex:{type:Number,default:null},folderName:{type:String,default:null},requestIndex:[Number,String],doc:Boolean,saveRequest:Boolean,collectionsType:{type:Object,default:()=>{}},folderPath:{type:String,default:null},picked:{type:Object,default:()=>{}}},setup:()=>({active:Object(l.g)(r.p,null),tippyActions:Object(n.n)(null),options:Object(n.n)(null),edit:Object(n.n)(null),duplicate:Object(n.n)(null),deleteAction:Object(n.n)(null)}),data:()=>({dragging:!1,requestMethodLabels:{get:"text-green-500",post:"text-yellow-500",put:"text-blue-500",delete:"text-red-500",default:"text-gray-500"},confirmRemove:!1}),computed:{isSelected(){return this.picked&&"my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===this.requestIndex}},methods:{selectRequest(){this.active&&"user-collection"===this.active.originLocation&&this.active.folderPath===this.folderPath&&this.active.requestIndex===this.requestIndex?Object(r.x)(null):this.$props.saveRequest?this.$emit("select",{picked:{pickedType:"my-request",collectionIndex:this.collectionIndex,folderPath:this.folderPath,folderName:this.folderName,requestIndex:this.requestIndex}}):Object(r.w)(Object(i.safelyExtractRESTRequest)(Object(i.translateToNewRequest)(this.request),Object(r.b)()),{originLocation:"user-collection",folderPath:this.folderPath,requestIndex:this.requestIndex})},dragStart(e){var{dataTransfer:t}=e;this.dragging=!this.dragging,t.setData("folderPath",this.folderPath),t.setData("requestIndex",this.requestIndex)},removeRequest(){this.$emit("remove-request",{collectionIndex:this.$props.collectionIndex,folderName:this.$props.folderName,folderPath:this.folderPath,requestIndex:this.$props.requestIndex})},getRequestLabelColor(e){return this.requestMethodLabels[e.toLowerCase()]||this.requestMethodLabels.default}}}),c=o(15),a=Object(c.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[o("div",{staticClass:"flex items-stretch group",attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[o("span",{staticClass:"flex items-center justify-center w-16 px-2 truncate cursor-pointer",class:e.getRequestLabelColor(e.request.method),on:{click:function(t){e.doc||e.selectRequest()}}},[e.isSelected?o("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:"check-circle"}}):o("span",{staticClass:"truncate"},[e._v("\n        "+e._s(e.request.method)+"\n      ")])],1),e._v(" "),o("span",{staticClass:"flex items-center flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){e.doc||e.selectRequest()}}},[o("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.request.name)+"\n      ")]),e._v(" "),e.active&&"user-collection"===e.active.originLocation&&e.active.folderPath===e.folderPath&&e.active.requestIndex===e.requestIndex?o("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"relative h-1.5 w-1.5 flex flex-shrink-0 mx-3",attrs:{title:""+e.$t("collection.request_in_use")}},[o("span",{staticClass:"absolute inline-flex flex-shrink-0 w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"}),e._v(" "),o("span",{staticClass:"relative inline-flex flex-shrink-0 rounded-full h-1.5 w-1.5 bg-green-500"})]):e._e()]),e._v(" "),o("div",{staticClass:"flex"},[e.saveRequest||e.doc?e._e():o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"rotate-ccw",title:e.$t("action.restore")},nativeOn:{click:function(t){e.doc||e.selectRequest()}}}),e._v(" "),o("span",[o("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),o("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:e.duplicate.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[o("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-request",{collectionIndex:e.collectionIndex,folderIndex:e.folderIndex,folderName:e.folderName,request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:e.$t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(t){return function(){e.$emit("duplicate-request",{collectionIndex:e.collectionIndex,folderIndex:e.folderIndex,folderName:e.folderName,request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),o("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("confirm.remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=a.exports;installComponents(a,{SmartIcon:o(105).default,ButtonSecondary:o(85).default,SmartItem:o(104).default,SmartConfirmModal:o(312).default})}}]);