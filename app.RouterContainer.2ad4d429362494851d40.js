(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./node_modules/util/node_modules/inherits/inherits_browser.js":function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},"./node_modules/util/support/isBufferBrowser.js":function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},"./node_modules/util/util.js":function(e,t,r){(function(e){var n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(s(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,i=n.length,u=String(e).replace(o,(function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}})),c=n[r];r<i;c=n[++r])m(c)||!j(c)?u+=" "+c:u+=" "+s(c);return u},t.deprecate=function(r,n){if(void 0!==e&&!0===e.noDeprecation)return r;if(void 0===e)return function(){return t.deprecate(r,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),o=!0}return r.apply(this,arguments)}};var i,u={};function s(e,r){var n={seen:[],stylize:l};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(r)?n.showHidden=r:r&&t._extend(n,r),g(n.showHidden)&&(n.showHidden=!1),g(n.depth)&&(n.depth=2),g(n.colors)&&(n.colors=!1),g(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),a(n,e,n.depth)}function c(e,t){var r=s.styles[t];return r?"["+s.colors[r][0]+"m"+e+"["+s.colors[r][1]+"m":e}function l(e,t){return e}function a(e,r,n){if(e.customInspect&&r&&O(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,e);return b(o)||(o=a(e,o,n)),o}var i=function(e,t){if(g(t))return e.stylize("undefined","undefined");if(b(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(h(t))return e.stylize(""+t,"number");if(y(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,r);if(i)return i;var u=Object.keys(r),s=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(r)),w(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return f(r);if(0===u.length){if(O(r)){var c=r.name?": "+r.name:"";return e.stylize("[Function"+c+"]","special")}if(v(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(_(r))return e.stylize(Date.prototype.toString.call(r),"date");if(w(r))return f(r)}var l,j="",S=!1,E=["{","}"];(d(r)&&(S=!0,E=["[","]"]),O(r))&&(j=" [Function"+(r.name?": "+r.name:"")+"]");return v(r)&&(j=" "+RegExp.prototype.toString.call(r)),_(r)&&(j=" "+Date.prototype.toUTCString.call(r)),w(r)&&(j=" "+f(r)),0!==u.length||S&&0!=r.length?n<0?v(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),l=S?function(e,t,r,n,o){for(var i=[],u=0,s=t.length;u<s;++u)z(t,String(u))?i.push(p(e,t,r,n,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,r,n,o,!0))})),i}(e,r,n,s,u):u.map((function(t){return p(e,r,n,s,t,S)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(l,j,E)):E[0]+j+E[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,r,n,o,i){var u,s,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),z(n,o)||(u="["+o+"]"),s||(e.seen.indexOf(c.value)<0?(s=m(r)?a(e,c.value,null):a(e,c.value,r-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+s.split("\n").map((function(e){return"   "+e})).join("\n")):s=e.stylize("[Circular]","special")),g(u)){if(i&&o.match(/^\d+$/))return s;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+s}function d(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function m(e){return null===e}function h(e){return"number"==typeof e}function b(e){return"string"==typeof e}function g(e){return void 0===e}function v(e){return j(e)&&"[object RegExp]"===S(e)}function j(e){return"object"==typeof e&&null!==e}function _(e){return j(e)&&"[object Date]"===S(e)}function w(e){return j(e)&&("[object Error]"===S(e)||e instanceof Error)}function O(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function E(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(r){if(g(i)&&(i=e.env.NODE_DEBUG||""),r=r.toUpperCase(),!u[r])if(new RegExp("\\b"+r+"\\b","i").test(i)){var n=e.pid;u[r]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",r,n,e)}}else u[r]=function(){};return u[r]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=y,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=h,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=g,t.isRegExp=v,t.isObject=j,t.isDate=_,t.isError=w,t.isFunction=O,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r("./node_modules/util/support/isBufferBrowser.js");var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function I(){var e=new Date,t=[E(e.getHours()),E(e.getMinutes()),E(e.getSeconds())].join(":");return[e.getDate(),x[e.getMonth()],t].join(" ")}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",I(),t.format.apply(t,arguments))},t.inherits=r("./node_modules/util/node_modules/inherits/inherits_browser.js"),t._extend=function(e,t){if(!t||!j(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var A="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function F(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(A&&e[A]){var t;if("function"!=typeof(t=e[A]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise((function(e,n){t=e,r=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,n){e?r(e):t(n)}));try{e.apply(this,o)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),A&&Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},t.promisify.custom=A,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var o=r.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};t.apply(this,r).then((function(t){e.nextTick(u,null,t)}),(function(t){e.nextTick(F,t,u)}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,n(t)),r}}).call(this,r("./node_modules/process/browser.js"))},"./src/components/RouterContainer.tsx":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/react/index.js"),o=(r("./node_modules/core-js/modules/es.array.slice.js"),r("./node_modules/core-js/modules/es.object.freeze.js"),r("./src/styles/index.ts"));function i(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  bottom: 0;\n  right: 0.5rem;\n"]);return i=function(){return e},e}var u=o.d.div.attrs((function(e){return{children:e.version}}))(i()),s=(r("./node_modules/core-js/modules/es.symbol.js"),r("./node_modules/core-js/modules/es.symbol.description.js"),r("./node_modules/core-js/modules/es.symbol.iterator.js"),r("./node_modules/core-js/modules/es.array.from.js"),r("./node_modules/core-js/modules/es.array.iterator.js"),r("./node_modules/core-js/modules/es.function.name.js"),r("./node_modules/core-js/modules/es.object.to-string.js"),r("./node_modules/core-js/modules/es.regexp.to-string.js"),r("./node_modules/core-js/modules/es.string.iterator.js"),r("./node_modules/core-js/modules/web.dom-collections.iterator.js"),r("./node_modules/util/util.js"));function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n"]);return c=function(){return e},e}var l,a,f=o.d.canvas(c());function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){e.IS_LIFE="IS_LIFE",e.IS_MAYBY_LIFE="IS_MAYBY_LIFE",e.IS_DEAD="IS_DEAD"}(a||(a={}));var d=(p(l={},a.IS_LIFE,"#FF0000"),p(l,a.IS_MAYBY_LIFE,"#FFFF00"),p(l,a.IS_DEAD,"#000000"),l);function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(t){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._coords=t.coords,this._x=t.x,this._y=t.y,this._ownMatrix=t.matrix,this.status=null!==(r=t.status)&&void 0!==r?r:a.IS_DEAD,this._last_status=this.status}var t,r,n;return t=e,(r=[{key:"checkOnHover",value:function(e,t){return function(e,t,r){if(Object(s.isNumber)(t)&&Object(s.isNumber)(r))return t>e[0]&&t<e[0]+e[2]&&r>e[1]&&r<e[1]+e[3]}(this._coords,e,t)?(this.status!==a.IS_MAYBY_LIFE&&(this._last_status=this.status,this.status=a.IS_MAYBY_LIFE),!0):(this.status=this._last_status,this._last_status=this.status,!1)}},{key:"render",value:function(e){e.beginPath(),e.fillStyle=d[this.status],e.fillRect(this._coords[0],this._coords[1],this._coords[2],this._coords[3]),e.closePath()}}])&&y(t.prototype,r),n&&y(t,n),e}();function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=function(e,t,r){return e*r+t*(r+1)},v=null,j=function(e,t,r){var n;if(null===(n=v)||void 0===n?void 0:n.checkOnHover(t,r))return!0;v=null;for(var o=0,i=e.length;o<i;o+=1)for(var u=0,s=e[o].length;u<s;u+=1){var c=e[o][u].checkOnHover(t,r);if(c)return v=e[o][u],c}},_=n.memo((function(e){var t=n.useRef(),r=h(n.useState(3),1)[0],o=h(n.useState(40),1)[0],i=h(n.useState(9),1)[0],u=h(n.useState(9),1)[0],c=h(n.useState((function(){return function(e,t,r,n){for(var o=[],i=0;i<e;i+=1){o.push([]);for(var u=0;u<t;u+=1)o[i][u]=new m({matrix:o,x:i,y:u,coords:[n+(n+r)*i,n+(n+r)*u,r,r]})}return o}(i,u,o,r)})),1)[0];return n.useEffect((function(){var e=t.current,r=e.getContext("2d");e.addEventListener("mousemove",(function(e){var t=e.x,r=e.y,n=j(c,t,r);document.body.style.cursor=n?"pointer":"default"})),e.addEventListener("mouseout",(function(e){var t=j(c,null,null);document.body.style.cursor=t?"pointer":"default"}));var n=null;return requestAnimationFrame((function t(){!function(e){var t=e.clientWidth,r=e.clientHeight;e.width===t&&e.height===r||(e.width=t,e.height=r)}(e),n=requestAnimationFrame(t),function(e){e.strokeStyle="#000000",e.lineWidth=2,e.fillStyle="#EEEEEE",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.beginPath()}(r),function(e,t){for(var r=0,n=t.length;r<n;r+=1)for(var o=0,i=t[r].length;o<i;o+=1)t[r][o].render(e)}(r,c)})),function(){Object(s.isNull)(n)||cancelAnimationFrame(n)}}),[i,u,o,r]),n.createElement(f,{ref:t,width:g(o,r,i),height:g(o,r,u)})})),w=n.memo((function(){return n.createElement(n.Suspense,{fallback:null},n.createElement(_,null),n.createElement(u,{version:"1.0.1"}))}));t.default=w},"./src/styles/index.ts":function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return s}));var n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n.default,i=n.css,u=n.createGlobalStyle,s=(n.keyframes,n.ThemeProvider);n.ThemeContext;t.d=o}}]);