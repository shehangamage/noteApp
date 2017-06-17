
// var obj = {
//  name:'Shehan'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(obj);
// console.log(obj.name);
//
// //-------------------------------------------------
// var personString = '{"name":"Shehan","age":24}';
//
// var personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);
// console.log(personObj.age);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some Body'
}
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

//read
var originalNoteStrigRead = fs.readFileSync("notes.json");

var originalNoteObj = JSON.parse(originalNoteStrigRead);
console.log("read: "+ originalNoteObj.title);
