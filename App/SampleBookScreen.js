'use strict';

var React = require('react-native');
var {
  View,
  Text,
  TextInput,
  StyleSheet
} = React;

var SampleBookScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sample Books</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5AC8FA',
    paddingTop: 100
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 30
  },
  label: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 10
  },
  textInput: {
    fontSize: 14,
    borderColor: '#8e8e93',
    borderWidth: 0.5,
    backgroundColor: '#FFF',
    height: 40,
    marginLeft: 60,
    marginRight: 60,
    padding: 8
  }
});

module.exports = SampleBookScreen;
