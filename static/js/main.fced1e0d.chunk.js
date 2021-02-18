(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{17:function(e,t,n){e.exports=n(33)},22:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(16),r=n.n(o),i=(n(22),n(9)),s=n(5),l=n(13),u=n.n(l),f=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return c.a.createElement("div",{className:"snake-food",style:t})},d=function(e){return c.a.createElement(c.a.Fragment,null,e.highscores.map((function(e,t){var n=e.name,a=e.scores;return c.a.createElement("tr",{key:t},c.a.createElement("td",null,n),c.a.createElement("td",null,a))})))},m=function(e){return c.a.createElement("div",null,e.snakeDots.map((function(e,t){var n={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return c.a.createElement("div",{className:"snake-body",key:t,style:n})})))};u.a.initializeApp({apiKey:"AIzaSyA8q2eE4_q4TN1TrUEFEAT-YFlr107xHI8",authDomain:"snake-2183d.firebaseapp.com",projectId:"snake-2183d"});var h=u.a.firestore(),v=h.collection("scores");var E=function(){var e=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},t=Object(a.useState)([[0,0],[2,0]]),n=Object(s.a)(t,2),o=n[0],r=n[1],l=Object(a.useState)(e),u=Object(s.a)(l,2),E=u[0],b=u[1],g=Object(a.useState)("RIGHT"),p=Object(s.a)(g,2),k=p[0],O=p[1],w=Object(a.useState)(200),j=Object(s.a)(w,2),N=j[0],T=j[1],y=Object(a.useState)(!1),S=Object(s.a)(y,2),I=S[0],W=S[1],R=Object(a.useState)(!1),D=Object(s.a)(R,2),A=D[0],L=D[1],U=Object(a.useState)(""),F=Object(s.a)(U,2),G=F[0],H=F[1],P=Object(a.useState)([]),C=Object(s.a)(P,2),M=C[0],x=C[1];Object(a.useEffect)((function(){Q()}),[A]),Object(a.useEffect)((function(){return document.addEventListener("mousedown",q),function(){document.removeEventListener("mousedown",q)}}));var q=function(e){switch(e.target.className){case"UP":"DOWN"!==k&&O("UP");break;case"DOWN":"UP"!==k&&O("DOWN");break;case"LEFT":"RIGHT"!==k&&O("LEFT");break;case"RIGHT":"LEFT"!==k&&O("RIGHT")}};Object(a.useEffect)((function(){var e=o[o.length-1];J(e),z(e),B(e)}));var z=function(e){(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&W(!0)},B=function(e){var t=Object(i.a)(o);t.pop(),t.forEach((function(t){e[0]===t[0]&&e[1]===t[1]&&W(!0)}))},J=function(e){e[0]===E[0]&&e[1]===E[1]&&($(),_(),N>50&&T(N-10))};!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){document.onkeydown=K,Y()}),N);var K=function(e){switch((e=e||window.event).keyCode){case 38:"DOWN"!==k&&O("UP");break;case 40:"UP"!==k&&O("DOWN");break;case 37:"RIGHT"!==k&&O("LEFT");break;case 39:"LEFT"!==k&&O("RIGHT")}},Y=function(){var e=Object(i.a)(o),t=e[e.length-1];switch(k){case"RIGHT":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0],t[1]+2];break;case"UP":t=[t[0],t[1]-2]}e.push(t),e.shift(),r(e)},$=function t(){var n=e;Object(i.a)(o).forEach((function(e){n[0]===e[0]&&n[1]===e[1]&&t()})),b(n)},_=function(){var e=Object(i.a)(o);e.unshift([]),r(e)},Q=function(){var e=[];h.collection("scores").get().then((function(t){t.forEach((function(t){e.push(t.data())})),function(e){e.sort((function(e,t){return t.scores-e.scores})),e=e.slice(0,10),x(e)}(e)})).catch((function(e){console.log("Error getting doc: ",e)}))},V=c.a.createElement("div",null,c.a.createElement("h3",{className:"score"},"Score: ",10*(o.length-2)),c.a.createElement("div",{className:"game-area"},c.a.createElement(m,{snakeDots:o}),c.a.createElement(f,{dot:E})),c.a.createElement("h3",{className:"speed"},"Speed: ",Math.floor(5e3/N)," km/h"),c.a.createElement("div",{className:"input"},c.a.createElement("div",{className:"UP",onClick:q}),c.a.createElement("div",{className:"LEFT"}),c.a.createElement("div",{className:"RIGHT"}),c.a.createElement("div",{className:"DOWN"})));return I&&(V=c.a.createElement("div",{className:"game-over"},c.a.createElement("h1",null,"Game Over."),c.a.createElement("h3",null,"Score: ",10*(o.length-2)),c.a.createElement("table",{className:"highscore-table"},c.a.createElement("tbody",null,c.a.createElement(d,{highscores:M}))),c.a.createElement("input",{type:"text",className:"inputName",onChange:function(e){e.target.value.length<=15&&H(e.target.value)},placeholder:"Enter Name:"}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){L(!1),W(!1),T(200),O("RIGHT"),r([[0,0],[2,0]]),b(e),H("")}},"Try Again"),c.a.createElement("button",{disabled:A,onClick:function(){G.length<1||(L(!0),v.add({name:G,scores:10*(o.length-2)}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})))}},"Add Score."))),V},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/snake-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/snake-game","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.fced1e0d.chunk.js.map