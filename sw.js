// sw.js

// Log when the service worker is installed
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

// Log when the service worker is activated
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
});

// A basic fetch event to satisfy Chrome's PWA requirement
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('App is offline. Please connect to the internet.');
    })
  );
});
