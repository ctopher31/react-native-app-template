/**
 * Book Browser React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Navigator
} = React;

var SearchScreen = require('./SearchScreen');

var BookBrowser = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{
          component: SearchScreen,
          title: 'Search',
        }}
        style={styles.navContainer}/>
    );
  }
});

var styles = StyleSheet.create({
  navContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('BookBrowser', () => BookBrowser);
