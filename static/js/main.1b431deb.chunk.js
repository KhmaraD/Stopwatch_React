(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],[,,function(t,e,n){t.exports={btn:"Button_btn__1KwId"}},,,,function(t,e,n){t.exports={watch:"Display_watch__3KI3A"}},function(t,e,n){t.exports={stopwatchWrapper:"Stopwatch_stopwatchWrapper__1-4uz"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(5),a=n.n(i),r=(n(12),n(13),n(3)),o=n(6),u=n.n(o),j=n(0),l=function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Stopwatch"}),Object(j.jsxs)("div",{className:u.a.watch,children:[Object(j.jsxs)("span",{children:[("0"+Math.floor(t.time/36e5%60)).slice(-2),":"]}),Object(j.jsxs)("span",{children:[("0"+Math.floor(t.time/6e4%60)).slice(-2),":"]}),Object(j.jsx)("span",{children:("0"+Math.floor(t.time/1e3%60)).slice(-2)})]})]})},b=n(2),h=n.n(b),p=function(t){return Object(j.jsxs)("div",{children:[t.isRun?Object(j.jsx)("button",{onClick:t.stop,className:h.a.btn,children:"Stop"}):Object(j.jsx)("button",{onClick:t.start,className:h.a.btn,children:"Start"}),Object(j.jsx)("button",{onClick:t.wait,className:h.a.btn,children:"Wait"}),Object(j.jsx)("button",{onClick:t.reset,className:h.a.btn,children:"Reset"})]})},f=n(7),O=n.n(f),d=function(t){var e=t.time,n=t.isRun,c=t.start,s=t.stop,i=t.reset,a=t.wait;return Object(j.jsxs)("div",{className:O.a.stopwatchWrapper,children:[Object(j.jsx)(l,{time:e}),Object(j.jsx)(p,{isRun:n,start:c,stop:s,reset:i,wait:a})]})},x=function(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)(!1),a=Object(r.a)(i,2),o=a[0],u=a[1],l=Object(c.useState)(!1),b=Object(r.a)(l,2),h=b[0],p=b[1];Object(c.useEffect)((function(){var t=null;return o?t=setInterval((function(){s((function(t){return t+1e3}))}),1e3):clearInterval(t),function(){return clearInterval(t)}}),[o]);return Object(j.jsx)(d,{time:n,isRun:o,start:function(){u(!0)},stop:function(){u(!1),s(0)},reset:function(){0!==n&&(s(0),u(!0))},wait:function(){p(!0),setTimeout((function(){h&&u(!1),p(!1)}),300)}})},w=function(){return Object(j.jsx)(x,{})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),i(t),a(t)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),m()}],[[15,1,2]]]);
//# sourceMappingURL=main.1b431deb.chunk.js.map