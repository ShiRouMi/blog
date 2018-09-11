self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache){
      return cache.addAll([
        '/',
        '/app.js',
        '/index.html',
        '/sw.js'
      ])
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWidth(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(response => {
        return caches.open('v1').then(cache => {
          cache.put(event.request, response.clone())
          return response
        })
      })
    }).catch(error => {
      console.log('error', error)
    })
  )
})