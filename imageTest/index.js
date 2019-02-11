var nodeLists = document.querySelectorAll(".img-center");

function loadImage(img) {
  return new Promise(function(resolve, reject) {
    if (img.complete) {
      // 不建议使用
      resolve();
    } else {
      img.onload = function(event) {
        resolve(event);
      };
      img.onerror = function(err) {
        reject(error);
      };
    }
  });
}

function imageCenter(node) {
  node.forEach(function(item) {
    var img = item.children[0],
      imgX = img.offsetWidth,
      imgY = img.offsetHeight,
      imgR = imgX / imgY;

    loadImage(img).then(function() {
      var loadImgX = img.naturalWidth,
        loadImgY = img.naturalHeight,
        loadImgR = loadImgX / loadImgY;

      var mode = null;
      mode = loadImgR > 1 ? "fill-x" : "fill-y";

      img.classList.add(mode);
    });
  });
}

imageCenter(nodeLists);
