(self.webpackChunkfaizmaricar=self.webpackChunkfaizmaricar||[]).push([[678],{3888:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182828","images":{"fallback":{"src":"/static/cb9a884fc7a8876ca12204bd5417d1cc/02dff/profile.jpg","srcSet":"/static/cb9a884fc7a8876ca12204bd5417d1cc/0fdf4/profile.jpg 300w,\\n/static/cb9a884fc7a8876ca12204bd5417d1cc/a89ca/profile.jpg 600w,\\n/static/cb9a884fc7a8876ca12204bd5417d1cc/02dff/profile.jpg 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/cb9a884fc7a8876ca12204bd5417d1cc/078c3/profile.webp 300w,\\n/static/cb9a884fc7a8876ca12204bd5417d1cc/6d09e/profile.webp 600w,\\n/static/cb9a884fc7a8876ca12204bd5417d1cc/83805/profile.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":1200}')},6633:function(e,t,n){e.exports=n(2465)},3344:function(e,t,n){"use strict";var r=n(1599),o=n(7202),i=n(116),a=n(8710),s=n(3656),c=n(2306),u=n(778),f=n(1191);e.exports=function(e){return new Promise((function(t,n){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var g=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,n,i),d=null}},d.onabort=function(){d&&(n(f("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||u(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(x){if("json"!==e.responseType)throw x}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),l||(l=null),d.send(l)}))}},2465:function(e,t,n){"use strict";var r=n(1599),o=n(6013),i=n(2234),a=n(5469);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(8943));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(6114),c.CancelToken=n(4396),c.isCancel=n(7458),c.all=function(e){return Promise.all(e)},c.spread=n(2744),c.isAxiosError=n(6683),e.exports=c,e.exports.default=c},6114:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4396:function(e,t,n){"use strict";var r=n(6114);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},7458:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},2234:function(e,t,n){"use strict";var r=n(1599),o=n(8710),i=n(5950),a=n(4126),s=n(5469);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},5950:function(e,t,n){"use strict";var r=n(1599);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},3656:function(e,t,n){"use strict";var r=n(789),o=n(7020);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},1191:function(e,t,n){"use strict";var r=n(7822);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},4126:function(e,t,n){"use strict";var r=n(1599),o=n(7989),i=n(7458),a=n(8943);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7822:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},5469:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(i,u),r.forEach(a,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var f=o.concat(i).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,u),n}},7202:function(e,t,n){"use strict";var r=n(1191);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},7989:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},8943:function(e,t,n){"use strict";var r=n(1599),o=n(4188),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(s=n(3344)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c},6013:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},8710:function(e,t,n){"use strict";var r=n(1599);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},7020:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},116:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},789:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6683:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},778:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},4188:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},2306:function(e,t,n){"use strict";var r=n(1599),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},2744:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},1599:function(e,t,n){"use strict";var r=n(6013),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],n);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},512:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(7294),o=n(5078),i=n(3846),a=n(2265),s=n(2087),c=n(6771),u=n(3431),f=function(e){var t=e.fullWidth;return(0,u.iv)("min-width:100px;width:",t?"100%":"initial",";text-align:center;background-color:#12964f;color:#ffffff;border-radius:10px;border:0;box-shadow:none;&:hover{cursor:pointer;background-color:#12ae5a;}","")},l=(0,c.Z)("button",{target:"enqcv5q1"})(f," padding:16px 0;height:48px;"),p=(0,c.Z)("button",{target:"enqcv5q0"})(f," padding:24px 0;border-radius:10px;height:64px;"),d=["children"];var h=function(e){var t=e.children,n=(0,a.Z)(e,d);return(0,u.tZ)(l,n,(0,u.tZ)(s.oD,null,t))},m=["children"];var g=function(e){var t=e.children,n=(0,a.Z)(e,m);return(0,u.tZ)(p,n,(0,u.tZ)(s.Zd,null,t))},v=n(334),x=n(6556);var b=function(){return(0,u.iv)("text-align:justify;@media (min-width: ",x.Z.breakpoints.md,"px){text-align:initial;font-size:68px;line-height:98px;}","")},y=(0,c.Z)("section",{target:"e10w2rzo1"})({name:"7t6sx",styles:"background-color:#ffffff;position:relative;z-index:11;display:flex;justify-content:center;align-items:center;height:100vh"}),w=(0,c.Z)(s.F8,{target:"e10w2rzo0"})(b,";");var Z=function(){return(0,u.tZ)(y,null,(0,u.tZ)(i.rj,null,(0,u.tZ)(i.bL,{lg:[1,12],md:[1,12],sm:[2,11]},(0,u.tZ)(w,null,"Hi, my name is Faiz Maricar. I am a full-stack developer.")),(0,u.tZ)(i.bL,{lg:[1,5],md:[1,6],sm:[2,11]},(0,u.tZ)(g,{fullWidth:!0,onClick:function(){return(0,v.Q)("about")}},"Find out more about me"))))},j=n(7490);var E=(0,c.Z)("section",{target:"epgjc871"})({name:"tvl1tx",styles:"padding:40px 16px;height:100vh"}),S=(0,c.Z)(i.rj,{target:"epgjc870"})({name:"5rt1c9",styles:"position:relative;z-index:11;background-color:#ffffff"}),C=["children"],R=r.forwardRef((function(e,t){var n=e.children,r=(0,a.Z)(e,C);return(0,u.tZ)(E,(0,j.Z)({},r,{ref:t}),(0,u.tZ)(S,null,n))})),k=n(6802);(0,c.Z)("section",{target:"eozva8e4"})({name:"tvl1tx",styles:"padding:40px 16px;height:100vh"});var A=(0,c.Z)(s.F8,{target:"eozva8e2"})("text-align:center;margin-bottom:16px;@media (min-width: ",x.Z.breakpoints.lg,"px){text-align:initial;}"),O=(0,c.Z)(s.uT,{target:"eozva8e0"})({name:"1aujq9w",styles:"text-align:justify"}),N=r.forwardRef((function(e,t){return(0,u.tZ)(R,{ref:t,id:"about"},(0,u.tZ)(i.bL,{lg:[1,5],md:[5,8],sm:[3,10]},(0,u.tZ)(k.S,{imgStyle:{borderRadius:"50%"},src:"../../images/profile.jpg",alt:"Profile ",__imageData:n(3888)})),(0,u.tZ)(i.bL,{lg:[6,12],md:[3,10],sm:[1,12]},(0,u.tZ)(A,null,"About Me"),(0,u.tZ)(O,null,"I am a full-stack developer and I have been in software development for the past 4 years. I aim to have a holistic approach to my work and have a keen interest in both design and engineering."),(0,u.tZ)(i.us,null)))}));var L=(0,c.Z)("section",{target:"e1lhneyn0"})({name:"tvl1tx",styles:"padding:40px 16px;height:100vh"}),T=r.forwardRef((function(e,t){return(0,u.tZ)(L,(0,j.Z)({},e,{ref:t,id:"projects"}),(0,u.tZ)(i.rj,null,(0,u.tZ)(i.bL,null,(0,u.tZ)(s.F8,null,"Projects"),(0,u.tZ)(s.uT,null,"Coming soon"))))})),U=n(6633),q=n.n(U);var B={name:"d20jns",styles:"display:block;margin-bottom:16px;width:100%;padding:4px 8px"},P=function(){return B},z=(0,c.Z)("input",{target:"e1pe1air1"})(P,";"),D=(0,c.Z)("textarea",{target:"e1pe1air0"})(P," height:200px;resize:none;");var F=function(e){return(0,u.tZ)(z,e)};var I=function(e){return(0,u.tZ)(D,(0,j.Z)({},e,{type:"textarea"}))},_=r.forwardRef((function(e,t){var n=r.useState({submitting:!1,status:null}),o=(n[0],n[1]),a=function(e,t,n){o({submitting:!1,status:{ok:e,msg:t}}),e&&n.reset()};return(0,u.tZ)("form",{onSubmit:function(e){e.preventDefault();var t=e.target;o({submitting:!0}),q()({method:"post",url:"https://getform.io/f/4e7969ee-499a-46c5-8f27-cf833720c3b2",data:new FormData(t)}).then((function(e){a(!0,"Thanks!",t)})).catch((function(e){a(!1,e.response.data.error,t)}))}},(0,u.tZ)(R,{ref:t,id:"contact"},(0,u.tZ)(i.bL,null,(0,u.tZ)(s.F8,null,"Contact"),(0,u.tZ)(F,{type:"email",name:"email",placeholder:"Email",required:!0}),(0,u.tZ)(F,{type:"text",name:"name",placeholder:"Name",required:!0}),(0,u.tZ)(I,{name:"message",placeholder:"Leave a message...",required:!0})),(0,u.tZ)(i.bL,{lg:[10,12]},(0,u.tZ)(h,{type:"submit",fullWidth:!0},"Send"))))}));var H=function(){var e=r.useRef(),t=r.useRef(),n=r.useRef(),a=[e,t,n];return(0,u.tZ)(o.Z,{sections:a},(0,u.tZ)(Z,null),(0,u.tZ)(N,{ref:e}),(0,u.tZ)(T,{ref:t}),(0,u.tZ)(_,{ref:n}),(0,u.tZ)(i.W_,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5bf8a5f0c9f458b0426a.js.map