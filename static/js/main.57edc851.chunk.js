(this.webpackJsonplotto=this.webpackJsonplotto||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(18),c=n.n(o),i=n(4),b=n(0),l=n(2);var u,s,p={name:"13uuxku",styles:'*{box-sizing:border-box;}html,body{margin:0;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-size:16px;}a{text-decoration:none;color:inherit;}ul{list-style:none;padding:0;}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}'},d=Object(l.a)("div",{target:"eu0el890"})({name:"zigog8",styles:"display:flex;flex-direction:column;align-items:center"}),g=n(8),O=function(e){return JSON.parse(JSON.stringify(e))},j=function(e,t,n){var a=t-e+1;if(a<n)throw new Error("Invalid Length");return function(e){for(var t=Object(g.a)(e),n=t.length;n;n-=1){var a=Math.floor(Math.random()*n),r=[t[a],t[n-1]];t[n-1]=r[0],t[a]=r[1]}return t}(Array.from({length:a},(function(t,n){return e+n}))).slice(0,n)},f=function(e,t){var n=[].concat(Object(g.a)(e),Object(g.a)(t)),a=new Set(n);return n.length-a.size},m=n(5),x={RANKING1:"RANKING1",RANKING2:"RANKING2",RANKING3:"RANKING3",RANKING4:"RANKING4",RANKING5:"RANKING5",NO_PRIZE:"NO_PRIZE"},h=(u={},Object(m.a)(u,x.RANKING1,{prize:2e9,condition:"6\uac1c"}),Object(m.a)(u,x.RANKING2,{prize:3e7,condition:"5\uac1c + \ubcf4\ub108\uc2a4\ubcfc"}),Object(m.a)(u,x.RANKING3,{prize:15e5,condition:"5\uac1c"}),Object(m.a)(u,x.RANKING4,{prize:5e4,condition:"4\uac1c"}),Object(m.a)(u,x.RANKING5,{prize:5e3,condition:"3\uac1c"}),Object(m.a)(u,x.NO_PRIZE,{prize:0,condition:"2\uac1c \uc774\ud558"}),u),y=1e3,v=1,N=45,k={rankCount:(s={},Object(m.a)(s,x.RANKING1,0),Object(m.a)(s,x.RANKING2,0),Object(m.a)(s,x.RANKING3,0),Object(m.a)(s,x.RANKING4,0),Object(m.a)(s,x.RANKING5,0),Object(m.a)(s,x.NO_PRIZE,0),s),earningRate:0},w=8,I=45,R=n(31),A=function(e,t,n,a){var r=O(e),o=t.length*y;return t.forEach((function(e){var t=function(e,t,n){switch(f(e,t)){case 3:return x.RANKING5;case 4:return x.RANKING4;case 5:return f(e,[n])?x.RANKING2:x.RANKING3;case 6:return x.RANKING1;default:return x.NO_PRIZE}}(e.numbers,n,a);r.rankCount[t]+=1})),r.earningRate=function(e,t){var n=Object.values(x).reduce((function(t,n){return t+e[n]*h[n].prize}),0);return Math.round((n-t)/t*100)}(r.rankCount,o),r};var z=Object(l.a)("label",{target:"e7abapr2"})({name:"klzh9w",styles:"z-index:0;position:relative;&>input:checked+span::before{background-color:rgba(0, 188, 212, 0.6);}&>input:checked+span::after{background-color:rgb(0, 188, 212);transform:translateX(16px);}&:hover>input{opacity:0.04;}&:hover>input:focus{opacity:0.16;}&>input:active+span::before{background-color:rgba(0, 188, 212, 0.6);}&>input:checked:active+span::before{background-color:rgba(0, 0, 0, 0.38);}&>input:disabled+span{color:black;opacity:0.38;cursor:default;}&>input:disabled+span::before{background-color:rgba(0, 0, 0, 0.38);}&>input:checked:disabled+span::before{background-color:rgba(0, 188, 212, 0.6);}"}),M=Object(l.a)("input",{target:"e7abapr1"})({name:"1xxacts",styles:"appearance:none;-moz-appearance:none;-webkit-appearance:none;z-index:-1;position:absolute;right:6px;top:-8px;display:block;margin:0;border-radius:50%;width:40px;height:40px;outline:none;opacity:0;transform:scale(1);pointer-events:none;transition:opacity 0.3s 0.1s,transform 0.2s 0.1s;&:focus{opacity:0.12;}&:disabled{opacity:0;}&:checked{right:-10px;background-color:rgb(0, 188, 212);}&:active{opacity:1;transform:scale(0);transition:transform 0s,opacity 0s;}"}),G=Object(l.a)("span",{target:"e7abapr0"})({name:"1dxf4lb",styles:'display:inline-block;width:100%;cursor:pointer;line-height:1.7;font-size:14px;&::before{content:"";float:right;display:inline-block;margin:5px 0 5px 10px;border-radius:7px;width:36px;height:14px;background-color:rgba(0, 0, 0, 0.38);vertical-align:top;transition:background-color 0.2s,opacity 0.2s;}&::after{content:"";position:absolute;top:2px;right:16px;border-radius:50%;width:20px;height:20px;background-color:white;box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2),0 2px 2px 0 rgba(0, 0, 0, 0.14),0 1px 5px 0 rgba(0, 0, 0, 0.12);transition:background-color 0.2s,transform 0.2s;}'}),K=function(e){var t=e.text,n=e.onToggle;return Object(b.b)(z,{htmlFor:"lotto-numbers-toggle"},Object(b.b)(M,{type:"checkbox",id:"lotto-numbers-toggle",onChange:n}),Object(b.b)(G,null,t))},E=Object(l.a)("ul",{target:"e19oaueb0"})((function(e){return e.isNumberVisible?"":"display: flex; flex-wrap: wrap;"}),";");var S=Object(l.a)("li",{target:"e10uxbfs1"})({name:"s5xdrg",styles:"display:flex;align-items:center"}),D=Object(l.a)("span",{target:"e10uxbfs0"})({name:"c1z6ek",styles:"margin-right:10px;font-size:24px"}),L=function(e){var t=e.isNumberVisible,n=e.lottoNumbers;return Object(b.b)(S,null,Object(b.b)(D,null,"\ud83c\udf9f\ufe0f"),t&&Object(b.b)("span",null,n.join(", ")))},T=function(e){var t=e.isNumberVisible,n=e.lottos;return Object(b.b)(E,{isNumberVisible:t},n.map((function(e){return Object(b.b)(L,{key:e.id,lottoNumbers:e.numbers,isNumberVisible:t})})))};var _=Object(l.a)("h2",{target:"erf539s0"})({name:"y2p78p",styles:"display:flex;justify-content:space-between;margin-top:20px;font-size:16px;font-weight:normal;align-items:center"}),q={INVALID_PRICE_UNIT:"".concat(y,"\uc6d0 \ub2e8\uc704\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),DUPLICATED_NUMBER:"\uc11c\ub85c \ub2e4\ub978 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",SOMETHING_EMPTY:"\ubaa8\ub4e0 \uc785\ub825\ub780\uc744 \ucc44\uc6cc\uc8fc\uc138\uc694."},C="\uad6c\uc785\ud560 \uae08\uc561\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",P="\uc9c0\ub09c \uc8fc \ub2f9\ucca8\ubc88\ud638 6\uac1c\uc640 \ubcf4\ub108\uc2a4 \ub118\ubc84 1\uac1c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",U=function(e){return"\ucd1d ".concat(e,"\uac1c\ub97c \uad6c\ub9e4\ud558\uc600\uc2b5\ub2c8\ub2e4.")},V=function(e){return"\ub2f9\uc2e0\uc758 \uc218\uc775\ub960\uc740 \ucd1d ".concat(e,"% \uc785\ub2c8\ub2e4.")},F=function(e){var t=e.lottos,n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=r[0],c=r[1];return Object(b.b)("div",null,Object(b.b)(_,null,Object(b.b)("span",null,U(t.length)),Object(b.b)(K,{text:"\ubc88\ud638 \ubcf4\uae30",onToggle:function(e){c(e.target.checked)}})),Object(b.b)(T,{isNumberVisible:o,lottos:t}))};var B=Object(l.a)("div",{target:"e1wk8h5f3"})({name:"1dxybtf",styles:"display:flex;margin-top:0.5rem"}),Z=Object(l.a)("form",{target:"e1wk8h5f2"})({name:"1d3w5wq",styles:"width:100%"}),J=Object(l.a)("input",{target:"e1wk8h5f1"})({name:"1n55a37",styles:"width:100%;padding:10px"}),H=Object(l.a)("button",{target:"e1wk8h5f0"})({name:"yqpc51",styles:"width:80px;margin-left:5px;padding:10px 0;background-color:#00bcd4;border:none;border-radius:5px;outline:none;cursor:pointer;&:hover{background-color:#018c9e;}"});var Y=Object(l.a)("p",{target:"e1f6vjt20"})({name:"1pqoavh",styles:"color:red;text-align:center;margin-bottom:0"}),X=function(e){var t=e.text;return Object(b.b)(Y,null,t)},Q=function(e){var t=e.updateLottos,n=Object(a.useRef)(),r=Object(a.useRef)(),o=Object(a.useState)(0),c=Object(i.a)(o,2),l=c[0],u=c[1],s=Object(a.useState)(!0),p=Object(i.a)(s,2),d=p[0],g=p[1];Object(a.useEffect)((function(){!function(e,t){if(0===t)throw new Error("Invalid divisor");return e%t===0}(l,y)?(g(!1),t(0)):(t(l/y),g(!0),n.current.reset())}),[l]);return Object(b.b)(Z,{onSubmit:function(e){e.preventDefault(),u(Number(r.current.value))},ref:n},Object(b.b)("label",{htmlFor:"purchase-input"},C),Object(b.b)(B,null,Object(b.b)(J,{id:"purchase-input",name:"purchase-input",type:"number",placeholder:"\uad6c\uc785 \uae08\uc561",min:y,ref:r,required:!0}),Object(b.b)(H,{type:"submit"},"\ud655\uc778")),!d&&Object(b.b)(X,{text:q.INVALID_PRICE_UNIT}))};var W=Object(l.a)("div",{target:"e1stxtpe6"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),$=Object(l.a)("h2",{target:"e1stxtpe5"})({name:"117dljj",styles:"font-size:16px;font-weight:normal"}),ee=Object(l.a)("div",{target:"e1stxtpe4"})({name:"i38kcj",styles:"display:flex;align-items:center;flex-direction:column"}),te=Object(l.a)("h3",{target:"e1stxtpe3"})({name:"1azakc",styles:"text-align:center"}),ne=Object(l.a)("div",{target:"e1stxtpe2"})({name:"zjik7",styles:"display:flex"}),ae=Object(l.a)("input",{target:"e1stxtpe1"})({name:"ks7e5p",styles:"width:40px;height:36px;&:not(:last-child){margin-right:7px;}text-align:center"}),re=Object(l.a)("button",{target:"e1stxtpe0"})({name:"1lfzwzk",styles:"width:100%;margin-top:30px;padding:10px 0;background-color:#00bcd4;border:none;border-radius:5px;outline:none;cursor:pointer;&:hover{background-color:#018c9e;}"}),oe=function(e){var t=e.updateLottoResult,n=e.openModal,r=Object(a.useRef)(Array.from({length:6},(function(){return Object(a.createRef)()}))),o=Object(a.useRef)(),c=Object(a.useState)(!0),l=Object(i.a)(c,2),u=l[0],s=l[1],p=Object(a.useState)(""),d=Object(i.a)(p,2),O=d[0],j=d[1];return Object(b.b)("form",{onSubmit:function(e){e.preventDefault();var a,c=r.current.map((function(e){return Number(e.current.value)})),i=Number(o.current.value);try{var b=[].concat(Object(g.a)(c),[i]).filter((function(e){return e>0}));if(b.length<7)throw new Error(q.SOMETHING_EMPTY);if(a=b,new Set(a).size!==a.length)throw new Error(q.DUPLICATED_NUMBER);s(!0),t(c,i),n()}catch(l){j(l.message),s(!1)}}},Object(b.b)($,null,P),Object(b.b)(W,null,Object(b.b)(ee,null,Object(b.b)(te,null,"\ub2f9\ucca8 \ubc88\ud638"),Object(b.b)(ne,null,Array.from({length:6},(function(e,t){return Object(b.b)(ae,{ref:r.current[t],key:"winningInput-".concat(t),name:"winning-number",type:"number",min:"1",max:"45",required:"required"})})))),Object(b.b)(ee,null,Object(b.b)(te,null,"\ubcf4\ub108\uc2a4 \ubc88\ud638"),Object(b.b)(ae,{ref:o,name:"bonus-number",type:"number",min:"1",max:"45",required:"required"}))),!u&&Object(b.b)(X,{text:O}),Object(b.b)(re,{type:"submit"},"\ud655\uc778"))};var ce=Object(l.a)("main",{target:"egoe1wt0"})({name:"yq0xk1",styles:"width:23vw;min-width:400px"}),ie=n(19),be=n.n(ie);var le=Object(l.a)("div",{target:"e1akyfut0"})({name:"whwmcl",styles:"margin-top:20px;display:flex;justify-content:center"});var ue=function(e){var t=e.targetTime,n=Object(a.useState)(new Date(t-new Date)),r=Object(i.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){var e=setInterval((function(){o>0?(o.setSeconds(o.getSeconds()-1),c(new Date(o))):clearInterval(e)}),1e3);return function(){return clearInterval(e)}}),[o]),Object(b.b)(le,null,Object(b.b)("b",null,"\ub0a8\uc740 \uc2dc\uac04: \xa0"),Object(b.b)(be.a,{date:o,format:"DD\uc77c hh\uc2dc mm\ubd84 ss\ucd08"}))},se=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),a=e.getDate(),r=Math.abs(6-e.getDay());return new Date(t,n,a+r,w,I)},pe=function(e){var t=e.state.lottos,n=e.action,a=n.updateLottos,o=n.updateLottoResult,c=n.openModal,i=t.length>0;return Object(b.b)(ce,null,Object(b.b)(Q,{updateLottos:a}),i&&Object(b.b)(r.a.Fragment,null,Object(b.b)(ue,{targetTime:se()}),Object(b.b)(F,{lottos:t}),Object(b.b)(oe,{updateLottoResult:o,openModal:c})))};var de=Object(l.a)("table",{target:"e15obbud2"})({name:"qmw76k",styles:"border-collapse:collapse;width:100%;margin-bottom:15px;& td,& th{border-bottom:1px solid gainsboro;padding:10px 0;}"}),ge=Object(l.a)("button",{target:"e15obbud1"})({name:"gzkn3a",styles:"width:120px;padding:10px 0;background-color:#00bcd4;border:none;border-radius:5px;outline:none;cursor:pointer;margin-top:15px;&:hover{background-color:#018c9e;}"}),Oe=Object(l.a)("tr",{target:"e15obbud0"})({name:"1azakc",styles:"text-align:center"});var je=Object(l.a)("div",{target:"elbik2p3"})({name:"gqzaai",styles:"opacity:1;display:flex;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0, 0, 0, 0.5);transition:opacity 0.25s ease;z-index:2"}),fe=Object(l.a)("div",{target:"elbik2p2"})({name:"wtuabz",styles:"transition:top 0.25s ease;width:70vw;max-width:400px;margin:auto;padding:30px 50px;overflow:auto;background:#fff;border-radius:5px;position:relative;display:flex;flex-direction:column;align-items:center"}),me=Object(l.a)("div",{target:"elbik2p1"})({name:"19azynd",styles:"margin:20px;width:20px;position:absolute;right:10px;top:10px;cursor:pointer"}),xe=Object(l.a)("svg",{target:"elbik2p0"})({name:"14dwa04",styles:"display:inline-block;margin:0;padding:0;& path{stroke:gray;fill:transparent;stroke-linecap:round;stroke-width:5;}"}),he=function(e){var t=e.closeModal,n=e.children,r=Object(a.useRef)();return Object(b.b)(je,{onMouseDown:function(e){e.currentTarget!==e.target&&e.target!==r.current||t()}},Object(b.b)(fe,null,Object(b.b)(me,null,Object(b.b)(xe,{viewBox:"0 0 40 40",ref:r},Object(b.b)("path",{d:"M 10,10 L 30,30 M 30,10 L 10,30"}))),n))},ye=function(e){var t=e.state.lottoResult,n=t.rankCount,a=t.earningRate,r=e.action,o=r.clear,c=r.closeModal;return Object(b.b)(he,{closeModal:c},Object(b.b)("h2",null,"\ud83c\udfc6 \ub2f9\ucca8 \ud1b5\uacc4 \ud83c\udfc6"),Object(b.b)(de,null,Object(b.b)("thead",null,Object(b.b)(Oe,null,Object(b.b)("th",null,"\uc77c\uce58 \uac2f\uc218"),Object(b.b)("th",null,"\ub2f9\ucca8\uae08"),Object(b.b)("th",null,"\ub2f9\ucca8 \uac2f\uc218"))),Object(b.b)("tbody",null,Object.values(x).map((function(e){return Object(b.b)(Oe,{key:"".concat(e,"-ranking")},Object(b.b)("td",null,h[e].condition),Object(b.b)("td",null,h[e].prize,"\uc6d0"),Object(b.b)("td",null,n[e],"\uac1c"))})))),Object(b.b)("b",null,V(a)),Object(b.b)(ge,{type:"button",onClick:o},"\ub2e4\uc2dc \uc2dc\uc791\ud558\uae30"))},ve=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return{isModalOpen:n,toggle:function(){r(!r)},closeModal:function(){r(!1)},openModal:function(){r(!0)}}},Ne=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(O(k)),l=Object(i.a)(c,2),u=l[0],s=l[1],g=ve(!1),f=g.isModalOpen,m=g.closeModal,x=g.openModal,h={lottos:n,isModalOpen:f,lottoResult:u},y={updateLottos:function(e){var t=function(e){return Array.from({length:e},(function(){return{id:Object(R.a)(),numbers:j(v,N,6)}}))}(e);o(t)},updateLottoResult:function(e,t){var a=A(k,n,e,t);s(a)},openModal:x,closeModal:m,clear:function(){o([]),m(),s(O(k))}};return Object(b.b)(r.a.Fragment,null,Object(b.b)(b.a,{styles:p}),Object(b.b)(d,null,Object(b.b)("h1",null,"\ud83c\udfb1 \ud589\uc6b4\uc758 \ub85c\ub610"),Object(b.b)(pe,{state:h,action:y}),h.isModalOpen&&Object(b.b)(ye,{state:h,action:y})))};c.a.render(Object(b.b)(r.a.StrictMode,null,Object(b.b)(Ne,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.57edc851.chunk.js.map