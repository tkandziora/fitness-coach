const CACHE_NAME = 'fitness-v4.1-cache';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install and cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve from cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});