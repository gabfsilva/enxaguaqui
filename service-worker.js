// Define o nome do cache atual
const CACHE_NAME = 'enxaguaki-cache-v1';

// Lista de arquivos que serão armazenados em cache
const urlsToCache = [
  'index.html',
  'assets/css/style-starter.css',
  'assets/js/bootstrap.min',
  'assets/js/jquery-3.3.1.min',
  'assets/images/about1.jpg'
];

// Registra o Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Recupera os arquivos armazenados em cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Exclui caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => {
            return cacheName.startsWith('enxaguaki-cache-v1') &&
                   cacheName !== CACHE_NAME;
          }).map(cacheName => {
            return caches.delete(cacheName);
          })
        );
      })
  );
});