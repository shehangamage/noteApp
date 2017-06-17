console.log('starting notes.js');

var fetchNotes = () =>{
  try {
    var noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  } catch (e) {
    return [];
    console.log("File not exist!");
  }
};

var saveNotes = (notes) => {
     fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

var addNote = (title,  body)=>{
  const fs = require('fs');

  var notes = fetchNotes();
  var note = {
    title,
    body
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
     saveNotes(notes);
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
