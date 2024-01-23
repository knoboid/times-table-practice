var Oe=Object.defineProperty;var Qe=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var J=(e,t,n)=>(Qe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function E(){}function Ce(e){return e()}function re(){return Object.create(null)}function R(e){e.forEach(Ce)}function ye(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ne(e){return Object.keys(e).length===0}function Se(e,...t){if(e==null){for(const i of t)i(void 0);return E}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ie(e,t,n){e.$$.on_destroy.push(Se(t,n))}function m(e,t){e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function a(e){return document.createTextNode(e)}function S(){return a(" ")}function se(){return a("")}function $(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Te(e){return Array.from(e.childNodes)}function q(e,t){t=""+t,e.data!==t&&(e.data=t)}let ue;function D(e){ue=e}function ee(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const z=[],ce=[];let L=[];const de=[],Ie=Promise.resolve();let te=!1;function Me(){te||(te=!0,Ie.then(Ae))}function ne(e){L.push(e)}const X=new Set;let M=0;function Ae(){if(M!==0)return;const e=ue;do{try{for(;M<z.length;){const t=z[M];M++,D(t),Ue(t.$$)}}catch(t){throw z.length=0,M=0,t}for(D(null),z.length=0,M=0;ce.length;)ce.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];X.has(n)||(X.add(n),n())}L.length=0}while(z.length);for(;de.length;)de.pop()();te=!1,X.clear(),D(e)}function Ue(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function ze(e){const t=[],n=[];L.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),L=t}const B=new Set;let Le;function G(e,t){e&&e.i&&(B.delete(e),e.i(t))}function Z(e,t,n,i){if(e&&e.o){if(B.has(e))return;B.add(e),Le.c.push(()=>{B.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function x(e){e&&e.c()}function F(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),ne(()=>{const l=e.$$.on_mount.map(Ce).filter(ye);e.$$.on_destroy?e.$$.on_destroy.push(...l):R(l),e.$$.on_mount=[]}),s.forEach(ne)}function H(e,t){const n=e.$$;n.fragment!==null&&(ze(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(e,t){e.$$.dirty[0]===-1&&(z.push(e),Me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,i,s,l,r=null,c=[-1]){const o=ue;D(e);const u=e.$$={fragment:null,ctx:[],props:l,update:E,not_equal:s,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:re(),dirty:c,skip_bound:!1,root:t.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(e,t.props||{},(d,_,...Q)=>{const N=Q.length?Q[0]:_;return u.ctx&&s(u.ctx[d],u.ctx[d]=N)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](N),f&&Pe(e,d)),_}):[],u.update(),f=!0,R(u.before_update),u.fragment=i?i(u.ctx):!1,t.target){if(t.hydrate){const d=Te(t.target);u.fragment&&u.fragment.l(d),d.forEach(h)}else u.fragment&&u.fragment.c();t.intro&&G(e.$$.fragment),F(e,t.target,t.anchor),Ae()}D(o)}class Y{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){H(this,1),this.$destroy=E}$on(t,n){if(!ye(n))return E;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const je="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(je);const U=[];function De(e,t=E){let n;const i=new Set;function s(c){if(W(e,c)&&(e=c,n)){const o=!U.length;for(const u of i)u[1](),U.push(u,e);if(o){for(let u=0;u<U.length;u+=2)U[u][0](U[u+1]);U.length=0}}}function l(c){s(c(e))}function r(c,o=E){const u=[c,o];return i.add(u),i.size===1&&(n=t(s,l)||E),c(e),()=>{i.delete(u),i.size===0&&n&&(n(),n=null)}}return{set:s,update:l,subscribe:r}}const oe="SHOWING QUESTION",qe="SHOWING ANSWER",Ee="COMPLETED",Re=oe,P=De(Re);function me(){P.set(oe)}function We(){P.set(qe)}function ae(){P.set(Ee)}function _e(e){return e===oe}function he(e){return e===qe}function be(e){return e===Ee}function pe(e){let t,n,i=e[0]+1+"",s,l,r,c,o,u,f,d,_,Q,N,y,O,A,T,I,j;return{c(){t=v("div"),n=a("Question "),s=a(i),l=a(" of "),r=a(e[1]),c=S(),o=v("div"),u=v("div"),f=a(e[3]),d=a("×"),_=a(e[2]),Q=a("="),N=S(),y=v("input"),O=S(),A=v("div"),T=v("button"),T.textContent="Quit",w(t,"class","svelte-e4y2no"),w(u,"class","problem svelte-e4y2no"),w(y,"class","answer svelte-e4y2no"),w(y,"type","number"),w(y,"maxlength","2"),w(y,"size","2"),w(y,"placeholder","?"),y.autofocus=!0,w(o,"class","multiplication svelte-e4y2no"),w(A,"class","button-container svelte-e4y2no")},m(k,g){b(k,t,g),m(t,n),m(t,s),m(t,l),m(t,r),b(k,c,g),b(k,o,g),m(o,u),m(u,f),m(u,d),m(u,_),m(u,Q),m(o,N),m(o,y),b(k,O,g),b(k,A,g),m(A,T),y.focus(),I||(j=[$(y,"keypress",e[8]),$(T,"click",e[7])],I=!0)},p(k,g){g&1&&i!==(i=k[0]+1+"")&&q(s,i),g&2&&q(r,k[1]),g&8&&q(f,k[3]),g&4&&q(_,k[2])},d(k){k&&(h(t),h(c),h(o),h(O),h(A)),I=!1,R(j)}}}function Be(e){let t=_e(e[4]),n,i=t&&pe(e);return{c(){i&&i.c(),n=se()},m(s,l){i&&i.m(s,l),b(s,n,l)},p(s,[l]){l&16&&(t=_e(s[4])),t?i?i.p(s,l):(i=pe(s),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:E,o:E,d(s){s&&h(n),i&&i.d(s)}}}function Ge(e,t,n){let i,s,l;ie(e,P,_=>n(4,l=_));let{num1:r}=t,{num2:c}=t,{index:o}=t,{questionCount:u}=t;function f(_){ee.call(this,e,_)}function d(_){ee.call(this,e,_)}return e.$$set=_=>{"num1"in _&&n(5,r=_.num1),"num2"in _&&n(6,c=_.num2),"index"in _&&n(0,o=_.index),"questionCount"in _&&n(1,u=_.questionCount)},e.$$.update=()=>{e.$$.dirty&96&&n(3,[i,s]=Math.random()<.5?[r,c]:[c,r],i,(n(2,s),n(5,r),n(6,c)))},[o,u,s,i,l,r,c,f,d]}class Fe extends Y{constructor(t){super(),K(this,t,Ge,Be,W,{num1:5,num2:6,index:0,questionCount:1})}}function we(e){let t,n,i,s,l,r,c,o,u=!e[3]&&ge(e);return{c(){t=v("div"),n=a(e[4]),i=S(),u&&u.c(),s=S(),l=v("div"),r=a("Time: "),c=a(e[2]),o=a(" seconds"),w(t,"class","verdict svelte-jcb1ib"),w(l,"class","small-text svelte-jcb1ib")},m(f,d){b(f,t,d),m(t,n),b(f,i,d),u&&u.m(f,d),b(f,s,d),b(f,l,d),m(l,r),m(l,c),m(l,o)},p(f,d){d&16&&q(n,f[4]),f[3]?u&&(u.d(1),u=null):u?u.p(f,d):(u=ge(f),u.c(),u.m(s.parentNode,s)),d&4&&q(c,f[2])},d(f){f&&(h(t),h(i),h(s),h(l)),u&&u.d(f)}}}function ge(e){let t,n,i,s,l,r=e[0]*e[1]+"",c;return{c(){t=v("div"),n=a(e[0]),i=a("×"),s=a(e[1]),l=a(" = "),c=a(r),w(t,"class","svelte-jcb1ib")},m(o,u){b(o,t,u),m(t,n),m(t,i),m(t,s),m(t,l),m(t,c)},p(o,u){u&1&&q(n,o[0]),u&2&&q(s,o[1]),u&3&&r!==(r=o[0]*o[1]+"")&&q(c,r)},d(o){o&&h(t)}}}function He(e){let t=he(e[5]),n,i=t&&we(e);return{c(){i&&i.c(),n=se()},m(s,l){i&&i.m(s,l),b(s,n,l)},p(s,[l]){l&32&&(t=he(s[5])),t?i?i.p(s,l):(i=we(s),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:E,o:E,d(s){s&&h(n),i&&i.d(s)}}}function Ke(e,t,n){let i,s,l;ie(e,P,f=>n(5,l=f));let{num1:r}=t,{num2:c}=t,{usersAnswer:o}=t,{time:u}=t;return e.$$set=f=>{"num1"in f&&n(0,r=f.num1),"num2"in f&&n(1,c=f.num2),"usersAnswer"in f&&n(6,o=f.usersAnswer),"time"in f&&n(2,u=f.time)},e.$$.update=()=>{e.$$.dirty&67&&n(3,i=r*c==o),e.$$.dirty&8&&n(4,s=i?"CORRECT!":"WRONG")},[r,c,u,i,s,l,o]}class Ye extends Y{constructor(t){super(),K(this,t,Ke,He,W,{num1:0,num2:1,usersAnswer:6,time:2})}}function ve(e){let t,n,i,s,l;function r(u,f){return u[1]?Je:Ve}let c=r(e),o=c(e);return{c(){o.c(),t=S(),n=v("div"),i=v("button"),i.textContent="Restart",w(n,"class","button-container")},m(u,f){o.m(u,f),b(u,t,f),b(u,n,f),m(n,i),s||(l=$(i,"click",e[6]),s=!0)},p(u,f){c===(c=r(u))&&o?o.p(u,f):(o.d(1),o=c(u),o&&(o.c(),o.m(t.parentNode,t)))},d(u){u&&(h(t),h(n)),o.d(u),s=!1,l()}}}function Ve(e){let t,n=e[0]===e[2]?"Excellent!":"",i,s,l,r,c,o,u,f,d,_,Q=Math.floor(100*e[0]/e[2])+"",N,y,O,A,T,I,j,k,g,le,V,fe;return{c(){t=v("div"),i=a(n),s=S(),l=v("div"),r=a("You got "),c=a(e[0]),o=a(" out of "),u=a(e[2]),f=S(),d=v("div"),_=a("That's "),N=a(Q),y=a("%"),O=S(),A=v("div"),T=a("Time: "),I=a(e[3]),j=a(" seconds"),k=S(),g=v("div"),le=a("("),V=a(e[4]),fe=a(" seconds per question)"),w(t,"class","text svelte-15bsmwz"),w(l,"class","text svelte-15bsmwz"),w(d,"class","text svelte-15bsmwz"),w(A,"class","small-text svelte-15bsmwz"),w(g,"class","smaller-text svelte-15bsmwz")},m(p,C){b(p,t,C),m(t,i),b(p,s,C),b(p,l,C),m(l,r),m(l,c),m(l,o),m(l,u),b(p,f,C),b(p,d,C),m(d,_),m(d,N),m(d,y),b(p,O,C),b(p,A,C),m(A,T),m(A,I),m(A,j),b(p,k,C),b(p,g,C),m(g,le),m(g,V),m(g,fe)},p(p,C){C&5&&n!==(n=p[0]===p[2]?"Excellent!":"")&&q(i,n),C&1&&q(c,p[0]),C&4&&q(u,p[2]),C&5&&Q!==(Q=Math.floor(100*p[0]/p[2])+"")&&q(N,Q),C&8&&q(I,p[3]),C&16&&q(V,p[4])},d(p){p&&(h(t),h(s),h(l),h(f),h(d),h(O),h(A),h(k),h(g))}}}function Je(e){let t;return{c(){t=v("div"),t.textContent="You Quit!",w(t,"class","text svelte-15bsmwz")},m(n,i){b(n,t,i)},p:E,d(n){n&&h(t)}}}function Xe(e){let t=be(e[5]),n,i=t&&ve(e);return{c(){i&&i.c(),n=se()},m(s,l){i&&i.m(s,l),b(s,n,l)},p(s,[l]){l&32&&(t=be(s[5])),t?i?i.p(s,l):(i=ve(s),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:E,o:E,d(s){s&&h(n),i&&i.d(s)}}}function Ze(e,t,n){let i,s;ie(e,P,f=>n(5,s=f));let{score:l}=t,{didUserQuit:r}=t,{questionCount:c}=t,{time:o}=t;function u(f){ee.call(this,e,f)}return e.$$set=f=>{"score"in f&&n(0,l=f.score),"didUserQuit"in f&&n(1,r=f.didUserQuit),"questionCount"in f&&n(2,c=f.questionCount),"time"in f&&n(3,o=f.time)},e.$$.update=()=>{e.$$.dirty&12&&n(4,i=Math.floor(100*o/c)/100)},[l,r,c,o,i,s,u]}class xe extends Y{constructor(t){super(),K(this,t,Ze,Xe,W,{score:0,didUserQuit:1,questionCount:2,time:3})}}function $e(e){let n=et([2,3,5]);return n=tt(n),it(n),e>n.length?n:n.slice(0,e)}function et(e){const t=[];for(const n of e)for(let i=2;i<=12;i++){const s=[n,i];t.push(s)}return t}function tt(e){let t=0;for(;t<e.length;)e=nt(e,t),t++;return e}function nt(e,t){const n=e[t];return e=e.filter(i=>!(n[0]===i[0]&&n[1]===i[1]||n[0]===i[1]&&n[1]===i[0])),[n,...e]}function it(e){let t=e.length,n;for(;t>0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}class st{constructor(t){this.startTime=t}currentTime(t){return Math.floor((t-this.startTime)/100)/10}}function ut(e){let t,n,i,s,l,r,c;return n=new Fe({props:{num1:e[7],num2:e[6],index:e[1],questionCount:e[0].length}}),n.$on("keypress",e[8]),n.$on("click",e[10]),s=new Ye({props:{num1:e[7],num2:e[6],usersAnswer:e[3],time:e[5]}}),r=new xe({props:{score:e[2],didUserQuit:e[4],questionCount:e[0].length,time:e[5]}}),r.$on("click",e[9]),{c(){t=v("main"),x(n.$$.fragment),i=S(),x(s.$$.fragment),l=S(),x(r.$$.fragment),w(t,"class","svelte-qo73d3")},m(o,u){b(o,t,u),F(n,t,null),m(t,i),F(s,t,null),m(t,l),F(r,t,null),c=!0},p(o,[u]){const f={};u&128&&(f.num1=o[7]),u&64&&(f.num2=o[6]),u&2&&(f.index=o[1]),u&1&&(f.questionCount=o[0].length),n.$set(f);const d={};u&128&&(d.num1=o[7]),u&64&&(d.num2=o[6]),u&8&&(d.usersAnswer=o[3]),u&32&&(d.time=o[5]),s.$set(d);const _={};u&4&&(_.score=o[2]),u&16&&(_.didUserQuit=o[4]),u&1&&(_.questionCount=o[0].length),u&32&&(_.time=o[5]),r.$set(_)},i(o){c||(G(n.$$.fragment,o),G(s.$$.fragment,o),G(r.$$.fragment,o),c=!0)},o(o){Z(n.$$.fragment,o),Z(s.$$.fragment,o),Z(r.$$.fragment,o),c=!1},d(o){o&&h(t),H(n),H(s),H(r)}}}const ot=10,ke=1;function lt(e,t,n){let i,s,l,r,c,o,u,f,d;N();function _(O){return u.currentTime(Date.now().valueOf()-O*ke*1e3)}function Q(O){if(O.key==="Enter"){n(3,o=O.target.value),O.target.value="";const A=i*s;n(5,d=_(r)),We(),o==A&&n(2,c++,c),setTimeout(function(){me(),n(1,r++,r),r===l.length&&(ae(),n(1,r=0))},ke*1e3)}}function N(){n(1,r=0),n(2,c=0),n(0,l=$e(ot)),me(),u=new st(Date.now().valueOf()),n(4,f=!1)}function y(){n(4,f=!0),ae()}return e.$$.update=()=>{e.$$.dirty&3&&n(7,[i,s]=l[r],i,(n(6,s),n(0,l),n(1,r)))},[l,r,c,o,f,d,s,i,Q,N,y]}class ft extends Y{constructor(t){super(),K(this,t,lt,ut,W,{})}}new ft({target:document.getElementById("app")});