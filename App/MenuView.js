'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} = React;

var SearchView = require('./SearchView');
var ProductCatalogView = require('./ProductCatalogView');
var CollectionsView = require('./CollectionsView');
var SampleBookView = require('./SampleBookView');

var MenuView = React.createClass({
  render: function() {
    console.log(this.props.navigator);
    console.log(this.props.menu);
    return (
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={event => this.props.menu({component:SearchView,title:'Search'})}>
          <Text style={styles.menuLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={event => this.props.menu({component:ProductCatalogView,title:'Product Catalog'})}>
          <Text style={styles.menuLabel}>Product Catalog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={event => this.props.menu({component:CollectionsView,title:'Collections'})}>
          <Text style={styles.menuLabel}>Collections</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={event => this.props.menu({component:SampleBookView,title:'Sample Books'})}>
          <Text style={styles.menuLabel}>Sample Books</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  menuContainer: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent:  'space-around',
    backgroundColor: '#000',
    paddingTop: 75,
    paddingBottom: 10,
  },
  menuLabel: {
    minWidth: 44,
    minHeight: 44,
    fontSize: 18,
    color: '#7967AD',
    margin: 10
  }
});

module.exports = MenuView;
