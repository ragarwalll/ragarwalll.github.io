const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-114x114.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-120x120.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-144x144.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-152x152.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-16x16.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-180x180.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-192x192.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-228x228.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-256x256.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-310x310.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-32x32.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-384x384.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-48x48.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-512x512.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-57x57.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-60x60.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-70x70.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/alt-76x76.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-114x114.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-120x120.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-144x144.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-152x152.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-16x16.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-180x180.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-192x192.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-228x228.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-256x256.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-310x310.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-32x32.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-384x384.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-48x48.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-512x512.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-57x57.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-60x60.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-70x70.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/base-76x76.png',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/favicon-inactive.ico',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/favicon.ico',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/generated-favicon-alt.svg',
  '35ec6d5f-7156-4a85-bba5-41af07ee4d64/generated-favicon.svg',
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
