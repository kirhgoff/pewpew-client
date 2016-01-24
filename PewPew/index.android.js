import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var StopSmoking = require('./src/StopSmoking.js');

var PewPew = React.createClass({
  render: function() {
    return (
      <StopSmoking/>
    );
  },
});

AppRegistry.registerComponent('PewPew', () => PewPew);
