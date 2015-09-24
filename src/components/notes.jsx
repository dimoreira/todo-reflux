'use strict';

/* Styles */
require('./notes.scss');

var React = require('react');
var NoteActions = require('../actions/note_actions');
var List = require('material-ui/lib/lists/list');
var Note = require('./note.jsx');
var RaisedButton = require('material-ui/lib/raised-button');

var Notes = React.createClass({
	renderNote: function(note) {
		return (
			<Note key={ note.id } note={ note } />
		);
	},

	render: function() {
		var notes = this.props.items;

		return (
			<div className="note-box">
				<div className="pull-right">
					<RaisedButton
						label="Add Note"
						primary={true}
						onClick={ this.addNote }
					/>
				</div>
				<div className="clearfix"></div>

				<List>
					{ notes.map(this.renderNote) }
				</List>
			</div>
		);
	},

	addNote: function(e) {
		NoteActions.addNote();
	},

	openItem: function(e) {
		var item = e.nativeEvent.target.innerText;
		console.log("openItem:", item);
	}
});

module.exports = Notes;
