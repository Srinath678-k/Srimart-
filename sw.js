const CACHE_NAME = 'srimart-cache-v18';
const urlsToCache = [
  './index.html',
  './css/style.css',
  './css/navbar.css',
  './css/home.css',
  './css/responsive.css',
  './js/features/theme.js',
  './js/data.js',
  './js/features/navbar.js',
  './js/animations.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  // Only intercept HTTP/S requests (avoids chrome-extension:// schemes etc.)
  if (!event.request.url.startsWith('http')) return;

  const isCodeAsset = event.request.url.match(/\.(html|css|js)$/) || event.request.url === self.location.origin || event.request.url.endsWith('/');
  
  if (isCodeAsset) {
    // Network-first strategy for code assets
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  } else {
    // Cache-first strategy for images, fonts and other assets
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request).then(response => {
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                if (event.request.url.startsWith(self.location.origin)) {
                  cache.put(event.request, responseToCache);
                }
              });
            }
            return response;
          });
        })
    );
  }
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
