(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5rCv":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("q1tI")),u=(0,n(r("8/g6")).default)(a.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=u},JOlb:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("q1tI")),u=(0,n(r("8/g6")).default)(a.default.createElement("path",{d:"M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"}),"Details");t.default=u},Tue8:function(e,t,r){"use strict";r.r(t);var n,a,u=r("rePB"),c=r("q1tI"),i=r.n(c),o=r("Ji2X"),s=r("uxHW"),l=r("o0o1"),p=r.n(l),f=r("30+C"),b=r("50B7"),d=r("oa/T"),O=r("eD//"),y=r("tVbE"),m=r("r9w1"),v=r("wb2y"),g=r("IsqK"),h=r("o4QW"),j=r("NrVZ"),w=r("Z3vd"),P=r("R/WZ"),k=r("KQm4"),x=r("ODXe"),D=r("zP5H");function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}!function(e){e[e.NotFound=0]="NotFound",e[e.Found=1]="Found",e[e.Multi=2]="Multi",e[e.MultiPickedOne=3]="MultiPickedOne"}(n||(n={})),function(e){e[e.None=0]="None",e[e.App=1]="App",e[e.User=2]="User",e[e.Auth=3]="Auth"}(a||(a={}));var I,S={mid:"",auth:"",fingerprint:""};!function(e){e[e.Auto=0]="Auto",e[e.Input=1]="Input"}(I||(I={}));var M=Object(D.a)((function(e){return e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},S,{},e),Object(c.useState)({app:null,selectedUser:null,content:"",pending:!1,params:e,focus:a.None,mode:I.Auto})})),U=r("j+AN"),C=r("csR4"),T=r("koD6"),A=r("EHhu"),N=r("QYcz"),R=r("XFFy");function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e){return e.name+(e.email?" <".concat(e.email,">"):"")}var H=function(){var e=M.useContainer(),t=Object(x.a)(e,2),r=t[0],c=t[1],i=Object(U.c)(),o=Object(C.b)(),s=Object(T.b)().getUserPrivateKey,l=function(){var e,t;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=r.params.fingerprint.toLowerCase()){a.next=4;break}return c((function(e){return q({},e,{app:q({},e.app,{status:n.Multi})})})),a.abrupt("return");case 4:return a.next=6,p.a.awrap(A.b.users.find().where("fingerprint").eq(e).exec());case 6:t=a.sent,a.t0=t.length,a.next=0===a.t0?10:1===a.t0?12:14;break;case 10:return c((function(e){return q({},e,{app:q({},e.app,{status:n.NotFound})})})),a.abrupt("return");case 12:return function(){var e=t[0];c((function(t){return q({},t,{app:{status:n.Found,pubkey:e.publicKey,userId:K(e)}})}))}(),a.abrupt("return");case 14:return c((function(e){return q({},e,{app:q({},e.app,{status:n.Multi})})})),a.abrupt("return");case 16:case"end":return a.stop()}}),null,null,null,Promise)},f=function(){var e,t,n,u,i;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=function(e){var t,n,a,u,c,i;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,p.a.awrap(N.key.readArmored(r.app.pubkey));case 2:if(t=o.sent,n=t.err,a=Object(x.a)(t.keys,1),u=a[0],!(null===n||void 0===n?void 0:n.length)){o.next=8;break}throw n[0];case 8:return o.next=10,p.a.awrap(N.message.fromText(e));case 10:return c=o.sent,o.next=13,p.a.awrap(N.encrypt({message:c,publicKeys:[u]}));case 13:return i=o.sent,o.abrupt("return",i.data);case 15:case"end":return o.stop()}}),null,null,null,Promise)},t=function(e){var t,n,a;return p.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,p.a.awrap(s({privateKey:r.selectedUser.privkey}));case 2:return t=u.sent,u.next=5,p.a.awrap(N.cleartext.fromText(JSON.stringify(e)));case 5:return n=u.sent,u.next=8,p.a.awrap(N.sign({message:n,privateKeys:[t]}));case 8:return a=u.sent,u.abrupt("return",a.data);case 10:case"end":return u.stop()}}),null,null,null,Promise)},r.selectedUser){o.next=5;break}throw c((function(e){return q({},e,{focus:a.User})})),new R.a("\u672a\u9009\u62e9\u767b\u5f55\u5e10\u53f7");case 5:if(r.app.pubkey){o.next=8;break}throw c((function(e){return q({},e,{focus:a.App})})),new R.a("\u672a\u9009\u62e9\u5e94\u7528");case 8:if(r.params.auth){o.next=11;break}throw c((function(e){return q({},e,{focus:a.Auth})})),new R.a("\u767b\u5f55\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a");case 11:return e=r.selectedUser,u={mid:r.params.mid,auth:r.params.auth,fingerprint:e.fingerprint},o.next=15,p.a.awrap(t(u));case 15:return i=o.sent,o.next=18,p.a.awrap(n(i));case 18:return i=o.sent,c((function(e){return q({},e,{content:i})})),o.next=22,p.a.awrap(new Promise((function(e){return c((function(t){return e(),t}))})));case 22:case"end":return o.stop()}}),null,null,null,Promise)},b=Object(R.c)("\u8ba4\u8bc1\u7b7e\u540d\u5e76\u52a0\u5bc6");return{state:r,setState:c,tryFindApp:l,selectUser:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(i.open(U.a.Private).then((function(e){return e[0]})));case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:c((function(t){return q({},t,{selectedUser:{privkey:e.privateKey,userId:e.name+(e.email?" <".concat(e.email,">"):""),fingerprint:e.fingerprint}})}));case 6:case"end":return t.stop()}}),null,null,null,Promise)},importUser:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(o.open());case 2:return e.next=4,p.a.awrap(l());case 4:case"end":return e.stop()}}),null,null,null,Promise)},pickOne:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(i.open(U.a.Public,r.params.fingerprint).then((function(e){return e[0]})));case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:c((function(t){return q({},t,{app:{status:n.MultiPickedOne,pubkey:e.publicKey,userId:K(e)}})}));case 6:case"end":return t.stop()}}),null,null,null,Promise)},updateParams:function(e){return function(t){c((function(r){return q({},r,{params:q({},r.params,Object(u.a)({},e,t))})}))}},postForm:function(e){var t;if(!r.pending)return(t=Promise.resolve(c((function(e){return q({},e,{pending:!0})}))).then((function(){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(f());case 2:e.submit();case 3:case"end":return t.stop()}}),null,null,null,Promise)}))).then.apply(t,Object(k.a)(b)).finally((function(){c((function(e){return q({},e,{pending:!1})}))}))}}},W=r("TjOe"),z=r("JOlb"),_=r.n(z),B=i.a.createElement,L=function(){var e=H(),t=e.state,r=t.app,a=t.pending,u=t.params,i=e.tryFindApp,o=e.importUser,s=e.pickOne;if(Object(c.useEffect)((function(){i()}),[u.fingerprint]),null===r)return B(y.a,{button:!0,disabled:!0},B(g.a,{primary:"\u5c1d\u8bd5\u5339\u914d\u7f51\u7ad9\u6307\u7eb9\u4e2d..."}));switch(r.status){case n.NotFound:return B(y.a,{button:!0,onClick:o,disabled:a},B(g.a,{primary:"\u6ca1\u6709\u6307\u7eb9\u5339\u914d\u7684\u7f51\u7ad9\u516c\u94a5, \u70b9\u51fb\u5bfc\u5165\u516c\u94a5"}));case n.Found:return B(y.a,{button:!0},B(g.a,{primary:r.userId,secondary:"\u5c06\u8981\u767b\u5f55\u7684\u5e94\u7528"}));case n.MultiPickedOne:return B(y.a,{button:!0,onClick:s,disabled:a},B(g.a,{primary:r.userId,secondary:"\u518d\u6b21\u70b9\u51fb\u53ef\u9009\u62e9\u53e6\u4e00\u4e2a\u5e94\u7528"}),B(W.a,null,B(_.a,null)));case n.Multi:return B(y.a,{button:!0,onClick:s,disabled:a},B(g.a,{primary:"\u70b9\u51fb\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e94\u7528",secondary:"\u6709\u591a\u4e2a\u6307\u7eb9\u5339\u914d\u7684\u5e94\u7528, \u9700\u8981\u8fdb\u4e00\u6b65\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e94\u7528"}),B(W.a,null,B(_.a,null)))}},X=r("hlie"),J=r("csfp"),Q=r("PsDL"),Z=r("H27s"),G=r.n(Z),V=i.a.createElement,Y=function(){return V(X.a,{href:"https://github.com/browser-pgp/browser-pgp#pgp-authencation-\u8ba4\u8bc1\u6d41\u7a0b",target:"pgp-web-auth-introduction"},V(J.a,{title:"PGP Auth \u8ba4\u8bc1\u4ecb\u7ecd (\u65b0\u7a97\u53e3\u6253\u5f00)",placement:"left"},V(Q.a,null,V(G.a,null))))},$=r("wx14"),ee=r("7o7e"),te=i.a.createElement,re=Object(ee.b)("/login")+"?url=%s",ne=Object(c.forwardRef)((function(e,t){var r=Object(c.useMemo)((function(){try{return navigator.registerProtocolHandler("web+pgpauth",re,"PGP Auth"),!0}catch(e){return console.log(e),!1}}),[]),n=Object(c.useState)(r),a=n[0],u=n[1];return!1===a?te(J.a,{ref:t,title:"\u8bbe\u4e3a\u6253\u5f00 web+pgpauth \u534f\u8bae\u7684\u9ed8\u8ba4\u5e94\u7528",placement:"top"},te(w.a,Object($.a)({},e,{onClick:function(){try{navigator.registerProtocolHandler("web+pgpauth",re,"PGP Auth"),u(!0)}catch(e){}}}),"\u8bbe\u4e3a\u9ed8\u8ba4")):te(J.a,{ref:t,title:"\u4e0d\u518d\u54cd\u5e94 web+pgpauth \u534f\u8bae",placement:"top"},te(w.a,Object($.a)({},e,{onClick:function(){try{navigator.unregisterProtocolHandler("web+pgpauth",re),u(!1)}catch(e){}}}),"\u53d6\u6d88\u6ce8\u518c"))})),ae=r("nOHt"),ue=i.a.createElement;function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ie=function(e){var t=Object(ae.useRouter)();return ue(J.a,{title:"\u7c98\u8d34 web+pgpauth:login \u5f00\u5934\u7684\u8ba4\u8bc1\u94fe\u63a5",placement:"top"},ue(w.a,Object($.a)({},e,{onClick:function(){var e=window.prompt("\u8f93\u5165 web+pgpauth \u94fe\u63a5");e&&!1!==e.startsWith("web+pgpauth:")&&t.replace(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{query:{url:e}}))}}),"\u7c98\u8d34\u94fe\u63a5"))},oe=i.a.createElement,se=Object(P.a)((function(){return{list:{paddingTop:0,paddingBottom:0},header:{paddingBottom:0},itemIncludeInput:{paddingLeft:0,paddingRight:0}}})),le=function(){var e,t,r=se(),n=H(),a=n.state,u=n.selectUser,i=n.updateParams,o=n.postForm,s=a.params,l=Object(c.useRef)(),P=Object(c.useRef)(),k=Object(c.useRef)();Object(c.useRef)();return oe("form",{action:s.auth,method:"POST",ref:l,onSubmit:function(e){var t;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),t=l.current){r.next=4;break}return r.abrupt("return");case 4:o(t);case 5:case"end":return r.stop()}}),null,null,null,Promise)}},oe("input",{type:"hidden",name:"content",value:a.content,required:!0}),oe(f.a,null,oe(b.a,{className:r.header,title:"\u767b\u5f55",subheader:a.mode===I.Input?"\u624b\u52a8\u767b\u5f55":s.auth,action:oe(Y,null)}),oe(d.a,null,oe(O.a,{className:r.list},a.mode===I.Input&&oe(y.a,{className:r.itemIncludeInput},oe(m.a,{label:"\u767b\u5f55\u5730\u5740",helperText:"\u793a\u4f8b: https://example.com/auth",fullWidth:!0,variant:"outlined",disabled:a.pending,onChange:function(e){return i("auth")(e.target.value)},ref:k})),a.mode===I.Input&&oe(y.a,{className:r.itemIncludeInput},oe(m.a,{label:"mid",helperText:"\u4e00\u6bb5\u7531\u5e94\u7528\u65b9\u751f\u6210\u7684\u65e0\u610f\u4e49\u7684\u9b54\u6cd5\u5b57\u7b26\u4e32",fullWidth:!0,variant:"outlined",disabled:a.pending,onChange:function(e){return i("mid")(e.target.value)}})),oe(L,null),oe(v.a,null),oe(y.a,{button:!0,onClick:u,disabled:a.pending,ref:P},oe(g.a,{primary:(null===(e=a.selectedUser)||void 0===e?void 0:e.userId)||"\u70b9\u51fb\u9009\u62e9\u8981\u767b\u5f55\u7684\u5e10\u53f7",secondary:(null===(t=a.selectedUser)||void 0===t?void 0:t.userId)?"\u70b9\u51fb\u5207\u6362\u767b\u5f55\u5e10\u53f7":"\u7b49\u5f85\u9009\u62e9\u4e2d"})))),oe(h.a,null,oe(j.a,{size:"large",style:{whiteSpace:"nowrap"}},oe(ne,null),oe(ie,null)),oe(w.a,{fullWidth:!0,size:"large",variant:"contained",color:"primary",type:"submit",disabled:a.pending},"\u767b\u5f55"))))},pe=r("jouk"),fe=i.a.createElement;function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){var t=e.query;if(t.url){var r=new URL(t.url);return{auth:r.searchParams.get("auth"),mid:r.searchParams.get("mid"),fingerprint:r.searchParams.get("fingerprint")}}return t}var Oe=function(){var e=Object(ae.useRouter)(),t=H().setState;return Object(c.useEffect)((function(){var r=I.Input;(e.query.auth||e.query.url)&&(r=I.Auto),t((function(t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{params:de(e),mode:r})}))}),[e.query]),fe(s.a,{title:"\u767b\u5f55",inContainer:!0},fe(s.b,null,fe(o.a,{maxWidth:"sm"},fe(le,null))))};t.default=function(){var e=Object(ae.useRouter)(),t=Object(c.useMemo)((function(){return de(e)}),[]);return fe(pe.b,null,fe(C.a,null,fe(U.b,null,fe(M.Provider,{initialState:t},fe(Oe,null)))))}},hpeh:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r("Tue8")}])},"j+AN":function(e,t,r){"use strict";r.d(t,"c",(function(){return f})),r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return T}));var n,a=r("rePB"),u=r("ODXe"),c=r("q1tI"),i=r.n(c),o=r("zP5H");!function(e){e[e.Public=0]="Public",e[e.Private=1]="Private"}(n||(n={}));var s=Object(o.a)((function(){return Object(c.useState)({open:!1,keyType:n.Public,fingerprint:"",cb:function(e){return 0}})}));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(){var e=s.useContainer(),t=Object(u.a)(e,2),r=t[0],n=t[1];return{state:r,setState:n,open:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(t){n((function(r){return p({},r,{open:!0,keyType:e,fingerprint:"",cb:t})}))}))},close:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n((function(e){return p({},e,{open:!1})})),r.cb(e)}}},b=r("kfFl"),d=r("a49G"),O=r.n(d),y=r("V7QN"),m=r("EHhu"),v=r("i6mb"),g=r("tr08"),h=r("Z3vd"),j=r("R/WZ"),w=r("de8u"),P=r("5rCv"),k=r.n(P),x=i.a.createElement,D=function(e){var t=Object(g.a)();return x("div",{style:{paddingLeft:t.spacing(2)}},x(h.a,{startIcon:x(k.a,null),style:{margin:"6px 0",lineHeight:"24px"},onClick:function(){return e.onFinish()}},"\u5b8c\u6210\u9009\u62e9"))},E=[new y.a("\u540d",(function(e){return e.name})),new y.a("\u90ae\u7bb1",(function(e){return e.email})),new y.a("\u6307\u7eb9",(function(e){return e.fingerprint}))],I=Object(j.a)((function(e){return{table:{wordBreak:"keep-all","& .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded":{flexDirection:"row-reverse"},"& .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded h6":{paddingRight:e.spacing(3),paddingLeft:0}}}})),S=function(e){var t,r=f(),a=I(),u=Object(v.a)((function(){var t=m.b.users.find();return e.keyType===n.Private&&(t=t.exists("privateKey")),e.fingerprint&&(t=t.where("fingerprint").eq(e.fingerprint)),t.$})),i=(u||[]).map((function(e){return E.map((function(t){return t.opath(e)}))})),o=Object(c.useMemo)((function(){return{selectedUsers:[]}}),[]),s=Object(y.b)({customToolbarSelect:function(e){return x(D,{onFinish:function(){return r.close(o.selectedUsers)}})},selectableRowsOnClick:!0,onRowsSelect:function(e,t){var r=t.map((function(e){return u[e.dataIndex]}));return o.selectedUsers=r,t}});switch(e.keyType){case n.Public:t="\u9009\u62e9\u52a0\u5bc6\u516c\u94a5";break;case n.Private:t="\u9009\u62e9\u89e3\u5bc6\u79c1\u94a5",s.selectableRows="single"}return x(c.Fragment,null,null===u&&x(w.a,null),x("div",{className:a.table,onKeyPress:function(e){"Enter"===e.key&&o.selectedUsers.length>0&&r.close(o.selectedUsers)}},x(O.a,{title:t,columns:E,data:i,options:s})))},M=i.a.createElement,U=function(){var e=f(),t=e.state,r=e.close;return M(b.a,{open:t.open,fullWidth:!0,maxWidth:"md",onClose:function(){return r()}},M(S,{keyType:t.keyType}))},C=i.a.createElement,T=function(e){return C(s.Provider,null,C(U,null),e.children)}},koD6:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return s}));var n=r("rePB"),a=r("o0o1"),u=r.n(a),c=r("ODXe"),i=r("q1tI"),o=r("zP5H"),s=Object(o.a)((function(){return Object(i.useState)({})})),l=r("uBBE"),p=r("QYcz");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(){var e=s.useContainer(),t=Object(c.a)(e,2),r=t[0],a=t[1],i=Object(l.b)();return{getUserPrivateKey:function(e){var t;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(r[e.privateKey]){c.next=4;break}return t=Promise.resolve().then((function(){var t,r,n,a,c;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.privateKey,o.next=3,u.a.awrap(i.open(t));case 3:return r=o.sent,o.next=6,u.a.awrap(p.key.readArmored(t));case 6:return n=o.sent,a=n.keys,c=a[0],o.next=11,u.a.awrap(c.decrypt(r));case 11:return o.abrupt("return",c);case 12:case"end":return o.stop()}}),null,null,null,Promise)})),a((function(r){return b({},r,Object(n.a)({},e.privateKey,t))})),c.abrupt("return",t);case 4:return c.abrupt("return",r[e.privateKey]);case 5:case"end":return c.stop()}}),null,null,null,Promise)}}}}},[["hpeh",2,1,6,0,3,4,5,7,9]]]);