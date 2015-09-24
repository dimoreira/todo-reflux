'use strict';

var Reflux = require('reflux');

var NoteActions = Reflux.createActions([
	'load',
	'addNote',
	'updateNote'
]);

module.exports = NoteActions;
