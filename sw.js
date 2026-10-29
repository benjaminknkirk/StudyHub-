/* StudyHub service worker. Network first, so a reload picks up course edits,
   with a cache fallback so the site still opens offline. Installing to the
   home screen (see the manifest) is what keeps iOS from evicting the saved state. */
var CACHE = "studyhub-v3";
/* Library binaries under files/<course-id>/ are intentionally absent from CORE.
   They are cached only after the browser requests them (a download or a preview).
   index.json is small and is cached like the rest of the site, network first. */
var CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./images/mgmtmsa-400.svg",
  "./images/mgmtmsa-401.svg",
  "./images/mgmtmsa-402.svg",
  "./images/mgmt-440.svg",
  "./images/python-workshop.svg",
  "./courses/registry.js",
  "./courses/mgmtmsa-400.js",
  "./courses/mgmtmsa-401.js",
  "./courses/mgmtmsa-402.js",
  "./courses/mgmt-440.js",
  "./courses/python-workshop.js"
];

function abs(path) {
  return new URL(path, self.location).href;
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(CORE.map(abs));
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (key) {
        return key !== CACHE;
      }).map(function (key) {
        return caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (cache) {
        cache.put(req, copy);
      });
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        if (hit) return hit;
        if (req.mode === "navigate") return caches.match(abs("./index.html"));
        return new Response("Offline, and this file is not cached yet.", { status: 503, headers: { "Content-Type": "text/plain" } });
      });
    })
  );
});
