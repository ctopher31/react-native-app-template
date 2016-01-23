'use strict';

var React = require('react-native');
var {
  View,
  Text,
  TextInput,
  StyleSheet
} = React;

var ResultsScreen = require('./ResultsScreen');

var SearchScreen = React.createClass({
  gotoResultsScreen: function(searchPhrase) {
    this.props.navigator.push({
      title: 'Results',
      component: ResultsScreen,
      passProps: {'searchPhrase': searchPhrase}
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book Browser</Text>
        <Text style={styles.label}>Find Books containing:</Text>
        <TextInput
          placeholder='e.g. JavaScript or Mobile'
          returnKeyType='search'
          enableReturnKeyAutomatically={true}
          onEndEditing={event => this.gotoResultsScreen(event.nativeEvent.text)}
          style={styles.textInput}/>
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

module.exports = SearchScreen;
