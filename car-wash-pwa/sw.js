self.addEventListener('install', (event) => {
    console.log('[Fox PWA] Service Worker installed');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('[Fox PWA] Service Worker activated');
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('[Fox PWA] Fetch intercepted:', event.request.url);
  });