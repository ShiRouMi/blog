if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {scope: '/service-worker/'}).then(reg => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
    if (reg.installing) {
      console.log('Service Worker installing')
    } else if (reg.waiting) {
      console.log('Service Worker installed')
    } else if (reg.active) {
      console.log('Service Worker active')
    }
  }).catch(error => {
    console.log('Registration failed with ' + error);
  })
}

window.onload = function () {
  console.log('hello world')
}