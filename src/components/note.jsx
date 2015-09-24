'use strict';

var React = require('react');
var NoteActions = require('../actions/note_actions');
var TextField = require('material-ui/lib/text-field');
var ListItem = require('material-ui/lib/lists/list-item');

var Note = React.createClass({
	getInitialState: function() {
		return {
			editing: false,
			textFieldValue: ''
		};
	},

	render: function() {
		var editing = this.state.editing;

		return (
			<div>
				{ editing ? this.renderEdit() : this.renderTask() }
			</div>
		);
	},

	renderEdit: function() {
		return (
			<TextField
				hintText="Fill with your task"
				defaultValue={ this.props.note.task }
				onBlur={ this.finishEdit }
				onKeyPress={ this.checkEnter }
			/>
		);
	},

	renderTask: function() {
		return (
			<ListItem
				primaryText={ this.props.note.task }
				onClick={ this.edit }
			/>
		);
	},

	edit: function(e) {
		this.setState({
			editing: true,
			textFieldValue: this.props.note.task
		});
	},

	checkEnter: function(e) {
		if (e.key === 'Enter') {
			this.finishEdit(e);
		}
	},

	finishEdit: function(e) {
		var task = e.nativeEvent.target.value;
		var note = {
			id: this.props.note.id,
			task: task
		};

		NoteActions.updateNote(note);
		this.setState({
			editing: false,
			textFieldValue: task
		});
	}
});

module.exports = Note;
