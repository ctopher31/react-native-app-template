'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

//var customData = require('./customData.json');

var IntroView = React.createClass({
  render: function() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.introHeaderContainer}>
          <Image style={styles.bookLogo} source={require('../assets/images/v-logo.png')} />
          <Text style={styles.introHeader}>Signature </Text><Text style={styles.vbpurpleText}>Series</Text>
          <Text style={styles.introHeader}>Vertical </Text><Text style={styles.vbpurpleText}>Blinds</Text>
        </View>
        <View style={styles.introMainContainer}>
          <Text style={styles.paragraph}>Satisfy your eye for clean design with the architectural line work, crisp materials, and fresh fabrics of Signature Series Vertical and 2&quot; Vinyl Horizontal Blinds. With nearly 200 colors and patterns in an array of different vane styles, vertical blinds offer many chic options for any décor. And while they’re an ideal choice for extra-wide windows and patio doors, don’t assume that’s their only purpose—the stature of vertical blinds offers a distinct, sleek style that other window treatments just can’t provide.</Text>
          <Text style={styles.paragraph}>When you select Signature Series Vertical and 2&quot; Vinyl Horizontal Blinds, you’re choosing quality products that will enhance a variety of rooms. Whether you’re drawn to our lush fabric verticals or durable vinyl horizontal blinds, Signature Series products will add classic style and effortless function to your home.</Text>
          <Image style={styles.sigSeriesLogoBlack} source={require('../assets/images/sig-series-script-bk.png')} />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  introHeaderContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40
  },
  bookLogo: {
    height: 100,
    width: 100
  },
  introHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  vbpurpleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7967AD',
  },
  introMainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  paragraph: {
    maxWidth: 400,
    fontSize: 14,
    color: '#000',
    marginTop: 20,
  },
  sigSeriesLogoBlack: {
    marginTop: 100
  }
});

module.exports = IntroView;
