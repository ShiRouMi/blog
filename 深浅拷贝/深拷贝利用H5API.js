// history.pushState() and history.replaceState() 结构化克隆
// 会导致浏览器反应迟钝

// history API
const structuredClone = obj => {
  const oldState = history.state;
  history.replaceState(obj, null);
  const clonedObj = history.state;
  history.replaceState(oldState, null);
  return clonedObj;
};

var obj = { a: 0, b: { c: 0 } };

var deepCloneObj = structuredClone(obj)

obj.a = 1
obj.b.c = 2

console.log(deepCloneObj.a) // 0
console.log(deepCloneObj.b.c) // 0


// notification API 
const structuredClone = obj => {
  const n = new Notification("", {data: obj, silent: true});
  n.onshow = n.close.bind(n);
  return n.data;
};

var obj = { a: 0, b: { c: 0 } };

var deepCloneObj = structuredClone(obj)

obj.a = 1
obj.b.c = 2

console.log(deepCloneObj.a) // 0
console.log(deepCloneObj.b.c) // 0