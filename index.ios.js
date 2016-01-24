/**
 * Book Browser React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  TabBarIOS,
  NavigatorIOS,
  StatusBarIOS,
  StyleSheet
} = React;

var MainView = require('./App/MainView');
var SearchView = require('./App/SearchView');
var ProductCatalogView = require('./App/ProductCatalogView');
var CollectionsView = require('./App/CollectionsView');
var SampleBookView = require('./App/SampleBookView');

var BookBrowser = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'MainView'
    }
  },
  changeTab: function(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },
  render: function() {
    StatusBarIOS.setStyle('light-content');
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Home"
          onPress={event => this.changeTab('MainView') }
          selected={ this.state.selectedTab === 'MainView' }>
          <NavigatorIOS
            barTintColor='#000'
            titleTextColor='#fff'
            tintColor='#fff'
            ref="nav"
            initialRoute={{
              component: MainView,
              title: 'Vertical Blinds Sample Book',
              rightButtonTitle: 'Search',
              onRightButtonPress: () => {
                this.refs.nav.navigator.push({
                  title: "Search",
                  component: SearchView,
                  rightButtonTitle: 'Cancel',
                  onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
                });
              }
            }}
            style={styles.navContainer}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Product Catalog"
          onPress={event => this.changeTab('ProductCatalogView') }
          selected={ this.state.selectedTab === 'ProductCatalogView' }>
          <NavigatorIOS
            barTintColor='#000'
            titleTextColor='#fff'
            tintColor='#fff'
            initialRoute={{
              component: ProductCatalogView,
              title: 'Product Catalog',
            }}
            style={styles.navContainer}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Collections"
          onPress={event => this.changeTab('CollectionsView') }
          selected={ this.state.selectedTab === 'CollectionsView' }>
          <NavigatorIOS
            barTintColor='#000'
            titleTextColor='#fff'
            tintColor='#fff'
            initialRoute={{
              component: CollectionsView,
              title: 'Collections',
            }}
            style={styles.navContainer}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Sample Book Apps"
          onPress={event => this.changeTab('SampleBooksView') }
          selected={ this.state.selectedTab === 'SampleBooksView' }>
          <NavigatorIOS
            barTintColor='#000'
            titleTextColor='#fff'
            tintColor='#fff'
            initialRoute={{
              component: SampleBookView,
              title: 'Sample Book Apps',
            }}
            style={styles.navContainer}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

AppRegistry.registerComponent('BookBrowser', () => BookBrowser);
