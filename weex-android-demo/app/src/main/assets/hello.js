// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=28)}({1:function(e,t,n){"use strict";var o=weex.requireModule("modal"),r=weex.requireModule("MyMoudle");e.exports={data:function(){return{logo:"https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",target:"Weex"}},methods:{testToast:function(){o.toast({message:"clicked,testToast",duration:1}),this.target="Nono"},testEvent:function(){r.printLog("myMoudle duqian")}}}},12:function(e,t){e.exports={wrapper:{alignItems:"center",paddingTop:20,backgroundColor:"#F0FFFF"},title:{lineHeight:60,fontSize:28,alignItems:"center",textAlign:"center",color:"#0000FF"},btn:{width:350,backgroundColor:"#FAEBD7",alignItems:"center",textAlign:"center",fontSize:28,paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10}}},19:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("button",{staticClass:["btn"],on:{click:e.testToast}},[e._v("Hello weex")]),n("text",{staticClass:["title"]},[e._v("Hello DuQian, "+e._s(e.target)+" Up!")]),n("button",{staticClass:["btn"],on:{click:e.testEvent}},[e._v("测试js和Native交互")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},28:function(e,t,n){var o,r,s=[];s.push(n(12)),o=n(1);var i=n(19);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/duqian/Downloads/Nonolive/Weex_ReactNative/weex_demo/weex-project/src/hello.vue",r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-961f8304",r.style=r.style||{},s.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),e.exports=o,e.exports.el="true",new Vue(e.exports)}});