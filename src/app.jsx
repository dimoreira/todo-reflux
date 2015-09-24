'use strict';

/* Styles */
require('./app.scss');

var React = require('react');
var Reflux = require('reflux');
var ThemeManager = new(require('material-ui/lib/styles/theme-manager'))();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

var uid = require('node-uuid');
var NoteStore = require('./stores/note_store');
var NoteActions = require('./actions/note_actions');
var Notes = require('./components/notes.jsx');

var App = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},

	mixins: [Reflux.connect(NoteStore, "notes")],

	componentDidMount: function() {
		NoteActions.load();
	},

	render: function() {
		return (
			<div className="container">
				<Notes items={ this.state.notes } />
			</div>
		);
	}
});

module.exports = App;
