if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-Kf5W9okS0NLWWq-2Vmy4O.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Kf5W9okS0NLWWq-2Vmy4O/_buildManifest.js",revision:"47acc5f877cdb453752faf0c3dc8b718"},{url:"/_next/static/Kf5W9okS0NLWWq-2Vmy4O/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-b172d8a81fb05c25.js",revision:"b172d8a81fb05c25"},{url:"/_next/static/chunks/106-c487b682fa27c616.js",revision:"c487b682fa27c616"},{url:"/_next/static/chunks/1a48c3c1-794700260abd4c56.js",revision:"794700260abd4c56"},{url:"/_next/static/chunks/1bfc9850-8f7437d4ef71e10c.js",revision:"8f7437d4ef71e10c"},{url:"/_next/static/chunks/252f366e-1a1d773bbe25fda6.js",revision:"1a1d773bbe25fda6"},{url:"/_next/static/chunks/31664189-21c659d51742bf38.js",revision:"21c659d51742bf38"},{url:"/_next/static/chunks/455-035b80830e3eec4a.js",revision:"035b80830e3eec4a"},{url:"/_next/static/chunks/536-457fc462244d27fb.js",revision:"457fc462244d27fb"},{url:"/_next/static/chunks/590-05e3372d83266313.js",revision:"05e3372d83266313"},{url:"/_next/static/chunks/66-f8cdc30d1bb50fa8.js",revision:"f8cdc30d1bb50fa8"},{url:"/_next/static/chunks/664-638a51df518918e8.js",revision:"638a51df518918e8"},{url:"/_next/static/chunks/6728d85a-6b2ef905176c37a2.js",revision:"6b2ef905176c37a2"},{url:"/_next/static/chunks/675-8a7bcb32c3fc768b.js",revision:"8a7bcb32c3fc768b"},{url:"/_next/static/chunks/78e521c3-157c7213c18be884.js",revision:"157c7213c18be884"},{url:"/_next/static/chunks/848-5037356fec0d5e69.js",revision:"5037356fec0d5e69"},{url:"/_next/static/chunks/893-4df6d520c2849434.js",revision:"4df6d520c2849434"},{url:"/_next/static/chunks/a0e03aaa-6f06b542f962af3a.js",revision:"6f06b542f962af3a"},{url:"/_next/static/chunks/ae51ba48-4809951a4a40955a.js",revision:"4809951a4a40955a"},{url:"/_next/static/chunks/d64684d8-4e9333f2fa1c5e92.js",revision:"4e9333f2fa1c5e92"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-077d509a22ca77f0.js",revision:"077d509a22ca77f0"},{url:"/_next/static/chunks/pages/_app-4dbb859583dea851.js",revision:"4dbb859583dea851"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/_offline-7645fef799ec41fa.js",revision:"7645fef799ec41fa"},{url:"/_next/static/chunks/pages/contributor-aad11f424fd720d1.js",revision:"aad11f424fd720d1"},{url:"/_next/static/chunks/pages/create-post-b58edf03a5b3af76.js",revision:"b58edf03a5b3af76"},{url:"/_next/static/chunks/pages/create-post/add-attachments-c37fc7b5c96635b7.js",revision:"c37fc7b5c96635b7"},{url:"/_next/static/chunks/pages/create-post/add-poll-343b4b778c1f12b9.js",revision:"343b4b778c1f12b9"},{url:"/_next/static/chunks/pages/donate-4024b8eaa327ef8b.js",revision:"4024b8eaa327ef8b"},{url:"/_next/static/chunks/pages/home-9f188738b9bf3caf.js",revision:"9f188738b9bf3caf"},{url:"/_next/static/chunks/pages/index-89314df3c0fdddee.js",revision:"89314df3c0fdddee"},{url:"/_next/static/chunks/pages/invitation-code-1eb7405bb0a14d57.js",revision:"1eb7405bb0a14d57"},{url:"/_next/static/chunks/pages/moderator-69785b75fc7533c3.js",revision:"69785b75fc7533c3"},{url:"/_next/static/chunks/pages/payment-2c7498e4650f5601.js",revision:"2c7498e4650f5601"},{url:"/_next/static/chunks/pages/phone-verification-90bd7243512394f8.js",revision:"90bd7243512394f8"},{url:"/_next/static/chunks/pages/post/%5Bid%5D-2defa60da10ae4d0.js",revision:"2defa60da10ae4d0"},{url:"/_next/static/chunks/pages/post/%5Bid%5D/reply-3359875641c4ecfa.js",revision:"3359875641c4ecfa"},{url:"/_next/static/chunks/pages/sign-in-1e41e1e5847ca9cb.js",revision:"1e41e1e5847ca9cb"},{url:"/_next/static/chunks/pages/sign-in/forgot-password-7eed92e0207fa625.js",revision:"7eed92e0207fa625"},{url:"/_next/static/chunks/pages/sign-in/new-password-b8a8271aafbf6940.js",revision:"b8a8271aafbf6940"},{url:"/_next/static/chunks/pages/sign-in/reset-password-06a9ace0340fef72.js",revision:"06a9ace0340fef72"},{url:"/_next/static/chunks/pages/sign-up-d64e965a55250923.js",revision:"d64e965a55250923"},{url:"/_next/static/chunks/pages/sign-up/email-verification-719f3e70ea5ebc56.js",revision:"719f3e70ea5ebc56"},{url:"/_next/static/chunks/pages/sign-up/primary-select-30d20841fc5254dc.js",revision:"30d20841fc5254dc"},{url:"/_next/static/chunks/pages/start-screen-cd184d19054469b2.js",revision:"cd184d19054469b2"},{url:"/_next/static/chunks/pages/test-page/test-db528309b9b1c068.js",revision:"db528309b9b1c068"},{url:"/_next/static/chunks/pages/waitlist-e166fdaf00f4bb1d.js",revision:"e166fdaf00f4bb1d"},{url:"/_next/static/chunks/pages/welcome-screen-7d8d2f098e4a3044.js",revision:"7d8d2f098e4a3044"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/7fa52ac1b9457ef1.css",revision:"7fa52ac1b9457ef1"},{url:"/_next/static/css/ba126df8000d2e6e.css",revision:"ba126df8000d2e6e"},{url:"/_next/static/media/2aaf0723e720e8b9.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_offline",revision:"Kf5W9okS0NLWWq-2Vmy4O"},{url:"/icon-192x192.png",revision:"97a240e84050c659bf2007c58e4e9d73"},{url:"/icon-256x256.png",revision:"bd674162f748f3c15100123a1cf74246"},{url:"/icon-384x384.png",revision:"9c749746eeb172873134f0288014cef8"},{url:"/icon-512x512.png",revision:"df0e17296b2aee7762d5222e16b13d96"},{url:"/icons/apple-icon.svg",revision:"659bcd0356a1658bd73c50ff9aaa0c5f"},{url:"/icons/food.svg",revision:"8b97b3edd53ae7b2fffa98270f2b7797"},{url:"/icons/google-icon.svg",revision:"68f3470b2e0ae5c006e1c7005da76dae"},{url:"/icons/politics-icon.svg",revision:"139f8cbe51dbdbe2c4eb7abe98b41a0d"},{url:"/icons/science-icon.svg",revision:"ef6b4f90391940ee663b6e51d98aed00"},{url:"/icons/space-icon.svg",revision:"964241a6a855b1d0991f6f82a7afeb06"},{url:"/icons/sport-icon.svg",revision:"457328a713875af5d2548c35ab7c3028"},{url:"/icons/twitter-icon.svg",revision:"e92bf929ad2df3eea3ab8ab113c90061"},{url:"/icons/ukraine-icon.svg",revision:"366d8ad20500a8d323444f6ce53c677c"},{url:"/images/IPay.png",revision:"aae5c2eb01c6f0213ac2b48dc8185c73"},{url:"/images/Path.png",revision:"c8bf0a501b649737903f0f12e3be4779"},{url:"/images/Vector.png",revision:"48bdf6e1f1024f2f6dc8aed6f6adf95c"},{url:"/images/contact.png",revision:"ee6d7172cd1834fc0b5337a485fd74fb"},{url:"/images/contributor.png",revision:"fbaf77f9befcaeff12dedb57dff87ec1"},{url:"/images/createPin.png",revision:"64c262803575e86317d8e76b1922cd2d"},{url:"/images/dollar.png",revision:"5045eaef4432a002b098f72195b9acbf"},{url:"/images/newsmast-bg.png",revision:"756fe722ed4cddd348ed6bf44a4959c2"},{url:"/images/newsmast-logo-md.png",revision:"00207c449bb6b9723edeeefece67a88e"},{url:"/images/newsmast-logo.png",revision:"3b980e4e31d795e43f19b336cb90baae"},{url:"/images/post-sample.png",revision:"0391ba4ea6d9a7faff4b2fa110bff2fa"},{url:"/images/profile-sample-1.png",revision:"938256ac156af783c362c8177b8f7a73"},{url:"/images/profile-sample-2.png",revision:"3050569a6d0b91c348f0b662970bb1ff"},{url:"/images/profile-sample-3.png",revision:"4f08db737b65c36d800127478bd9eb6c"},{url:"/images/profile-sample-4.png",revision:"cbe8d7d9badc16ce2493d5ea95dc5824"},{url:"/images/splash-screen.png",revision:"9443949ad84e24a3cdfc628ad175c9b2"},{url:"/images/waitlist.png",revision:"4c476fa023b2eb916461d8282bb22eed"},{url:"/manifest.json",revision:"6476dc4190a457103d4045e6621bae98"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));