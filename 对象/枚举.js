var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function (key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // 没有发现在enum_only健集中意味着这个健是不可枚举的,
    // 因此返回true 以便让它保持在过滤结果中
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);