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

var MainView = require('./App/MainView');

var BookBrowser = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{
          component: MainView,
          title: 'Vertical Blinds Sample Book',
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
