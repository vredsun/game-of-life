(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/RouterContainer.tsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=(n("./node_modules/core-js/modules/es.array.slice.js"),n("./node_modules/core-js/modules/es.object.freeze.js"),n("./src/styles/index.ts"));function i(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  bottom: 0;\n  right: 0.5rem;\n"]);return i=function(){return e},e}var s=o.d.div.attrs((function(e){return{children:e.version}}))(i()),u=(n("./node_modules/core-js/modules/es.symbol.js"),n("./node_modules/core-js/modules/es.symbol.description.js"),n("./node_modules/core-js/modules/es.symbol.iterator.js"),n("./node_modules/core-js/modules/es.array.from.js"),n("./node_modules/core-js/modules/es.array.iterator.js"),n("./node_modules/core-js/modules/es.function.name.js"),n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.regexp.to-string.js"),n("./node_modules/core-js/modules/es.string.iterator.js"),n("./node_modules/core-js/modules/web.dom-collections.iterator.js"),n("./node_modules/util/util.js")),l=n("./node_modules/react-icons/io/index.esm.js");function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n"]);return a=function(){return e},e}var c,d,f,m=o.d.canvas(a()),v=null,h=function(e,t,n,r){if(Object(u.isNumber)(n)&&Object(u.isNumber)(r)){for(var o=0,i=t.length;o<i;o+=1)t[o][r].changeHalfHover(e);for(var s=0,l=t[n].length;s<l;s+=1)t[n][s].changeHalfHover(e)}},_=function(e,t,n){var r,o,i;if(null===(r=v)||void 0===r?void 0:r.checkOnHover(t,n))return v;if(h(!1,e,null===(o=v)||void 0===o?void 0:o._x,null===(i=v)||void 0===i?void 0:i._y),v=null,Object(u.isNumber)(t)&&Object(u.isNumber)(n))for(var s=0,l=e.length;s<l;s+=1)for(var a=0,c=e[s].length;a<c;a+=1){var d,f,m,_,g;if(e[s][a].checkOnHover(t,n))return h(!1,e,null===(d=v)||void 0===d?void 0:d._x,null===(f=v)||void 0===f?void 0:f._y),null===(m=v)||void 0===m||m.checkOnHover(null,null),v=e[s][a],h(!0,e,null===(_=v)||void 0===_?void 0:_._x,null===(g=v)||void 0===g?void 0:g._y),e[s][a]}},g=function(e){var t,n,r;e?e===(null===(t=v)||void 0===t?void 0:t.status)&&(null===(n=v)||void 0===n||n.toggleLifeStatus()):null===(r=v)||void 0===r||r.toggleLifeStatus()},b=function(e){var t=e.clientWidth,n=e.clientHeight;e.width===t&&e.height===n||(e.width=t,e.height=n)},y=function(e,t){return e*t},E=function(e){e.strokeStyle="#000000",e.lineWidth=2,e.fillStyle="#EEEEEE",e.beginPath()},j=function(e,t){for(var n=0,r=t.length;n<r;n+=1)for(var o=0,i=t[n].length;o<i;o+=1)t[n][o].render(e)},S=(n("./node_modules/core-js/modules/es.array.filter.js"),n("./node_modules/polished/dist/polished.es.js"));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e.IS_LIFE="IS_LIFE",e.IS_DEAD="IS_DEAD"}(f||(f={}));var I=(p(c={},f.IS_LIFE,"#FF0000"),p(c,f.IS_DEAD,"#000000"),c),D=(p(d={},f.IS_LIFE,Object(S.a)(.3,I.IS_LIFE)),p(d,f.IS_DEAD,Object(S.a)(.3,I.IS_DEAD)),d);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._coords=t.coords,this._x=t.x,this._y=t.y,this._ownMatrix=t.matrix,this.status=null!==(n=t.status)&&void 0!==n?n:f.IS_DEAD,this._is_hover=!1,this._is_hover_in_cursor_line=!1,this.gridStroke=t.gridStroke}var t,n,r;return t=e,(n=[{key:"changeHalfHover",value:function(e){this._is_hover_in_cursor_line=e}},{key:"checkOnHover",value:function(e,t){return function(e,t,n){if(Object(u.isNumber)(t)&&Object(u.isNumber)(n))return t>=e[0]&&t<=e[0]+e[2]&&n>=e[1]&&n<=e[1]+e[3]}(this._coords,e,t)?this._is_hover=!0:this._is_hover=!1}},{key:"toggleLifeStatus",value:function(){var e=this.status;this.status===f.IS_DEAD&&(e=f.IS_LIFE),this.status===f.IS_LIFE&&(e=f.IS_DEAD),this.status=e}},{key:"renderBg",value:function(e){e.beginPath(),e.fillStyle=this.bg_color,e.fillRect(this._coords[0],this._coords[1],this._coords[2],this._coords[3]),e.closePath()}},{key:"render",value:function(e){this.renderBg(e),e.beginPath(),e.fillStyle=this.color,e.fillRect(this._coords[0]+this.gridStroke,this._coords[1]+this.gridStroke,this._coords[2]-2*this.gridStroke,this._coords[3]-2*this.gridStroke),e.closePath()}},{key:"color",get:function(){return this._is_hover?D[this.status]:I[this.status]}},{key:"bg_color",get:function(){return this._is_hover||this._is_hover_in_cursor_line?Object(S.a)(.3,"black"):"#EEEEEE"}}])&&x(t.prototype,n),r&&x(t,r),e}(),k=function(e,t,n,r){for(var o=[],i=0;i<e;i+=1){o.push([]);for(var s=0;s<t;s+=1)o[i][s]=new w({gridStroke:r,matrix:o,x:i,y:s,coords:[n*i,n*s,n,n]})}return o},O=function(e,t,n){for(var r=Math.max(0,t-1),o=Math.min(e.length-1,t+1),i=Math.max(0,n-1),s=Math.min(e[0].length-1,n+1),u=[],l=r;l<=o;l+=1)for(var a=i;a<=s;a+=1)l===t&&a===n||u.push(e[l][a]);return u};function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F={display:"flex",flexDirection:"column",alignItems:"center"},C={marginTop:"0.5rem",fontSize:"2rem",display:"flex",flexDirection:"row",alignItems:"center"},B={fontSize:"1rem",display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer",margin:"0.5rem"},H=r.memo((function(e){var t=r.useRef(),n=A(r.useState(!1),2),o=n[0],i=n[1],s=A(r.useState(1),1)[0],a=A(r.useState(15),1)[0],c=A(r.useState(60),1)[0],d=A(r.useState(30),1)[0],v=A(r.useState((function(){return k(c,d,a,s)})),2),h=v[0],S=v[1];return r.useEffect((function(){if(!o){var e=t.current,n=e.getContext("2d"),r=!1,i=null,s=function(t){var n=t.x,o=t.y,s=e.getBoundingClientRect(),u=_(h,n-s.x,o-s.y);document.body.style.cursor=u?"pointer":"default",r&&g(i)},l=function(e){_(h,null,null),document.body.style.cursor="default"},a=function(t){var n=t.x,o=t.y,s=e.getBoundingClientRect(),u=_(h,n-s.x,o-s.y);r=!0,i=u.status},c=function(e){g(i),r=!1,i=null};e.addEventListener("mousemove",s),e.addEventListener("mouseout",l),e.addEventListener("mousedown",a),e.addEventListener("mouseup",c);var d=null;return requestAnimationFrame((function t(){d=requestAnimationFrame(t),b(e),E(n),j(n,h)})),function(){e.removeEventListener("mousemove",s),e.removeEventListener("mouseout",l),e.removeEventListener("mousedown",a),e.removeEventListener("mouseup",c),Object(u.isNull)(d)||cancelAnimationFrame(d)}}}),[o,h]),r.useEffect((function(){if(o){var e=null,n=1,r=performance.now(),s=t.current,l=s.getContext("2d");return requestAnimationFrame((function t(o){(e=requestAnimationFrame(t),o>r+100*n)&&(n+=1,function(e){for(var t,n,r,o=[],i=0,s=e.length;i<s;i+=1)for(var u=0,l=e[i].length;u<l;u+=1){(t=e[i][u],n=O(e,i,u),r=void 0,r=n.filter((function(e){return e.status===f.IS_LIFE})).length,t.status===f.IS_DEAD&&3===r?f.IS_LIFE:t.status!==f.IS_LIFE||3!==r&&2!==r?f.IS_DEAD:f.IS_LIFE)!==e[i][u].status&&o.push(e[i][u])}for(var a=0,c=o.length;a<c;a+=1)o[a].toggleLifeStatus();return!!o.length}(h)?(b(s),E(l),j(l,h)):i(!1))})),function(){Object(u.isNull)(e)||cancelAnimationFrame(e)}}}),[o]),r.createElement("div",{style:F},r.createElement("h1",null,r.createElement("a",{href:"https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB"},"Игра «Жизнь»")),r.createElement(m,{ref:t,width:y(a,c),height:y(a,d)}),r.createElement("div",{style:C},r.createElement("button",{disabled:o,style:B,onClick:function(){return S(k(c,d,a,s))}},r.createElement(l.a,null)),r.createElement("button",{style:B,onClick:function(){return i((function(e){return!e}))}},o?r.createElement(l.b,null):r.createElement(l.c,null))))})),P=r.memo((function(){return r.createElement(r.Suspense,{fallback:null},r.createElement(H,null),r.createElement(s,{version:"1.0.6"}))}));t.default=P},"./src/styles/index.ts":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r.default,i=r.css,s=r.createGlobalStyle,u=(r.keyframes,r.ThemeProvider);r.ThemeContext;t.d=o}}]);