(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/RouterContainer.tsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=(n("./node_modules/core-js/modules/es.array.slice.js"),n("./node_modules/core-js/modules/es.object.freeze.js"),n("./src/styles/index.ts"));function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  bottom: 0;\n  right: 0.5rem;\n"]);return s=function(){return e},e}var i=o.d.div.attrs((function(e){return{children:e.version}}))(s()),u=(n("./node_modules/core-js/modules/es.symbol.js"),n("./node_modules/core-js/modules/es.symbol.description.js"),n("./node_modules/core-js/modules/es.symbol.iterator.js"),n("./node_modules/core-js/modules/es.array.filter.js"),n("./node_modules/core-js/modules/es.array.from.js"),n("./node_modules/core-js/modules/es.array.iterator.js"),n("./node_modules/core-js/modules/es.function.name.js"),n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.regexp.to-string.js"),n("./node_modules/core-js/modules/es.string.iterator.js"),n("./node_modules/core-js/modules/web.dom-collections.iterator.js"),n("./node_modules/util/util.js"));function l(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n"]);return l=function(){return e},e}var a,c,f,d=o.d.canvas(l()),m=n("./node_modules/polished/dist/polished.es.js");function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e.IS_LIFE="IS_LIFE",e.IS_DEAD="IS_DEAD"}(f||(f={}));var v=(h(a={},f.IS_LIFE,"#FF0000"),h(a,f.IS_DEAD,"#000000"),a),b=(h(c={},f.IS_LIFE,Object(m.a)(.3,v.IS_LIFE)),h(c,f.IS_DEAD,Object(m.a)(.3,v.IS_DEAD)),c);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._coords=t.coords,this._x=t.x,this._y=t.y,this._ownMatrix=t.matrix,this.status=null!==(n=t.status)&&void 0!==n?n:f.IS_DEAD,this._is_hover=!1}var t,n,r;return t=e,(n=[{key:"checkOnHover",value:function(e,t){return function(e,t,n){if(Object(u.isNumber)(t)&&Object(u.isNumber)(n))return t>e[0]&&t<e[0]+e[2]&&n>e[1]&&n<e[1]+e[3]}(this._coords,e,t)?this._is_hover=!0:this._is_hover=!1}},{key:"toggleLifeStatus",value:function(){var e=this.status;this.status===f.IS_DEAD&&(e=f.IS_LIFE),this.status===f.IS_LIFE&&(e=f.IS_DEAD),this.status=e}},{key:"render",value:function(e){e.beginPath(),this._is_hover?e.fillStyle=b[this.status]:e.fillStyle=v[this.status],e.fillRect(this._coords[0],this._coords[1],this._coords[2],this._coords[3]),e.closePath()}}])&&y(t.prototype,n),r&&y(t,r),e}();function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,s=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,s=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E={display:"flex",flexDirection:"column",alignItems:"center"},S={marginTop:"1rem"},p=function(e){var t=e.clientWidth,n=e.clientHeight;e.width===t&&e.height===n||(e.width=t,e.height=n)},I=function(e,t,n){return e*n+t*(n+1)},w=function(e){e.strokeStyle="#000000",e.lineWidth=2,e.fillStyle="#EEEEEE",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.beginPath()},O=function(e,t){for(var n=0,r=t.length;n<r;n+=1)for(var o=0,s=t[n].length;o<s;o+=1)t[n][o].render(e)},A=function(e,t,n){for(var r=Math.max(0,t-1),o=Math.min(e.length-1,t+1),s=Math.max(0,n-1),i=Math.min(e[0].length-1,n+1),u=[],l=r;l<=o;l+=1)for(var a=s;a<=i;a+=1)l===t&&a===n||u.push(e[l][a]);return u},x=null,D=function(e,t,n){var r;if(null===(r=x)||void 0===r?void 0:r.checkOnHover(t,n))return!0;if(x=null,Object(u.isNumber)(t)&&Object(u.isNumber)(n))for(var o=0,s=e.length;o<s;o+=1)for(var i=0,l=e[o].length;i<l;i+=1){var a,c=e[o][i].checkOnHover(t,n);if(c)return null===(a=x)||void 0===a||a.checkOnHover(null,null),x=e[o][i],c}},L=r.memo((function(e){var t=r.useRef(),n=j(r.useState(!1),2),o=n[0],s=n[1],i=j(r.useState(3),1)[0],l=j(r.useState(20),1)[0],a=j(r.useState(21),1)[0],c=j(r.useState(21),1)[0],m=j(r.useState((function(){return function(e,t,n,r){for(var o=[],s=0;s<e;s+=1){o.push([]);for(var i=0;i<t;i+=1)o[s][i]=new _({matrix:o,x:s,y:i,coords:[r+(r+n)*s,r+(r+n)*i,n,n]})}return o}(a,c,l,i)})),1)[0];return r.useEffect((function(){if(!o){var e=t.current,n=e.getContext("2d"),r=function(t){var n=t.x,r=t.y,o=e.getBoundingClientRect(),s=D(m,n-o.x,r-o.y);document.body.style.cursor=s?"pointer":"default"},s=function(e){D(m,null,null),document.body.style.cursor="default"},i=function(e){var t;null===(t=x)||void 0===t||t.toggleLifeStatus()};e.addEventListener("mousemove",r),e.addEventListener("mouseout",s),e.addEventListener("click",i);var l=null;return requestAnimationFrame((function t(){l=requestAnimationFrame(t),p(e),w(n),O(n,m)})),function(){e.removeEventListener("mousemove",r),e.removeEventListener("mouseout",s),e.removeEventListener("click",i),Object(u.isNull)(l)||cancelAnimationFrame(l)}}}),[o]),r.useEffect((function(){if(o){var e=null,n=1,r=performance.now(),i=t.current,l=i.getContext("2d");return requestAnimationFrame((function t(o){(e=requestAnimationFrame(t),o>r+500*n)&&(n+=1,function(e){for(var t,n,r,o=[],s=0,i=e.length;s<i;s+=1)for(var u=0,l=e[s].length;u<l;u+=1){(t=e[s][u],n=A(e,s,u),r=void 0,r=n.filter((function(e){return e.status===f.IS_LIFE})).length,t.status===f.IS_DEAD&&3===r?f.IS_LIFE:t.status!==f.IS_LIFE||3!==r&&2!==r?f.IS_DEAD:f.IS_LIFE)!==e[s][u].status&&o.push(e[s][u])}for(var a=0,c=o.length;a<c;a+=1)o[a].toggleLifeStatus();return!!o.length}(m)?(p(i),w(l),O(l,m)):s(!1))})),function(){Object(u.isNull)(e)||cancelAnimationFrame(e)}}}),[o]),r.createElement("div",{style:E},r.createElement(d,{ref:t,width:I(l,i,a),height:I(l,i,c)}),r.createElement("div",null,r.createElement("button",{style:S,onClick:function(){return s((function(e){return!e}))}},o?"Pause":"Start")))})),F=r.memo((function(){return r.createElement(r.Suspense,{fallback:null},r.createElement(L,null),r.createElement(i,{version:"1.0.2"}))}));t.default=F},"./src/styles/index.ts":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r.default,s=r.css,i=r.createGlobalStyle,u=(r.keyframes,r.ThemeProvider);r.ThemeContext;t.d=o}}]);