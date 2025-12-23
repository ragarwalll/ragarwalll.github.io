const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  'CNAME',
  'asset-manifest.json',
  'browserconfig.xml',
  'css/bundle.min.f0af25ae.css',
  'css/css-bundle-report.json',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-114x114.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-120x120.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-144x144.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-152x152.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-16x16.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-180x180.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-192x192.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-228x228.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-256x256.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-310x310.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-32x32.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-384x384.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-48x48.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-512x512.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-57x57.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-60x60.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-70x70.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/alt-76x76.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-114x114.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-120x120.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-144x144.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-152x152.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-16x16.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-180x180.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-192x192.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-228x228.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-256x256.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-310x310.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-32x32.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-384x384.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-48x48.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-512x512.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-57x57.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-60x60.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-70x70.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/base-76x76.png',
  'd01de429-da98-433b-8e5f-a94627a63e96/favicon-inactive.ico',
  'd01de429-da98-433b-8e5f-a94627a63e96/favicon.ico',
  'd01de429-da98-433b-8e5f-a94627a63e96/generated-favicon-alt.svg',
  'd01de429-da98-433b-8e5f-a94627a63e96/generated-favicon.svg',
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
