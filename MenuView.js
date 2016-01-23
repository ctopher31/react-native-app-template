'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} = React;

var SearchScreen = require('./SearchScreen');
var ProductCatalogScreen = require('./App/ProductCatalogScreen');
var CollectionsScreen = require('./App/CollectionsScreen');
var SampleBookScreen = require('./App/SampleBookScreen');

var MenuView = React.createClass({
	gotoViewScreen: function(view) {
    console.log('Go to view: ' + view);
    this.props.navigator.push({
    	title: view.title,
      component: view.component,
      passProps: {}
    })
	},
	render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={event => this.gotoViewScreen({component:SearchScreen,title:'Search'})}>
        	<Text style={styles.label}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={event => this.gotoViewScreen({component:ProductCatalogScreen,title:'Product Catalog'})}>
        	<Text style={styles.label}>Product Catalog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={event => this.gotoViewScreen({component:CollectionsScreen,title:'Collections'})}>
        	<Text style={styles.label}>Collections</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={event => this.gotoViewScreen({component:SampleBookScreen,title:'Sample Books'})}>
        	<Text style={styles.label}>Sample Books</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5AC8FA',
    paddingTop: 100
  },
  menuLabel: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10
  }
});

module.exports = MenuView;
