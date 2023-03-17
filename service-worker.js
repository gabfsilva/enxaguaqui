var cacheName = 'Enxaguaki v1.1';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        'index.html',

        'assets/js/bootstrap.min.js',

        'assets/js/jquery.min.js',

        'assets/video/video.mp4',
        'assets/images/about1.jpg',
        'assets/images/about2.jpg',
        'assets/images/about3.jpg',
        'assets/images/about4.jpg',
        'assets/images/blog1.jpg',
        'assets/images/blog2.jpg',
        'assets/images/blog3.jpg',
        'assets/images/icon_128.png',
        'assets/images/icon_144.png',
        'assets/images/icon_152.png',
        'assets/images/icon_167.png',
        'assets/images/icon_180.png',
        'assets/images/icon_196.png',
        'assets/images/icon_256.png',
        'assets/images/icon_512.png',
        'assets/images/inner-banner.jpg',
        'assets/images/service1.jpg',
        'assets/images/service2.jpg',
        'assets/images/service3.jpg',
        'assets/images/service4.jpg',
        'assets/images/service5.jpg',
        'assets/images/service6.jpg',
        'assets/images/team1.jpg',
        'assets/images/team2.jpg',
        'assets/images/team3.jpg',
        'assets/images/testi1.jpg',
        'assets/images/testi2.jpg',
        'assets/images/testi1.jpg',
        'assets/images/testimonials.jpg',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );

});