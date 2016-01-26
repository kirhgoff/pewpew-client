import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {smokedToday: 0};
  }

  handleClick(event) {
    this.setState({smokedToday: this.state.smokedToday + 1});
  }

  render() {
    //http://stackoverflow.com/questions/29872918/how-to-add-a-button-in-react-native
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
     TouchableElement = TouchableNativeFeedback;
    }
    return (
    <View style={styles.container}>
      <TouchableElement 
        style={styles.button} 
        onPress={this.handleClick.bind(this)}
        background={TouchableNativeFeedback.Ripple()}>
        <View>
          <Text style={styles.buttonText}>+ 4</Text>
        </View>
      </TouchableElement>
      <Text style={styles.welcome}>
        Smoked {this.state.smokedToday} cigarettes!
      </Text>
    </View>
    );
  }
}

class SmokingControl extends Component {
  render() {
    return (
      <View>
        <ControlPanel/>
      </View>
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
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A5FAFA',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A5FAFA',
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
