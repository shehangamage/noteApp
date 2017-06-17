console.log('starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

//var user = os.userInfo();
//console.log(user);
//console.log(os.networkInterfaces());

//console.log(notes.addNote(3,4));
//console.log(_.isString(true));
//console.log(_.isString("shehan"));

// var filterArray = _.uniq(['shehan', 1, 'shehan', 'shehan', 2, 3, 4]);
// console.log(filterArray);
//
// fs.appendFile("os.txt",`User Name: ${user.username} You are ${notes.age}`+"\n");
// fs.appendFile("os.txt","Home Dir: "+user.homedir+"\n");

const argv = yargs.argv;
var command = process.argv[2];
console.log("Command: "+ command);
//console.log("Process: "+ process.argv);
console.log("Yargs: "+ argv);

console.log(argv.title);

if(command == 'add'){
  notes.addNote(argv.title, argv.body);
}else if(command == 'list'){
  notes.getAll();
}else if(command == 'read'){
 notes.readNote(argv.title);
}else if(command == 'remove'){
  notes.removeNote(argv.title)
}else {
  console.log('Command not recognized!');
}
