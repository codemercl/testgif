if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),f={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-9ff99771.js",revision:null},{url:"assets/index-fff4c532.css",revision:null},{url:"index.html",revision:"bf007c9802e1fd272f5b49cdf54178d1"},{url:"registerSW.js",revision:"95d792eed816077b45e86ede15ba4676"},{url:"assets/images/android-chrome-192x192.png",revision:"5ddf8fc9eeb796f628e5d5638bbfb845"},{url:"assets/images/android-chrome-512x512.png",revision:"2359e7daa15194d5abd91e36e82c5e06"},{url:"manifest.webmanifest",revision:"a4dd5c6f26cf061a04b064452e5cbf64"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));