import{s as H,n as z,i as J}from"../chunks/scheduler.e108d1fd.js";import{S as M,i as x,g as u,m as C,h,j as b,n as S,f,k as d,a as V,y as o,z as Y,o as E,s as T,x as D,c as k,r as j,u as F,v as I,d as R,t as N,w as O}from"../chunks/index.76135fca.js";const U=["Adios, hippos","Bye Bye, Hawaii","Bye bye, Butterfly","Chop chop, lollipop","Have a grape day","In a while crocodile","See you later, aligator","See you soon, buffoon","See you soon, raccoon","So long, King Kong","Take care, polar bear","Toodledoo, kangaroo","Peace out, rainbow trout","Ade bleib schee","Ade war schee","Auf Fliederstauden","Auf Wiederhörnchen","Auf Wiedertschüss","Auf Wiesbaden","Auf Wiedersehen, aber es eilt nicht","Auf Wirsing","Alles Gute","Abendciao","Ciaocapcici","Bundesgartenciao","Bis Baldrian","Bis Baltikum","Bis Baldinski","Bis Balthazar","Bis Dannimanski","Bis Danzig","Bis Dannanas","Bis Denmark","Bis Dennis","Bis Denver","Bis Peter","Bis Spätersilie","Byesilikum","Bye mit Ei","Bye Bye-rn","Ciaogsburg","Es ist wie ein Spiegel, man sieht sich","Peace out, Sauerkraut","Pasta la vista","Hasta la pasta","Hau Rainer","Hau Rheinwald","Hau Rheinland, pflaz wir uns nicht wieder sehen","Habe die Ehre","Helsintschüsski","Mantschüsster United","Mantschüsster City","Man sieht sich, wir haben ja Augen","Machs Jutebeutel","Mecklenburgische Wiedersehnplatte","Mosciao","Küsschen aufs Nüsschen","San FranTschüssco","Schalömmchen","Schönes Knochenende","Stau zusammen","Tagesciao","Tschau Tschesku","Tschau rein","Tschau Kakao","Tschau mit V","Tschö mit Ö","Tschü mit Ü","Tschüsli Müsli","Tschüss mit üss","Tschüsseldorf","Tschüsseldienst","Tschüssen Krupp","Tschüssikowski","Tschrödinger","Tschaukelstuhl","Tüdelü","Tschypsilon mit Ypsilon","Tschau Tschesku","Warciao","Damit ist die heutige Sitzung beendet"],L={lines:U},Q=Object.freeze(Object.defineProperty({__proto__:null,default:L,lines:U},Symbol.toStringTag,{value:"Module"})),{lines:q}=Q,P=(s,e)=>Math.ceil(Math.random()*(e-s)+s),G=()=>{const s=P(0,q.length-1);return q[s]};function X(s){let e,t,n,i,l,a;return{c(){e=u("button"),t=u("div"),n=u("span"),i=C(s[0]),this.h()},l(r){e=h(r,"BUTTON",{class:!0});var c=b(e);t=h(c,"DIV",{class:!0});var B=b(t);n=h(B,"SPAN",{class:!0});var _=b(n);i=S(_,s[0]),_.forEach(f),B.forEach(f),c.forEach(f),this.h()},h(){d(n,"class","svelte-1u5wlp"),d(t,"class","svelte-1u5wlp"),d(e,"class","button default svelte-1u5wlp")},m(r,c){V(r,e,c),o(e,t),o(t,n),o(n,i),l||(a=Y(e,"click",function(){J(s[1])&&s[1].apply(this,arguments)}),l=!0)},p(r,[c]){s=r,c&1&&E(i,s[0])},i:z,o:z,d(r){r&&f(e),l=!1,a()}}}function Z(s,e,t){let{label:n="Ciao!"}=e,{handleClick:i}=e;return s.$$set=l=>{"label"in l&&t(0,n=l.label),"handleClick"in l&&t(1,i=l.handleClick)},[n,i]}class ee extends M{constructor(e){super(),x(this,e,Z,X,H,{label:0,handleClick:1})}}function te(s){let e,t,n,i="Verabschiedungsgesetzbuch (VaGB)",l,a,r,c,B,_,$,g,W=`(1) Verabschiedungen sind Sätze oder Phrasen, die nach einem Treffen
            mit einer oder mehrerer Personen das Ende ebenjenes indizieren.`,A,v,K="(2) Verabschiedungen müssen dem Anlass und der Situation angemessen sowie zweckdienlich sein.";return{c(){e=u("div"),t=u("div"),n=u("h2"),n.textContent=i,l=T(),a=u("h3"),r=C("§"),c=C(s[1]),B=T(),_=C(s[0]),$=T(),g=u("p"),g.textContent=W,A=T(),v=u("p"),v.textContent=K,this.h()},l(m){e=h(m,"DIV",{class:!0});var y=b(e);t=h(y,"DIV",{class:!0});var p=b(t);n=h(p,"H2",{class:!0,"data-svelte-h":!0}),D(n)!=="svelte-1hb5b51"&&(n.textContent=i),l=k(p),a=h(p,"H3",{class:!0});var w=b(a);r=S(w,"§"),c=S(w,s[1]),B=k(w),_=S(w,s[0]),w.forEach(f),$=k(p),g=h(p,"P",{class:!0,"data-svelte-h":!0}),D(g)!=="svelte-1lr20fx"&&(g.textContent=W),A=k(p),v=h(p,"P",{class:!0,"data-svelte-h":!0}),D(v)!=="svelte-1yp881y"&&(v.textContent=K),p.forEach(f),y.forEach(f),this.h()},h(){d(n,"class","title svelte-122zuay"),d(a,"class","line svelte-122zuay"),d(g,"class","svelte-122zuay"),d(v,"class","svelte-122zuay"),d(t,"class","card svelte-122zuay"),d(e,"class","farewell svelte-122zuay")},m(m,y){V(m,e,y),o(e,t),o(t,n),o(t,l),o(t,a),o(a,r),o(a,c),o(a,B),o(a,_),o(t,$),o(t,g),o(t,A),o(t,v)},p(m,[y]){y&2&&E(c,m[1]),y&1&&E(_,m[0])},i:z,o:z,d(m){m&&f(e)}}}function se(s,e,t){let{line:n=""}=e,i=P(1,25);return s.$$set=l=>{"line"in l&&t(0,n=l.line)},s.$$.update=()=>{s.$$.dirty&1&&n&&t(1,i=P(1,25))},[n,i]}class ne extends M{constructor(e){super(),x(this,e,se,te,H,{line:0})}}function ae(s){let e,t,n,i,l;return t=new ne({props:{line:s[0]}}),i=new ee({props:{handleClick:s[2],label:"Ciao"}}),{c(){e=u("div"),j(t.$$.fragment),n=T(),j(i.$$.fragment),this.h()},l(a){e=h(a,"DIV",{class:!0});var r=b(e);F(t.$$.fragment,r),n=k(r),F(i.$$.fragment,r),r.forEach(f),this.h()},h(){d(e,"class","farewell-container svelte-1ssqtxa")},m(a,r){V(a,e,r),I(t,e,null),o(e,n),I(i,e,null),l=!0},p(a,[r]){const c={};r&1&&(c.line=a[0]),t.$set(c)},i(a){l||(R(t.$$.fragment,a),R(i.$$.fragment,a),l=!0)},o(a){N(t.$$.fragment,a),N(i.$$.fragment,a),l=!1},d(a){a&&f(e),O(t),O(i)}}}function ie(s,e,t){let n=G();const i=()=>{t(0,n=G())};return[n,i,()=>i()]}class oe extends M{constructor(e){super(),x(this,e,ie,ae,H,{})}}export{oe as component};