// { "framework": "Vue"} 

!function(e){function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=27)}({0:function(e,t){e.exports=function(e,t,n,s,o){var i,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,r=e.default);var l="function"==typeof r?r.options:r;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),s&&(l._scopeId=s);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=n),c){var d=l.functional,u=d?l.render:l.beforeCreate;d?l.render=function(e,t){return c.call(t),u(e,t)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:i,exports:r,options:l}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(s[i]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},16:function(e,t,n){"use strict";var s=weex.requireModule("dom");e.exports={data:{url:"http://g.tbcdn.cn/ali-wireless-h5/res/0.0.16/hello.js",img:"//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg",size:{width:0,height:0,top:0,bottom:0,left:0,right:0}},mounted:function(){var e=this;console.log("mounted","mounted"),setTimeout(function(){s.getComponentRect(e.$refs.box,function(t){t.result&&t.size&&(e.size=t.size)})},20),"web"===this.$getConfig().env.platform.toLowerCase()&&(this.url="http://192.168.0.68:8081/web/index.html?page=/dist/index.js")},methods:{testClick:function(){console.log("testClick","testClick"),goSite()},goSite:function(){console.log("goSite","goSite"),navigator.push({url:"http://duqian.net.cn",animated:"false"})}}}},2:function(e,t,n){function s(e){for(var t=0;t<e.length;t++){var n=e[t],s=d[n.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(i(n.parts[o]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:r}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,s=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(s){if(h)return A;s.parentNode.removeChild(s)}if(v){var i=f++;s=p||(p=o()),t=r.bind(null,s,i,!1),n=r.bind(null,s,i,!0)}else s=o(),t=a.bind(null,s),n=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else n()}}function r(e,t,n,s){var o=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function a(e,t){var n=t.css,s=t.media,o=t.sourceMap;if(s&&e.setAttribute("media",s),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,A=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=c(e,t);return s(o),function(t){for(var n=[],i=0;i<o.length;i++){var r=o[i],a=d[r.id];a.refs--,n.push(a)}t?(o=c(e,t),s(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},27:function(e,t,n){"use strict";var s=n(6);s.el="#root",new Vue(s)},3:function(e,t){e.exports=function(e,t){for(var n=[],s={},o=0;o<t.length;o++){var i=t[o],r=i[0],a=i[1],l=i[2],c=i[3],d={id:e+":"+o,css:a,media:l,sourceMap:c};s[r]?s[r].parts.push(d):n.push(s[r]={id:r,parts:[d]})}return n}},37:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.wrap[data-v-7dfeddd0] {\n  width: 750px;\n  height: 800px;\n  align-items: center;\n  justify-content: center;\n}\n.wrap_text[data-v-7dfeddd0] {\n  font-size: 25;\n  margin-top: 20;\n  height: 50;\n}\n.img[data-v-7dfeddd0] {\n  width: 200;\n  height: 200;\n  align-items: center;\n  justify-content: center;\n}\n.a_link[data-v-7dfeddd0] {\n  margin-top: 20;\n  align-items: center;\n  justify-content: center;\n}\n.box[data-v-7dfeddd0] {\n  width: 450px;\n  height: 300px;\n  background-color: #ddd;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgb(162, 217, 192);\n  background-color: rgba(162, 217, 192, 0.2);\n}\n","",{version:3,sources:["/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/home.vue?e374d042"],names:[],mappings:";AAoEA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,wBAAA;CACA;AACA;EACA,cAAA;EACA,eAAA;EACA,WAAA;CACA;AACA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,wBAAA;CACA;AACA;EACA,eAAA;EACA,oBAAA;EACA,wBAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;EACA,uBAAA;EACA,kBAAA;EACA,oBAAA;EACA,iCAAA;EACA,2CAAA;CACA",file:"home.vue",sourcesContent:['<template>\n    <div class="wrap">\n        <text class="wrap_text" @click="goSite">Hello,Weex from Dusan!</text>\n        <button value="用户登陆" type="success" @click="testClick">Login</button>\n        <a class=\'a_link\' href="http://g.tbcdn.cn/ali-wireless-h5/res/0.0.16/hello.js">\n            <text value="duqian2010@gmail.com"></text>\n        </a>\n        <image class="img" :src="img"  @click="testClick" />\n\n        <div ref="box" class="box">\n          <text class="info">Width: {{size.width}}</text>\n          <text class="info">Height: {{size.height}}</text>\n          <text class="info">Top: {{size.top}}</text>\n          <text class="info">Bottom: {{size.bottom}}</text>\n          <text class="info">Left: {{size.left}}</text>\n          <text class="info">Right: {{size.right}}</text>\n        </div>\n    </div>\n</template>\n\n<script>\nconst dom = weex.requireModule("dom");\nmodule.exports = {\n  data: {\n    url: "http://g.tbcdn.cn/ali-wireless-h5/res/0.0.16/hello.js",\n    img:\n      "//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg",\n    size: {\n      width: 0,\n      height: 0,\n      top: 0,\n      bottom: 0,\n      left: 0,\n      right: 0\n    }\n  },\n  mounted() {\n    console.log("mounted", "mounted");\n    setTimeout(() => {\n      dom.getComponentRect(this.$refs.box, option => {\n        if (option.result && option.size) {\n          this.size = option.size;\n        }\n      });\n    }, 20);\n\n    var platform = this.$getConfig().env.platform.toLowerCase();\n    if (platform === "web") {\n      this.url = "http://192.168.0.68:8081/web/index.html?page=/dist/index.js";\n    }\n  },\n  methods: {\n    testClick: function() {\n      console.log("testClick", "testClick");\n      goSite();\n    },\n    goSite() {\n      console.log("goSite", "goSite");\n      navigator.push({\n        url: "http://duqian.net.cn",\n        animated: "false"\n      });\n    }\n  }\n};\n<\/script>\n\n<style scoped>\n.wrap {\n  width: 750px;\n  height: 800px;\n  align-items: center;\n  justify-content: center;\n}\n.wrap_text {\n  font-size: 25;\n  margin-top: 20;\n  height: 50;\n}\n.img {\n  width: 200;\n  height: 200;\n  align-items: center;\n  justify-content: center;\n}\n.a_link {\n  margin-top: 20;\n  align-items: center;\n  justify-content: center;\n}\n.box {\n  width: 450px;\n  height: 300px;\n  background-color: #ddd;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgb(162, 217, 192);\n  background-color: rgba(162, 217, 192, 0.2);\n}\n</style>\n'],sourceRoot:""}])},50:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("text",{staticClass:"wrap_text",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.goSite}},[e._v("Hello,Weex from Dusan!")]),e._v(" "),n("button",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{value:"用户登陆",type:"success"},on:{click:e.testClick}},[e._v("Login")]),e._v(" "),n("a",{staticClass:"a_link",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{href:"http://g.tbcdn.cn/ali-wireless-h5/res/0.0.16/hello.js"}},[n("text",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{value:"duqian2010@gmail.com"}})]),e._v(" "),n("image",{staticClass:"img",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{src:e.img},on:{click:e.testClick}}),e._v(" "),n("div",{ref:"box",staticClass:"box",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("text",{staticClass:"info",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Width: "+e._s(e.size.width))]),e._v(" "),n("text",{staticClass:"info",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Height: "+e._s(e.size.height))]),e._v(" "),n("text",{staticClass:"info",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Top: "+e._s(e.size.top))]),e._v(" "),n("text",{staticClass:"info",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Bottom: "+e._s(e.size.bottom))]),e._v(" "),n("text",{staticClass:"info",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Left: "+e._s(e.size.left))]),e._v(" "),n("text",{staticClass:"info",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Right: "+e._s(e.size.right))])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},59:function(e,t,n){var s=n(37);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(2)("e6117774",s,!1)},6:function(e,t,n){function s(e){o||n(59)}var o=!1,i=n(0)(n(16),n(50),s,"data-v-7dfeddd0",null);i.options.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/home.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports}});
//# sourceMappingURL=home.web.js.map