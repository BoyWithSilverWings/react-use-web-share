import{useState as t,useEffect as r,useRef as n}from"react";function e(t,r,n){return function(){navigator.share(t).then(r).catch(n)}}export default function(i,o,u){void 0===i&&(i={}),void 0===o&&(o=function(){}),void 0===u&&(u=function(){});var c=t(!0),a=c[0],l=c[1],f=t(!1),d=f[0],v=f[1],h=n({url:"",title:"",text:""});return r(function(){var t=function(t){if(t)return t;var r=document.querySelector("link[rel=canonical]");return r?r.href:window.location.href}(i.url),r=i.title||document.title;h.current={title:r,text:i.text||void 0,url:t},navigator.share?v(!0):v(!1),l(!1)},[i,o,u]),{loading:a,isSupported:d,config:h.current,share:e(h.current,o,u)}}
//# sourceMappingURL=index.mjs.map
