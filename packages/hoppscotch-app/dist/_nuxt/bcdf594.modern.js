(window.webpackJsonp=window.webpackJsonp||[]).push([[49,50],{1e3:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(69),o=n(51),l=(e,t)=>Object(i.c)(o.w,{requestID:e,collectionID:t})},1002:function(e,t,n){"use strict";n.r(t);var i=n(13),o=(n(96),n(35),n(41),n(831),n(198),n(2)),l=n(8),r=n(69),s=n(51),c=n(999),a=n(1e3),d=Object(o.c)({name:"Folder",props:{folder:{type:Object,default:()=>{}},folderIndex:{type:Number,default:null},collectionIndex:{type:Number,default:null},folderPath:{type:String,default:null},doc:Boolean,saveRequest:Boolean,isFiltered:Boolean,collectionsType:{type:Object,default:()=>{}},picked:{type:Object,default:()=>{}},loadingCollectionIDs:{type:Array,default:()=>[]}},setup:()=>({tippyActions:Object(o.n)(null),options:Object(o.n)(null),folderAction:Object(o.n)(null),edit:Object(o.n)(null),deleteAction:Object(o.n)(null),exportAction:Object(o.n)(null),exportLoading:Object(o.n)(!1)}),data:()=>({showChildren:!1,dragging:!1,confirmRemove:!1,prevCursor:"",cursor:""}),computed:{isSelected(){return this.picked&&"teams-folder"===this.picked.pickedType&&this.picked.folderID===this.folder.id},getCollectionIcon(){return this.isSelected?"check-circle":(this.showChildren||this.isFiltered)&&(this.showChildren||this.isFiltered)?"folder-open":"folder"}},methods:{exportFolder(){var e=this;return Object(i.a)((function*(){e.exportLoading=!0;var t=yield Object(c.a)(e.folder.id)();if(l.isLeft(t))return e.$toast.error(e.$t("error.something_went_wrong").toString()),t.left,e.exportLoading=!1,void e.options.tippy().hide();var n=Object(c.b)(t.right),i=JSON.stringify(n),o=new Blob([i],{type:"application/json"}),r=document.createElement("a"),s=URL.createObjectURL(o);r.href=s,r.download="".concat(n.name,".json"),document.body.appendChild(r),r.click(),e.$toast.success(e.$t("state.download_started").toString()),setTimeout((()=>{document.body.removeChild(r),URL.revokeObjectURL(s)}),1e3),e.exportLoading=!1,e.options.tippy().hide()}))()},toggleShowChildren(){this.$props.saveRequest&&this.$emit("select",{picked:{pickedType:"teams-folder",folderID:this.folder.id}}),this.$emit("expand-collection",this.$props.folder.id),this.showChildren=!this.showChildren},removeFolder(){"VIEWER"!==this.collectionsType.selectedTeam.myRole&&(this.picked&&"teams-folder"===this.picked.pickedType&&this.picked.folderID===this.folder.id&&this.$emit("select",{picked:null}),Object(r.c)(s.h,{collectionID:this.folder.id})().then((e=>{l.isLeft(e)?(this.$toast.error("".concat(this.$t("error.something_went_wrong"))),console.error(e.left)):(this.$toast.success("".concat(this.$t("state.deleted"))),this.$emit("update-team-collections"))})),this.$emit("update-team-collections"))},expandCollection(e){this.$emit("expand-collection",e)},dropEvent(e){var t=this;return Object(i.a)((function*(){var{dataTransfer:n}=e;t.dragging=!t.dragging;var i=n.getData("requestIndex"),o=yield Object(a.a)(i,t.folder.id)();l.isLeft(o)&&t.$toast.error("".concat(t.$t("error.something_went_wrong")))}))()},removeRequest(e){var{collectionIndex:t,folderName:n,requestIndex:i}=e;this.$emit("remove-request",{collectionIndex:t,folderName:n,requestIndex:i})}}}),u=n(15),p=Object(u.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[n("div",{staticClass:"flex items-stretch group",on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent.apply(null,arguments)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.toggleShowChildren()}}},[n("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.getCollectionIcon}})],1),e._v(" "),n("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.toggleShowChildren()}}},[n("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.folder.name?e.folder.name:e.folder.title)+"\n      ")])]),e._v(" "),n("div",{staticClass:"flex"},["VIEWER"!==e.collectionsType.selectedTeam.myRole?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"folder-plus",title:e.$t("folder.new")},nativeOn:{click:function(t){return e.$emit("add-folder",{folder:e.folder,path:e.folderPath})}}}):e._e(),e._v(" "),n("span",["VIEWER"!==e.collectionsType.selectedTeam.myRole?n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,236607011)},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"n",void 0,t.key,void 0)?null:e.folderAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"x",void 0,t.key,void 0)?null:e.exportAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"folderAction",attrs:{svg:"folder-plus",label:e.$t("folder.new"),shortcut:["N"]},nativeOn:{click:function(t){return function(){e.$emit("add-folder",{folder:e.folder,path:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-folder",{folder:e.folder,folderIndex:e.folderIndex,collectionIndex:e.collectionIndex,folderPath:""}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"exportAction",attrs:{svg:"download",label:e.$t("export.title"),shortcut:["X"],loading:e.exportLoading},nativeOn:{click:function(t){return e.exportFolder.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)]):e._e()],1)],1)]),e._v(" "),e.showChildren||e.isFiltered?n("div",{staticClass:"flex"},[n("div",{staticClass:"bg-dividerLight cursor-nsResize flex ml-5.5 transform transition w-1 hover:bg-dividerDark hover:scale-x-125",on:{click:function(t){return e.toggleShowChildren()}}}),e._v(" "),n("div",{staticClass:"flex flex-col flex-1 truncate"},[e._l(e.folder.children,(function(t,i){return n("CollectionsTeamsFolder",{key:"subFolder-"+i,attrs:{folder:t,"folder-index":i,"collection-index":e.collectionIndex,doc:e.doc,"save-request":e.saveRequest,"collections-type":e.collectionsType,"folder-path":e.folderPath+"/"+i,picked:e.picked,"loading-collection-i-ds":e.loadingCollectionIDs},on:{"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},"update-team-collections":function(t){return e.$emit("update-team-collections")},select:function(t){return e.$emit("select",t)},"expand-collection":e.expandCollection,"remove-request":e.removeRequest,"duplicate-request":function(t){return e.$emit("duplicate-request",t)}}})})),e._v(" "),e._l(e.folder.requests,(function(t,i){return n("CollectionsTeamsRequest",{key:"request-"+i,attrs:{request:t.request,"collection-index":e.collectionIndex,"folder-index":e.folderIndex,"folder-name":e.folder.name,"request-index":t.id,doc:e.doc,"save-request":e.saveRequest,"collections-type":e.collectionsType,picked:e.picked,"collection-i-d":e.folder.id},on:{"edit-request":function(t){return e.$emit("edit-request",t)},select:function(t){return e.$emit("select",t)},"remove-request":e.removeRequest,"duplicate-request":function(t){return e.$emit("duplicate-request",t)}}})})),e._v(" "),e.loadingCollectionIDs.includes(e.folder.id)?n("div",{staticClass:"flex flex-col items-center justify-center p-4"},[n("SmartSpinner",{staticClass:"my-4"}),e._v(" "),n("span",{staticClass:"text-secondaryLight"},[e._v(e._s(e.$t("state.loading")))])],1):null!=e.folder.children&&0!==e.folder.children.length||null!=e.folder.requests&&0!==e.folder.requests.length?e._e():n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 mb-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:""+e.$t("empty.folder")}}),e._v(" "),n("span",{staticClass:"text-center"},[e._v("\n          "+e._s(e.$t("empty.folder"))+"\n        ")])])],2)]):e._e(),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("confirm.remove_folder")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeFolder}})],1)}),[],!1,null,null,null);t.default=p.exports;installComponents(p,{SmartIcon:n(105).default,ButtonSecondary:n(85).default,SmartItem:n(104).default,CollectionsTeamsFolder:n(1002).default,CollectionsTeamsRequest:n(996).default,SmartSpinner:n(143).default,SmartConfirmModal:n(312).default})},996:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(61),l=n(18),r=n(90),s=Object(i.c)({props:{request:{type:Object,default:()=>{}},collectionIndex:{type:Number,default:null},folderIndex:{type:Number,default:null},folderName:{type:String,default:null},requestIndex:[Number,String],doc:Boolean,saveRequest:Boolean,collectionsType:{type:Object,default:()=>{}},picked:{type:Object,default:()=>{}},collectionID:{type:String,default:null}},setup:()=>({active:Object(l.g)(r.p,null),tippyActions:Object(i.n)(null),options:Object(i.n)(null),edit:Object(i.n)(null),deleteAction:Object(i.n)(null),duplicate:Object(i.n)(null)}),data:()=>({dragging:!1,requestMethodLabels:{get:"text-green-500",post:"text-yellow-500",put:"text-blue-500",delete:"text-red-500",default:"text-gray-500"},confirmRemove:!1}),computed:{isSelected(){return this.picked&&"teams-request"===this.picked.pickedType&&this.picked.requestID===this.requestIndex}},methods:{selectRequest(){this.active&&"team-collection"===this.active.originLocation&&this.active.requestID===this.requestIndex?Object(r.x)(null):this.$props.saveRequest?this.$emit("select",{picked:{pickedType:"teams-request",requestID:this.requestIndex}}):Object(r.w)(Object(o.safelyExtractRESTRequest)(Object(o.translateToNewRequest)(this.request),Object(r.b)()),{originLocation:"team-collection",requestID:this.requestIndex})},dragStart(e){var{dataTransfer:t}=e;this.dragging=!this.dragging,t.setData("requestIndex",this.requestIndex)},removeRequest(){this.$emit("remove-request",{collectionIndex:this.$props.collectionIndex,folderName:this.$props.folderName,requestIndex:this.$props.requestIndex})},getRequestLabelColor(e){return this.requestMethodLabels[e.toLowerCase()]||this.requestMethodLabels.default}}}),c=n(15),a=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[n("div",{staticClass:"flex items-stretch group",attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center w-16 px-2 truncate cursor-pointer",class:e.getRequestLabelColor(e.request.method),on:{click:function(t){e.doc||e.selectRequest()}}},[e.isSelected?n("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:"check-circle"}}):n("span",{staticClass:"truncate"},[e._v("\n        "+e._s(e.request.method)+"\n      ")])],1),e._v(" "),n("span",{staticClass:"flex items-center flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){e.doc||e.selectRequest()}}},[n("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.request.name)+"\n      ")]),e._v(" "),e.active&&"team-collection"===e.active.originLocation&&e.active.requestID===e.requestIndex?n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"relative h-1.5 w-1.5 flex flex-shrink-0 mx-3",attrs:{title:""+e.$t("collection.request_in_use")}},[n("span",{staticClass:"absolute inline-flex flex-shrink-0 w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"}),e._v(" "),n("span",{staticClass:"relative inline-flex flex-shrink-0 rounded-full h-1.5 w-1.5 bg-green-500"})]):e._e()]),e._v(" "),n("div",{staticClass:"flex"},[e.saveRequest||e.doc?e._e():n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"rotate-ccw",title:e.$t("action.restore")},nativeOn:{click:function(t){e.doc||e.selectRequest()}}}),e._v(" "),n("span",["VIEWER"!==e.collectionsType.selectedTeam.myRole?n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,236607011)},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:e.duplicate.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-request",{collectionIndex:e.collectionIndex,folderIndex:e.folderIndex,folderName:e.folderName,request:e.request,requestIndex:e.requestIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:e.$t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(t){return function(){e.$emit("duplicate-request",{request:e.request,requestIndex:e.requestIndex,collectionID:e.collectionID}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)]):e._e()],1)],1)]),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("confirm.remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=a.exports;installComponents(a,{SmartIcon:n(105).default,ButtonSecondary:n(85).default,SmartItem:n(104).default,SmartConfirmModal:n(312).default})},999:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var i=n(13),o=(n(35),n(41),n(72)),l=n(8),r=n(50),s=n(1),c=n(61),a=n(69),d=n(51),u=function(){var e=Object(i.a)((function*(e){for(var t=[];;){var n=yield Object(a.a)({query:d.m,variables:{collectionID:e,cursor:t.length>0?t[t.length-1]:void 0}});if(l.isLeft(n))return l.left(n.left);if(t.push(...n.right.collection.children.map((e=>e.id))),10!==n.right.collection.children.length)break}return l.right(t)}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)((function*(e){for(var t=[];;){var n=yield Object(a.a)({query:d.n,variables:{collectionID:e,cursor:t.length>0?t[t.length-1].id:void 0}});if(l.isLeft(n))return l.left(n.left);if(t.push(...n.right.requestsInCollection.map((t=>({id:t.id,request:Object(c.translateToNewRequest)(JSON.parse(t.request)),collectionID:e,title:t.title})))),10!==n.right.requestsInCollection.length)break}return l.right(t)}));return function(t){return e.apply(this,arguments)}}(),f=e=>Object(s.pipe)(r.a,r.b("title",(()=>Object(s.pipe)((()=>Object(a.a)({query:d.o,variables:{collectionID:e}})),r.m((e=>e.collection.title))))),r.b("children",(()=>Object(s.pipe)((()=>u(e)),r.c(Object(s.flow)(o.map(f),r.t))))),r.b("requests",(()=>()=>p(e))),r.m((t=>{var{title:n,children:i,requests:o}=t;return{id:e,children:i,requests:o,title:n}}))),m=e=>{var t,n,i,o;return Object(c.makeCollection)({name:e.title,folders:null!==(n=null===(t=e.children)||void 0===t?void 0:t.map(m))&&void 0!==n?n:[],requests:null!==(o=null===(i=e.requests)||void 0===i?void 0:i.map((e=>e.request)))&&void 0!==o?o:[]})}}}]);