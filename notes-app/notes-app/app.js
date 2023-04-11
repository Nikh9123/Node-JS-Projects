const chalk = require('chalk');
const yargs = require('yargs');
const {
	getNotes,
	addNote,
	removeNote,
	ListNotes,
	readNote
} = require('./notes.js');
// const notes = require('./notes.js');

//customize yargs version
yargs.version('1.1.0');

//* create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note !',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Adding Body',
			demandOption: true,
			type: 'string',
			filename:'string'
		}
	},
	handler(argv) {
		//    notes.addNote(argv.title , argv.body);
		addNote(argv.title, argv.body);
	}
});

//* create remove command
yargs.command({
	command: 'remove',
	describe: 'Removing note !',
	builder: {
		title: {
			describe: 'remove notes using title name',
			type: 'string',
			demandOption: true
		}
	},
	handler(argv) {
		// notes.removeNote(argv.title);
		removeNote(argv.title);
	}
});

//* create list command
yargs.command({
	command: 'list',
	describe: 'listing out all the notes',
	builder: {},
	handler() {
		console.log('listing all your notes!');
		ListNotes();
	}
});

//* create read  command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			demandOption: true,
			type: 'string',
			describe: 'give title to read the note !'
		}
	},
	handler(argv) {
    console.log(chalk.green.bold.inverse('openning notes for reading'));
    getNotes();
		readNote(argv.title);
	}
});

yargs.parse();

// console.log(yargs.argv);
