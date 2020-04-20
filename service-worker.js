// service-worker.js
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {});

// files to be cached
var CACHE_NAME = 'pico-caches';
var urlsToCache = [
    'logo-152.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
      caches
          .open(CACHE_NAME)
          .then(function(cache) {
              return cache.addAll(urlsToCache);
          })
  );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches
          .match(event.request)
          .then(function(response) {
              return response ? response : fetch(event.request);
          })
  );
});