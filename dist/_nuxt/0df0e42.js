(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{631:function(e,t,l){var content=l(692);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(9).default)("3df9406a",content,!0,{sourceMap:!1})},690:function(e,t,l){e.exports=l.p+"img/noimage.9ad6f89.jpg"},691:function(e,t,l){"use strict";l(631)},692:function(e,t,l){(t=l(8)(!1)).push([e.i,".videoWrapper[data-v-ceb3f508]{position:relative;padding-bottom:56.25%;padding-top:25px;height:0}.videoWrapper iframe[data-v-ceb3f508]{position:absolute;top:0;left:0;width:100%;height:100%}.sembunyi[data-v-ceb3f508]{display:block;width:50px;height:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[type=radio][data-v-ceb3f508]{vertical-align:middle}.textRadio[data-v-ceb3f508]{vertical-align:middle}",""]),e.exports=t},728:function(e,t,l){"use strict";l.r(t);l(4),l(28),l(17),l(69),l(94),l(53);var n=l(16),o=l(0),r=l(551),d=l(550),c=l(43);l(580);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(d.d)("eager"),Object(d.c)("numeric",m(m({},r.e),{},{message:"{_field_} can not contain alphabet and symbol"})),Object(d.c)("required",m(m({},r.f),{},{message:"{_field_} can not be empty"}));var y={head:function(){return{title:"SANEDU | "+this.$store.state.teacher.meetingDetail.name}},middleware:["auth-teacher"],layout:"home",components:{ValidationProvider:d.b,ValidationObserver:d.a},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var l,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.store,n=e.params,t.next=3,Promise.all([l.dispatch("teacher/getMeetingDetailData",n),l.dispatch("teacher/getClassDetailData",n.id),l.dispatch("teacher/getQuizDetailData",n)]);case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{menu:!1,snackbar:!1,text:!1,isLoaded:!1,isLoading:!1,deleteQuizDialog:!1,previewImage:null,imageContainer:null,createMultipleQuestionDialog:!1,deleteQuestionDialog:!1,editQuestionDialog:!1,option:[{text:"Multiple Choice",value:1},{text:"Essay",value:2}],quizPayload:{id:this.$store.state.teacher.quizDetail.id,name:this.$store.state.teacher.quizDetail.name,duration:this.$store.state.teacher.quizDetail.duration},multipleQuestionPayload:{quizid:this.$store.state.teacher.quizDetail.id,question_type:1,question:null,a:null,b:null,c:null,d:null,e:null,answer:null,question_image:null},selectedQuestionPayload:{index:null,quizid:this.$store.state.teacher.quizDetail.id,id:null,question_type:null,question:null,a:null,b:null,c:null,d:null,e:null,answer:null,question_image:null},breadcrumbs:[{text:"Sanclass",disabled:!1,href:"/teacher/classes"},{text:this.$store.state.teacher.classDetail.name,disabled:!1,href:"/teacher/classes/class/".concat(this.$store.state.teacher.classDetail.id)},{text:this.$store.state.teacher.meetingDetail.name,disabled:!1,href:"/teacher/classes/class/".concat(this.$store.state.teacher.classDetail.id,"/meeting/").concat(this.$store.state.teacher.meetingDetail.id)},{text:this.$store.state.teacher.quizDetail.name,disabled:!0,href:"/teacher/classes/class/".concat(this.$store.state.teacher.classDetail.id,"/meeting/").concat(this.$store.state.teacher.meetingDetail.id,"/quiz/").concat(this.$store.state.teacher.quizDetail.id)}]}},mounted:function(){this.isLoaded=!0},computed:m({},Object(c.d)("teacher",{classDetail:function(e){return e.classDetail},meetingDetail:function(e){return e.meetingDetail},quizDetail:function(e){return e.quizDetail}})),methods:m(m({openEditQuestionDialog:function(e,t){this.selectedQuestionPayload.index=t,this.editQuestionDialog=!0,this.selectedQuestionPayload.id=e.id,this.selectedQuestionPayload.question_type=e.question_type,this.selectedQuestionPayload.question=e.question,this.selectedQuestionPayload.a=e.a,this.selectedQuestionPayload.b=e.b,this.selectedQuestionPayload.c=e.c,this.selectedQuestionPayload.d=e.d,this.selectedQuestionPayload.e=e.e,this.previewImage=e.question_image,this.selectedQuestionPayload.answer=e.answer,this.selectedQuestionPayload.essay_answer=e.essay_answer},openDeleteQuestionDialog:function(e){this.deleteQuestionDialog=!0,this.selectedQuestionPayload.id=e.id,this.selectedQuestionPayload.question_type=e.question_type,this.selectedQuestionPayload.question=e.question,this.selectedQuestionPayload.a=e.a,this.selectedQuestionPayload.b=e.b,this.selectedQuestionPayload.c=e.c,this.selectedQuestionPayload.d=e.d,this.selectedQuestionPayload.e=e.e,this.selectedQuestionPayload.answer=e.answer,this.selectedQuestionPayload.essay_answer=e.essay_answer},uploadImage:function(e){var t=this;this.isLoading=!0;var l,image=e.target.files[0];if(null!=image){this.errors=null;var n=new FileReader;n.readAsDataURL(image),n.onload=function(e){t.previewImage=e.target.result,console.log(t.previewImage)},$("#dummyImage").show();var o=e.target.files[0],img=document.getElementById("dummyImage");img.file=o;var r=new FileReader;r.onload=(l=img,function(e){document.createElement("img"),new Compressor(o,{quality:.2,success:function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result;console.log(e),l.innerHTML=e}},error:function(e){console.log(e.message)}})}),r.readAsDataURL(o)}this.isLoading=!1},cobaConsole:function(){var e=document.getElementById("dummyImage").innerHTML;console.log(e)},previewImageQuestion:function(e){var t=e.target.files[0];new Compressor(t,{quality:.2,success:function(e){var t=this,l=new FileReader;l.readAsDataURL(e),l.onload=function(e){t.previewImage=e.target.result,console.log(t.previewImage)}},error:function(e){console.log(e.message)}})}},Object(c.b)("teacher",["deleteQuiz","createQuiz","createQuizQuestion","deleteQuestion","editQuizQuestion"])),{},{closeDialog:function(){this.deleteQuizDialog=!1,this.createMultipleQuestionDialog=!1,this.editQuestionDialog=!1,this.clearQuestionPayload(),this.clearSelectedQuestionPayload()},deleteMeetingQuiz:function(){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Delete It !"}).then((function(t){t.isConfirmed?e.deleteQuiz(e.$store.state.teacher.quizDetail.id).then((function(t){e.$swal({type:"success",icon:"success",position:"top-end",toast:!0,timer:3e3,showConfirmButton:!1,title:"Quiz Deleted Successfuly"}),e.snackbar=!0,e.$router.push("/teacher/classes/class/"+e.$store.state.teacher.classDetail.id+"/meeting/"+e.$store.state.teacher.meetingDetail.id)})).catch((function(t){e.closeDialog(),e.text=t,e.snackbar=!0})):e.closeDialog()}))},deleteQuizQuestion:function(){var e=this;this.isLoading=!0,this.deleteQuestion(this.selectedQuestionPayload).then((function(t){e.clearSelectedQuestionPayloadForDelete(),e.deleteQuestionDialog=!1,e.isLoading=!1,e.text="Soal Berhasil Dihapus",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},clearQuestionPayload:function(){this.multipleQuestionPayload.answer=null,this.multipleQuestionPayload.question_type=1,this.multipleQuestionPayload.question=null,this.multipleQuestionPayload.question_image=null,this.multipleQuestionPayload.a=null,this.multipleQuestionPayload.b=null,this.previewImage=null,this.multipleQuestionPayload.c=null,this.multipleQuestionPayload.d=null,this.multipleQuestionPayload.e=null,null!=document.getElementById("dummyImage").innerHTML&&(document.getElementById("dummyImage").innerHTML=null)},clearSelectedQuestionPayload:function(){this.editQuestionDialog=!1,this.selectedQuestionPayload.id=null,this.selectedQuestionPayload.answer=null,this.selectedQuestionPayload.question_type=null,this.selectedQuestionPayload.question=null,this.selectedQuestionPayload.question_image=null,this.selectedQuestionPayload.a=null,this.selectedQuestionPayload.b=null,this.previewImage=null,this.selectedQuestionPayload.c=null,this.selectedQuestionPayload.d=null,this.selectedQuestionPayload.e=null,null!=document.getElementById("dummyImage").innerHTML&&(document.getElementById("dummyImage").innerHTML=null)},clearSelectedQuestionPayloadForDelete:function(){this.editQuestionDialog=!1,this.selectedQuestionPayload.id=null,this.selectedQuestionPayload.answer=null,this.selectedQuestionPayload.question_type=null,this.selectedQuestionPayload.question=null,this.selectedQuestionPayload.question_image=null,this.selectedQuestionPayload.a=null,this.selectedQuestionPayload.b=null,this.selectedQuestionPayload.c=null,this.selectedQuestionPayload.d=null,this.selectedQuestionPayload.e=null},createQuizMultipleQuestion:function(){var e=this;this.isLoading=!0;var t=document.getElementById("dummyImage").innerHTML;null==t?1==this.multipleQuestionPayload.question_type?(this.multipleQuestionPayload.essay_answer=null,this.createQuizQuestion(this.multipleQuestionPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Soal Berhasil Dibuat",e.snackbar=!0,e.clearQuestionPayload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))):2==this.multipleQuestionPayload.question_type&&(this.multipleQuestionPayload.a=null,this.multipleQuestionPayload.b=null,this.multipleQuestionPayload.c=null,this.multipleQuestionPayload.d=null,this.multipleQuestionPayload.e=null,this.multipleQuestionPayload.answer=null,this.createQuizQuestion(this.multipleQuestionPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Soal Berhasil Dibuat",e.snackbar=!0,e.clearQuestionPayload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))):null!=t&&(this.multipleQuestionPayload.question_image=t,1==this.multipleQuestionPayload.question_type?(this.multipleQuestionPayload.essay_answer=null,this.createQuizQuestion(this.multipleQuestionPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Soal Berhasil Dibuat",e.snackbar=!0,e.clearQuestionPayload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))):2==this.multipleQuestionPayload.question_type&&(this.multipleQuestionPayload.a=null,this.multipleQuestionPayload.b=null,this.multipleQuestionPayload.c=null,this.multipleQuestionPayload.d=null,this.multipleQuestionPayload.e=null,this.multipleQuestionPayload.answer=null,this.createQuizQuestion(this.multipleQuestionPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Soal Berhasil Dibuat",e.snackbar=!0,e.clearQuestionPayload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))))},editQuizMultipleQuestion:function(){var e=this;this.isLoading=!0;var t=document.getElementById("dummyImage").innerHTML;null==t?1==this.selectedQuestionPayload.question_type?(this.selectedQuestionPayload.essay_answer=null,this.editQuizQuestion(this.selectedQuestionPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Soal Berhasil Diedit",e.snackbar=!0,e.clearSelectedQuestionPayload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))):2==this.selectedQuestionPayload.question_type&&(this.selectedQuestionPayload.a=null,this.selectedQuestionPayload.b=null,this.selectedQuestionPayload.c=null,this.selectedQuestionPayload.d=null,this.selectedQuestionPayload.e=null,this.selectedQuestionPayload.answer=null,this.editQuizQuestion(this.selectedQuestionPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Soal Berhasil Diedit",e.snackbar=!0,e.clearSelectedQuestionPayload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))):null!=t&&(this.selectedQuestionPayload.question_image=t,1==this.selectedQuestionPayload.question_type?(this.selectedQuestionPayload.essay_answer=null,this.editQuizQuestion(this.selectedQuestionPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Soal Berhasil Diedit",e.snackbar=!0,e.clearSelectedQuestionPayload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))):2==this.selectedQuestionPayload.question_type&&(this.selectedQuestionPayload.a=null,this.selectedQuestionPayload.b=null,this.selectedQuestionPayload.c=null,this.selectedQuestionPayload.d=null,this.selectedQuestionPayload.e=null,this.selectedQuestionPayload.answer=null,this.editQuizQuestion(this.selectedQuestionPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Soal Berhasil Diedit",e.snackbar=!0,e.clearSelectedQuestionPayload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))))}})},h=(l(691),l(36)),Q=l(61),_=l.n(Q),f=l(555),P=l(533),w=l(214),x=l(566),D=l(227),k=l(215),C=l(93),z=l(565),S=l(600),A=l(528),L=l(703),I=l(90),j=l(556),B=l(213),V=l(544),E=l(217),M=l(130),O=l(18),T=l(520),R=l(216),N=l(584),H=l(596),F=l(603),U=l(583),W=l(531),G=l(518),Y=l(685),J=l(59),K=l(561),component=Object(h.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[n("v-container",[0==e.isLoaded?n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{jalign:"center",justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-progress-linear",{attrs:{rounded:"",height:"6",indeterminate:"",color:"blue lighten-1"}})],1)],1)],1):e._e(),e._v(" "),1==e.isLoaded?n("v-flex",[n("v-alert",{staticStyle:{"text-decoration":"none","font-weight":"bold"},attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[n("v-fab-transition",[n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"teacher-classes-class-id-meeting-meetingid",params:{id:e.classDetail.id,meetingid:e.meetingDetail.id}}}},[n("v-btn",{attrs:{color:"blue darken-1",fab:"",dark:"",medium:"",fixed:"",bottom:"",left:""}},[n("v-icon",[e._v("mdi-arrow-left")])],1)],1)],1),e._v(" "),n("v-breadcrumbs",{staticClass:"pb-1 pt-3",attrs:{link:"",items:e.breadcrumbs,divider:"/"}})],1),e._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{align:"left",cols:"12"}},[n("v-card",{attrs:{color:"#35B5AC",dark:""}},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-icon",{attrs:{color:"white"}},[e._v("mdi-pencil")]),e._v(" "),n("v-card-title",{staticClass:"text-left",staticStyle:{"font-weight":"bolder"}},[e._v(" Quiz ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"white",icon:""}},"v-btn",o,!1),l),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,3444389850)},[e._v(" "),n("v-list",[n("v-list-item",{attrs:{link:""},on:{click:function(t){e.deleteQuizDialog=!0}}},[n("v-list-item-title",{staticStyle:{"font-weight":"bold"}},[n("v-icon",[e._v("mdi-delete")]),e._v(" Delete\n                        Quiz")],1)],1)],1)],1)],1),e._v(" "),n("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n                "+e._s(e.quizDetail.name)+" ("+e._s(e.quizDetail.duration)+" Min)\n               ")]),e._v(" "),n("v-card-subtitle",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.classDetail.teacher_name))]),e._v(" "),n("v-col",[n("v-chip",{staticClass:"my-2",staticStyle:{"font-weight":"bold"},attrs:{color:"teal darken-3","text-color":"white"}},[n("v-avatar",{attrs:{left:""}},[n("v-icon",[e._v("mdi-calendar")])],1),e._v(e._s(e.meetingDetail.date)+"\n                ")],1),e._v(" "),n("v-chip",{staticClass:"my-2",staticStyle:{"font-weight":"bold"},attrs:{color:"teal darken-2","text-color":"white"}},[e._v(e._s(e.meetingDetail.start_time)+" -\n                  "+e._s(e.meetingDetail.finish_time))])],1),e._v(" "),n("v-card-actions"),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"mr-4 mb-2 my-4",staticStyle:{"font-weight":"bold"},attrs:{small:"",rounded:"",color:"green",dark:""},on:{click:function(t){e.createMultipleQuestionDialog=!0}}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n\n                  Add Question\n                ")],1)],1)],1)],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("No")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Type")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Question")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Answer Key")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Question Image")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Actions")])])]),e._v(" "),n("tbody",e._l(e.quizDetail.questions,(function(t,l){return n("tr",{key:t.id},[n("td",[e._v(e._s(l+1))]),e._v(" "),n("td",[1==t.question_type?n("div",{staticClass:"text-center"},[e._v("\n                          Multiple Choice \n                         ")]):e._e(),e._v(" "),2==t.question_type?n("div",{staticClass:"text-center"},[e._v("\n                          Essay\n                         ")]):e._e()]),e._v(" "),n("td",[e._v("\n                        \n                        "+e._s(t.question)+"\n             \n                      ")]),e._v(" "),n("td",[n("div",{staticClass:"text-center"},[e._v("\n                          "+e._s(t.answer)+"\n                        ")])]),e._v(" "),n("td",[n("div",{staticClass:"text-center"},[null!=t.question_image?n("v-btn",{attrs:{target:"_blank",href:t.question_image,color:"primary",rounded:"","x-small":""}},[e._v(" Image")]):e._e()],1)]),e._v(" "),n("td",[n("div",{staticClass:"text-center"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,d=o.attrs;return[n("v-btn",e._g(e._b({staticStyle:{color:"white","font-weight":"bold"},attrs:{color:"orange darken-1",rounded:"","x-small":"",icon:"",large:""},on:{click:function(n){return e.openEditQuestionDialog(t,l)}}},"v-btn",d,!1),r),[n("v-icon",[e._v("mdi-pencil-circle")])],1)]}}],null,!0)},[e._v(" "),n("span",[e._v("Edit Question")])]),e._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(l){var o=l.on,r=l.attrs;return[n("v-btn",e._g(e._b({staticStyle:{color:"white","font-weight":"bold"},attrs:{color:"red darken-1",rounded:"","x-small":"",icon:"",large:""},on:{click:function(l){return e.openDeleteQuestionDialog(t)}}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-delete-circle")])],1)]}}],null,!0)},[e._v(" "),n("span",[e._v("Delete Question")])]),e._v(" "),2==t.question_type?n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"teacher-classes-class-id-meeting-meetingid-quiz-quizid-correct_answer-questionid",params:{id:e.classDetail.id,meetingid:e.meetingDetail.id,quizid:e.meetingDetail.quiz.id,questionid:t.id}}}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticStyle:{color:"white","font-weight":"bold"},attrs:{color:"light-blue darken-2",large:"",icon:""}},"v-btn",o,!1),l),[n("v-icon",[e._v("mdi-check-circle")])],1)]}}],null,!0)},[e._v(" "),n("span",[e._v("Correct Essay Answers")])])],1):e._e()],1)])])})),0)]},proxy:!0}],null,!1,3615077590)})],1)],1)],1)],1):e._e(),e._v(" "),n("div",{staticClass:"text-center"},[n("v-snackbar",{attrs:{timeout:"2000"},scopedSlots:e._u([{key:"action",fn:function(t){var l=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",l,!1),[e._v("\n              Close\n            ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n          "+e._s(e.text)+"\n\n          ")])],1),e._v(" "),n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[e._v("\n          Please Wait...\n          "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:e.deleteQuizDialog,callback:function(t){e.deleteQuizDialog=t},expression:"deleteQuizDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v(" Delete Quiz ")]),e._v(" "),n("v-card-text",[e._v("Apakah anda yakin ingin menghapus quiz\n            "),n("code",[e._v(e._s(e.quizDetail.name))]),e._v(" dari pertemuan\n            "),n("code",[e._v(e._s(e.meetingDetail.name))]),e._v(" ?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n              Batal\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.deleteMeetingQuiz}},[e._v("\n              Delete\n            ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:e.deleteQuestionDialog,callback:function(t){e.deleteQuestionDialog=t},expression:"deleteQuestionDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v(" Delete Question ")]),e._v(" "),n("v-card-text",[e._v("Apakah anda yakin ingin menghapus pertanyaan ini dari quiz\n            "),n("code",[e._v(e._s(e.quizDetail.name)+" ")]),e._v(" ? ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(t){e.deleteQuestionDialog=!1}}},[e._v("\n              Batal\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.deleteQuizQuestion}},[e._v("\n              Delete\n            ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:e.createMultipleQuestionDialog,callback:function(t){e.createMultipleQuestionDialog=t},expression:"createMultipleQuestionDialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n              Create Question\n            ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closeDialog}},[n("v-icon",[e._v("mdi-close-thick")])],1)],1),e._v(" "),1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var l=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.createQuizMultipleQuestion(t)}}},[n("v-card-text",[n("v-col",{staticClass:"mb-n5",attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Question Type",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[n("v-select",{attrs:{label:"Question Type","error-messages":l,items:e.option,outlined:"","persistent-hint":"","item-text":"text","item-value":"value"},model:{value:e.multipleQuestionPayload.question_type,callback:function(t){e.$set(e.multipleQuestionPayload,"question_type",t)},expression:"multipleQuestionPayload.question_type"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{staticClass:"my-n5",attrs:{align:"center",cols:"12"}},[n("v-card-subtitle",{staticStyle:{"font-weight":"bold"}},[e._v("Gambar Soal")]),e._v(" "),e.previewImage?n("v-card",[n("b-img",{attrs:{"blank-color":"#777",center:"",fluid:"","blank-src":"https://picsum.photos/id/11/100/60",src:e.previewImage,"v-model":e.previewImage}}),e._v(" "),n("v-card-subtitle",{staticClass:"text-center"},[e._v("\n                        Gambar Yang Dipilih\n                        ")])],1):e._e(),e._v(" "),e.previewImage?e._e():n("v-card",[n("v-card-subtitle",{staticClass:"text-center"},[e._v("\n                        Tidak Ada Gambar yang Dipilih\n                        ")])],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-col",{attrs:{cols:"12"}},[n("b-form-file",{ref:"file",attrs:{id:"file",type:"file",accept:"image/*"},on:{change:e.uploadImage}})],1),e._v(" "),n("p",{ref:"image",staticClass:"sembunyi",attrs:{id:"dummyImage"}}),e._v(" "),n("validation-provider",{attrs:{name:"Quiz Question",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[n("v-textarea",{attrs:{counter:35,"error-messages":l,label:"Quiz Question",required:"","auto-grow":"",outlined:"",dense:""},model:{value:e.multipleQuestionPayload.question,callback:function(t){e.$set(e.multipleQuestionPayload,"question",t)},expression:"multipleQuestionPayload.question"}})]}}],null,!0)})],1),e._v(" "),1==e.multipleQuestionPayload.question_type?n("div",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.multipleQuestionPayload.answer,expression:"multipleQuestionPayload.answer"}],attrs:{id:"jawabanA",type:"radio",value:"a",name:"jawaban"},domProps:{checked:e._q(e.multipleQuestionPayload.answer,"a")},on:{change:function(t){return e.$set(e.multipleQuestionPayload,"answer","a")}}}),e._v(" A  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer A",required:"",outlined:"",dense:""},model:{value:e.multipleQuestionPayload.a,callback:function(t){e.$set(e.multipleQuestionPayload,"a",t)},expression:"multipleQuestionPayload.a"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.multipleQuestionPayload.answer,expression:"multipleQuestionPayload.answer"}],attrs:{id:"jawabanB",type:"radio",name:"jawaban",value:"b"},domProps:{checked:e._q(e.multipleQuestionPayload.answer,"b")},on:{change:function(t){return e.$set(e.multipleQuestionPayload,"answer","b")}}}),e._v(" B  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer B",required:"",outlined:"",dense:""},model:{value:e.multipleQuestionPayload.b,callback:function(t){e.$set(e.multipleQuestionPayload,"b",t)},expression:"multipleQuestionPayload.b"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.multipleQuestionPayload.answer,expression:"multipleQuestionPayload.answer"}],attrs:{id:"jawabanC",type:"radio",name:"jawaban",value:"c"},domProps:{checked:e._q(e.multipleQuestionPayload.answer,"c")},on:{change:function(t){return e.$set(e.multipleQuestionPayload,"answer","c")}}}),e._v(" C  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer C",required:"",outlined:"",dense:""},model:{value:e.multipleQuestionPayload.c,callback:function(t){e.$set(e.multipleQuestionPayload,"c",t)},expression:"multipleQuestionPayload.c"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.multipleQuestionPayload.answer,expression:"multipleQuestionPayload.answer"}],attrs:{id:"jawabanD",type:"radio",name:"jawaban",value:"d"},domProps:{checked:e._q(e.multipleQuestionPayload.answer,"d")},on:{change:function(t){return e.$set(e.multipleQuestionPayload,"answer","d")}}}),e._v(" D  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer D",required:"",outlined:"",dense:""},model:{value:e.multipleQuestionPayload.d,callback:function(t){e.$set(e.multipleQuestionPayload,"d",t)},expression:"multipleQuestionPayload.d"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.multipleQuestionPayload.answer,expression:"multipleQuestionPayload.answer"}],attrs:{id:"jawabanE",type:"radio",name:"jawaban",value:"e"},domProps:{checked:e._q(e.multipleQuestionPayload.answer,"e")},on:{change:function(t){return e.$set(e.multipleQuestionPayload,"answer","e")}}}),e._v(" E  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer E",required:"",outlined:"",dense:""},model:{value:e.multipleQuestionPayload.e,callback:function(t){e.$set(e.multipleQuestionPayload,"e",t)},expression:"multipleQuestionPayload.e"}})],1)],1)],1):e._e(),e._v(" "),2==e.multipleQuestionPayload.question_type?n("div",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Essay Answer"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[n("v-textarea",{attrs:{counter:35,"error-messages":l,label:"Quiz Essay Answer",placeholder:"Tidak Wajib Di isi, Anda Harus tetap menilai soal essay secara manual di sistem",required:"","auto-grow":"",outlined:"",dense:""},model:{value:e.multipleQuestionPayload.essay_answer,callback:function(t){e.$set(e.multipleQuestionPayload,"essay_answer",t)},expression:"multipleQuestionPayload.essay_answer"}})]}}],null,!0)})],1)],1):e._e()],1),e._v(" "),n("v-card-actions",{staticClass:"py-4 pb-4",staticStyle:{"background-color":"#e0e0e0"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n                  CANCEL\n                ")]),e._v(" "),n("v-btn",{staticClass:"py-4 pb-4",attrs:{disabled:l,color:"primary"},on:{click:e.createQuizMultipleQuestion}},[e._v("\n                  Create\n                ")])],1)],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:e.editQuestionDialog,callback:function(t){e.editQuestionDialog=t},expression:"editQuestionDialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticStyle:{"font-weight":"bold"}},[e._v("\n              Edit Question No "+e._s(e.selectedQuestionPayload.index+1)+" \n            ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closeDialog}},[n("v-icon",[e._v("mdi-close-thick")])],1)],1),e._v(" "),1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.editQuizMultipleQuestion(t)}}},[n("v-card-text",[n("v-col",{staticClass:"mb-n5",attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Question Type",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[n("v-select",{attrs:{label:"Question Type","error-messages":l,items:e.option,outlined:"","persistent-hint":"","item-text":"text","item-value":"value"},model:{value:e.selectedQuestionPayload.question_type,callback:function(t){e.$set(e.selectedQuestionPayload,"question_type",t)},expression:"selectedQuestionPayload.question_type"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{staticClass:"my-n5",attrs:{align:"center",cols:"12"}},[n("v-card-subtitle",{staticStyle:{"font-weight":"bold"}},[e._v("Question Image")]),e._v(" "),e.previewImage?n("v-card",[n("b-img",{attrs:{"blank-color":"#777",center:"",fluid:"","blank-src":"https://picsum.photos/id/11/100/60",src:e.previewImage,"v-model":e.previewImage}}),e._v(" "),n("v-card-subtitle",{staticClass:"text-center"},[e._v("\n                        Selected Image\n                        ")])],1):e._e(),e._v(" "),e.previewImage?e._e():n("v-card",[n("b-img",{attrs:{"blank-color":"#777",center:"",fluid:"",src:l(690)}}),e._v(" "),n("v-card-subtitle",{staticClass:"text-center"},[e._v("\n                        No Image Selected\n                        ")])],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-col",{attrs:{cols:"12"}},[n("b-form-file",{ref:"file",attrs:{id:"file",type:"file",accept:"image/*"},on:{change:e.uploadImage}})],1),e._v(" "),n("p",{ref:"image",staticClass:"sembunyi",attrs:{id:"dummyImage"}}),e._v(" "),n("validation-provider",{attrs:{name:"Quiz Question",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[n("v-textarea",{attrs:{counter:35,"error-messages":l,label:"Quiz Question",required:"","auto-grow":"",outlined:"",dense:""},model:{value:e.selectedQuestionPayload.question,callback:function(t){e.$set(e.selectedQuestionPayload,"question",t)},expression:"selectedQuestionPayload.question"}})]}}],null,!0)})],1),e._v(" "),1==e.selectedQuestionPayload.question_type?n("div",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuestionPayload.answer,expression:"selectedQuestionPayload.answer"}],attrs:{id:"jawabanA",type:"radio",value:"a",name:"jawaban"},domProps:{checked:e._q(e.selectedQuestionPayload.answer,"a")},on:{change:function(t){return e.$set(e.selectedQuestionPayload,"answer","a")}}}),e._v(" A  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer A",required:"",outlined:"",dense:""},model:{value:e.selectedQuestionPayload.a,callback:function(t){e.$set(e.selectedQuestionPayload,"a",t)},expression:"selectedQuestionPayload.a"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuestionPayload.answer,expression:"selectedQuestionPayload.answer"}],attrs:{id:"jawabanB",type:"radio",name:"jawaban",value:"b"},domProps:{checked:e._q(e.selectedQuestionPayload.answer,"b")},on:{change:function(t){return e.$set(e.selectedQuestionPayload,"answer","b")}}}),e._v(" B  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer B",required:"",outlined:"",dense:""},model:{value:e.selectedQuestionPayload.b,callback:function(t){e.$set(e.selectedQuestionPayload,"b",t)},expression:"selectedQuestionPayload.b"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuestionPayload.answer,expression:"selectedQuestionPayload.answer"}],attrs:{id:"jawabanC",type:"radio",name:"jawaban",value:"c"},domProps:{checked:e._q(e.selectedQuestionPayload.answer,"c")},on:{change:function(t){return e.$set(e.selectedQuestionPayload,"answer","c")}}}),e._v(" C  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer C",required:"",outlined:"",dense:""},model:{value:e.selectedQuestionPayload.c,callback:function(t){e.$set(e.selectedQuestionPayload,"c",t)},expression:"selectedQuestionPayload.c"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuestionPayload.answer,expression:"selectedQuestionPayload.answer"}],attrs:{id:"jawabanD",type:"radio",name:"jawaban",value:"d"},domProps:{checked:e._q(e.selectedQuestionPayload.answer,"d")},on:{change:function(t){return e.$set(e.selectedQuestionPayload,"answer","d")}}}),e._v(" D  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer D",required:"",outlined:"",dense:""},model:{value:e.selectedQuestionPayload.d,callback:function(t){e.$set(e.selectedQuestionPayload,"d",t)},expression:"selectedQuestionPayload.d"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Answer",rules:"required"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuestionPayload.answer,expression:"selectedQuestionPayload.answer"}],attrs:{id:"jawabanE",type:"radio",name:"jawaban",value:"e"},domProps:{checked:e._q(e.selectedQuestionPayload.answer,"e")},on:{change:function(t){return e.$set(e.selectedQuestionPayload,"answer","e")}}}),e._v(" E  "),n("v-text-field",{staticClass:"textRadio",attrs:{counter:35,label:"Answer E",required:"",outlined:"",dense:""},model:{value:e.selectedQuestionPayload.e,callback:function(t){e.$set(e.selectedQuestionPayload,"e",t)},expression:"selectedQuestionPayload.e"}})],1)],1)],1):e._e(),e._v(" "),2==e.selectedQuestionPayload.question_type?n("div",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Essay Answer"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[n("v-textarea",{attrs:{counter:35,"error-messages":l,label:"Quiz Essay Answer",placeholder:"Tidak Wajib Di isi, Anda Harus tetap menilai soal essay secara manual di sistem",required:"","auto-grow":"",outlined:"",dense:""},model:{value:e.selectedQuestionPayload.essay_answer,callback:function(t){e.$set(e.selectedQuestionPayload,"essay_answer",t)},expression:"selectedQuestionPayload.essay_answer"}})]}}],null,!0)})],1)],1):e._e()],1),e._v(" "),n("v-card-actions",{staticClass:"py-4 pb-4",staticStyle:{"background-color":"#e0e0e0"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n                  CANCEL\n                ")]),e._v(" "),n("v-btn",{staticClass:"py-4 pb-4",attrs:{disabled:o,color:"primary"},on:{click:e.editQuizMultipleQuestion}},[e._v("\n                  Edit\n                ")])],1)],1)]}}])})],1)],1)],1)],1)}),[],!1,null,"ceb3f508",null);t.default=component.exports;_()(component,{VAlert:f.a,VAppBar:P.a,VAvatar:w.a,VBreadcrumbs:x.a,VBtn:D.a,VCard:k.a,VCardActions:C.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VChip:z.a,VCol:S.a,VContainer:A.a,VDialog:L.a,VFabTransition:I.c,VFlex:j.a,VIcon:B.a,VLayout:V.a,VList:E.a,VListItem:M.a,VListItemTitle:O.c,VMenu:T.a,VProgressLinear:R.a,VRow:N.a,VSelect:H.a,VSimpleTable:F.a,VSnackbar:U.a,VSpacer:W.a,VTextField:G.a,VTextarea:Y.a,VToolbar:J.a,VTooltip:K.a})}}]);