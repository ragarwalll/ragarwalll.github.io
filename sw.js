const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  'CNAME',
  'asset-manifest.json',
  'browserconfig.xml',
  'css/bundle.min.8b5416c4.css',
  'css/css-bundle-report.json',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-114x114.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-120x120.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-144x144.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-152x152.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-16x16.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-180x180.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-192x192.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-228x228.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-256x256.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-310x310.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-32x32.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-384x384.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-48x48.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-512x512.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-57x57.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-60x60.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-70x70.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/alt-76x76.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-114x114.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-120x120.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-144x144.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-152x152.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-16x16.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-180x180.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-192x192.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-228x228.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-256x256.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-310x310.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-32x32.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-384x384.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-48x48.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-512x512.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-57x57.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-60x60.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-70x70.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/base-76x76.png',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/favicon-inactive.ico',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/favicon.ico',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/generated-favicon-alt.svg',
  'f0ecfd95-3f0d-4a14-b8ab-8d51b3f3a0d1/generated-favicon.svg',
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
  'js/bundle.min.893625b7.js',
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
