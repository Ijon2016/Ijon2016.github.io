// service-worker.js
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
  });
  
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
  });
  
  // 現状では、この処理を書かないとService Workerが有効と判定されないようです
  self.addEventListener('fetch', function(event) {});
  
/*
// ライブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '12345'
  },
  {
    url: '/app.css',
    revision: '12345'
  },
  { 
　url: '/app.js',
    revision: '12345'
  },
])
*/