'use strict';

var Reflux = require('reflux');
var NoteActions = require('../actions/note_actions');
var uid = require('node-uuid');

var NoteStore = Reflux.createStore({
	listenables: [NoteActions],
	getInitialState: function() {
		this.list = [];
		return this.list;
	},

	onLoad: function() {
		console.log('onLoad');
		this.list = [
			{
				id: uid.v4(),
				task: 'Learn Webpack'
			},
			{
				id: uid.v4(),
				task: 'Learn React'
			},
			{
				id: uid.v4(),
				task: 'Learn API'
			}
		];
		this.trigger(this.list);
	},

	onAddNote: function() {
		console.log('onAddNote');
		var item = {
			id: uid.v4(),
			task: 'New task'
		};

		this.list.unshift(item);
		this.trigger(this.list);
	},

	onUpdateNote: function(note) {
		console.log('onUpdateNote');

		this.list.filter(function(item) {
			if (item.id == note.id) {
				item.task = note.task;
			}
		});
		this.trigger(this.list);
	}
});

module.exports = NoteStore;
