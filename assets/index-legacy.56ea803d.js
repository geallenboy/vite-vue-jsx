!function(){var e=document.createElement("style");e.innerHTML=".cardtab .card-title{color:rgba(0,0,0,.45);font-size:14px}.cardtab .ant-card-body{padding:15px}.cardtab .card-h2{font-size:30px;line-height:38px;height:38px;margin:10px 0}.cardtab .card-span1{font-size:14px}.cardtab .mr5{margin-right:5px}.home .pd10{padding:0 10px 0 0}\n",document.head.appendChild(e),System.register(["./index-legacy.73787122.js"],(function(e){"use strict";var t,n,r,o,i;return{setters:[function(e){t=e.d,n=e.r,r=e.c,o=e.a,i=e.o}],execute:function(){var s={exports:{}},a=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},u=a,c=Object.prototype.toString;function l(e){return Array.isArray(e)}function f(e){return void 0===e}function d(e){return"[object ArrayBuffer]"===c.call(e)}function p(e){return null!==e&&"object"==typeof e}function h(e){if("[object Object]"!==c.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Function]"===c.call(e)}function v(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),l(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var g={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===c.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:p,isPlainObject:h,isUndefined:f,isDate:function(e){return"[object Date]"===c.call(e)},isFile:function(e){return"[object File]"===c.call(e)},isBlob:function(e){return"[object Blob]"===c.call(e)},isFunction:m,isStream:function(e){return p(e)&&m(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===c.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:v,merge:function e(){var t={};function n(n,r){h(t[r])&&h(n)?t[r]=e(t[r],n):h(n)?t[r]=e({},n):l(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)v(arguments[r],n);return t},extend:function(e,t,n){return v(t,(function(t,r){e[r]=n&&"function"==typeof t?u(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},y=g;function b(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var w=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(y.isURLSearchParams(t))r=t.toString();else{var o=[];y.forEach(t,(function(e,t){null!=e&&(y.isArray(e)?t+="[]":e=[e],y.forEach(e,(function(e){y.isDate(e)?e=e.toISOString():y.isObject(e)&&(e=JSON.stringify(e)),o.push(b(t)+"="+b(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},E=g;function x(){this.handlers=[]}x.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},x.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},x.prototype.forEach=function(e){E.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var S=x,j=g,O=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},N={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},C=O,T=function(e,t,n,r,o){var i=new Error(e);return C(i,t,n,r,o)},A=T,R=g,P=R.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),R.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),R.isString(r)&&s.push("path="+r),R.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},U=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},k=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},B=g,L=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],q=g,_=q.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=q.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function D(e){this.message=e}D.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},D.prototype.__CANCEL__=!0;var J=D,z=g,F=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(A("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},H=P,M=w,I=function(e,t){return e&&!U(t)?k(e,t):t},$=function(e){var t,n,r,o={};return e?(B.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=B.trim(e.substr(0,r)).toLowerCase(),n=B.trim(e.substr(r+1)),t){if(o[t]&&L.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},V=_,X=T,W=N,K=J,G=function(e){return new Promise((function(t,n){var r,o=e.data,i=e.headers,s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}z.isFormData(o)&&delete i["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(c+":"+l)}var f=I(e.baseURL,e.url);function d(){if(u){var r="getAllResponseHeaders"in u?$(u.getAllResponseHeaders()):null,o={data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};F((function(e){t(e),a()}),(function(e){n(e),a()}),o),u=null}}if(u.open(e.method.toUpperCase(),M(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(X("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){n(X("Network Error",e,null,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||W;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(X(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},z.isStandardBrowserEnv()){var p=(e.withCredentials||V(f))&&e.xsrfCookieName?H.read(e.xsrfCookieName):void 0;p&&(i[e.xsrfHeaderName]=p)}"setRequestHeader"in u&&z.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:u.setRequestHeader(t,e)})),z.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new K("canceled"):e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null),u.send(o)}))},Q=g,Y=function(e,t){j.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},Z=O,ee={"Content-Type":"application/x-www-form-urlencoded"};function te(e,t){!Q.isUndefined(e)&&Q.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ne,re={transitional:N,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ne=G),ne),transformRequest:[function(e,t){return Y(t,"Accept"),Y(t,"Content-Type"),Q.isFormData(e)||Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)?e:Q.isArrayBufferView(e)?e.buffer:Q.isURLSearchParams(e)?(te(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Q.isObject(e)||t&&"application/json"===t["Content-Type"]?(te(t,"application/json"),function(e,t,n){if(Q.isString(e))try{return(t||JSON.parse)(e),Q.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||re.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&Q.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw Z(i,this,"E_JSON_PARSE");throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Q.forEach(["delete","get","head"],(function(e){re.headers[e]={}})),Q.forEach(["post","put","patch"],(function(e){re.headers[e]=Q.merge(ee)}));var oe=re,ie=g,se=oe,ae=function(e){return!(!e||!e.__CANCEL__)},ue=g,ce=function(e,t,n){var r=this||se;return ie.forEach(n,(function(n){e=n.call(r,e,t)})),e},le=ae,fe=oe,de=J;function pe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de("canceled")}var he=g,me=function(e,t){t=t||{};var n={};function r(e,t){return he.isPlainObject(e)&&he.isPlainObject(t)?he.merge(e,t):he.isPlainObject(t)?he.merge({},t):he.isArray(t)?t.slice():t}function o(n){return he.isUndefined(t[n])?he.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!he.isUndefined(t[e]))return r(void 0,t[e])}function s(n){return he.isUndefined(t[n])?he.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return he.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);he.isUndefined(r)&&t!==a||(n[e]=r)})),n},ve="0.26.1",ge=ve,ye={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){ye[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var be={};ye.transitional=function(e,t,n){return function(r,o,i){if(!1===e)throw new Error(function(e,t){return"[Axios v"+ge+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")));return t&&!be[o]&&(be[o]=!0),!e||e(r,o,i)}};var we={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:ye},Ee=g,xe=w,Se=S,je=function(e){return pe(e),e.headers=e.headers||{},e.data=ce.call(e,e.data,e.headers,e.transformRequest),e.headers=ue.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ue.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||fe.adapter)(e).then((function(t){return pe(e),t.data=ce.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return le(t)||(pe(e),t&&t.response&&(t.response.data=ce.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Oe=me,Ne=we,Ce=Ne.validators;function Te(e){this.defaults=e,this.interceptors={request:new Se,response:new Se}}Te.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=Oe(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&Ne.assertOptions(n,{silentJSONParsing:Ce.transitional(Ce.boolean),forcedJSONParsing:Ce.transitional(Ce.boolean),clarifyTimeoutError:Ce.transitional(Ce.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!o){var a=[je,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(s),i=Promise.resolve(t);a.length;)i=i.then(a.shift(),a.shift());return i}for(var u=t;r.length;){var c=r.shift(),l=r.shift();try{u=c(u)}catch(f){l(f);break}}try{i=je(u)}catch(f){return Promise.reject(f)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},Te.prototype.getUri=function(e){return e=Oe(this.defaults,e),xe(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Ee.forEach(["delete","get","head","options"],(function(e){Te.prototype[e]=function(t,n){return this.request(Oe(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ee.forEach(["post","put","patch"],(function(e){Te.prototype[e]=function(t,n,r){return this.request(Oe(r||{},{method:e,url:t,data:n}))}}));var Ae=Te,Re=J;function Pe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new Re(e),t(n.reason))}))}Pe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Pe.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Pe.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Pe.source=function(){var e;return{token:new Pe((function(t){e=t})),cancel:e}};var Ue=Pe,ke=g,Be=g,Le=a,qe=Ae,_e=me;var De=function e(t){var n=new qe(t),r=Le(qe.prototype.request,n);return Be.extend(r,qe.prototype,n),Be.extend(r,n),r.create=function(n){return e(_e(t,n))},r}(oe);De.Axios=qe,De.Cancel=J,De.CancelToken=Ue,De.isCancel=ae,De.VERSION=ve,De.all=function(e){return Promise.all(e)},De.spread=function(e){return function(t){return e.apply(null,t)}},De.isAxiosError=function(e){return ke.isObject(e)&&!0===e.isAxiosError},s.exports=De,s.exports.default=De;var Je=s.exports;const ze="未知错误，请重试",Fe=Je.create({timeout:6e3});Fe.interceptors.request.use((e=>e),(e=>{Promise.reject(e)})),Fe.interceptors.response.use((e=>{const t=e.data;if(200!==t.code){const e=new Error(t.message||ze);return e.code=t.code,Promise.reject(e)}return t}),(e=>{var t,n,r;const o=null!==(t=null==e||null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)&&void 0!==t?t:ze;return e.message=o,Promise.reject(e)}));function He(){return((e,t={})=>{try{const{isMock:n=!0}=t,r=`${n?"/mock-api/":"/"}${e.url}`;return e.url=r,Fe.request(e)}catch(n){return n}})({url:"/home/cardtab",method:"get"})}var Me=t({props:["data"],setup(e){const t=n(e.data);return()=>r("div",{class:"cardtab"},[r("div",null,[r("div",null,[r("h3",{class:"card-title"},[t.title])]),r("div",{class:"text-right"},[o("指标说明")])]),r("h2",{class:"card-h2"},[o("¥ "),t.titleNumber]),r("div",null,[r("div",null,[r("div",null,[r("span",null,[o("周同比")]),r("span",null,[r("span",{class:"mr5"},[t.tbNumber]),r("span",null,[o("up")])])])]),r("div",null,[r("div",null,[r("span",null,[o("日同比")]),r("span",null,[r("span",{class:"mr5"},[t.rtbNumber]),r("span",null,[o("down")])])])])]),r("div",null,[r("span",null,[o("日销售额")]),r("span",{class:"card-span1"},[o("¥ "),t.rxse])])])}});e("default",t({setup(){const e=n({list:[]});return i((async()=>{const t=await He();200===t.code&&(e.list=t.data)})),()=>{var t;return r("div",{class:"home"},[r("div",null,[null===(t=e.list)||void 0===t?void 0:t.map((e=>r("div",{class:"pd10"},[r(Me,{data:e},null)])))])])}}}))}}}))}();