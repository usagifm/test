(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{529:function(e,t,r){var content=r(530);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(10).default)("4e60b196",content,!0,{sourceMap:!1})},530:function(e,t,r){(t=r(9)(!1)).push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=t},539:function(e,t,r){"use strict";r(224);var n=r(225);t.a=Object(n.a)("layout")},542:function(e,t,r){"use strict";r(224);var n=r(225);t.a=Object(n.a)("flex")},551:function(e,t,r){"use strict";r(17);var n=r(0),o=(r(529),r(65)),c=r(5);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),f=r(1),m=Object(f.h)("v-breadcrumbs__divider","li"),h=r(22);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(c.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(m,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(v,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},566:function(e,t,r){var content=r(629);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(10).default)("b6f91830",content,!0,{sourceMap:!1})},628:function(e,t,r){"use strict";r(566)},629:function(e,t,r){(t=r(9)(!1)).push([e.i,".videoWrapper[data-v-946eeb02]{position:relative;padding-bottom:56.25%;padding-top:25px;height:0}.videoWrapper iframe[data-v-946eeb02]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),e.exports=t},676:function(e,t,r){"use strict";r.r(t);r(4),r(28),r(20),r(68),r(92);var n=r(0),o=(r(58),r(18)),c=r(44);function l(e){return e.indexOf("?")>-1?e.split("?")[0]:e.indexOf("/")>-1?e.split("/")[0]:e.indexOf("&")>-1?e.split("&")[0]:e}function d(e){var t=e;t=t.replace(/#t=.*$/,"");var r=/youtube:\/\/|https?:\/\/youtu\.be\/|http:\/\/y2u\.be\//g;if(r.test(t))return l(t.split(r)[1]);var n=/\/v\/|\/vi\//g;if(n.test(t))return l(t.split(n)[1]);var o=/v=|vi=/g;if(o.test(t))return l(t.split(o)[1].split("&")[0]);var c=/\/an_webp\//g;if(c.test(t))return l(t.split(c)[1]);var d=/\/embed\//g;if(d.test(t))return l(t.split(d)[1]);if(!/\/user\/([a-zA-Z0-9]*)$/g.test(t)){if(/\/user\/(?!.*videos)/g.test(t))return l(t.split("/").pop());var v=/\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/;return v.test(t)?l(t.match(v)[1]):void 0}}function v(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,n=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(t.push(c.value),!i||t.length!==i);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return t}(e,i)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function m(e){var t,r,n=e;if(n.indexOf("#")>-1){var o=n.split("#");n=v(o,1)[0]}if(n.indexOf("?")>-1&&-1===n.indexOf("clip_id=")){var c=n.split("?");n=v(c,1)[0]}var l=/https?:\/\/vimeo\.com\/([0-9]+)/.exec(n);if(l&&l[1])return l[1];var d=["https?://player.vimeo.com/video/[0-9]+$","https?://vimeo.com/channels","groups","album"].join("|");if(new RegExp(d,"gim").test(n))(r=n.split("/"))&&r.length&&(t=r.pop());else if(/clip_id=/gim.test(n)){if((r=n.split("clip_id="))&&r.length)t=v(r[1].split("&"),1)[0]}return t}function h(e){var t=/https:\/\/vine\.co\/v\/([a-zA-Z0-9]*)\/?/.exec(e);return t&&t[1]}function y(e){var t;if(e.indexOf("embed")>-1)return t=/embed\/(\w{8})/,e.match(t)[1];t=/\/v\/(\w{8})/;var r=e.match(t);return r&&r.length>0?e.match(t)[1]:void 0}var O=function(e){if("string"!=typeof e)throw new TypeError("get-video-id expects a string");var t=e;/<iframe/gi.test(t)&&(t=function(input){if("string"!=typeof input)throw new TypeError("get-src expected a string");var e=/src="(.*?)"/gm.exec(input);if(e&&e.length>=2)return e[1]}(t)),t=(t=(t=t.trim()).replace("-nocookie","")).replace("/www.","/");var r={};if(/\/\/google/.test(t)){var n=t.match(/url=([^&]+)&/);n&&(t=decodeURIComponent(n[1]))}return/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(t)?r={id:d(t),service:"youtube"}:/vimeo/.test(t)?r={id:m(t),service:"vimeo"}:/vine/.test(t)?r={id:h(t),service:"vine"}:/videopress/.test(t)&&(r={id:y(t),service:"videopress"}),r};function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={middleware:["auth-student"],layout:"home",asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.params,t.next=3,Promise.all([r.dispatch("class/getLessonDetailData",n),r.dispatch("class/getMeetingDetailData",n),r.dispatch("class/getClassDetailData",n.id)]);case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{isLoaded:!1,tyvid:null,info:null,channelProp:{title:null,photo:null},videoProp:{title:null},vidComments:null,breadcrumbs:[{text:"Sanclass",disabled:!1,href:"/student/classes"},{text:this.$store.state.class.classDetail.name,disabled:!1,href:"/student/classes/class/".concat(this.$store.state.class.classDetail.id)},{text:this.$store.state.class.meetingDetail.name,disabled:!1,href:"/student/classes/class/".concat(this.$store.state.class.classDetail.id,"/meeting/").concat(this.$store.state.class.meetingDetail.id)},{text:this.$store.state.class.lessonDetail.name,disabled:!0,href:"/student/classes/class/".concat(this.$store.state.class.classDetail.id,"/meeting/").concat(this.$store.state.class.meetingDetail.id,"/lesson/").concat(this.$store.state.class.lessonDetail.id)}]}},mounted:function(){this.isLoaded=!0;var e=O(this.$store.state.class.lessonDetail.youtube);this.ytvid="https://www.youtube.com/embed/"+e.id},computed:j({},Object(c.d)("class",{lessonDetail:function(e){return e.lessonDetail},meetingDetail:function(e){return e.meetingDetail},classDetail:function(e){return e.classDetail}})),methods:j(j({},Object(c.b)("class",["getMeetingDetailData"])),Object(c.b)("class",["getClassesDetailData"]))},D=(r(628),r(40)),_=r(64),P=r.n(_),S=r(689),$=r(521),k=r(551),C=r(233),V=r(506),A=r(223),E=r(546),L=r(517),I=r(88),R=r(542),z=r(212),B=r(539),M=r(214),T=r(561),W=r(520),component=Object(D.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-container",[0==e.isLoaded?r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{jalign:"center",justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-progress-linear",{attrs:{rounded:"",height:"6",indeterminate:"",color:"blue lighten-1"}})],1)],1)],1):e._e(),e._v(" "),1==e.isLoaded?r("v-flex",[r("v-alert",{staticStyle:{"text-decoration":"none","font-weight":"bold"},attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[r("v-fab-transition",[r("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"student-classes-class-id-meeting-meetingid",params:{id:e.classDetail.id,meetingid:e.meetingDetail.id}}}},[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{color:"blue darken-1",fab:"",dark:"",medium:"",fixed:"",bottom:"",left:""}},[r("v-icon",[e._v("mdi-arrow-left")])],1)],1)],1),e._v(" "),r("v-breadcrumbs",{staticClass:"pb-1 pt-3",attrs:{items:e.breadcrumbs,divider:"/"}})],1),e._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{align:"left",cols:"12"}},[r("v-card",{attrs:{color:"#35B5AC",dark:""}},[r("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-book-open-variant")]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n               "+e._s(e.lessonDetail.name)+"\n             ")]),e._v(" "),r("v-card-subtitle",{staticStyle:{"font-weight":"bold"}},[e._v("\n                 "+e._s(e.meetingDetail.name)+" on "+e._s(e.classDetail.name))]),e._v(" "),r("v-btn",{staticClass:"ml-4 my-4",staticStyle:{"text-decoration":"none"},attrs:{rounded:"",target:"_blank",href:e.lessonDetail.link,color:"primary",dark:""}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-castle")]),e._v("\n\n               Link\n             ")],1)],1)],1)],1),e._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",lg:"9",md:"9",sm:"12",xs:"12"}},[r("v-card",[null==e.lessonDetail.youtube?r("v-container",[r("row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("overline",{staticStyle:{"font-weight":"bold",color:"grey","font-family":"Roboto"},attrs:{color:"grey"}},[e._v("No Video Available\n                       ")])],1)],1)],1):e._e(),e._v(" "),null!=e.lessonDetail.youtube?r("div",{staticClass:"videoWrapper"},[r("iframe",{staticClass:"py-2 px-2",attrs:{width:"560",height:"315",src:this.ytvid,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):e._e()],1)],1)],1)],1):e._e()],1)],1)}),[],!1,null,"946eeb02",null);t.default=component.exports;P()(component,{VAlert:S.a,VAppBar:$.a,VBreadcrumbs:k.a,VBtn:C.a,VCard:V.a,VCardSubtitle:A.b,VCardTitle:A.d,VCol:E.a,VContainer:L.a,VFabTransition:I.c,VFlex:R.a,VIcon:z.a,VLayout:B.a,VProgressLinear:M.a,VRow:T.a,VSpacer:W.a})}}]);