(window["webpackJsonptype-racer"]=window["webpackJsonptype-racer"]||[]).push([[0],{39:function(e,t,n){e.exports={loader:"loading_loader__2hW0l",spin:"loading_spin__3SIsi"}},45:function(e,t,n){e.exports=n(74)},50:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(19),o=n.n(c),l=(n(50),n(15)),u=n(13),i=n(37),s=Object(u.c)({historyUpdated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"HISTORY_UPDATED":return t.data;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"".concat("LOADING_").concat(t.tail):return t.loading;default:return e}}}),p=Object(u.d)(s,Object(u.a)(i.a)),f=n(14),d=n(12),m=[{name:"user1",pass:"123",binId:"142dyt"},{name:"user2",pass:"123",binId:"16i9jp"}],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=!0,r=!1,a=void 0;try{for(var c,o=m[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var l=c.value;if(l.name===e&&l.binId===t)return!0}}catch(u){r=!0,a=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!1},b=function(){var e=JSON.parse(sessionStorage.getItem("user"));return null!==e&&e},h=n(11),g=n(8),O=n.n(g),y=n(17),j=n(3),E=n(21),x=n(18),w=n.n(x),S="https://api.myjson.com/bins",P=new function e(){Object(E.a)(this,e),this.getText=function(){return w.a.get("".concat("https://baconipsum.com/api","/?type=filler&sentences=1&format=text"))},this.saveGame=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return w.a.post(S,{wpm:e,progress:t})},this.getHistory=function(e){return w.a.get("".concat(S,"/").concat(e))},this.updateHistory=function(e,t){return w.a.put("".concat(S,"/").concat(e),t)}},T=n(42),D=O.a.mark(I);function I(){var e,t,n,r,a=arguments;return O.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:e=a.length>0&&void 0!==a[0]?a[0]:[],t=a.length>1&&void 0!==a[1]?a[1]:"",n=0;case 3:if(!(n<e.length)){c.next=11;break}return r="".concat(e[n]).concat(t),n===e.length-1&&(r="".concat(e[n])),c.next=8,r;case 8:++n,c.next=3;break;case 11:case"end":return c.stop()}},D)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var W=Object(r.memo)(function(e){var t=e.isWrong,n=e.handle,r=e.input,c="input "+(t?"input-danger":"input-default");return a.a.createElement("input",{type:"text",onChange:n,value:r,className:c})}),H=n(2),C=n.n(H),F=Object(r.memo)(function(e){var t=e.text,n=e.colors;return a.a.createElement("p",{"data-testid":"textToType",onContextMenu:function(e){e.preventDefault()}},a.a.createElement("span",{className:"text-success"},t.prevText),a.a.createElement("span",null,t.currentWord&&!t.currentWord.done&&t.currentWord.value.split("").map(function(e,t){return a.a.createElement("span",{key:t,className:n[t]?"text-".concat(n[t]):null},e)})),a.a.createElement("span",null,t.nextText))});C.a.bool,C.a.shape,C.a.arrayOf,C.a.string;F.defaultProps={colors:[],text:{currentWord:{next:"",done:!1},prevText:"",nextText:""}};var R=F;function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var B=[],A=!1,L=Object(r.memo)(function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],o=n[1],l=Object(r.useState)({}),u=Object(j.a)(l,2),i=u[0],s=u[1],p=Object(r.useRef)("");if(c.length||(A=!1,B=[]),!e.start||!e.text.length)return null;i.nextText||i.prevText||s(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={},n={},r="";if(e.length){var a=" ";n=(t=I(e.split(a),a)).next(),r=e.replace(n.value,"")}return{wordsIterator:t,currentWord:n,nextText:r,prevText:""}}(e.text));var f=function(t){A=!1;var n=_({},i);n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=N({},e);return t.prevText="".concat(t.prevText).concat(t.currentWord.value),t.currentWord=t.wordsIterator.next(),t.nextText=t.nextText.replace("".concat(t.currentWord.value),""),t}(n),o(""),p.current="",s(n),e.sendData(_({},n))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,{colors:B,text:i}),a.a.createElement(W,{handle:function(e){var t=e.target.value;if(t.length-p.current.length>2&&(t=t.substring(0,1)),o(t),p.current=t,B=[i.currentWord.length].fill("default"),t===i.currentWord.value)f();else{var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=!1;for(var a in e)if(t[a]="success",e[a]!==n[a]){t[a]="danger",r=!0;break}return{wrongChar:r,colors:t}}(t,B,i.currentWord.value);B=Object(T.a)(n.colors),A=n.wrongChar}},isWrong:A,input:c}))}),Y=n(39),G=n.n(Y),J=function(){return a.a.createElement("div",{className:G.a.loader})},M=n(40),$=n(43),q=n(41),z=n(44),K=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object($.a)(this,Object(q.a)(t).call(this,e))).logErrorToBackend=function(e,t){console.log(e,t)},n.state={hasError:!1},n}return Object(z.a)(t,e),Object(M.a)(t,[{key:"componentDidCatch",value:function(e,t){this.logErrorToBackend(e,t)}},{key:"render",value:function(){var e="";return this.props.error?e=this.props.error:this.state.hasError&&(e=this.state.hasError),e.length?(this.logErrorToBackend(e),a.a.createElement("span",null,"Something went wrong. Please try again later")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(a.a.Component);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=V({},e);a.history||(a.history=[]);var c=t.nextText;t.currentWord&&!t.currentWord.done&&(c="".concat(t.currentWord.value).concat(t.nextText)),t.nextText||(c="");var o=t.prevText;return t.prevText||(o=""),a.history.unshift({wpm:n,progress:r,nextTxt:c,prevTxt:o}),a};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var te=Object(r.memo)(function(e){var t=e.globalLoading,n=e.notifyHistoryUpdated,c=Object(r.useState)(!1),o=Object(j.a)(c,2),l=o[0],u=o[1],i=Object(r.useState)(!1),s=Object(j.a)(i,2),p=s[0],f=s[1],d=Object(r.useState)(!1),m=Object(j.a)(d,2),v=m[0],h=m[1],g=Object(r.useState)(10),E=Object(j.a)(g,2),x=E[0],w=E[1],S=Object(r.useState)({prevText:""}),T=Object(j.a)(S,2),D=T[0],I=T[1],k=Object(r.useState)(0),N=Object(j.a)(k,2),W=N[0],H=N[1],C=Object(r.useState)(0),F=Object(j.a)(C,2),R=F[0],U=F[1],_=Object(r.useState)(1e3),B=Object(j.a)(_,2),A=B[0],Y=B[1],G=Object(r.useState)(""),M=Object(j.a)(G,2),$=M[0],q=M[1],z=function(){var e=Object(y.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,P.getText().catch(function(e){return f(!0)});case 3:t=e.sent,u(!0),Y(1e3),q(t.data),h(!1);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(r.useRef)();Object(r.useEffect)(function(){n.current=e},[e]),Object(r.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){$.length&&l&&(x<10&&(H(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e/5,r=t/60;return Math.round(n/r)}(D.prevText.length,10-x)),U(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(100*e/t)}(D.prevText.length,$.length))),w(x-1))},A),Object(r.useEffect)(function(){0!==x&&100!==R||(function(){var e=Object(y.a)(O.a.mark(function e(){var r,a,c,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0,"HISTORY"),r=b().binId,e.next=4,P.getHistory(r).catch(function(e){return f(!0)});case 4:return a=e.sent,c=ee({},a.data),o=X(c,D,W,R),e.next=9,P.updateHistory(r,o).catch(function(e){return f(!0)});case 9:n(),t(!1,"HISTORY");case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()(),u(!1),U(0),H(0),w(10),Y(null),q(""),I({prevText:""}))},[x,R,D,W,t,n]);var Q=Object(r.useCallback)(function(e){return I(e)},[]);return a.a.createElement("div",{className:"game defaultBox","data-testid":"gameContainer"},p?a.a.createElement(K,{error:"Wrong Api call"}):v?a.a.createElement(J,null):l?l?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t="",n=Math.floor(e/60),r=e%60;return 1===r.toString().length&&(t="0"),"".concat(n,":").concat(t).concat(r)}(x)),a.a.createElement("p",null,"speed: ",W," wpm"),a.a.createElement("p",null,"Your progress: ",R,"%"),a.a.createElement(L,{start:l,text:$,sendData:Q})):null:a.a.createElement("button",{className:"btn btn-default","data-testid":"startGame",onClick:z},"Play"))}),ne=Object(l.b)(null,{notifyHistoryUpdated:function(){return function(e,t){e({type:"HISTORY_UPDATED",data:!t().historyUpdated})}},globalLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n,r){n({type:"".concat("LOADING_").concat(t),loading:e,tail:t})}}})(te),re=function(e){return a.a.createElement("div",{className:"gameHistory defaultBox"},e.loading?a.a.createElement(J,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"History"),e.data.map(function(e,t){return a.a.createElement("div",{className:"defaultBox historyItem",key:t},a.a.createElement("div",{className:"historyStats"},a.a.createElement("p",null,"speed: ",a.a.createElement("b",null,e.wpm)," wpm"),a.a.createElement("p",null,"progress: ",a.a.createElement("b",null,e.progress)," %")),a.a.createElement("div",{className:"historyText"},a.a.createElement("span",{className:"text-success"},a.a.createElement("b",null,e.prevTxt)),a.a.createElement("span",null,e.nextTxt)))}))," ",function(){if(!e.data.length)return a.a.createElement("span",null,"No items yet")}()))};C.a.arrayOf,C.a.exact,C.a.string,C.a.number,C.a.bool;re.defaultProps={data:[],loading:!1};var ae=re,ce=Object(l.b)(function(e){return{historyUpdated:e.historyUpdated,loading:e.loading}})(function(e){var t=Object(r.useState)([]),n=Object(j.a)(t,2),c=n[0],o=n[1],l=Object(r.useState)(!1),u=Object(j.a)(l,2),i=u[0],s=u[1],p=Object(r.useState)(!1),f=Object(j.a)(p,2),d=f[0],m=f[1],v=b().binId;return Object(r.useEffect)(function(){Object(y.a)(O.a.mark(function e(){var t,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,P.getHistory(v).catch(function(e){return m(!0)});case 3:t=e.sent,(n=t.data.history)&&n.length&&o(n),s(!1);case 7:case"end":return e.stop()}},e)}))()},[e.historyUpdated,v]),d?a.a.createElement(K,{error:"Wrong Api call"}):i?a.a.createElement(J,null):a.a.createElement(ae,{data:c,loading:e.loading||i})}),oe=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,a.a.createElement(ne,null)),a.a.createElement(K,null,a.a.createElement(ce,null)))},le=function(e){var t=e.type,n=e.name,r=e.label,c=e.placeholder,o=e.classes;return a.a.createElement("label",null,r,a.a.createElement("input",{name:n,type:t,placeholder:c,autoComplete:n,className:o}))};C.a.string;le.defaultProps={label:"",placeholder:"",classes:""};var ue=le,ie=function(e){return a.a.createElement("div",{className:"loginForm"},a.a.createElement("p",null,"Login"),a.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new FormData(e),n={},r=!0,a=!1,c=void 0;try{for(var o,l=t[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var u=o.value;n[u[0]]=u[1]}}catch(i){a=!0,c=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw c}}return n}(t.target),r=n.username,a=n.pass;r.length&&a.length?e.handleSubmit({username:r,pass:a}):e.handleSubmit(!1)}},a.a.createElement(ue,{type:"text",name:"username",placeholder:"Username",classes:"input"}),a.a.createElement(ue,{type:"password",name:"pass",placeholder:"Password",classes:"input"}),a.a.createElement("button",{className:"btn btn-default"},"Login")))},se=function(e){if(e.manualRedirect)return a.a.createElement(d.a,{to:"/"});var t=b();if(t){var n=t.name,r=t.binId;if(v(n,r))return a.a.createElement(d.a,{to:"/"})}return null};se.defaultProps={manualRedirect:!1};var pe,fe=se,de=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),l=Object(j.a)(o,2),u=l[0],i=l[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,{manualRedirect:u}),a.a.createElement(ie,{handleSubmit:function(e){if(!e)return c("Please fill the fields"),!1;var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=!0,r=!1,a=void 0;try{for(var c,o=m[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var l=c.value;if(l.name===e&&l.pass===t)return l}}catch(u){r=!0,a=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!1}(e.username,e.pass);t?(c(""),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.stringify({name:e.name,binId:e.binId});sessionStorage.setItem("user",t)}(t),i(!0)):c("No such user")}}),n.length?a.a.createElement("p",null,n):null)},me=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"It seems that we don't have such a page."),a.a.createElement("p",null,"Please ",a.a.createElement(f.b,{to:"/"},"visit the home page")))},ve=function(e){return a.a.createElement("header",{className:"mainHeader"},a.a.createElement("h1",{"data-testid":"logo"},"TypeRacer"),b().binId&&a.a.createElement("button",{className:"btn btn-default","data-testid":"logout",onClick:function(){sessionStorage.removeItem("user"),e.history.push("/login")}},"Log out"))},be=a.a.createElement(f.a,null,a.a.createElement(d.b,{path:"/",component:ve}),a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/",component:(pe=oe,function(e){var t=b(),n=!1;if(t){var r=t.name,c=t.binId;v(r,c)||(n=!0)}else n=!0;return n?a.a.createElement(d.a,{to:"/login"}):a.a.createElement(pe,e)})}),a.a.createElement(d.b,{path:"/login",component:de}),a.a.createElement(d.b,{component:me}))),he=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(K,null,a.a.createElement(l.a,{store:p},be)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.dbff5c16.chunk.js.map