self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("keyzia-cache").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/icon-192.jpg",
        "/icon-512.jpg",
        // Tambahkan file lain seperti CSS, JS, gambar jika ada
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

