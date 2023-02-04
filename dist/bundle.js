(()=>{var e,t,n={},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return n[e](c,c.exports,a),c.exports}a.m=n,a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+".bundle.js",a.miniCssF=e=>e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="cardgame:",a.l=(n,o,c,r)=>{if(e[n])e[n].push(o);else{var l,d;if(void 0!==c)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var p=i[s];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+c){l=p;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+c),l.src=n),e[n]=[o];var u=(t,o)=>{l.onerror=l.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(o))),t)return t(o)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),d&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{if("undefined"!=typeof document){var e={179:0};a.f.miniCss=(t,n)=>{e[t]?n.push(e[t]):0!==e[t]&&{373:1}[t]&&n.push(e[t]=(e=>new Promise(((t,n)=>{var o=a.miniCssF(e),c=a.p+o;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=(r=n[o]).getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){var r;if((a=(r=c[o]).getAttribute("data-href"))===e||a===t)return r}})(o,c))return t();((e,t,n,o,a)=>{var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=n=>{if(c.onerror=c.onload=null,"load"===n.type)o();else{var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=r,d.request=l,c.parentNode.removeChild(c),a(d)}},c.href=t,document.head.appendChild(c)})(e,c,0,t,n)})))(t).then((()=>{e[t]=0}),(n=>{throw delete e[t],n})))}}})(),(()=>{var e={179:0};a.f.j=(t,n)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var c=new Promise(((n,a)=>o=e[t]=[n,a]));n.push(o[2]=c);var r=a.p+a.u(t),l=new Error;a.l(r,(n=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,o[1](l)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,c,[r,l,d]=n,i=0;if(r.some((t=>0!==e[t]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);d&&d(a)}for(t&&t(n);i<r.length;i++)c=r[i],a.o(e,c)&&e[c]&&e[c][0](),e[c]=0},n=self.webpackChunkcardgame=self.webpackChunkcardgame||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.e(373).then(a.bind(a,373));const c=document.querySelector(".app");window.application={blocks:{},screens:{},level:null,cards:null,renderScreen:function(e){window.application.timers.forEach((e=>{clearInterval(e)})),window.application.screens[e]?(c.innerHTML="",window.application.screens[e]()):console.warn("Такой страницы нет")},renderBlock:function(e,t){window.application.blocks[e]?window.application.blocks[e](t):console.warn("Такого блока нет")},timers:[]},window.application.blocks.start=function(e){const t=document.createElement("div");t.classList.add("game");const n=document.createElement("div");n.classList.add("game__card");const o=document.createElement("div");o.classList.add("game__card-content");const a=document.createElement("h3");a.classList.add("game__title"),a.textContent="Выбери сложность";const c=document.createElement("div");c.classList.add("game__button");const r=document.createElement("button");r.classList.add("button"),r.textContent="1";const l=document.createElement("button");l.classList.add("button"),l.textContent="2";const d=document.createElement("button");d.classList.add("button"),d.textContent="3";const i=document.createElement("div");i.classList.add("game__btn");const s=document.createElement("button");s.classList.add("game__btn-start"),s.textContent="Старт",e.appendChild(t),t.appendChild(n),n.appendChild(o),o.appendChild(a),o.appendChild(c),c.appendChild(r),c.appendChild(l),c.appendChild(d),o.appendChild(i),i.appendChild(s);const p=document.querySelector(".game__btn-start");document.querySelectorAll(".button").forEach((e=>{e.addEventListener("click",(function(e){const t=e.target.textContent;console.log(t),window.application.level=t}))})),p.addEventListener("click",(()=>{window.application.renderScreen("gameField");const e=window.application.level;console.log(e),"1"===e?numberOfCards=3:"2"===e?numberOfCards=6:"3"===e?numberOfCards=9:console.log("Что-то пошло не так")}))},window.application.screens.start=function(){const e=document.createElement("div");c.appendChild(e),window.application.renderBlock("start",e)},window.application.renderScreen("start"),window.application.blocks.gameField=function(e){const t=document.createElement("div");let n,o;function a(){return o=Math.floor(1+36*Math.random()),o}t.classList.add("cards"),"1"===window.application.level?n=3:"2"===window.application.level?n=6:"3"===window.application.level&&(n=9);const c=[];for(let e=0;e<n;e++)a(),c.includes(o)?(a(),c.push(o)):c.push(o);c.push(...c),console.log(c),c.sort((()=>Math.random()-.5)),console.log(c);for(let o=0;o<c.length;o++){const a=document.createElement("div");a.classList.add("cards__image"),3===n?a.classList.add("card3"):6===n?a.classList.add("card6"):9===n&&a.classList.add("card9"),e.appendChild(t),t.appendChild(a);const r=document.createElement("img");r.src="./img/picture/"+c[o]+".jpg",r.classList.add("front-face");const l=document.createElement("img");l.src="./img/cardFacedown.jpg",l.classList.add("back-face"),a.appendChild(r),a.appendChild(l);const d=document.querySelectorAll(".cards__image");let i=!1;const s=()=>{a.classList.add("flip"),i=!i};d.forEach((e=>{setTimeout((()=>s()),300),setTimeout((()=>{a.classList.remove("flip")}),5e3)}))}const r=document.querySelectorAll(".cards__image");let l=!1;const d=e=>{let t,n;const o=e.target.parentElement;console.log(o),o.classList.add("flip"),l?(l=!1,n=o):(l=!0,t=o)};r.forEach((e=>e.addEventListener("click",d)));const i=document.querySelectorAll(".cards__image");let s=[],p=0;i.forEach((e=>{e.addEventListener("click",(function(){e.children.length>1&&(e.removeChild(e.lastElementChild),s.push(e.firstElementChild),console.log(s),console.log(e.firstElementChild.attributes.src.nodeValue),s.length>=2&&(s[0].attributes.src.nodeValue===s[1].attributes.src.nodeValue?(console.log("Вы выиграли"),s=[],console.log(s),i.forEach((e=>{if(1===e.children.length){console.log(e.children.length),p+=1,console.log(p);const t=4*n;console.log(t),p===t&&console.log("Вы выиграли")}}))):console.log("Вы проиграли")))}))}))},window.application.blocks.header=function(e){const t=document.createElement("header");e.appendChild(t);const n=document.createElement("div");n.classList.add("time-pad"),t.appendChild(n);const o=document.createElement("div");o.classList.add("timer"),n.appendChild(o);const a=document.createElement("div");a.classList.add("timer__world"),o.appendChild(a);const c=document.createElement("span");c.classList.add("unit-time"),c.textContent="min",a.appendChild(c);const r=document.createElement("span");c.classList.add("unit-time"),c.textContent="sec",a.appendChild(r);const l=document.createElement("span");l.classList.add("number"),l.textContent="00.00",o.appendChild(l);const d=document.createElement("button");d.classList.add("game__btn-start"),d.classList.add("btn"),d.textContent="Начать заново",n.appendChild(d)},window.application.screens.gameField=function(){const e=document.createElement("div");c.appendChild(e),window.application.renderBlock("header",e),window.application.renderBlock("gameField",e)}})();