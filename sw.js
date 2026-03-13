self.addEventListener('push', function(event) {
  if (!event.data) return;
  const data = event.data.json();
  const title = data.title || 'Nectar Buddy';
  const options = {
    body: data.body || '',
    icon: '/nectar-buddy-icon.png',
    badge: '/nectar-buddy-icon.png',
    vibrate: [200, 100, 200]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/nectar-buddy/'));
});
