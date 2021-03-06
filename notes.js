console.log('starting notes.js');

var addNote = (title,  body)=>{

  const fs = require('fs');

  var notes = [];
  var note = {
    title,
    body
  }

  try {
    var noteString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(noteString);
  } catch (e) {
    console.log("File not exist!");
  }
  //set title to be uniqe----------------
  //ES6--------------
  var duplicateNotes = notes.filter((note) => note.title === title);
  //Es5--------------
    // var duplicateNotes = notes.filter((note) => {
    //   return note.title === title;
    // });

  if(duplicateNotes.length === 0){
     notes.push(note);
     fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }else {
      console.log("This title is exist. try another one.");
  }

}

var getAll = () => {
  console.log("Listing all notes");
}

var readNote = (title) => {
    console.log("Read note: "+ title);
}

var removeNote = (title)=> {
  console.log("Remove note: " +title);
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}
// module.exports.age = 24;
//
// module.exports.addNote = (a, b) => {
//   return (a+b);
// }
