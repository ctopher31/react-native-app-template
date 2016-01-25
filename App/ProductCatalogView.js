'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} = React;

var PCFabricVerticalBlindsView = require('./product_catalog/PCFabricVerticalBlindsView');
var ProductCatalogView = require('./ProductCatalogView');
var CollectionsView = require('./CollectionsView');
var SampleBookView = require('./SampleBookView');

var ProductCatalogView = React.createClass({
  gotoView: function(view) {
    console.log('Go to view: ' + view);
    this.props.navigator.push({
      title: view.title,
      component: view.component,
      passProps: {}
    });
  },
  render: function() {
    console.log(this.props.navigator);
    console.log(this.props.menu);
    return (
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={event => this.gotoView({component:PCFabricVerticalBlindsView,title:'Fabric Vertical Blinds'})}>
          <Text style={styles.menuLabel}>Fabric Vertical Blinds</Text><Text style={styles.menuAngle}>&rsaquo;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={event => this.gotoView({component:SearchView,title:'Search'})}>
          <Text style={styles.menuLabel}>Sheer Vertical Blinds</Text><Text style={styles.menuAngle}>&rsaquo;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={event => this.gotoView({component:SearchView,title:'Search'})}>
          <Text style={styles.menuLabel}>Vinyl Vertical Blinds</Text><Text style={styles.menuAngle}>&rsaquo;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={event => this.gotoView({component:SearchView,title:'Search'})}>
          <Text style={styles.menuLabel}>2&quot; Vinyl Horizontal Blinds</Text><Text style={styles.menuAngle}>&rsaquo;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={event => this.gotoView({component:SearchView,title:'Search'})}>
          <Text style={styles.menuLabel}>Layer Your Look</Text><Text style={styles.menuAngle}>&rsaquo;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={event => this.gotoView({component:SearchView,title:'Search'})}>
          <Text style={styles.menuLabel}>Create A Cohesive Design</Text><Text style={styles.menuAngle}>&rsaquo;</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent:  'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 40,
    paddingBottom: 40,
  },
  menuItem: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  menuLabel: {
    minWidth: 44,
    minHeight: 44,
    fontSize: 18,
    color: '#7967AD',
    margin: 10
  },
  menuAngle: {
    minWidth: 44,
    minHeight: 44,
    fontSize: 36,
    color: '#7967AD',
    marginTop: -3
  }
});

module.exports = ProductCatalogView;
