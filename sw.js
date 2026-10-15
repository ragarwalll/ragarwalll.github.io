const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-114x114.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-120x120.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-144x144.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-152x152.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-16x16.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-180x180.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-192x192.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-228x228.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-256x256.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-310x310.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-32x32.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-384x384.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-48x48.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-512x512.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-57x57.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-60x60.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-70x70.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/alt-76x76.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-114x114.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-120x120.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-144x144.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-152x152.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-16x16.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-180x180.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-192x192.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-228x228.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-256x256.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-310x310.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-32x32.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-384x384.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-48x48.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-512x512.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-57x57.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-60x60.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-70x70.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/base-76x76.png',
  '58e7935f-6f21-451d-951c-45e6baf4859a/favicon-inactive.ico',
  '58e7935f-6f21-451d-951c-45e6baf4859a/favicon.ico',
  '58e7935f-6f21-451d-951c-45e6baf4859a/generated-favicon-alt.svg',
  '58e7935f-6f21-451d-951c-45e6baf4859a/generated-favicon.svg',
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
