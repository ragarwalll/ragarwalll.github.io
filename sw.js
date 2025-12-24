const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  'CNAME',
  'asset-manifest.json',
  'browserconfig.xml',
  'css/bundle.min.3938440c.css',
  'css/css-bundle-report.json',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-114x114.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-120x120.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-144x144.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-152x152.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-16x16.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-180x180.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-192x192.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-228x228.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-256x256.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-310x310.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-32x32.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-384x384.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-48x48.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-512x512.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-57x57.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-60x60.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-70x70.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/alt-76x76.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-114x114.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-120x120.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-144x144.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-152x152.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-16x16.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-180x180.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-192x192.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-228x228.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-256x256.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-310x310.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-32x32.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-384x384.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-48x48.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-512x512.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-57x57.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-60x60.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-70x70.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/base-76x76.png',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/favicon-inactive.ico',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/favicon.ico',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/generated-favicon-alt.svg',
  'de11e2f2-cf03-4acc-acca-05f92be82e60/generated-favicon.svg',
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
