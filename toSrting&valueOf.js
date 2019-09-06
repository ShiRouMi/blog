var a = 1,
    b = true,
    c = undefined,
    d = null,
    e = [1,2,3],
    f = {fe: 'eee'},
    g = 'fefeng'

a.toString() // "1"
b.toString() // "true"
c.toString() // Uncaught TypeError: Cannot read property 'toString' of undefined
d.toString() // Uncaught TypeError: Cannot read property 'toString' of null
e.toString() // "1,2,3"
f.toString() // "[object Object]"
g.toString() // "fefeng"


a.valueOf() // 1
b.valueOf() // true
c.valueOf() // Uncaught TypeError: Cannot read property 'valueOf' of undefined
d.valueOf() // Uncaught TypeError: Cannot read property 'valueOf' of null
e.valueOf() // [1,2,3]
f.valueOf() // {fe: "eee"}
g.valueOf() // "fefeng"