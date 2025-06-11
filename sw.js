const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-114x114.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-120x120.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-144x144.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-152x152.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-16x16.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-180x180.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-192x192.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-228x228.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-256x256.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-310x310.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-32x32.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-384x384.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-48x48.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-512x512.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-57x57.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-60x60.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-70x70.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/alt-76x76.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-114x114.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-120x120.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-144x144.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-152x152.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-16x16.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-180x180.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-192x192.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-228x228.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-256x256.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-310x310.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-32x32.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-384x384.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-48x48.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-512x512.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-57x57.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-60x60.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-70x70.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/base-76x76.png',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/favicon-inactive.ico',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/favicon.ico',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/generated-favicon-alt.svg',
  '2fd64bdb-0c25-4793-b287-f73bc8c938fc/generated-favicon.svg',
  'CNAME',
  'asset-manifest.json',
  'browserconfig.xml',
  'css/bundle.min.7c120dd7.css',
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
  'index.html',
  'js/bundle.min.fe94750d.js',
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
