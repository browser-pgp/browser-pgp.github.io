(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5rCv":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),u=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=u},JOlb:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),u=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"}),"Details");t.default=u},Tue8:function(e,t,n){"use strict";n.r(t);var r,a,u=n("q1tI"),c=n.n(u),i=n("Ji2X"),o=n("uxHW"),s=n("o0o1"),l=n.n(s),p=n("30+C"),f=n("50B7"),d=n("oa/T"),b=n("eD//"),O=n("tVbE"),y=n("r9w1"),m=n("wb2y"),v=n("IsqK"),h=n("o4QW"),w=n("Z3vd"),g=n("R/WZ"),P=n("KQm4"),j=n("rePB"),x=n("ODXe"),k=n("zP5H");function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}!function(e){e[e.NotFound=0]="NotFound",e[e.Found=1]="Found",e[e.Multi=2]="Multi",e[e.MultiPickedOne=3]="MultiPickedOne"}(r||(r={})),function(e){e[e.None=0]="None",e[e.App=1]="App",e[e.User=2]="User",e[e.Auth=3]="Auth"}(a||(a={}));var E={mid:"",auth:"",fingerprint:""},I=Object(k.a)((function(e){return e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},E,{},e),Object(u.useState)({app:null,selectedUser:null,content:"",pending:!1,params:e,focus:a.None})})),U=n("j+AN"),M=n("csR4"),T=n("koD6"),S=n("EHhu"),F=n("QYcz"),N=n("XFFy");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e){return e.name+(e.email?" <".concat(e.email,">"):"")}var R=function(){var e=I.useContainer(),t=Object(x.a)(e,2),n=t[0],u=t[1],c=Object(U.c)(),i=Object(M.b)(),o=Object(T.b)().getUserPrivateKey,s=Object(N.c)("dddd"),p=function(){var e,t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=n.params.fingerprint.toLowerCase()){a.next=4;break}return u((function(e){return K({},e,{app:K({},e.app,{status:r.Multi})})})),a.abrupt("return");case 4:return a.next=6,l.a.awrap(S.b.users.find().where("fingerprint").eq(e).exec());case 6:t=a.sent,a.t0=t.length,a.next=0===a.t0?10:1===a.t0?12:14;break;case 10:return u((function(e){return K({},e,{app:K({},e.app,{status:r.NotFound})})})),a.abrupt("return");case 12:return function(){var e=t[0];u((function(t){return K({},t,{app:{status:r.Found,pubkey:e.publicKey,userId:A(e)}})}))}(),a.abrupt("return");case 14:return u((function(e){return K({},e,{app:K({},e.app,{status:r.Multi})})})),a.abrupt("return");case 16:case"end":return a.stop()}}),null,null,null,Promise)},f=function(){var e,t,r,c,i;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(r=function(e){var t,r,a,u,c,i;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,l.a.awrap(F.key.readArmored(n.app.pubkey));case 2:if(t=o.sent,r=t.err,a=Object(x.a)(t.keys,1),u=a[0],!(null===r||void 0===r?void 0:r.length)){o.next=8;break}throw r[0];case 8:return o.next=10,l.a.awrap(F.message.fromText(e));case 10:return c=o.sent,o.next=13,l.a.awrap(F.encrypt({message:c,publicKeys:[u]}));case 13:return i=o.sent,o.abrupt("return",i.data);case 15:case"end":return o.stop()}}),null,null,null,Promise)},t=function(e){var t,r,a;return l.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,l.a.awrap(o({privateKey:n.selectedUser.privkey}));case 2:return t=u.sent,u.next=5,l.a.awrap(F.cleartext.fromText(JSON.stringify(e)));case 5:return r=u.sent,u.next=8,l.a.awrap(F.sign({message:r,privateKeys:[t]}));case 8:return a=u.sent,u.abrupt("return",a.data);case 10:case"end":return u.stop()}}),null,null,null,Promise)},n.selectedUser){s.next=5;break}throw u((function(e){return K({},e,{focus:a.User})})),new N.a("\u672a\u9009\u62e9\u767b\u5f55\u5e10\u53f7");case 5:if(n.app.pubkey){s.next=8;break}throw u((function(e){return K({},e,{focus:a.App})})),new N.a("\u672a\u9009\u62e9\u5e94\u7528");case 8:if(n.params.auth){s.next=11;break}throw u((function(e){return K({},e,{focus:a.Auth})})),new N.a("\u767b\u5f55\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a");case 11:return e=n.selectedUser,c={mid:n.params.mid,fingerprint:e.fingerprint},s.next=15,l.a.awrap(t(c));case 15:return i=s.sent,s.next=18,l.a.awrap(r(i));case 18:return i=s.sent,u((function(e){return K({},e,{content:i})})),s.next=22,l.a.awrap(new Promise((function(e){return u((function(t){return e(),t}))})));case 22:case"end":return s.stop()}}),null,null,null,Promise)};return{state:n,setState:u,tryFindApp:p,selectUser:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(c.open(U.a.Private).then((function(e){return e[0]})));case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:u((function(t){return K({},t,{selectedUser:{privkey:e.privateKey,userId:e.name+(e.email?" <".concat(e.email,">"):""),fingerprint:e.fingerprint}})}));case 6:case"end":return t.stop()}}),null,null,null,Promise)},importUser:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(i.open());case 2:return e.next=4,l.a.awrap(p());case 4:case"end":return e.stop()}}),null,null,null,Promise)},pickOne:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(c.open(U.a.Public,n.params.fingerprint).then((function(e){return e[0]})));case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:u((function(t){return K({},t,{app:{status:r.MultiPickedOne,pubkey:e.publicKey,userId:A(e)}})}));case 6:case"end":return t.stop()}}),null,null,null,Promise)},updateParams:function(e){return function(t){u((function(n){return K({},n,{params:K({},n.params,Object(j.a)({},e,t))})}))}},postForm:function(e){var t;if(!n.pending)return(t=Promise.resolve(u((function(e){return K({},e,{pending:!0})}))).then((function(){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(f());case 2:e.submit();case 3:case"end":return t.stop()}}),null,null,null,Promise)}))).then.apply(t,Object(P.a)(s)).finally((function(){u((function(e){return K({},e,{pending:!1})}))}))}}},q=n("TjOe"),H=n("JOlb"),L=n.n(H),W=c.a.createElement,_=function(){var e=R(),t=e.state,n=t.app,a=t.pending,c=e.tryFindApp,i=e.importUser,o=e.pickOne;if(Object(u.useEffect)((function(){c()}),[]),null===n)return W(O.a,{button:!0,disabled:!0},W(v.a,{primary:"\u5c1d\u8bd5\u5339\u914d\u7f51\u7ad9\u6307\u7eb9\u4e2d..."}));switch(n.status){case r.NotFound:return W(O.a,{button:!0,onClick:i,disabled:a},W(v.a,{primary:"\u6ca1\u6709\u6307\u7eb9\u5339\u914d\u7684\u7f51\u7ad9\u516c\u94a5, \u70b9\u51fb\u5bfc\u5165\u516c\u94a5"}));case r.Found:return W(O.a,{button:!0},W(v.a,{primary:n.userId,secondary:"\u5c06\u8981\u767b\u5f55\u7684\u5e94\u7528"}));case r.MultiPickedOne:return W(O.a,{button:!0,onClick:o,disabled:a},W(v.a,{primary:n.userId,secondary:"\u518d\u6b21\u70b9\u51fb\u53ef\u9009\u62e9\u53e6\u4e00\u4e2a\u5e94\u7528"}),W(q.a,null,W(L.a,null)));case r.Multi:return W(O.a,{button:!0,onClick:o,disabled:a},W(v.a,{primary:"\u70b9\u51fb\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e94\u7528",secondary:"\u6709\u591a\u4e2a\u6307\u7eb9\u5339\u914d\u7684\u5e94\u7528, \u9700\u8981\u8fdb\u4e00\u6b65\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e94\u7528"}),W(q.a,null,W(L.a,null)))}},z=n("hlie"),B=n("csfp"),J=n("PsDL"),X=n("H27s"),Q=n.n(X),Z=c.a.createElement,G=function(){return Z(z.a,{href:"https://github.com/browser-pgp/browser-pgp#pgp-authencation-\u8ba4\u8bc1\u6d41\u7a0b",target:"pgp-web-auth-introduction"},Z(B.a,{title:"PGP Auth \u8ba4\u8bc1\u4ecb\u7ecd (\u65b0\u7a97\u53e3\u6253\u5f00)",placement:"left"},Z(J.a,null,Z(Q.a,null))))},V=c.a.createElement,Y=Object(g.a)((function(){return{list:{paddingTop:0,paddingBottom:0},header:{paddingBottom:0},itemIncludeInput:{paddingLeft:0,paddingRight:0}}})),$=function(){var e,t,n=Y(),r=R(),a=r.state,c=r.selectUser,i=r.updateParams,o=r.postForm,s=a.params,g=Object(u.useRef)(),P=Object(u.useState)({showUpdateAuthInput:!s.auth,showUpdateMidInput:!s.mid})[0],j=P.showUpdateAuthInput,x=P.showUpdateMidInput,k=Object(u.useRef)(),D=Object(u.useRef)();Object(u.useRef)();return V("form",{action:s.auth,method:"POST",ref:g,onSubmit:function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t=g.current){n.next=4;break}return n.abrupt("return");case 4:o(t);case 5:case"end":return n.stop()}}),null,null,null,Promise)}},V("input",{type:"hidden",name:"content",value:a.content,required:!0}),V(p.a,null,V(f.a,{className:n.header,title:"\u767b\u5f55",subheader:j?"\u624b\u52a8\u767b\u5f55":s.auth,action:V(G,null)}),V(d.a,null,V(b.a,{className:n.list},j&&V(O.a,{className:n.itemIncludeInput},V(y.a,{label:"\u767b\u5f55\u5730\u5740",helperText:"\u793a\u4f8b: https://example.com/auth",fullWidth:!0,variant:"outlined",disabled:a.pending,onChange:function(e){return i("auth")(e.target.value)},ref:D})),x&&V(O.a,{className:n.itemIncludeInput},V(y.a,{label:"mid",helperText:"\u4e00\u6bb5\u7531\u767b\u5f55\u65b9\u751f\u6210\u7684\u65e0\u610f\u4e49\u7684\u9b54\u6cd5\u5b57\u7b26\u4e32",fullWidth:!0,variant:"outlined",disabled:a.pending,onChange:function(e){return i("mid")(e.target.value)}})),V(_,null),V(m.a,null),V(O.a,{button:!0,onClick:c,disabled:a.pending,ref:k},V(v.a,{primary:(null===(e=a.selectedUser)||void 0===e?void 0:e.userId)||"\u70b9\u51fb\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e10\u53f7",secondary:(null===(t=a.selectedUser)||void 0===t?void 0:t.userId)?"\u5c06\u8981\u767b\u5f55\u7684\u5e10\u53f7":"\u7b49\u5f85\u9009\u62e9\u4e2d"})))),V(h.a,null,V(w.a,{fullWidth:!0,size:"large",variant:"contained",color:"primary",type:"submit",disabled:a.pending},"\u767b\u5f55"))))},ee=n("nOHt"),te=n("jouk"),ne=c.a.createElement,re=function(){return ne(o.a,{title:"\u767b\u5f55"},ne(o.b,null,ne(i.a,{maxWidth:"sm"},ne($,null))))};t.default=function(){var e=Object(ee.useRouter)();return ne(te.b,null,ne(M.a,null,ne(U.b,null,ne(I.Provider,{initialState:e.query||{}},ne(re,null)))))}},"j+AN":function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return F}));var r,a=n("rePB"),u=n("ODXe"),c=n("q1tI"),i=n.n(c),o=n("zP5H");!function(e){e[e.Public=0]="Public",e[e.Private=1]="Private"}(r||(r={}));var s=Object(o.a)((function(){return Object(c.useState)({open:!1,keyType:r.Public,fingerprint:"",cb:function(e){return 0}})}));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(){var e=s.useContainer(),t=Object(u.a)(e,2),n=t[0],r=t[1];return{state:n,setState:r,open:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(t){r((function(n){return p({},n,{open:!0,keyType:e,fingerprint:"",cb:t})}))}))},close:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r((function(e){return p({},e,{open:!1})})),n.cb(e)}}},d=n("kfFl"),b=n("a49G"),O=n.n(b),y=n("V7QN"),m=n("EHhu"),v=n("i6mb"),h=n("tr08"),w=n("Z3vd"),g=n("R/WZ"),P=n("de8u"),j=n("5rCv"),x=n.n(j),k=i.a.createElement,D=function(e){var t=Object(h.a)();return k("div",{style:{paddingLeft:t.spacing(2)}},k(w.a,{startIcon:k(x.a,null),style:{margin:"6px 0",lineHeight:"24px"},onClick:function(){return e.onFinish()}},"\u5b8c\u6210\u9009\u62e9"))},E=[new y.a("\u540d",(function(e){return e.name})),new y.a("\u90ae\u7bb1",(function(e){return e.email})),new y.a("\u6307\u7eb9",(function(e){return e.fingerprint}))],I=Object(g.a)((function(e){return{table:{wordBreak:"keep-all","& .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded":{flexDirection:"row-reverse"},"& .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded h6":{paddingRight:e.spacing(3),paddingLeft:0}}}})),U=function(e){var t,n=f(),a=I(),u=Object(v.a)((function(){var t=m.b.users.find();return e.keyType===r.Private&&(t=t.exists("privateKey")),e.fingerprint&&(t=t.where("fingerprint").eq(e.fingerprint)),t.$})),i=(u||[]).map((function(e){return E.map((function(t){return t.opath(e)}))})),o=Object(c.useMemo)((function(){return{selectedUsers:[]}}),[]),s=Object(y.b)({customToolbarSelect:function(e){return k(D,{onFinish:function(){return n.close(o.selectedUsers)}})},selectableRowsOnClick:!0,onRowsSelect:function(e,t){var n=t.map((function(e){return u[e.dataIndex]}));return o.selectedUsers=n,t}});switch(e.keyType){case r.Public:t="\u9009\u62e9\u52a0\u5bc6\u516c\u94a5";break;case r.Private:t="\u9009\u62e9\u89e3\u5bc6\u79c1\u94a5",s.selectableRows="single"}return k(c.Fragment,null,null===u&&k(P.a,null),k("div",{className:a.table,onKeyPress:function(e){"Enter"===e.key&&o.selectedUsers.length>0&&n.close(o.selectedUsers)}},k(O.a,{title:t,columns:E,data:i,options:s})))},M=i.a.createElement,T=function(){var e=f(),t=e.state,n=e.close;return M(d.a,{open:t.open,fullWidth:!0,maxWidth:"md",onClose:function(){return n()}},M(U,{keyType:t.keyType}))},S=i.a.createElement,F=function(e){return S(s.Provider,null,S(T,null),e.children)}},koD6:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return s}));var r=n("rePB"),a=n("o0o1"),u=n.n(a),c=n("ODXe"),i=n("q1tI"),o=n("zP5H"),s=Object(o.a)((function(){return Object(i.useState)({})})),l=n("uBBE"),p=n("QYcz");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(){var e=s.useContainer(),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(l.b)();return{getUserPrivateKey:function(e){var t;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(n[e.privateKey]){c.next=4;break}return t=Promise.resolve().then((function(){var t,n,r,a,c;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.privateKey,o.next=3,u.a.awrap(i.open(t));case 3:return n=o.sent,o.next=6,u.a.awrap(p.key.readArmored(t));case 6:return r=o.sent,a=r.keys,c=a[0],o.next=11,u.a.awrap(c.decrypt(n));case 11:return o.abrupt("return",c);case 12:case"end":return o.stop()}}),null,null,null,Promise)})),a((function(n){return d({},n,Object(r.a)({},e.privateKey,t))})),c.abrupt("return",t);case 4:return c.abrupt("return",n[e.privateKey]);case 5:case"end":return c.stop()}}),null,null,null,Promise)}}}},uJmL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("Tue8")}])}},[["uJmL",2,1,6,0,3,4,5,7,9]]]);