const fs = require('fs');
const chalk = require('chalk');
const { exit } = require('process');

const getNotes = () => {
 const heading = chalk.inverse.bold('Your Notes....!');
 console.log(heading);
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);
	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.green.bold.inverse('New note added!'));
	} else {
		console.log(chalk.red.bold.inverse('Note title taken'));
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);
	if (notesToKeep.length < notes.length) {
		saveNotes(notesToKeep);
		console.log(chalk.green.bold.inverse('notes removed!'));
	} else {
		console.log(chalk.red.inverse.bold('note not found'));
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	console.log("give the file name!");
	const filename = 
	fs.writeFileSync('notes.json', dataJSON);
};

const ListNotes = () => {
	const notes = loadNotes();
	console.log(chalk.blue.bold('Your Notes📔 ⬇️'));
	notes.forEach((element) => {
		console.log(element.title);
	});
};

const readNote = (title) => {
	const notes = loadNotes();
	// console.log(note);
	const Note = notes.find((note) => note.title === title);
	if (Note) {
    console.log(chalk.blue.bold("title:" ,Note.title));
    console.log(Note.body);
  }
	else {
		console.log(chalk.red.bold.inverse('Note not found'));
	}
};
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	ListNotes: ListNotes,
	readNote: readNote
};
