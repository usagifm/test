(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{535:function(t,e,n){"use strict";var r=n(540),o=n(541);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},540:function(t,e,n){"use strict";var r=n(11),o=n(34),c=n(143),l=n(53),f=n(320),d=n(319),v=n(179),h=n(45),y=n(27),x=n(235),O=n(95),m=n(236);t.exports=function(t,e,n){var j=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),S=j?"set":"add",k=o[t],z=k&&k.prototype,E=k,N={},P=function(t){var e=z[t];l(z,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof k||!(w||z.forEach&&!y((function(){(new k).entries().next()})))))E=n.getConstructor(e,t,j,S),f.REQUIRED=!0;else if(c(t,!0)){var C=new E,D=C[S](w?{}:-0,1)!=C,I=y((function(){C.has(1)})),M=x((function(t){new k(t)})),R=!w&&y((function(){for(var t=new k,e=5;e--;)t[S](e,e);return!t.has(-0)}));M||((E=e((function(e,n){v(e,E,t);var r=m(new k,e,E);return null!=n&&d(n,r[S],{that:r,AS_ENTRIES:j}),r}))).prototype=z,z.constructor=E),(I||R)&&(P("delete"),P("has"),j&&P("get")),(R||D)&&P(S),w&&z.clear&&delete z.clear}return N[t]=E,r({global:!0,forced:E!=k},N),O(E,t),w||n.setStrong(E,t,j),E}},541:function(t,e,n){"use strict";var r=n(52).f,o=n(117),c=n(233),l=n(94),f=n(179),d=n(319),v=n(232),h=n(234),y=n(49),x=n(320).fastKey,O=n(77),m=O.set,j=O.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e),m(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),O=j(e),w=function(t,e,n){var r,o,c=O(t),l=S(t,e);return l?l.value=n:(c.last=l={index:o=x(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},S=function(t,e){var n,r=O(t),o=x(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(h.prototype,{clear:function(){for(var t=O(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=O(this),n=S(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),y?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=O(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(h.prototype,n?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),y&&r(h.prototype,"size",{get:function(){return O(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=j(e),c=j(r);v(t,e,(function(t,e){m(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},559:function(t,e,n){"use strict";n(14),n(46),n(42),n(48),n(535),n(24),n(64),n(17),n(6),n(70),n(20),n(66),n(21),n(93);var r=n(0),o=(n(321),n(2)),c=n(71),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.z)(e)]={type:[String,Number],default:null},t}),{}),x=v.reduce((function(t,e){return t["order"+Object(l.z)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(x)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var j=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=j.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),j.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},568:function(t,e,n){var content=n(597);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("d3fc49c0",content,!0,{sourceMap:!1})},596:function(t,e,n){"use strict";n(568)},597:function(t,e,n){(e=n(8)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},686:function(t,e,n){"use strict";n.r(e);var r={middleware:["auth-student"],layout:"home",data:function(){return{}},mounted:function(){}},o=(n(596),n(37)),c=n(54),l=n.n(c),f=n(559),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("v-col")}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a})}}]);