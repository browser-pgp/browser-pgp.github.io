(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5rCv":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=i},JOlb:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"}),"Details");t.default=i},Ng2W:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=i},"S+8A":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"CenterFocusWeak");t.default=i},Tue8:function(e,t,n){"use strict";n.r(t);var r,a,i=n("rePB"),o=n("q1tI"),c=n.n(o),u=n("Ji2X"),s=n("uxHW"),l=n("o0o1"),p=n.n(l),f=n("30+C"),d=n("50B7"),h=n("wb2y"),b=n("oa/T"),v=n("eD//"),m=n("tVbE"),g=n("r9w1"),O=n("IsqK"),y=n("o4QW"),w=n("tRbT"),j=n("Z3vd"),P=n("NrVZ"),k=n("KQm4"),_=n("ODXe"),E=n("zP5H");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}!function(e){e[e.NotFound=0]="NotFound",e[e.Found=1]="Found",e[e.Multi=2]="Multi",e[e.MultiPickedOne=3]="MultiPickedOne"}(r||(r={})),function(e){e[e.None=0]="None",e[e.App=1]="App",e[e.User=2]="User",e[e.Auth=3]="Auth"}(a||(a={}));var x,R={mid:"",auth:"",fingerprint:""};!function(e){e[e.Auto=0]="Auto",e[e.Input=1]="Input"}(x||(x={}));var C=Object(E.a)((function(e){return e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},R,{},e),Object(o.useState)({app:null,selectedUser:null,content:"",pending:!1,params:e,focus:a.None,mode:x.Auto})})),D=n("j+AN"),I=n("csR4"),M=n("koD6"),T=n("EHhu"),L=n("QYcz"),q=n("XFFy");function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e){return e.name+(e.email?" <".concat(e.email,">"):"")}var F=function(){var e=C.useContainer(),t=Object(_.a)(e,2),n=t[0],o=t[1],c=Object(D.c)(),u=Object(I.b)(),s=Object(M.b)().getUserPrivateKey,l=function(){var e,t,a;return p.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=null===(e=n.params.fingerprint)||void 0===e?void 0:e.toLowerCase()){i.next=4;break}return o((function(e){return W({},e,{app:W({},e.app,{status:r.Multi})})})),i.abrupt("return");case 4:return i.next=6,p.a.awrap(T.b.users.find().where("fingerprint").eq(t).exec());case 6:a=i.sent,i.t0=a.length,i.next=0===i.t0?10:1===i.t0?12:14;break;case 10:return o((function(e){return W({},e,{app:W({},e.app,{status:r.NotFound})})})),i.abrupt("return");case 12:return function(){var e=a[0];o((function(t){return W({},t,{app:{status:r.Found,pubkey:e.publicKey,userId:A(e)}})}))}(),i.abrupt("return");case 14:return o((function(e){return W({},e,{app:W({},e.app,{status:r.Multi})})})),i.abrupt("return");case 16:case"end":return i.stop()}}),null,null,null,Promise)},f=function(){var e,t,r,i,c;return p.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(r=function(e){var t,r,a,i,o,c;return p.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,p.a.awrap(L.key.readArmored(n.app.pubkey));case 2:if(t=u.sent,r=t.err,a=Object(_.a)(t.keys,1),i=a[0],!(null===r||void 0===r?void 0:r.length)){u.next=8;break}throw r[0];case 8:return u.next=10,p.a.awrap(L.message.fromText(e));case 10:return o=u.sent,u.next=13,p.a.awrap(L.encrypt({message:o,publicKeys:[i]}));case 13:return c=u.sent,u.abrupt("return",c.data);case 15:case"end":return u.stop()}}),null,null,null,Promise)},t=function(e){var t,r,a;return p.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,p.a.awrap(s({privateKey:n.selectedUser.privkey}));case 2:return t=i.sent,i.next=5,p.a.awrap(L.cleartext.fromText(JSON.stringify(e)));case 5:return r=i.sent,i.next=8,p.a.awrap(L.sign({message:r,privateKeys:[t]}));case 8:return a=i.sent,i.abrupt("return",a.data);case 10:case"end":return i.stop()}}),null,null,null,Promise)},n.selectedUser){u.next=5;break}throw o((function(e){return W({},e,{focus:a.User})})),new q.a("\u672a\u9009\u62e9\u767b\u5f55\u5e10\u53f7");case 5:if(n.app.pubkey){u.next=8;break}throw o((function(e){return W({},e,{focus:a.App})})),new q.a("\u672a\u9009\u62e9\u5e94\u7528");case 8:if(n.params.auth){u.next=11;break}throw o((function(e){return W({},e,{focus:a.Auth})})),new q.a("\u767b\u5f55\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a");case 11:return e=n.selectedUser,i={mid:n.params.mid,auth:n.params.auth,fingerprint:e.fingerprint},u.next=15,p.a.awrap(t(i));case 15:return c=u.sent,u.next=18,p.a.awrap(r(c));case 18:return c=u.sent,o((function(e){return W({},e,{content:c})})),u.next=22,p.a.awrap(new Promise((function(e){return o((function(t){return e(),t}))})));case 22:case"end":return u.stop()}}),null,null,null,Promise)},d=Object(q.c)("\u8ba4\u8bc1\u7b7e\u540d\u5e76\u52a0\u5bc6");return{state:n,setState:o,tryFindApp:l,selectUser:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(c.open(D.a.Private).then((function(e){return e[0]})));case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:o((function(t){return W({},t,{selectedUser:{privkey:e.privateKey,userId:e.name+(e.email?" <".concat(e.email,">"):""),fingerprint:e.fingerprint}})}));case 6:case"end":return t.stop()}}),null,null,null,Promise)},importUser:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(u.open());case 2:return e.next=4,p.a.awrap(l());case 4:case"end":return e.stop()}}),null,null,null,Promise)},pickOne:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(c.open(D.a.Public,n.params.fingerprint).then((function(e){return e[0]})));case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:o((function(t){return W({},t,{app:{status:r.MultiPickedOne,pubkey:e.publicKey,userId:A(e)}})}));case 6:case"end":return t.stop()}}),null,null,null,Promise)},updateParams:function(e){return function(t){o((function(n){return W({},n,{params:W({},n.params,Object(i.a)({},e,t))})}))}},postForm:function(e){var t;if(!n.pending)return(t=Promise.resolve(o((function(e){return W({},e,{pending:!0})}))).then((function(){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(f());case 2:e.submit();case 3:case"end":return t.stop()}}),null,null,null,Promise)}))).then.apply(t,Object(k.a)(d)).finally((function(){o((function(e){return W({},e,{pending:!1})}))}))}}},H=n("TjOe"),N=n("JOlb"),$=n.n(N),z=c.a.createElement,K=function(){var e=F(),t=e.state,n=t.app,a=t.pending,i=t.params,c=e.tryFindApp,u=e.importUser,s=e.pickOne;if(Object(o.useEffect)((function(){c()}),[i.fingerprint]),null===n)return z(m.a,{button:!0,disabled:!0},z(O.a,{primary:"\u5c1d\u8bd5\u5339\u914d\u7f51\u7ad9\u6307\u7eb9\u4e2d..."}));switch(n.status){case r.NotFound:return z(m.a,{button:!0,onClick:u,disabled:a},z(O.a,{primary:"\u6ca1\u6709\u6307\u7eb9\u5339\u914d\u7684\u7f51\u7ad9\u516c\u94a5, \u70b9\u51fb\u5bfc\u5165\u516c\u94a5"}));case r.Found:return z(m.a,{button:!0},z(O.a,{primary:n.userId,secondary:"\u767b\u5f55\u5e94\u7528"}));case r.MultiPickedOne:return z(m.a,{button:!0,onClick:s,disabled:a},z(O.a,{primary:n.userId,secondary:"\u518d\u6b21\u70b9\u51fb\u53ef\u9009\u62e9\u53e6\u4e00\u4e2a\u5e94\u7528"}),z(H.a,null,z($.a,null)));case r.Multi:return z(m.a,{button:!0,onClick:s,disabled:a},z(O.a,{primary:"\u70b9\u51fb\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e94\u7528",secondary:"\u6709\u591a\u4e2a\u6307\u7eb9\u5339\u914d\u7684\u5e94\u7528, \u9700\u8981\u8fdb\u4e00\u6b65\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e94\u7528"}),z(H.a,null,z($.a,null)))}},V=n("hlie"),B=n("csfp"),Z=n("PsDL"),J=n("H27s"),Q=n.n(J),X=c.a.createElement,G=function(){return X(V.a,{href:"https://github.com/browser-pgp/browser-pgp#pgp-authencation-\u8ba4\u8bc1\u6d41\u7a0b",target:"pgp-web-auth-introduction"},X(B.a,{title:"PGP Auth \u8ba4\u8bc1\u4ecb\u7ecd (\u65b0\u7a97\u53e3\u6253\u5f00)",placement:"left"},X(Z.a,null,X(Q.a,null))))},Y=n("wx14"),ee=n("7o7e"),te=c.a.createElement,ne=Object(ee.b)("/login")+"?url=%s",re=Object(o.forwardRef)((function(e,t){var n=Object(o.useMemo)((function(){try{return navigator.registerProtocolHandler("web+pgpauth",ne,"PGP Auth"),!0}catch(e){return console.log(e),!1}}),[]),r=Object(o.useState)(n),a=r[0],i=r[1];return!1===a?te(B.a,{ref:t,title:"\u8bbe\u4e3a\u6253\u5f00 web+pgpauth \u534f\u8bae\u7684\u9ed8\u8ba4\u5e94\u7528",placement:"top"},te(j.a,Object(Y.a)({},e,{onClick:function(){try{navigator.registerProtocolHandler("web+pgpauth",ne,"PGP Auth"),i(!0)}catch(e){}}}),"\u6ce8\u518c\u5e94\u7528")):te(B.a,{ref:t,title:"\u4e0d\u518d\u54cd\u5e94 web+pgpauth \u534f\u8bae",placement:"top"},te(j.a,Object(Y.a)({},e,{onClick:function(){try{navigator.unregisterProtocolHandler("web+pgpauth",ne),i(!1)}catch(e){}}}),"\u53d6\u6d88\u6ce8\u518c"))})),ae=n("nOHt"),ie=n("Ng2W"),oe=n.n(ie),ce=c.a.createElement;function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var se,le=function(e){var t=Object(ae.useRouter)();return ce(B.a,{title:"\u7c98\u8d34 web+pgpauth:login \u5f00\u5934\u7684\u8ba4\u8bc1\u94fe\u63a5",placement:"top"},ce(j.a,Object(Y.a)({},e,{startIcon:ce(oe.a,null),onClick:function(){var e=window.prompt("\u8f93\u5165 web+pgpauth \u94fe\u63a5");e&&!1!==e.startsWith("web+pgpauth:")&&t.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{query:{url:e}}))}}),"\u7c98\u8d34\u94fe\u63a5"))};!function(e){e[e.Wait=0]="Wait",e[e.Stop=1]="Stop",e[e.Running=2]="Running"}(se||(se={}));var pe=Object(E.a)((function(){return Object(o.useState)({open:!1,cb:function(){return 0},scanStatus:se.Wait,q:null,link:""})}));function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=function(){var e=pe.useContainer(),t=Object(_.a)(e,2),n=t[0],r=t[1];return{state:n,setState:r,open:function(){return new Promise((function(e){r((function(t){return de({},t,{open:!0,cb:e})}))}))},close:function(e){r((function(e){return de({},e,{open:!1})})),r((function(t){return t.cb(e),t}))},setScanStatus:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];r((function(t){return de({},t,{scanStatus:e})}))},startScan:function(){n.q&&n.q.start().then((function(){r((function(e){return de({},e,{scanStatus:se.Running})}))}))},stopScan:function(e){r((function(t){return de({},t,{link:e||t.link,scanStatus:se.Stop})})),n.q&&n.q.stop()}}},be=n("6u8J"),ve=n("kfFl"),me=n("yv+Y"),ge=n("EQI2"),Oe=n("+JwS");class ye{static hasCamera(){return navigator.mediaDevices.enumerateDevices().then(e=>e.some(e=>"videoinput"===e.kind)).catch(()=>!1)}constructor(e,t,n=ye.DEFAULT_CANVAS_SIZE){this.$video=e,this.$canvas=document.createElement("canvas"),this._onDecode=t,this._active=!1,this._paused=!1,this.$canvas.width=n,this.$canvas.height=n,this._sourceRect={x:0,y:0,width:n,height:n},this._onCanPlay=this._onCanPlay.bind(this),this._onPlay=this._onPlay.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.$video.addEventListener("canplay",this._onCanPlay),this.$video.addEventListener("play",this._onPlay),document.addEventListener("visibilitychange",this._onVisibilityChange),this._qrWorker=new Worker(ye.WORKER_PATH)}destroy(){this.$video.removeEventListener("canplay",this._onCanPlay),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stop(),this._qrWorker.postMessage({type:"close"})}start(){if(this._active&&!this._paused)return Promise.resolve();if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,this._paused=!1,document.hidden)return Promise.resolve();if(clearTimeout(this._offTimeout),this._offTimeout=null,this.$video.srcObject)return this.$video.play(),Promise.resolve();let e="environment";return this._getCameraStream("environment",!0).catch(()=>(e="user",this._getCameraStream())).then(t=>{this.$video.srcObject=t,this._setVideoMirror(e)}).catch(e=>{throw this._active=!1,e})}stop(){this.pause(),this._active=!1}pause(){this._paused=!0,this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout(()=>{const e=this.$video.srcObject&&this.$video.srcObject.getTracks()[0];e&&(e.stop(),this.$video.srcObject=null,this._offTimeout=null)},300)))}static scanImage(e,t=null,n=null,r=null,a=!1,i=!1){let o=!1,c=new Promise((i,c)=>{let u,s,l;n||(n=new Worker(ye.WORKER_PATH),o=!0,n.postMessage({type:"inversionMode",data:"both"})),s=e=>{"qrResult"===e.data.type&&(n.removeEventListener("message",s),n.removeEventListener("error",l),clearTimeout(u),null!==e.data.data?i(e.data.data):c("QR code not found."))},l=e=>{n.removeEventListener("message",s),n.removeEventListener("error",l),clearTimeout(u);const t=e?e.message||e:"Unknown Error";c("Scanner error: "+t)},n.addEventListener("message",s),n.addEventListener("error",l),u=setTimeout(()=>l("timeout"),3e3),ye._loadImage(e).then(e=>{const i=ye._getImageData(e,t,r,a);n.postMessage({type:"decode",data:i},[i.data.buffer])}).catch(l)});return t&&i&&(c=c.catch(()=>ye.scanImage(e,null,n,r,a))),c=c.finally(()=>{o&&n.postMessage({type:"close"})}),c}setGrayscaleWeights(e,t,n,r=!0){this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:e,green:t,blue:n,useIntegerApproximation:r}})}setInversionMode(e){this._qrWorker.postMessage({type:"inversionMode",data:e})}_onCanPlay(){this._updateSourceRect(),this.$video.play()}_onPlay(){this._updateSourceRect(),this._scanFrame()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_updateSourceRect(){const e=Math.min(this.$video.videoWidth,this.$video.videoHeight),t=Math.round(2/3*e);this._sourceRect.width=this._sourceRect.height=t,this._sourceRect.x=(this.$video.videoWidth-t)/2,this._sourceRect.y=(this.$video.videoHeight-t)/2}_scanFrame(){if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame(()=>{ye.scanImage(this.$video,this._sourceRect,this._qrWorker,this.$canvas,!0).then(this._onDecode,e=>{this._active&&"QR code not found."!==e&&console.error(e)}).then(()=>this._scanFrame())})}_getCameraStream(e,t=!1){const n=[{width:{min:1024}},{width:{min:768}},{}];return e&&(t&&(e={exact:e}),n.forEach(t=>t.facingMode=e)),this._getMatchingCameraStream(n)}_getMatchingCameraStream(e){return 0===e.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:e.shift()}).catch(()=>this._getMatchingCameraStream(e))}_setVideoMirror(e){const t="user"===e?-1:1;this.$video.style.transform="scaleX("+t+")"}static _getImageData(e,t=null,n=null,r=!1){n=n||document.createElement("canvas");const a=t&&t.x?t.x:0,i=t&&t.y?t.y:0,o=t&&t.width?t.width:e.width||e.videoWidth,c=t&&t.height?t.height:e.height||e.videoHeight;r||n.width===o&&n.height===c||(n.width=o,n.height=c);const u=n.getContext("2d",{alpha:!1});return u.imageSmoothingEnabled=!1,u.drawImage(e,a,i,o,c,0,0,n.width,n.height),u.getImageData(0,0,n.width,n.height)}static _loadImage(e){if(e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||window.ImageBitmap&&e instanceof window.ImageBitmap||window.OffscreenCanvas&&e instanceof window.OffscreenCanvas)return Promise.resolve(e);if(e instanceof Image)return ye._awaitImageLoad(e).then(()=>e);if(e instanceof File||e instanceof URL||"string"===typeof e){const t=new Image;return e instanceof File?t.src=URL.createObjectURL(e):t.src=e,ye._awaitImageLoad(t).then(()=>(e instanceof File&&URL.revokeObjectURL(t.src),t))}return Promise.reject("Unsupported image type.")}static _awaitImageLoad(e){return new Promise((t,n)=>{if(e.complete&&0!==e.naturalWidth)t();else{let r,a;r=()=>{e.removeEventListener("load",r),e.removeEventListener("error",a),t()},a=()=>{e.removeEventListener("load",r),e.removeEventListener("error",a),n("Image load error")},e.addEventListener("load",r),e.addEventListener("error",a)}})}}ye.DEFAULT_CANVAS_SIZE=400,ye.WORKER_PATH="qr-scanner-worker.min.js";var we=c.a.createElement;function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}ye.WORKER_PATH="js-worker/qr-scanner-worker.min.js";var ke=function(){var e=Object(o.useRef)(),t=he(),n=(t.setScanStatus,t.setState),r=t.stopScan;return Object(o.useEffect)((function(){var t=new ye(e.current,(function(e){e.startsWith("web+pgpauth:")&&r(e)}));return n((function(e){return Pe({},e,{q:t})})),function(){n((function(e){return e.q&&e.q.destroy(),Pe({},e,{q:null})}))}}),[]),we("video",{ref:e,muted:!0,playsInline:!0,style:{width:"100%",height:"100%"}})},_e=n("iuhU"),Ee=n("ZPUd"),Se=n.n(Ee),xe=n("R/WZ"),Re=c.a.createElement,Ce=Object(xe.a)((function(e){return{box:{width:"70vw",height:"50vh"},line:{height:3,backgroundColor:e.palette.primary.main,opacity:"0.7",animation:"$loop-run infinite",animationDirection:"alternate",animationTimingFunction:"linear",animationDuration:"2s"},"@keyframes loop-run":{from:{transform:"translateY(0vh)"},to:{transform:"translateY(50vh)"}}}})),De=function(){var e=Ce();return Re("div",{className:e.box},Re("div",{className:e.line}))},Ie=n("/EAt"),Me=n("Uf6+"),Te=n("sRsu"),Le=n("3PeG"),qe=n("S+8A"),Ue=n.n(qe),We=c.a.createElement,Ae=function(){var e=he(),t=e.state,n=e.close,r=e.startScan,a=Object(o.useMemo)((function(){if(!t.link)return null;var e=new URL(t.link);return{auth:new URL(e.searchParams.get("auth")).origin,fingerprint:e.searchParams.get("fingerprint"),mid:e.searchParams.get("mid")}}),[t.link]),i=We(j.a,{size:"large",onClick:r,endIcon:We(Ue.a,null)},"\u91cd\u65b0\u626b\u63cf");return We(u.a,{maxWidth:"sm",style:{width:"100vw"}},We(f.a,null,We(d.a,{title:"\u626b\u63cf\u7ed3\u679c",action:i}),We(h.a,null),We("div",{style:{overflow:"auto"}},We(Ie.a,null,We(Me.a,null,We(Te.a,null,We(Le.a,null,"auth"),We(Le.a,null,a.auth)),We(Te.a,null,We(Le.a,null,"fingerprint"),We(Le.a,null,a.fingerprint)),We(Te.a,null,We(Le.a,null,"mid"),We(Le.a,null,a.mid))))),We(y.a,null,We(j.a,{fullWidth:!0,onClick:function(){return n(t.link)},variant:"contained",size:"large",color:"primary"},"\u70b9\u51fb\u5e94\u7528"))))},Fe=c.a.createElement,He=function(){var e=he(),t=e.state,n=e.startScan;switch(t.scanStatus){case se.Running:return Fe(De,null);case se.Wait:return Fe("div",null,"wait");case se.Stop:return t.link?Fe(Ae,null):Fe(j.a,{color:"primary",variant:"contained",size:"large",onClick:n},"\u5f00\u59cb\u626b\u63cf")}},Ne=Object(o.forwardRef)((function(e,t){return Fe(be.a,Object(Y.a)({direction:"up",ref:t},e))})),$e=Object(xe.a)((function(e){return{root:{position:"relative"},over:{position:"relative",zIndex:2,backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText,transition:"0.7s"},video:{position:"absolute",zIndex:1,top:0,left:0,height:"100%",width:"100%"},main:{transition:"1s",backgroundColor:e.palette.background.default,color:e.palette.text.primary,padding:0},scanRuning:{backgroundColor:"unset"}}})),ze=function(){var e=he(),t=e.close,n=e.state,r=e.startScan,a=e.stopScan,i=$e();return Object(o.useEffect)((function(){r()}),[n.q]),Fe(ve.a,{open:n.open,onClose:t,fullScreen:!0,TransitionComponent:Ne,className:i.root},Fe("div",{className:i.video},Fe(ke,null)),Fe(me.a,{className:i.over},Fe(w.a,{container:!0,justify:"space-between"},Fe(w.a,{item:!0},"\u626b\u63cf\u4e8c\u7ef4\u7801"),Fe(w.a,{item:!0,style:{lineHeight:0}},Fe(Z.a,{color:"inherit",size:"small",onClick:function(){return t()}},Fe(Se.a,null))))),Fe(ge.a,{className:Object(_e.default)(i.over,i.main,n.scanStatus===se.Running&&i.scanRuning)},Fe(w.a,{container:!0,style:{height:"100%"},direction:"column",justify:"center",alignItems:"center"},Fe(w.a,{item:!0},Fe(He,null)))),Fe(Oe.a,{className:i.over},n.scanStatus===se.Running&&Fe(j.a,{color:"inherit",onClick:function(){return a()}},"\u505c\u6b62"),Fe(j.a,{color:"inherit",onClick:function(){return t()}},"\u53d6\u6d88")))},Ke=c.a.createElement,Ve=function(e){return Ke(pe.Provider,null,Ke(ze,null),e.children)},Be=c.a.createElement;function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qe=function(e){var t=he(),n=Object(ae.useRouter)();return Be(j.a,Object(Y.a)({},e,{startIcon:Be(Ue.a,null),onClick:function(){var e;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.awrap(t.open());case 2:if(e=r.sent){r.next=5;break}return r.abrupt("return");case 5:n.replace(Je({},n,{query:{url:e}}));case 6:case"end":return r.stop()}}),null,null,null,Promise)}}),"\u626b\u63cf")},Xe=c.a.createElement,Ge=function(e){var t=Object(o.useMemo)((function(){try{return new URL(e.auth).origin}catch(t){return""}}),[e.auth]);return Xe(o.Fragment,null,t)},Ye=Object(xe.a)((function(e){return{list:{paddingTop:0,paddingBottom:0},header:{},itemIncludeInput:{paddingLeft:0,paddingRight:0},sbtns:{marginTop:e.spacing(1)},main:{padding:0,overflow:"auto"}}})),et=function(){var e,t,n=Ye(),r=F(),a=r.state,i=r.selectUser,c=r.updateParams,u=r.postForm,s=a.params,l=Object(o.useRef)(),k=Object(o.useRef)(),_=Object(o.useRef)();return Xe("form",{action:s.auth,method:"POST",ref:l,onSubmit:function(e){var t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t=l.current){n.next=4;break}return n.abrupt("return");case 4:u(t);case 5:case"end":return n.stop()}}),null,null,null,Promise)}},Xe("input",{type:"hidden",name:"content",value:a.content,required:!0}),Xe(f.a,null,Xe(d.a,{className:n.header,title:"\u767b\u5f55",action:Xe(G,null)}),Xe(h.a,null),Xe(b.a,{className:n.main},Xe(v.a,{className:n.list},a.mode===x.Input?Xe(m.a,{divider:!0},Xe(g.a,{label:"\u767b\u5f55\u5730\u5740",helperText:"\u793a\u4f8b: https://example.com/auth",fullWidth:!0,variant:"outlined",disabled:a.pending,onChange:function(e){return c("auth")(e.target.value)},ref:_})):Xe(m.a,{divider:!0},Xe(O.a,{primary:Xe(Ge,{auth:s.auth}),secondary:"\u767b\u5f55\u5730\u5740"})),a.mode===x.Input&&Xe(m.a,{divider:!0},Xe(g.a,{label:"mid",helperText:"\u4e00\u6bb5\u7531\u5e94\u7528\u65b9\u751f\u6210\u7684\u65e0\u610f\u4e49\u7684\u9b54\u6cd5\u5b57\u7b26\u4e32",fullWidth:!0,variant:"outlined",disabled:a.pending,onChange:function(e){return c("mid")(e.target.value)}})),Xe(K,null),Xe(h.a,null),Xe(m.a,{button:!0,onClick:i,disabled:a.pending,ref:k},Xe(O.a,{primary:(null===(e=a.selectedUser)||void 0===e?void 0:e.userId)||"\u70b9\u51fb\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e10\u53f7",secondary:(null===(t=a.selectedUser)||void 0===t?void 0:t.userId)?"\u70b9\u51fb\u5207\u6362\u767b\u5f55\u5e10\u53f7":"\u7b49\u5f85\u9009\u62e9\u4e2d"})))),Xe(h.a,null),Xe(y.a,null,Xe(w.a,{container:!0,spacing:1},Xe(w.a,{item:!0,xs:12},Xe(j.a,{fullWidth:!0,size:"large",variant:"contained",color:"primary",type:"submit",disabled:a.pending},"\u767b\u5f55")),Xe(w.a,{item:!0,xs:12},Xe(P.a,{fullWidth:!0,size:"large",style:{whiteSpace:"nowrap"}},Xe(re,null),Xe(le,null),Xe(Qe,null)))))))},tt=n("jouk"),nt=c.a.createElement;function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function at(e){var t=e.query;if(t.url){var n=new URL(t.url);return{auth:n.searchParams.get("auth"),mid:n.searchParams.get("mid"),fingerprint:n.searchParams.get("fingerprint")}}return t}var it=function(){var e=Object(ae.useRouter)(),t=F().setState;return Object(o.useEffect)((function(){var n=x.Input;(e.query.auth||e.query.url)&&(n=x.Auto),t((function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rt(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{params:at(e),mode:n})}))}),[e.query]),nt(s.a,{title:"\u767b\u5f55",inContainer:!0},nt(s.b,null,nt(u.a,{maxWidth:"sm"},nt(et,null))))};t.default=function(){var e=Object(ae.useRouter)(),t=Object(o.useMemo)((function(){return at(e)}),[]);return nt(tt.b,null,nt(I.a,null,nt(D.b,null,nt(C.Provider,{initialState:t},nt(Ve,null,nt(it,null))))))}},ZPUd:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},hpeh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("Tue8")}])},"j+AN":function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return M}));var r,a=n("rePB"),i=n("ODXe"),o=n("q1tI"),c=n.n(o),u=n("zP5H");!function(e){e[e.Public=0]="Public",e[e.Private=1]="Private"}(r||(r={}));var s=Object(u.a)((function(){return Object(o.useState)({open:!1,keyType:r.Public,fingerprint:"",cb:function(e){return 0}})}));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(){var e=s.useContainer(),t=Object(i.a)(e,2),n=t[0],r=t[1];return{state:n,setState:r,open:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(t){r((function(n){return p({},n,{open:!0,keyType:e,fingerprint:"",cb:t})}))}))},close:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r((function(e){return p({},e,{open:!1})})),n.cb(e)}}},d=n("kfFl"),h=n("a49G"),b=n.n(h),v=n("V7QN"),m=n("EHhu"),g=n("i6mb"),O=n("tr08"),y=n("Z3vd"),w=n("R/WZ"),j=n("de8u"),P=n("5rCv"),k=n.n(P),_=c.a.createElement,E=function(e){var t=Object(O.a)();return _("div",{style:{paddingLeft:t.spacing(2)}},_(y.a,{startIcon:_(k.a,null),style:{margin:"6px 0",lineHeight:"24px"},onClick:function(){return e.onFinish()}},"\u5b8c\u6210\u9009\u62e9"))},S=[new v.a("\u540d",(function(e){return e.name})),new v.a("\u90ae\u7bb1",(function(e){return e.email})),new v.a("\u6307\u7eb9",(function(e){return e.fingerprint}))],x=Object(w.a)((function(e){return{table:{wordBreak:"keep-all","& .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded":{flexDirection:"row-reverse"},"& .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded h6":{paddingRight:e.spacing(3),paddingLeft:0}}}})),R=function(e){var t,n=f(),a=x(),i=Object(g.a)((function(){var t=m.b.users.find();return e.keyType===r.Private&&(t=t.exists("privateKey")),e.fingerprint&&(t=t.where("fingerprint").eq(e.fingerprint)),t.$})),c=(i||[]).map((function(e){return S.map((function(t){return t.opath(e)}))})),u=Object(o.useMemo)((function(){return{selectedUsers:[]}}),[]),s=Object(v.b)({customToolbarSelect:function(e){return _(E,{onFinish:function(){return n.close(u.selectedUsers)}})},selectableRowsOnClick:!0,onRowsSelect:function(e,t){var n=t.map((function(e){return i[e.dataIndex]}));return u.selectedUsers=n,t}});switch(e.keyType){case r.Public:t="\u9009\u62e9\u52a0\u5bc6\u516c\u94a5";break;case r.Private:t="\u9009\u62e9\u89e3\u5bc6\u79c1\u94a5",s.selectableRows="single"}return _(o.Fragment,null,null===i&&_(j.a,null),_("div",{className:a.table,onKeyPress:function(e){"Enter"===e.key&&u.selectedUsers.length>0&&n.close(u.selectedUsers)}},_(b.a,{title:t,columns:S,data:c,options:s})))},C=c.a.createElement,D=function(){var e=f(),t=e.state,n=e.close;return C(d.a,{open:t.open,fullWidth:!0,maxWidth:"md",onClose:function(){return n()}},C(R,{keyType:t.keyType}))},I=c.a.createElement,M=function(e){return I(s.Provider,null,I(D,null),e.children)}},koD6:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return s}));var r=n("rePB"),a=n("o0o1"),i=n.n(a),o=n("ODXe"),c=n("q1tI"),u=n("zP5H"),s=Object(u.a)((function(){return Object(c.useState)({})})),l=n("uBBE"),p=n("QYcz");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(){var e=s.useContainer(),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(l.b)();return{getUserPrivateKey:function(e){var t;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(n[e.privateKey]){o.next=4;break}return t=Promise.resolve().then((function(){var t,n,r,a,o;return i.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.privateKey,u.next=3,i.a.awrap(c.open(t));case 3:return n=u.sent,u.next=6,i.a.awrap(p.key.readArmored(t));case 6:return r=u.sent,a=r.keys,o=a[0],u.next=11,i.a.awrap(o.decrypt(n));case 11:return u.abrupt("return",o);case 12:case"end":return u.stop()}}),null,null,null,Promise)})),a((function(n){return d({},n,Object(r.a)({},e.privateKey,t))})),o.abrupt("return",t);case 4:return o.abrupt("return",n[e.privateKey]);case 5:case"end":return o.stop()}}),null,null,null,Promise)}}}}},[["hpeh",2,1,5,0,3,4,6,7,9]]]);