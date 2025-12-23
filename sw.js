const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-114x114.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-120x120.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-144x144.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-152x152.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-16x16.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-180x180.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-192x192.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-228x228.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-256x256.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-310x310.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-32x32.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-384x384.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-48x48.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-512x512.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-57x57.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-60x60.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-70x70.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/alt-76x76.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-114x114.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-120x120.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-144x144.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-152x152.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-16x16.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-180x180.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-192x192.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-228x228.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-256x256.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-310x310.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-32x32.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-384x384.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-48x48.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-512x512.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-57x57.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-60x60.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-70x70.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/base-76x76.png',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/favicon-inactive.ico',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/favicon.ico',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/generated-favicon-alt.svg',
  '0f5713d8-37fa-4d28-9205-683cd838b52e/generated-favicon.svg',
  'CNAME',
  'asset-manifest.json',
  'browserconfig.xml',
  'css/bundle.min.8b5416c4.css',
  'css/css-bundle-report.json',
  'favicon/favicon-alt.svg',
  'favicon/favicon.svg',
  'images/banner.jpg',
  'images/logo-process/logo-design-1.svg',
  'images/logo-process/logo-design-2.svg',
  'images/logo-process/logo-design-3.svg',
  'images/logo-process/logo-design-4.svg',
  'images/logo-process/logo-design-5.svg',
  'images/logo-process/logo-design-6.svg',
  'images/logo-process/logo-design-7.svg',
  'images/logo-process/logo-design-8.svg',
  'images/mine/dance1.jpg',
  'images/mine/dance2.jpg',
  'index.html',
  'js/bundle.min.6073f75a.js',
  'js/js-bundle-report.json',
  'perf-metrics.json',
  'site.webmanifest',
  'sitemap.xml'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached ||
      fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => {
        if (k !== CACHE_NAME) return caches.delete(k);
      }))
    )
  );
});
