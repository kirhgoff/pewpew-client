import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

import Store from 'react-native-store';

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
        onPress={this.handleClick.bind(this)}
        background={TouchableNativeFeedback.Ripple()}>
        <View  style={styles.button} > 
          <Text style={styles.buttonText}>+ 1</Text>
        </View>
      </TouchableElement>
      <Text style={styles.smokedTodayLabel}>
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
    flexDirection: 'row', 
    height: 100, 
    padding: 20
  },
  button: {
    flex: 0.3,
    width:100,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#555555', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AAAAFF',
  },
  buttonText: {
    flex: 2,
    textAlign: 'center',
    fontSize: 20,
    margin:10, 
    //backgroundColor: '#FFAAFF',
  },
  smokedTodayLabel: {
    flex: 0.6,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});


module.exports = SmokingControl;
