"use strict";var precacheConfig=[["/index.html","2b56ceab0116a5063f199f2f438d3bcf"],["/static/css/main.e474a136.css","e474a136b4d640dc855ddd697946441c"],["/static/js/0.f270527c.chunk.js","d4f97fed942f540eaf45f9821c19daca"],["/static/js/10.58ae465b.chunk.js","8c6a7c95a84117a53b24dfdec48bf91d"],["/static/js/11.66608c1e.chunk.js","7fabba14f00b65de39e42f89034a22c0"],["/static/js/12.29315f63.chunk.js","33d481c17c33fac561de49a7adb6f2de"],["/static/js/13.fa0cbfe6.chunk.js","07c02613b6d0e449125277d70eec5ad7"],["/static/js/14.4a69e615.chunk.js","9e0fe7e501de9e5919d902103dbf5dfa"],["/static/js/15.de55a945.chunk.js","e26b51e9e88d2a1b414bbf59f97773ae"],["/static/js/16.262d73e4.chunk.js","37dedcaa38445b0ef606a5ba91b45970"],["/static/js/17.5457da51.chunk.js","0ed45fcf95969921ca8d7f4a7b94f481"],["/static/js/18.63e659c7.chunk.js","11ea82c98bbb9fad113691d1c76004fc"],["/static/js/23.f888a16f.chunk.js","a4d1e688ac5bbcc50a5a513b1b825d70"],["/static/js/24.42368b1e.chunk.js","52cba196438588685ed7e57a1dca7b2c"],["/static/js/25.33f131b5.chunk.js","45cfc33fca8e0e83c5e3de6162cc5e0d"],["/static/js/26.df314d18.chunk.js","f47ca99c4447f4fc9d4ffdc530b3a52b"],["/static/js/27.84632aed.chunk.js","883b1e282b333e90765a25fa164fba57"],["/static/js/28.241c3e42.chunk.js","8c12e1d0cfd7f3af958acc087405e116"],["/static/js/29.58e0d9b1.chunk.js","bcba2c8a04580a6eea5b4b136ff4647a"],["/static/js/30.77e81176.chunk.js","320060552f499b6854c90e01924c9c61"],["/static/js/31.5bf1a9b9.chunk.js","fd6a0265cc8ffb6521a636a5a36542a7"],["/static/js/32.ce0818a2.chunk.js","ffce718faa5edfb86a4eeff5f26a2f4f"],["/static/js/33.bd218d6d.chunk.js","21866c953b0f0da36a72ca93d269a1e9"],["/static/js/9.db21de6e.chunk.js","53b80bac5ef4751038a70faabc7d6cd2"],["/static/js/main.84fcafa2.js","0c956a6273791c286667ed74fa48823b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});