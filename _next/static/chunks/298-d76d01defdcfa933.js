"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{3177:function(e,n,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r(6006),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,u={},i=null,f=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(f=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(u[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===u[t]&&(u[t]=n[t]);return{$$typeof:o,type:e,key:i,ref:f,props:u,_owner:a.current}}n.Fragment=u,n.jsx=i,n.jsxs=i},9268:function(e,n,r){e.exports=r(3177)},7490:function(e,n,r){r.d(n,{$0:function(){return o},OR:function(){return u},LI:function(){return a},_:function(){return c}});var t=r(6006);function o(e){let n=(0,t.useRef)(()=>{throw Error("Cannot call an event handler while rendering.")});return a(()=>{n.current=e},[e]),(0,t.useCallback)((...e)=>n.current(...e),[n])}var u=function(e,n,r,o){let u=(0,t.useRef)(n);a(()=>{u.current=n},[n]),(0,t.useEffect)(()=>{var n;let t=null!==(n=null==r?void 0:r.current)&&void 0!==n?n:window;if(!(t&&t.addEventListener))return;let l=e=>u.current(e);return t.addEventListener(e,l,o),()=>{t.removeEventListener(e,l,o)}},[e,r,o])};let l="undefined"!=typeof window?t.useLayoutEffect:t.useEffect;var a=l,c=function(e,n){let r=(0,t.useCallback)(()=>{if("undefined"==typeof window)return n;try{let r=window.localStorage.getItem(e);return r?function(e){try{return"undefined"===e?void 0:JSON.parse(null!=e?e:"")}catch(n){console.log("parsing error on",{value:e});return}}(r):n}catch(r){return console.warn(`Error reading localStorage key “${e}”:`,r),n}},[n,e]),[l,a]=(0,t.useState)(r),c=o(n=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{let r=n instanceof Function?n(l):n;window.localStorage.setItem(e,JSON.stringify(r)),a(r),window.dispatchEvent(new Event("local-storage"))}catch(n){console.warn(`Error setting localStorage key “${e}”:`,n)}});(0,t.useEffect)(()=>{a(r())},[]);let i=(0,t.useCallback)(n=>{null!=n&&n.key&&n.key!==e||a(r())},[e,r]);return u("storage",i),u("local-storage",i),[l,c]}}}]);