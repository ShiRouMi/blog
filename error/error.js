let promise = new Promise((resolve, reject) => {
  reject('错误')
}).catch(e => {
  console.log(e)
})
window.addEventListener("unhandledrejection", function (event) {
  console.warn("errorxxx "
          + event.reason);
});