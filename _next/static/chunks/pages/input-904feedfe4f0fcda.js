(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{4298:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/input",function(){return n(2230)}])},2230:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(5893),i=n(9008),c=n(2814),s=n(7294);function l(e){var t=(e+1)%2;return function(e){if(!(e in[0,1,2]))throw new Error("Fatal error! it is not Switch3 Switch3Item: ".concat(e))}(t),t}function a(e,t,n,r){switch(e){case 0:return t;case 1:return n;case 2:return r}}var o=n(7382),x=n(6024),u=function(e){var t=e.current,n=e.text,i=e.onClick,s=e.className;return(0,r.jsxs)("button",{onClick:i,className:(0,o.A)("border-2 rounded-lg p-2 flex flex-row justify-end items-center",a(t,"border-gray-400 bg-gray-100 text-gray-500","border-green-400 bg-green-100 text-green-500","border-yellow-400 bg-yellow-100 text-yellow-500"),s),children:[(0,r.jsx)(c.G,{icon:a(t,x.nY,x.di,x.sp),width:25}),(0,r.jsx)("div",{className:"ml-1",children:n})]})},d=n(6486),m=n(1436);function f(e){return(0,d.clone)(e)}var h=n(2407);function w(e,t){return(0,s.useReducer)((function(e,n){if(n<0)throw new Error("index must be greater than 0 ".concat(n));var r=e[n];return e[n]=t(r),e}),e)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(a){i=!0,c=a}finally{try{r||null==l.return||l.return()}finally{if(i)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=["\u304a\u8a71\u3057","\u30c7\u30fc\u30c8","\u30dc\u30a4\u30c1\u30e3","\u4f5c\u696d\u901a\u8a71","VR\u7761\u7720","DM\uff08Discord\u306a\u3069\uff09","\u30ea\u30a2\u30eb\u3067\u4f1a\u3046","\u30dc\u30a4\u30c8\u30ec"].map((function(e){return{text:e,item:0}})),v=["\u30ad\u30b9","\u307f\u307f\u306a\u3081","\u3042\u3044\u3076","\u307b\u3093\u3070\u3093"].map((function(e){return{text:e,item:0}})),N=function(){var e=j(w(f(p),(function(e){return{text:e.text,item:l(e.item)}})),2),t=e[0],n=e[1],c=t.map((function(e,t){return{text:e.text,item:e.item,doSwitch:function(){return n(t)}}})),s=j(w(f(v),(function(e){return{text:e.text,item:l(e.item)}})),2),a=s[0],o=s[1],x=a.map((function(e,t){return{text:e.text,item:e.item,doSwitch:function(){return o(t)}}})),m=(0,d.cloneDeep)(x),N=(0,d.cloneDeep)(x);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsxs)("title",{children:[h.T," - \u3042\u306a\u305f\u306e\u60c5\u5831\u3092\u5165\u529b"]}),(0,r.jsx)("meta",{name:"description",content:h.T}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:"flex flex-col items-center",children:[(0,r.jsx)("p",{className:"font-extrabold text-pink-400 text-lg mt-4 md:text-2xl",children:"\u307e\u305a\u306f\u76f8\u624b\u306b\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u3082\u3089\u3046\u305f\u3081\u306b"}),(0,r.jsx)("p",{className:"font-extrabold text-pink-400 text-lg mb-4 md:text-2xl",children:"\u81ea\u5206\u306e\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),(0,r.jsx)("section",{className:"rounded-box",children:(0,r.jsx)(b,{})}),(0,r.jsxs)("section",{className:"rounded-box w-3/4v mt-6",children:[(0,r.jsxs)("p",{className:"text-lg my-4 md:text-2xl",children:["\u3042\u306a\u305f\u304c\u76f8\u624b",(0,r.jsx)("span",{className:"font-bold",children:"\u3068"}),"\u3057\u305f\u3044\u3053\u3068"]}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:c.map((function(e){var t=e.text,n=e.item,i=e.doSwitch;return(0,r.jsx)(u,{text:t,current:n,onClick:i,className:"m-2"},t)}))})]}),(0,r.jsxs)("section",{className:"rounded-box w-3/4v mt-6",children:[(0,r.jsxs)("p",{className:"text-lg my-4 md:text-2xl",children:["\u3042\u306a\u305f\u304c\u76f8\u624b",(0,r.jsx)("span",{className:"font-bold",children:"\u306b"}),"\u3057\u305f\u3044\u3053\u3068"]}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:m.map((function(e){var t=e.text,n=e.item,i=e.doSwitch;return(0,r.jsx)(u,{text:t,current:n,onClick:i,className:"m-2"},t)}))})]}),(0,r.jsxs)("section",{className:"rounded-box w-3/4v mt-6",children:[(0,r.jsxs)("p",{className:"text-lg my-4 md:text-2xl",children:["\u3042\u306a\u305f\u304c\u76f8\u624b",(0,r.jsx)("span",{className:"font-bold",children:"\u304b\u3089"}),"\u3055\u308c\u305f\u3044\u3053\u3068"]}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:N.map((function(e){var t=e.text,n=e.item,i=e.doSwitch;return(0,r.jsx)(u,{text:t,current:n,onClick:i,className:"m-2"},t)}))})]}),(0,r.jsx)("p",{className:"mt-4",children:"\u25a1 \u5a5a\u59fb\u5c4a\u3051\u306b\u3048\u3063\u3061\u306a\u60c5\u5831\u3092\u8868\u793a\u3059\u308b"})]})]})},b=function(){var e=function(e){var t=(0,s.useReducer)(l,e);return{item:t[0],doSwitch:t[1]}}(0),t=e.item,n=e.doSwitch;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(0,r.jsx)(c.G,{icon:m.WV2,width:10,className:"text-pink-200"}),(0,r.jsx)("p",{className:"ml-2",children:"\u64cd\u4f5c\u8aac\u660e"})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center mt-4",children:[(0,r.jsx)(u,{text:"\u304a\u8a66\u3057",current:t,onClick:n,className:"m-2"}),(0,r.jsx)("p",{className:"ml-2",children:"\u2190\u62bc\u3057\u3066\u5207\u308a\u66ff\u3048\u308b"})]})]})}}},function(e){e.O(0,[662,311,774,888,179],(function(){return t=4298,e(e.s=t);var t}));var t=e.O();_N_E=t}]);