const CACHE = "monhub-v1";
const ASSETS = [
  ".",
  "index.html",
  "manifest.json",
  "assets/style.css",
  "assets/app.js",
  "assets/links.js",
  "assets/avatar.svg",
  "tools/biolink.html",
  "tools/caption.html",
  "tools/password.html",
  "tools/qrcode.html",
  "tools/budget.html",
  "tools/username.html",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) =>
    Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request).catch(() => caches.match(".")))
  );
});
