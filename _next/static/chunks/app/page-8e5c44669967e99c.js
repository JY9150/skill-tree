(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{666:function(e,s,t){Promise.resolve().then(t.bind(t,3768))},3768:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var r=t(9268),a=t(6006),n=t(6008);function i(e){let{src:s}=e;return(0,r.jsx)("img",{src:"/imgs/guide/".concat(s),className:"w-full pointer-events-none user-select-none rounded-sm shadow my-2"})}function c(){let e=(0,n.useRouter)(),[s,t]=(0,a.useState)(0),[c,l]=(0,a.useState)(0);return(0,a.useEffect)(()=>{-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&l(1)},[]),(0,a.useEffect)(()=>{s>=7&&e.push("/tree")},[s]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("head",{children:(0,r.jsx)("meta",{name:"theme-color",content:"#27272A"})}),(0,r.jsx)("div",{className:"bg-zinc-800 text-white min-h-[100svh] p-4",children:(0,r.jsxs)("div",{className:"mx-auto max-w-[612px] w-full p-2",children:[(0,r.jsx)("h1",{className:"text-3xl text-center",onClick:()=>t(s+1),children:"SITCON Camp"}),(0,r.jsx)("h1",{className:"text-3xl text-center mb-2",children:"資訊技能樹"}),(0,r.jsxs)("p",{className:"text-primary-100 text-center",children:["嗨，歡迎你使用資訊技能樹！",(0,r.jsx)("br",{}),"請按照下列指示將資訊技能樹安裝到桌面。"]}),(0,r.jsxs)("div",{className:"bg-zinc-900 px-3 py-4 rounded-lg overflow-hidden mt-4",children:[(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("p",{className:"text-xl text-center",children:"選擇瀏覽器"})}),(0,r.jsxs)("div",{className:"flex gap-2 mt-4",children:[(0,r.jsxs)("div",{className:"w-1/2 cursor-pointer text-xl leading-5 transition-all text-primary-100 flex gap-2 items-center justify-center flex-col ".concat(0===c?"":"opacity-50 hover:opacity-75"),onClick:()=>l(0),children:[(0,r.jsx)("div",{className:"w-16 h-16 bg-white rounded flex items-center justify-center text-primary-800",children:(0,r.jsx)("span",{className:"mdi mdi-google-chrome text-5xl"})}),"Chrome",(0,r.jsx)("span",{className:"text-xs -mt-1.5",children:"Android"})]}),(0,r.jsxs)("div",{className:"w-1/2 cursor-pointer text-xl leading-5 transition-all text-primary-100 flex gap-2 items-center justify-center flex-col ".concat(1===c?"":"opacity-50 hover:opacity-75"),onClick:()=>l(1),children:[(0,r.jsx)("div",{className:"w-16 h-16 bg-white rounded flex items-center justify-center text-primary-800",children:(0,r.jsx)("span",{className:"mdi mdi-apple-safari text-5xl"})}),"Safari",(0,r.jsx)("span",{className:"text-xs -mt-1.5",children:"iOS"})]})]}),(0,r.jsx)("p",{className:"text-primary-100 mt-4 text-sm text-center opacity-50",children:"建議使用上述經測試之瀏覽器，以獲得最佳的使用體驗。"})]}),0===c&&(0,r.jsxs)("div",{className:"bg-zinc-900 px-3 py-4 rounded-lg overflow-hidden mt-4",children:[(0,r.jsxs)("p",{className:"text-xl mb-4",children:[(0,r.jsx)("span",{className:"mdi mdi-google-chrome"})," Chrome 的安裝方法"]}),(0,r.jsx)(i,{src:"a-1.png"}),(0,r.jsxs)("p",{className:"text-primary-100 mb-8",children:["1. 點選 ",(0,r.jsx)("span",{className:"mdi mdi-dots-vertical"})," "]}),(0,r.jsx)(i,{src:"a-2.png"}),(0,r.jsx)("p",{className:"text-primary-100 mb-8",children:"2. 點選「加到主畫面」。"}),(0,r.jsx)(i,{src:"a-3.png"}),(0,r.jsx)("p",{className:"text-primary-100",children:"3. 點選「新增」，完成安裝。"})]}),1===c&&(0,r.jsxs)("div",{className:"bg-zinc-900 px-3 py-4 rounded-lg overflow-hidden mt-4",children:[(0,r.jsxs)("p",{className:"text-xl mb-4",children:[(0,r.jsx)("span",{className:"mdi mdi-apple-safari"})," Safari 的安裝方法"]}),(0,r.jsx)(i,{src:"i-1.png"}),(0,r.jsxs)("p",{className:"text-primary-100 mb-8",children:["1. 點選下方的 ",(0,r.jsx)("span",{className:"mdi mdi-export-variant"})," ","按鈕"]}),(0,r.jsx)(i,{src:"i-2.png"}),(0,r.jsx)("p",{className:"text-primary-100 mb-8",children:"2. 點選「加入主畫面」。"}),(0,r.jsx)(i,{src:"i-3.png"}),(0,r.jsx)("p",{className:"text-primary-100",children:"3. 點選「新增」，完成安裝。"})]})]})})]})}},3177:function(e,s,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(6006),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function x(e,s,t){var r,n={},x=null,m=null;for(r in void 0!==t&&(x=""+t),void 0!==s.key&&(x=""+s.key),void 0!==s.ref&&(m=s.ref),s)i.call(s,r)&&!l.hasOwnProperty(r)&&(n[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===n[r]&&(n[r]=s[r]);return{$$typeof:a,type:e,key:x,ref:m,props:n,_owner:c.current}}s.Fragment=n,s.jsx=x,s.jsxs=x},9268:function(e,s,t){"use strict";e.exports=t(3177)},6008:function(e,s,t){e.exports=t(794)}},function(e){e.O(0,[253,769,744],function(){return e(e.s=666)}),_N_E=e.O()}]);