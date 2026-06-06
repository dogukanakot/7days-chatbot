var CACHE_NAME = '7days-nova-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/images.png',
  '/havacilik_logo.png',
  '/telepath-academy-logo.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
