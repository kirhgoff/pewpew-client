import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var sampleData = {smokeToday: 8, smokePerDay: 5, smokePerMonth: 150}

class ControlPanel extends Component {
  render() {
    return (
      <Button/>
      <TodayPanel/>
    );
  }
}

class InfoPanel extends Component {
  render() {
    return (
      <Button/>
      <TodayPanel/>
    );
  }
}


class SmokingControl extends Component {
  render() {
    return (
      <ControlPanel/>
      <InfoPanel/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = SmokingControl;
