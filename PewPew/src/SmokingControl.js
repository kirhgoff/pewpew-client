import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
SQLite.enablePromise(false);

var database_name = "Test.db";
var database_version = "1.0";
var database_displayname = "SQLite Test Database";
var database_size = 200000;
var db;

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {smokedToday: 0};

    console.log("Checking database");

    var db=SQLite.openDatabase(database_name, database_version, database_displayname, database_size)
    /*.then((DB) => {
      db = DB;
    }).catch((error) => {
      console.log(error);
    }); */
    

    db.executeSql('CREATE TABLE IF NOT EXISTS Version( '
      + 'version_id INTEGER PRIMARY KEY NOT NULL); ');

    db.executeSql('SELECT * FROM Version');
/*
    .catch((error) => {  
      that.errorCB(error) 
    });
/*
    db.executeSql('SELECT * FROM Version').then(([tx,results]) => {
      var len = results.rows.length;
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
      }
    }).catch((error) => { 
      console.log(error);
    });
*/
  }

  handleClick(event) {
    console.log ("Event caught 2");
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
