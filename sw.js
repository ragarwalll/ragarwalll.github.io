const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-114x114.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-120x120.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-144x144.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-152x152.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-16x16.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-180x180.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-192x192.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-228x228.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-256x256.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-310x310.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-32x32.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-384x384.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-48x48.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-512x512.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-57x57.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-60x60.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-70x70.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/alt-76x76.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-114x114.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-120x120.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-144x144.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-152x152.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-16x16.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-180x180.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-192x192.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-228x228.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-256x256.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-310x310.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-32x32.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-384x384.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-48x48.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-512x512.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-57x57.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-60x60.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-70x70.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/base-76x76.png',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/favicon-inactive.ico',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/favicon.ico',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/generated-favicon-alt.svg',
  '871575ff-e3db-40ad-ab0e-411b7d539ef7/generated-favicon.svg',
  'CNAME',
  'asset-manifest.json',
  'browserconfig.xml',
  'css/bundle.min.80dc0213.css',
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
