(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[5],{940:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Canvas:()=>v,getValue:()=>p,listenCanvasEvent:()=>h,emitCanvasEvent:()=>m});var r=t(2),a=t(5),i=t(941),o=t(956),u=t(33);t(954);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var l=["#444","#3498db","#ff874d","#67a2a0"],f=null,d=null,v=(0,a.memo)((function(e){var n=e.toolbar,t=e.disabled,c=e.hideGrid,v=(0,a.useRef)(),p=s((0,a.useState)(l[0]),2),h=p[0],m=p[1],g=function(){window.localStorage.setItem("fusumaCanvasCoordinate",v.current.getSaveData())},y=function(){var e=window.localStorage.getItem("fusumaCanvasCoordinate");f!==e&&(v.current.loadSaveData(e,!0),f=e)};return(0,a.useEffect)((function(){return d=n?setInterval(g,1e3):setInterval(y,1e3),function(){d&&clearInterval(d)}}),[]),(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsxs)("div",{className:"fusuma-canvas-toolbar",children:[(0,r.jsx)(u.MdDelete,{onClick:function(){v.current.clear()},size:"32"}),(0,r.jsx)(o.FaUndo,{onClick:function(){v.current.undo()}}),(0,r.jsx)("div",{style:{background:h},onClick:function(){l=l.concat(l.splice(0,1)),m(l[0])},className:"fusuma-canvas-toolbar-color"})]}),(0,r.jsx)(i.default,{ref:v,className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:h,disabled:t,hideGrid:c,lazyRadius:0,brushRadius:8})]})}));function p(){var e=window.localStorage.getItem("fusumaCanvasEvent");return JSON.parse(e||{status:"none"})}function h(e){window.addEventListener("storage",(function(n){"fusumaCanvasEvent"===n.key&&e(JSON.parse(n.newValue))}))}function m(e){window.localStorage.setItem("fusumaCanvasEvent",JSON.stringify(e))}},938:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>g});var r=t(2),a=t(5),i=t(18),o=t(939),u=t(940),s=t(957);t(958);function c(e,n,t,r,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void t(e)}u.done?n(s):Promise.resolve(s).then(r,a)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){c(i,r,a,o,u,"next",e)}function u(e){c(i,r,a,o,u,"throw",e)}o(void 0)}))}}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var v=null,p=null,h=null,m=null;const g=(0,a.memo)((function(e){var n=e.slides,t=e.hash;v||(v=new o.Receiver).onChangePage((function(e){window.slide&&(window.slide.goToSlide(e),p&&h&&y(h))}));var c=f((0,a.useState)(!1),2),d=c[0],g=(c[1],function(){var e=l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=7;break}return p=new s.WebRTC,e.next=4,p.startCapturing({video:{displaySurface:"monitor"}});case 4:return e.abrupt("return",e.sent);case 7:throw new Error("Capturing has already run.");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),y=function(e){p&&e&&(e.pause(),p.stopCapturing(e),m.style.opacity=1,p=null,m=null,h=null)},b=function(){var e=l(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=document.querySelectorAll("#webslides .fusuma-screen"))){e.next=3;break}return e.abrupt("return");case 3:t.forEach((function(e){var n=f(e.children,2),t=n[0],r=n[1];r.addEventListener("click",l(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=10;break}return e.next=3,g();case 3:n=e.sent,r.srcObject=n,r.play(),h=r,(m=t).style.opacity=0,n.getVideoTracks()[0].onended=function(){y(r)};case 10:case"end":return e.stop()}}),e)}))))}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){b()}),[]),(0,r.jsxs)("div",{className:"fusuma-presenter-view",children:[d&&(0,r.jsx)(u.Canvas,{disabled:!0,hideGrid:!0}),(0,r.jsx)(i.Base,{slides:n,hash:t,showIndex:!1})]})}))},939:(e,n,t)=>{"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n),t.d(n,{Receiver:()=>a});var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}var n,t,a;return n=e,(t=[{key:"registerEvent",value:function(e,n){navigator.presentation.receiver.connectionList.then((function(t){t.connections.forEach((function(t){t.addEventListener(e,n)})),t.addEventListener("connectionavailable",(function(e){n(e.connection)}))}))}},{key:"setUp",value:function(){this.registerEvent("close",(function(e){console.log(e)}))}},{key:"onChangePage",value:function(e){"presentation"===this.apiType?this.registerEvent("message",(function(n){var t=JSON.parse(n.data).page;e(t)})):window.addEventListener("storage",(function(n){if("page"===n.key){var t=JSON.parse(n.newValue).page;e(t)}}))}}])&&r(n.prototype,t),a&&r(n,a),e}()},957:(e,n,t)=>{"use strict";function r(e,n,t,r,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void t(e)}u.done?n(s):Promise.resolve(s).then(r,a)}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{WebRTC:()=>o});var o=function(){function e(){var n=this;if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"setupRecording",(function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(n.handlerRecording)})),i(this,"handlerRecording",(function(e){var t=[];n.stream=e,n.mediaRecorder=new MediaRecorder(e,{}),n.mediaRecorder.addEventListener("dataavailable",(function(e){e.data.size>0&&t.push(e.data)})),n.mediaRecorder.addEventListener("stop",(function(){n.finishedProcess=!0,n.url=URL.createObjectURL(new Blob(t,{type:"audio/webm"}))}))})),i(this,"startRecording",(function(){n.mediaRecorder.start(),n.finishedProcess=!1,n.url=null})),i(this,"stopRecording",(function(){return new Promise((function(e){n.mediaRecorder.stop();var t=setInterval((function(){n.finishedProcess&&(clearInterval(t),e(n.url))}),100)}))})),i(this,"disposeRecording",(function(){n.mediaRecorder.stream.getTracks().forEach((function(e){return e.stop()})),n.finishedProcess=!1,n.url=null})),!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}var n,t,o,u,s;return n=e,(t=[{key:"startCapturing",value:(u=regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia(n);case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})),s=function(){var e=this,n=arguments;return new Promise((function(t,a){var i=u.apply(e,n);function o(e){r(i,t,a,o,s,"next",e)}function s(e){r(i,t,a,o,s,"throw",e)}o(void 0)}))},function(e){return s.apply(this,arguments)})},{key:"stopCapturing",value:function(e){e.srcObject.getTracks().forEach((function(e){return e.stop()})),e.srcObject=null}}])&&a(n.prototype,t),o&&a(n,o),e}()},955:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var r=t(24),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const i=a},959:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var r=t(24),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const i=a},954:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var r=t(22),a=t.n(r),i=t(955),o={insert:"head",singleton:!1};a()(i.default,o);const u=i.default.locals||{}},958:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var r=t(22),a=t.n(r),i=t(959),o={insert:"head",singleton:!1};a()(i.default,o);const u=i.default.locals||{}}}]);