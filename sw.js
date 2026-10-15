const CACHE_NAME = "school-bell-studio-v2";
const FILES = ["./","./index.html","./manifest.json","./assets/icon.svg","./assets/school-bell.wav","./assets/chime.wav","./assets/alert-siren.wav","./assets/buzzer.wav","./assets/soft-bell.wav"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))));
self.addEventListener("fetch", event => { if(event.request.method === "GET") event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))); });