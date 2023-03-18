// Define o nome do cache atual
const CACHE_NAME = 'enxaguaki-cache-v1';

// Lista de arquivos que serão armazenados em cache
const urlsToCache = [
  './index.html',
  './assets/css/style-starter.css',
  './assets/js/bootstrap.min',
  './assets/js/counter.js',
  './assets/js/jquery-3.3.1.min',
  './assets/js/owl.carousel.js',
  './assets/js/theme-change.js',
  './assets/images/about1.jpg',
  './assets/images/about2.jpg',
  './assets/images/about3.jpg',
  './assets/images/about4.jpg',
  './assets/images/blog1.jpg',
  './assets/images/blog2.jpg',
  './assets/images/blog3.jpg',
  './assets/images/inner-banner.jpg',
  './assets/images/service1.jpg',
  './assets/images/service2.jpg',
  './assets/images/service3.jpg',
  './assets/images/service4.jpg',
  './assets/images/service5.jpg',
  './assets/images/service6.jpg',
  './assets/images/team1.jpg',
  './assets/images/team2.jpg',
  './assets/images/team3.jpg',
  './assets/images/testi1.jpg',
  './assets/images/testi2.jpg',
  './assets/images/testi3.jpg',
  './assets/images/testimonials.jpg'
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