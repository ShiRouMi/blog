function qiankaobei(obj) {
  if(typeof obj !== 'object') {
    console.error('obj arguments need')
  }
  var newObj = obj instanceof Array ? [] : {}
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}