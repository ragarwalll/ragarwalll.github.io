const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-114x114.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-120x120.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-144x144.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-152x152.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-16x16.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-180x180.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-192x192.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-228x228.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-256x256.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-310x310.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-32x32.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-384x384.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-48x48.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-512x512.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-57x57.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-60x60.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-70x70.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/alt-76x76.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-114x114.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-120x120.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-144x144.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-152x152.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-16x16.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-180x180.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-192x192.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-228x228.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-256x256.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-310x310.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-32x32.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-384x384.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-48x48.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-512x512.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-57x57.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-60x60.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-70x70.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/base-76x76.png',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/favicon-inactive.ico',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/favicon.ico',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/generated-favicon-alt.svg',
  '4e4cdc12-8e64-46a4-80f1-2b4453d202ca/generated-favicon.svg',
  'CNAME',
  'asset-manifest.json',
  'browserconfig.xml',
  'css/bundle.min.3938440c.css',
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
  'js/bundle.min.4ca8b16b.js',
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
