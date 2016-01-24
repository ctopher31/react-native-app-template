'use strict';

var React = require('react-native');
var {
  View,
  StyleSheet
} = React;

var MenuView = require('./MenuView');
var IntroView = require('./IntroView');
//var customData = require('./customData.json');

var MainView = React.createClass({
  gotoView: function(view) {
    console.log('Go to view: ' + view);
    this.props.navigator.push({
      title: view.title,
      component: view.component,
      passProps: {}
    });
  },
  render: function() {
    //console.log(this.props.navigator);
    return (
      <View style={styles.container}>
        <MenuView navigator={this.props.navigator} menu={this.gotoView} />
        <IntroView />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    paddingTop: 0
  }
});

module.exports = MainView;
