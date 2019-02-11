document.getElementById("testLoadImg").onclick = function() {
  var img = new Image();
  if (img.complete) {
    console.log("image complete");
  }
  img.onload = function() {
    console.log("image load");
  };

  img.src = "../images/ES6FE.jpg";
  
  // src 应该放在 onload 前面还是后面呢？
};
