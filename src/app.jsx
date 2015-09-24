'use strict';

var React = require('react');
var ThemeManager = new(require('material-ui/lib/styles/theme-manager'))();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

var App = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},

	render: function() {
		return (
			<h1>Todo-Reflux</h1>
		);
	}
});

module.exports = App;
