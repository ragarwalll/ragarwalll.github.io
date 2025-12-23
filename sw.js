const CACHE_NAME = 'statickit-cache-v1';
const ASSETS = [
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-114x114.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-120x120.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-144x144.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-152x152.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-16x16.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-180x180.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-192x192.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-228x228.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-256x256.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-310x310.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-32x32.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-384x384.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-48x48.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-512x512.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-57x57.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-60x60.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-70x70.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/alt-76x76.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-114x114.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-120x120.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-144x144.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-152x152.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-16x16.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-180x180.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-192x192.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-228x228.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-256x256.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-310x310.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-32x32.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-384x384.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-48x48.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-512x512.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-57x57.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-60x60.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-70x70.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/base-76x76.png',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/favicon-inactive.ico',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/favicon.ico',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/generated-favicon-alt.svg',
  '987aec47-a3c7-4d16-b811-bae8efcbc2cb/generated-favicon.svg',
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
  'js/bundle.min.83be25ac.js',
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
