/**
 * Book Browser React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var MainScreen = require('./MainScreen');

var BookBrowser = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MainScreen,
          title: 'Book Browser',
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
