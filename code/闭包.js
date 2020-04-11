!function(){

  var lives = 50

  window.add = function(){
    lives += 1
    console.log(lives)
  }

  window.delete = function(){
    lives -= 1
    console.log(lives)
  }

}()
