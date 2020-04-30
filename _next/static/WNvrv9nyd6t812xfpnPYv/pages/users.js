(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1waj":function(e,n,t){"use strict";var r=t("TqRt");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("q1tI")),u=(0,r(t("8/g6")).default)(a.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.default=u},"83vt":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t("HWNU")}])},HWNU:function(e,n,t){"use strict";t.r(n),t.d(n,"UsersPage",(function(){return ce}));var r=t("q1tI"),a=t.n(r),u=t("de8u"),i=t("EHhu"),o=t("i6mb"),l=t("a49G"),c=t.n(l),s=t("V7QN"),p=t("VmPI"),d=t("PsDL"),f=t("Z3vd"),b=t("1waj"),m=t.n(b),v=t("o0o1"),y=t.n(v),g=t("KQm4"),h=t("rePB"),w=t("ODXe"),O=t("zP5H"),j=Object(O.a)((function(){return Object(r.useState)({open:!1,pending:!1})})),P=t("QYcz"),k=t.n(P),E=t("XFFy");function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var W=function(e){return{name:e,value:e}},q=[W("rsa4096"),W("rsa2048"),W("curve25519"),W("p256"),W("p384"),W("p521"),W("secp256k1"),W("brainpoolP256r1"),W("brainpoolP384r1"),W("brainpoolP512r1")],_=function(){var e=j.useContainer(),n=Object(w.a)(e,2),t=n[0],r=n[1],a=Object(E.c)("\u751f\u6210\u7528\u6237\u5bc6\u94a5\u5bf9"),u=function(){r((function(e){return K({},e,{open:!1})}))};return{state:t,setState:r,close:u,genUserKey:function(e){var n;return y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!t.pending){o.next=2;break}return o.abrupt("return");case 2:return o.abrupt("return",(n=Promise.resolve(r((function(e){return K({},e,{pending:!0})}))).then((function(){var n;return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(k.a.generateKey(K({userIds:[{name:e.name,email:e.email}],passphrase:e.pass},e.curve.startsWith("rsa")?{numBits:Number(e.curve.slice(-4))}:{curve:e.curve})));case 2:return n=t.sent,t.next=5,y.a.awrap(i.b.users.insert({publicKey:n.publicKeyArmored,fingerprint:n.key.toPublic().getFingerprint(),name:e.name,email:e.email,privateKey:n.privateKeyArmored,revocationCertificate:n.revocationCertificate}));case 5:u();case 6:case"end":return t.stop()}}),null,null,null,Promise)}))).then.apply(n,Object(g.a)(a)).finally((function(){r((function(e){return K({},e,{pending:!1})}))})));case 3:case"end":return o.stop()}}),null,null,null,Promise)},open:function(){r((function(e){return K({},e,{open:!0})}))}}},C=t("kfFl"),x=t("tr08"),D=t("yv+Y"),M=t("EQI2"),T=t("tRbT"),B=t("r9w1"),H=t("ADg1"),I=t("1AYd"),S=t("cVXz"),U=t("jjAL"),z=t("+JwS"),A=t("MHX4"),N=a.a.createElement,V=function(){var e=_(),n=e.state,t=e.genUserKey,r=e.close,a=Object(x.a)(),u=Object(A.b)({defaultValues:{curve:q[0].value,email:"",name:"",pass:"",pass2:""}}),i=u.register,o=u.handleSubmit,l=u.control,c=u.watch,s=u.errors,p=c("pass"),d=!!s.pass2;return N("form",{onSubmit:o(t)},N(D.a,null,"\u6dfb\u52a0\u7528\u6237"),N(M.a,{style:{paddingTop:a.spacing(2),paddingBottom:a.spacing(2)}},N(T.a,{container:!0,spacing:2,direction:"column"},N(T.a,{item:!0},N(B.a,{variant:"outlined",disabled:n.pending,fullWidth:!0,inputRef:i,name:"name",label:"\u79f0\u547c"})),N(T.a,{item:!0},N(B.a,{variant:"outlined",disabled:n.pending,fullWidth:!0,inputRef:i,type:"email",name:"email",label:"\u90ae\u7bb1"})),N(T.a,{item:!0},N(H.a,{fullWidth:!0,variant:"outlined",required:!0,disabled:n.pending},N(I.a,{id:"curve-options"},"\u52a0\u5bc6\u9009\u9879"),N(A.a,{as:N(S.a,{required:!0,labelId:"curve-options"},q.map((function(e){return N(U.a,{key:e.value,value:e.value},e.name)}))),name:"curve",control:l}))),N(T.a,{item:!0},N(B.a,{variant:"outlined",disabled:n.pending,fullWidth:!0,inputRef:i,required:!0,type:"password",label:"\u89e3\u5bc6\u5bc6\u7801",name:"pass"})),N(T.a,{item:!0},N(B.a,{variant:"outlined",disabled:n.pending,fullWidth:!0,inputRef:i({validate:function(e){return!e||p===e}}),required:!0,type:"password",label:"\u89e3\u5bc6\u5bc6\u7801(\u4e8c\u6b21\u786e\u8ba4)",name:"pass2",error:d,helperText:d?"\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4":""})))),N(z.a,null,N(f.a,{disabled:n.pending,onClick:r},"\u53d6\u6d88"),N(f.a,{disabled:n.pending,color:"primary",type:"submit"},"\u751f\u6210\u65b0\u7684\u5bc6\u94a5")))},X=a.a.createElement,F=function(){var e=_(),n=e.state,t=e.close;return X(C.a,{open:n.open,maxWidth:"sm",fullWidth:!0,onClose:n.pending?function(){return 0}:t},X(V,null))},L=a.a.createElement,Q=function(e){return L(j.Provider,null,L(F,null),e.children)},J=t("jouk"),Y=t("csR4"),G=t("MPUk"),Z=t.n(G),$=a.a.createElement,ee=function(e){var n=Object(Y.b)();return $(d.a,{onClick:function(){return n.open(e.id)}},$(Z.a,null))},ne=a.a.createElement,te=[new s.a("\u79f0\u547c",(function(e){return e.name})),new s.a("\u90ae\u7bb1",(function(e){return e.email})),new s.a("\u5c5e\u6027",(function(e){return e.publicKey}),{searchable:!1,filter:!1,sort:!1,customBodyRender:function(e){return ne(J.a,{pubKey:e})}}),new s.a("\u79c1\u94a5",(function(e){return e.privateKey?"\u6709\u79c1\u94a5":"\u65e0\u79c1\u94a5"}),{searchable:!1,sort:!1,customBodyRender:function(e){return ne(p.a,{disabled:!0,color:"primary",checked:"\u6709\u79c1\u94a5"===e})}}),new s.a("\u66f4\u591a",(function(e){return e.fingerprint}),{filter:!1,searchable:!1,sort:!1,customBodyRender:function(e){return ne(ee,{id:e})}})],re=function(){var e=_(),n=Object(Y.b)();return ne(r.Fragment,null,ne(d.a,{onClick:function(){return e.open()}},ne(m.a,null)),ne(f.a,{onClick:function(){return n.open()}},"\u5bfc\u5165"))},ae=Object(s.b)({customToolbar:function(){return ne(re,null)},selectableRows:"none"}),ue=function(e){var n=e.users.map((function(e){return te.map((function(n){return n.opath(e)}))}));return ne("div",{style:{wordBreak:"keep-all"}},ne(c.a,{title:"\u8054\u7cfb\u4eba\u5217\u8868",data:n,columns:te,options:ae}))},ie=t("uxHW"),oe=t("6pqD"),le=a.a.createElement,ce=function(){var e=Object(o.a)((function(){return i.b.users.find().$}));return le(ie.a,{title:"\u8054\u7cfb\u4eba\u7ba1\u7406",inContainer:!0},null===e&&le(u.a,null),le(ue,{users:e||[]}))};n.default=function(){return le(Q,null,le(oe.a,null,le(J.b,null,le(Y.a,null,le(ce,null)))))}},MPUk:function(e,n,t){"use strict";var r=t("TqRt");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("q1tI")),u=(0,r(t("8/g6")).default)(a.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.default=u}},[["83vt",2,1,6,0,3,4,5,7,9]]]);