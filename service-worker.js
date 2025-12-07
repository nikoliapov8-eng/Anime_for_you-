// اسم التطبيق
const CACHE_NAME = 'anime-app-v1';

// الملفات التي سيتم تخزينها مؤقتًا
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://img.icons8.com/color/192/anime.png'
];

// تثبيت Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('تخزين الملفات مؤقتًا');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// تفعيل Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) {
          console.log('إزالة التخزين القديم:', key);
          return caches.delete(key);
        }
      }));
    }).then(() => self.clients.claim())
  );
});

// اعتراض الطلبات
self.addEventListener('fetch', event => {
  // تجاهل طلبات POST
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إذا وجد الملف في التخزين المؤقت
        if (response) {
          console.log('خدم من التخزين المؤقت:', event.request.url);
          return response;
        }

        // إذا لم يوجد، حمله من الشبكة
        console.log('تحميل من الشبكة:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // تحقق من أن الرد صالح
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // احفظ الملف في التخزين المؤقت
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            console.log('فشل في التحميل:', error);
            // يمكنك إرجاع صفحة خطأ مخصصة هنا
            return new Response('لا يوجد اتصال بالإنترنت', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});
