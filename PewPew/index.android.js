import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var SmokingControl = require('./src/SmokingControl.js');

var PewPew = React.createClass({
  render: function() {
    return (
      <SmokingControl/>
    );
  },
});

AppRegistry.registerComponent('PewPew', () => PewPew);
