const CACHE_NAME = 'bergara-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // Añade aquí tus fotos o sonidos si los tienes, ej: './logo.png'
];

// Instalar el Service Worker y guardar archivos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Hacer que el juego cargue desde la caché si no hay internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});