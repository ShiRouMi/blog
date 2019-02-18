var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1
  }
}
myObject.increment()
document.writeln(myObject.value)
myObject.increment(2)
document.writeln(myObject.value)

let arr=[
 {user:"123"},
 {Cause:"22"},
 {EnterFactoryTime:"33"},
 {OutFactoryTime:"44"},
 {VehicleGrade:"55"},
 {IncomingInspection:"66"},
 {Admission:"77"}
];
let obj={
  user:"123",
  Cause:"22",
  EnterFactoryTime:"33",
  OutFactoryTime:"44",
  VehicleGrade:"55",
  IncomingInspection:"66",
  Admission:"77"
};

let result = Object.assign({}, arr)
/*
{0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}}
*/

var result= arr.reduce((item1,item2)=>Object.assign(item1,item2));