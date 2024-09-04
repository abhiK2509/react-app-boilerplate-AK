const CACHE_NAME = "demo/v1";

const CACHE_FILES = [
  "./index.html",
  "./style.css",
  "./photo.js",
  "./script.js",
  "./manifest.json",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener("activate", (e) => {
  // Cleanup useless cache
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //update the cache
        const cloneRes = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneRes);
        });
        return res;
      })
      .catch(() => {
        return caches.match(e.request).then((file) => file);
      })
  );
});
