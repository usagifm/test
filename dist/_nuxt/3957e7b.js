(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{632:function(t,e,r){var content=r(694);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("3b3fb4f8",content,!0,{sourceMap:!1})},693:function(t,e,r){"use strict";r(632)},694:function(t,e,r){(e=r(8)(!1)).push([t.i,'.circle[data-v-8775f522]{width:150px;height:150px;line-height:150px;border-radius:50%;font-size:40px;color:#000;text-align:center;background:#fff;left:50%;transform:"translateX(-50%)"}sub[data-v-8775f522]{font-size:16px}',""]),t.exports=e},729:function(t,e,r){"use strict";r.r(e);r(4),r(28),r(17),r(69),r(94);var n,o,l=r(0),c=(r(53),r(16)),v=r(43);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _={head:function(){return{title:"SANEDU | Quiz Result"}},middleware:["auth-teacher"],layout:"home",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.params,e.next=3,Promise.all([r.dispatch("teacher/getMeetingDetailData",n),r.dispatch("teacher/getClassDetailData",n.id),r.dispatch("teacher/getAttemptDetailData",n)]);case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})))()},methods:{openModal:function(t,e){this.questionNumber=e,this.questionDetail=t,this.detailModal=!0}},mounted:function(){for(self=this,self.soals=this.$store.state.teacher.attemptDetail.quiz.questions,self.koreksis=this.$store.state.teacher.attemptDetail.corrections,n=0;n<this.$store.state.teacher.attemptDetail.quiz.question_number;n++)if(void 0!==self.koreksis[n])for(o=0;o<this.$store.state.teacher.attemptDetail.quiz.question_number;o++)self.koreksis[n].quiz_question_id==self.soals[o].id&&(self.koreksiId[o]=self.koreksis[n]);this.quizResult=this.$store.state.teacher.attemptDetail.data,this.isLoaded=!0},data:function(){return{isLoaded:!1,soals:[],indexSoal:0,koreksiId:[],koreksis:[],questionNumber:null,detailModal:!1,questionDetail:null,breadcrumbs:[{text:"Sanclass",disabled:!1,href:"/teacher/classes"},{text:this.$store.state.teacher.classDetail.name,disabled:!1,href:"/teacher/classes/class/".concat(this.$store.state.teacher.classDetail.id)},{text:this.$store.state.teacher.meetingDetail.name,disabled:!1,href:"/teacher/classes/class/".concat(this.$store.state.teacher.classDetail.id,"/meeting/").concat(this.$store.state.teacher.meetingDetail.id)},{text:"Quiz Result",disabled:!0,href:"/teacher/classes/class/".concat(this.$store.state.teacher.classDetail.id,"/meeting/").concat(this.$store.state.teacher.meetingDetail.id)}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(v.d)("teacher",{meetingDetail:function(t){return t.meetingDetail},classDetail:function(t){return t.classDetail},attemptDetail:function(t){return t.attemptDetail}}))},m=(r(693),r(36)),f=r(61),h=r.n(f),k=r(555),w=r(533),D=r(214),x=r(610),y=r(566),C=r(227),I=r(215),V=r(93),z=r(600),O=r(528),S=r(703),j=r(90),A=r(556),$=r(213),M=r(177),Q=r(544),N=r(216),P=r(584),L=r(603),R=r(531),T=r(561),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-container",[0==t.isLoaded?r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-progress-linear",{attrs:{rounded:"",height:"6",indeterminate:"",color:"blue lighten-1"}})],1)],1)],1):t._e(),t._v(" "),1==t.isLoaded&&this.$store.state.teacher.meetingDetail.quiz?r("v-flex",[r("v-alert",{staticStyle:{"text-decoration":"none","font-weight":"bold"},attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[r("v-fab-transition",[r("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"teacher-classes-class-id-meeting-meetingid",params:{id:t.classDetail.id,meetingid:t.meetingDetail.id}}}},[r("v-btn",{attrs:{color:"blue darken-1",fab:"",dark:"",medium:"",fixed:"",bottom:"",left:""}},[r("v-icon",[t._v("mdi-arrow-left")])],1)],1)],1),t._v(" "),r("v-breadcrumbs",{staticClass:"pb-1 pt-3",attrs:{link:"",items:t.breadcrumbs,divider:"/"}})],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[1==t.isLoaded&&this.$store.state.teacher.meetingDetail.quiz?r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{align:"center"}},[r("section",{staticStyle:{margin:"0",padding:"0"}},[r("v-app-bar",{attrs:{flat:"",color:"rgba(0,0,0,0)"}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"my-4",attrs:{rounded:"",color:"blue lighten-2",dark:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{left:""}},[t._v("mdi-newspaper-variant-outline")]),t._v("\n\n                     "+t._s(t.attemptDetail.quiz.name)+"\n                   ")],1)]}}],null,!1,114474459)},[t._v(" "),r("span",[t._v("Quiz Name")])])],1),t._v(" "),r("v-app-bar",{staticClass:"py-0",attrs:{flat:"",color:"rgba(0,0,0,0)"}},[r("v-spacer"),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"my-4 mr-3",attrs:{rounded:"",color:"blue lighten-2",dark:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{left:""}},[t._v("mdi-clock")]),t._v("\n\n                     "+t._s(t.attemptDetail.quiz.duration)+" Min\n                   ")],1)]}}],null,!1,3812325263)},[t._v(" "),r("span",[t._v("Quiz duration")])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"my-4 ml-3",attrs:{rounded:"",color:"blue lighten-2",dark:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{left:""}},[t._v("mdi-file")]),t._v("\n\n                     "+t._s(t.attemptDetail.quiz.question_number)+" Questions\n                   ")],1)]}}],null,!1,1608240932)},[t._v(" "),r("span",[t._v("Quiz Question Number")])])],1),t._v(" "),r("v-card-subtitle",[r("div",{staticStyle:{margin:"auto","margin-top":"30px"}},[r("div",{staticClass:"wow bounceInUp",attrs:{"data-wow-duration":"1.4s"}},[r("div",{staticClass:"circle"},[t._v("\n                     "+t._s(t.attemptDetail.score)),r("sub",[t._v("/ 100")])]),t._v(" "),r("p",{staticClass:"title mt-1",staticStyle:{color:"#ffffff","font-size":"13px","text-align":"center","font-weight":"600"}},[t._v("\n                     Student Score\n                   ")])])])]),t._v(" "),r("div",{staticClass:"wave wave1"}),t._v(" "),r("div",{staticClass:"wave wave2"}),t._v(" "),r("div",{staticClass:"wave wave3"}),t._v(" "),r("div",{staticClass:"wave wave4"})],1),t._v(" "),r("v-col",{attrs:{cols:"12",align:"left"}},[r("v-banner",{attrs:{"two-line":""}},[r("v-col",[r("h4",{staticClass:"captoin"},[r("v-avatar",{attrs:{slot:"icon",color:"primary",size:"40"},slot:"icon"},[r("v-icon",{attrs:{icon:"mdi-lock",color:"white"}},[t._v(" mdi-fish ")])],1),t._v("\n                   \n\n                   Quiz Result Overview\n                 ")],1)]),t._v(" "),r("v-card-title",[t._v("\n                                                       "+t._s(t.attemptDetail.student_name)+"\n                            ")]),t._v(" "),r("v-card-subtitle",[t._v("\n                                  "+t._s(t.attemptDetail.student_school)+"\n                            ")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"green"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("\n                 Correct Answer : "+t._s(t.attemptDetail.correct_number)+"\n               ")],1),t._v(" "),r("v-btn",{attrs:{text:"",color:"red"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-backspace")]),t._v("\n                 Incorrect Answer : "+t._s(t.attemptDetail.incorrect_number)+"\n               ")],1),t._v(" "),r("v-btn",{attrs:{text:"",color:"grey"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-radiobox-blank")]),t._v("\n                 Blank Answer : "+t._s(t.attemptDetail.not_answered_number)+"\n               ")],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("No")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Detail")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("Student Answer")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("Correction")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("Answer Key")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("Correction Status")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("Answer Image")])])]),t._v(" "),r("tbody",t._l(t.attemptDetail.quiz.questions,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(n+1))]),t._v(" "),r("td",[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var l=o.on,c=o.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",icon:""},on:{click:function(r){return t.openModal(e,n)}}},"v-btn",c,!1),l),[r("v-icon",[t._v("mdi-eye")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Question Detail")])])],1),t._v(" "),r("td",[t.koreksiId[n]?r("div",{staticClass:"text-center"},[t._v("\n                         "+t._s(t.koreksiId[n].answer.charAt(0).toUpperCase()+t.koreksiId[n].answer.slice(1))+"\n                       ")]):t._e(),t._v(" "),t.koreksiId[n]?t._e():r("div",{staticClass:"text-center"},[t._v("\n                         -\n                       ")])]),t._v(" "),r("td",[t.koreksiId[n]?r("div",{staticClass:"text-center"},[t._v("\n                         "+t._s(t.koreksiId[n].is_correct)+"\n                       ")]):t._e(),t._v(" "),t.koreksiId[n]?t._e():r("div",{staticClass:"text-center"},[t._v("\n                         -\n                       ")])]),t._v(" "),r("td",[e.answer?r("div",{staticClass:"text-center"},[t._v("\n                         "+t._s(e.answer.toUpperCase())+"\n                       ")]):t._e(),t._v(" "),e.answer?t._e():r("div",{staticClass:"text-center"},[t._v("-")])]),t._v(" "),r("td",[t.koreksiId[n]?r("div",{staticClass:"text-center"},[0==t.koreksiId[n].is_corrected?r("div",[t._v("\n                           Not Yet\n                         ")]):t._e(),t._v(" "),1==t.koreksiId[n].is_corrected?r("div",[t._v("\n                           Corrected\n                         ")]):t._e()]):t._e(),t._v(" "),t.koreksiId[n]?t._e():r("div",{staticClass:"text-center"},[t._v("\n                         -\n                       ")])]),t._v(" "),r("td",[t.koreksiId[n]?r("div",{staticClass:"text-center"},[null==t.koreksiId[n].answer_image?r("div",[t._v("\n                           -\n                         ")]):t._e(),t._v(" "),t.koreksiId[n].answer_image?r("div",[r("a",{attrs:{target:"_blank",href:t.koreksiId[n].answer_image}},[t._v("Link")])]):t._e()]):t._e(),t._v(" "),t.koreksiId[n]?t._e():r("div",{staticClass:"text-center"},[t._v("\n                         -\n                       ")])])])})),0)]},proxy:!0}],null,!1,2316846162)})],1)],1)],1):t._e()],1)],1):t._e(),t._v(" "),1==t.detailModal?r("v-dialog",{attrs:{"max-width":"700"},model:{value:t.detailModal,callback:function(e){t.detailModal=e},expression:"detailModal"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n           Question Detail : No "+t._s(t.questionNumber+1)+"\n         ")]),t._v(" "),r("v-card-text",[1==t.questionDetail.question_type?r("div",[t._v("\n             Question Type : Multiple Choice\n           ")]):r("div",[t._v("Question Type : Essay")]),t._v(" "),null!==t.questionDetail.question_image?r("div",[r("v-img",{staticClass:"grey darken-4",attrs:{contain:"","lazy-src":"https://picsum.photos/id/11/10/6",src:t.questionDetail.question_image}})],1):r("div",[t._v("No Image")]),t._v(" "),r("v-card-subtitle",[t._v("\n             "+t._s(t.questionDetail.question)+"\n           ")]),t._v(" "),t.questionDetail.answer?r("v-card-subtitle",[t._v("\n             Answer Key : "+t._s(t.questionDetail.answer.toUpperCase())+" \n           ")]):t._e(),t._v(" "),t.questionDetail.essay_answer?r("v-card-subtitle",[t._v("\n             Essay Answer : "+t._s(t.questionDetail.essay_answer)+" \n           ")]):t._e()],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.detailModal=!1}}},[t._v("\n             Close\n           ")])],1)],1)],1):t._e()],1)],1)}),[],!1,null,"8775f522",null);e.default=component.exports;h()(component,{VAlert:k.a,VAppBar:w.a,VAvatar:D.a,VBanner:x.a,VBreadcrumbs:y.a,VBtn:C.a,VCard:I.a,VCardActions:V.a,VCardSubtitle:V.b,VCardText:V.c,VCardTitle:V.d,VCol:z.a,VContainer:O.a,VDialog:S.a,VFabTransition:j.c,VFlex:A.a,VIcon:$.a,VImg:M.a,VLayout:Q.a,VProgressLinear:N.a,VRow:P.a,VSimpleTable:L.a,VSpacer:R.a,VTooltip:T.a})}}]);