if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/137-5f81d440d59c9e55.js",revision:"5f81d440d59c9e55"},{url:"/_next/static/chunks/196-d93b8be18b3ed2e5.js",revision:"d93b8be18b3ed2e5"},{url:"/_next/static/chunks/29107295-fbcfe2172188e46f.js",revision:"fbcfe2172188e46f"},{url:"/_next/static/chunks/299-c5e5b32bed557bfa.js",revision:"c5e5b32bed557bfa"},{url:"/_next/static/chunks/467-fc6bb346a4acf6d2.js",revision:"fc6bb346a4acf6d2"},{url:"/_next/static/chunks/750-0f6fe0904d612613.js",revision:"0f6fe0904d612613"},{url:"/_next/static/chunks/756-236e45416813db26.js",revision:"236e45416813db26"},{url:"/_next/static/chunks/863-b54fac97619a8685.js",revision:"b54fac97619a8685"},{url:"/_next/static/chunks/922-9f9ab8dc12581299.js",revision:"9f9ab8dc12581299"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-4bb691738e2ebc99.js",revision:"4bb691738e2ebc99"},{url:"/_next/static/chunks/pages/_app-929c37f0ff2a78c3.js",revision:"929c37f0ff2a78c3"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/components-1c68a2cbe2f89d8b.js",revision:"1c68a2cbe2f89d8b"},{url:"/_next/static/chunks/pages/home-7e1b22276ee751cb.js",revision:"7e1b22276ee751cb"},{url:"/_next/static/chunks/pages/index-55df9da249e85e8a.js",revision:"55df9da249e85e8a"},{url:"/_next/static/chunks/pages/login-6345198d6c9a8e95.js",revision:"6345198d6c9a8e95"},{url:"/_next/static/chunks/pages/looks-a5f76917ea8483c7.js",revision:"a5f76917ea8483c7"},{url:"/_next/static/chunks/pages/message-2ff4978db761dfb2.js",revision:"2ff4978db761dfb2"},{url:"/_next/static/chunks/pages/personalizations-b86e055d764a6a2b.js",revision:"b86e055d764a6a2b"},{url:"/_next/static/chunks/pages/products/%5Bproduct%5D-e87d3a341e8505e0.js",revision:"e87d3a341e8505e0"},{url:"/_next/static/chunks/pages/recommendation/%5Bcategory%5D-e70e3aa6e949956d.js",revision:"e70e3aa6e949956d"},{url:"/_next/static/chunks/pages/register-20d4626e25d2832b.js",revision:"20d4626e25d2832b"},{url:"/_next/static/chunks/pages/shop/%5Bid%5D-f59bdea0b7656b8d.js",revision:"f59bdea0b7656b8d"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-42cdea76c8170223.js",revision:"42cdea76c8170223"},{url:"/_next/static/css/2e2751e26baf52dd.css",revision:"2e2751e26baf52dd"},{url:"/_next/static/css/7b5cac7aa6d3bc72.css",revision:"7b5cac7aa6d3bc72"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/wcKEf3qV8Hb39pCHqQ9Gh/_buildManifest.js",revision:"62cde04bffd72972ce6e4f0f6e25c176"},{url:"/_next/static/wcKEf3qV8Hb39pCHqQ9Gh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/clients/1.jpg",revision:"f9fba257e45d5a0052f00ba4a498f54b"},{url:"/assets/clients/10.jpg",revision:"9e8f80523d845c9b53d0c4dbf7974998"},{url:"/assets/clients/11.jpg",revision:"d906a0e5d67a752b4fa6fe5a7b3f68d1"},{url:"/assets/clients/12.jpg",revision:"91fee4c4faed8e855647c792a67d24e8"},{url:"/assets/clients/13.jpg",revision:"1c34b9c955a958586c40c2d527952ff3"},{url:"/assets/clients/14.jpg",revision:"5e5257a0a87cce103e9b58ab1786c73a"},{url:"/assets/clients/15.jpg",revision:"ee0da8d94d50c1ed7561e442ee450fd5"},{url:"/assets/clients/16.jpg",revision:"13cec2ba1b062a036634b7a937e082e5"},{url:"/assets/clients/17.jpg",revision:"2afbdf5dc5f895c382d95520d6ae4ba3"},{url:"/assets/clients/18.jpg",revision:"7fd5ac2e27b455531149174933f2352f"},{url:"/assets/clients/19.jpg",revision:"84c1bb59b40a3178d9238cc5576afec3"},{url:"/assets/clients/2.jpg",revision:"8896aad0da38dd2b86d214a52a34d6f5"},{url:"/assets/clients/20.jpg",revision:"29fbebf5ce5dd8d51d62f12b43aa9d54"},{url:"/assets/clients/3.jpg",revision:"a8e883b736c1db46bce12bea475cb6f9"},{url:"/assets/clients/4.jpg",revision:"7cb4968a870843690a4fb740aa427034"},{url:"/assets/clients/5.jpg",revision:"75c0a97a43155d7077b08c861197a289"},{url:"/assets/clients/6.png",revision:"04b6671b889670ae2d660e059a119da7"},{url:"/assets/clients/7.jpg",revision:"dd10c24863f9ed2ca56d1950eeb54704"},{url:"/assets/clients/8.jpg",revision:"4ca615e579013003e097dba62e293bf8"},{url:"/assets/clients/9.jpg",revision:"e7a265b2fa1039b344408adb0ea88120"},{url:"/assets/grid.png",revision:"77119670ec485b6b4aa32b23b5541697"},{url:"/assets/home_groom_image.webp",revision:"d43e792cc8def5d0aad20507938a5ccc"},{url:"/assets/home_need_advice.webp",revision:"c2ec9345e2b652bffa5ba5202ad670e0"},{url:"/assets/home_page_hero_image.webp",revision:"06bfa9c77e67d2ec778537d2d9f0ac5d"},{url:"/assets/home_perfect_styled.webp",revision:"eee73c4011abd23328f0ff4db9c3253b"},{url:"/assets/home_shop_again.webp",revision:"1afa177bd2b811048052b1facb87547e"},{url:"/assets/images/accessories.webp",revision:"dbf312ecd9a5524afd99cb6d358a1188"},{url:"/assets/images/eliteservice.webp",revision:"1fff393a07ffb806aab33c9513e93524"},{url:"/assets/images/event-1.webp",revision:"409ff8d3e07119d147b5fc4962a65272"},{url:"/assets/images/event-2.webp",revision:"b1c3c597b2ab791c523cc36f2566c05c"},{url:"/assets/images/experiences.webp",revision:"2be568c167b7a6d0bfb156dc086717c9"},{url:"/assets/images/fabric.webp",revision:"c2ac2494e69c567e47b8a3ce66acf318"},{url:"/assets/images/fashion-trend.webp",revision:"5cba77f2225aa1a112a3e3de7695c779"},{url:"/assets/images/girl.jpg",revision:"c1349f20933229c7f6f9336c2cef562c"},{url:"/assets/images/groom.webp",revision:"a1ce8bd29a7606d3a8c59a4418bf12e6"},{url:"/assets/images/groomed.webp",revision:"8808a513b7e67d28f927584c3a3a0127"},{url:"/assets/images/hero.webp",revision:"58863c86fab1a515d9dc913d13519973"},{url:"/assets/images/home_banner_2.webp",revision:"f6a8ceb612ac1bfe3407d1178554821e"},{url:"/assets/images/home_banner_3.webp",revision:"34d31d41e91eab5ec450ed83376c560f"},{url:"/assets/images/home_banner_slide.webp",revision:"d0f65821cfee1705b331d0f3c19bace6"},{url:"/assets/images/men_styles.webp",revision:"044e2467ed92ce854180dae0169a62d7"},{url:"/assets/images/men_with_suit.webp",revision:"6ebda9b6cfa77b0b12f5e0e76ae00dd2"},{url:"/assets/images/payments.webp",revision:"600ae92aa47bcb492aaaf0f06d48bb71"},{url:"/assets/images/portrait_banner.webp",revision:"8f7de599d800363cffd67b988f0748c8"},{url:"/assets/images/server.webp",revision:"2d01fde46dab98bbdeee748e7249d403"},{url:"/assets/images/studio.webp",revision:"39fbeff35e5fd2b419447c11a9c056ce"},{url:"/assets/images/trendy.webp",revision:"d111050a1a78c696e3c4d77bdd9ebf27"},{url:"/assets/logo_white.jpg",revision:"2e0e39f775c98ecf2155b540db416582"},{url:"/assets/product_image.webp",revision:"9b007f45013b34b4388bda747f129382"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/Inter-Black.ttf",revision:"980c7e8757e741bb49c7c96513924c61"},{url:"/fonts/Inter-Bold.ttf",revision:"275bfea5dc74c33f51916fee80feae67"},{url:"/fonts/Inter-ExtraBold.ttf",revision:"c9709fb8e32755490795ce5bd226c3a0"},{url:"/fonts/Inter-ExtraLight.ttf",revision:"0f3ac0692901f70f1ac32cf079355051"},{url:"/fonts/Inter-Light.ttf",revision:"d55f45d07cfe01e8797bd1566561f718"},{url:"/fonts/Inter-Medium.ttf",revision:"ed533866b5c83114c7dddbcbc2288b19"},{url:"/fonts/Inter-Regular.ttf",revision:"079af0e2936ccb99b391ddc0bbb73dcb"},{url:"/fonts/Inter-SemiBold.ttf",revision:"07a48beb92b401297a76ff9f6aedd0ed"},{url:"/fonts/Inter-Thin.ttf",revision:"2dce622147cace7b467d9929b7708430"},{url:"/fonts/Jost-Medium.ttf",revision:"2c2945b9da98d9b48d6104893d9558c0"},{url:"/fonts/slick.woff",revision:"b7c9e1e479de3b53f1e4e30ebac2403a"},{url:"/icon-192x192.png",revision:"8a868f9a92439389b391269f469833e4"},{url:"/icon-256x256.png",revision:"824be1a4268b28e784044ce0158b7d2f"},{url:"/icon-384x384.png",revision:"e783274dde93fb3170abc1d51820d824"},{url:"/icon-512x512.png",revision:"db698a331642a8c2e110b0f7ace9859f"},{url:"/manifest.json",revision:"1529104a7359f0585828b0ed9c188405"},{url:"/styleSheet/slickTheme.min.css",revision:"3c1deaf8e6c6f2641d6678ecf0721bd4"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));