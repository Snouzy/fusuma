(self.webpackChunkplain=self.webpackChunkplain||[]).push([[226],{4226:(__unused_webpack_module,exports)=>{function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},Object_keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},forEach=function(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t(e[n],n,e)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(e,t,n){Object.defineProperty(e,t,{writable:!0,enumerable:!1,configurable:!0,value:n})}}catch(e){return function(e,t,n){e[t]=n}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context))throw new TypeError("needs a 'context' argument.");var t=document.createElement("iframe");t.style||(t.style={}),t.style.display="none",document.body.appendChild(t);var n=t.contentWindow,r=n.eval,o=n.execScript;!r&&o&&(o.call(n,"null"),r=n.eval),forEach(Object_keys(e),(function(t){n[t]=e[t]})),forEach(globals,(function(t){e[t]&&(n[t]=e[t])}));var c=Object_keys(n),i=r.call(n,this.code);return forEach(Object_keys(n),(function(t){(t in e||-1===indexOf(c,t))&&(e[t]=n[t])})),forEach(globals,(function(t){t in e||defineProp(e,t,n[t])})),document.body.removeChild(t),i},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(e){var t=Script.createContext(e),n=this.runInContext(t);return e&&forEach(Object_keys(t),(function(n){e[n]=t[n]})),n},forEach(Object_keys(Script.prototype),(function(e){exports[e]=Script[e]=function(t){var n=Script(t);return n[e].apply(n,[].slice.call(arguments,1))}})),exports.isContext=function(e){return e instanceof Context},exports.createScript=function(e){return exports.Script(e)},exports.createContext=Script.createContext=function(e){var t=new Context;return"object"===_typeof(e)&&forEach(Object_keys(e),(function(n){t[n]=e[n]})),t}}}]);