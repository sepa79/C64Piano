const COOP_VALUE = 'same-origin';
const COEP_VALUE = 'require-corp';
const ISOLATION_HEADERS = [
  ['Cross-Origin-Opener-Policy', COOP_VALUE],
  ['Cross-Origin-Embedder-Policy', COEP_VALUE],
  ['Origin-Agent-Cluster', '?1']
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

async function withIsolationHeaders(request) {
  const response = await fetch(request);
  const headers = new Headers(response.headers);
  for (const [key, value] of ISOLATION_HEADERS) {
    headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const destination = request.destination;
  if (request.mode === 'navigate' || destination === 'document' ||
      destination === 'worker' || destination === 'sharedworker' ||
      destination === 'audioworklet') {
    event.respondWith((async () => {
      try {
        return await withIsolationHeaders(request);
      } catch (err) {
        console.error('Failed to apply COOP/COEP headers', err);
        return fetch(request);
      }
    })());
  }
});
