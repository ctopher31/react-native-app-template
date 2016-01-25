'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

//var customData = require('./customData.json');

var PCFabricVerticalBlindsView = React.createClass({
  render: function() {
    return (
      <View>
        <View style={styles.introHeaderContainer}>
          <Image style={styles.bookLogo} source={require('../../assets/images/v-logo.png')} />
          <Text style={styles.introHeader}>Fabric Vertical </Text><Text style={styles.vbpurpleText}>Blinds</Text>
        </View>
        <View style={styles.introMainContainer}>
          <Text style={styles.paragraph}>If your decorating plans call for a touch of warmth and texture, choose Signature Series Fabric Vertical Blinds. The fashionable textiles complement your personal style with the latest trends in interior design. Individual weights sewn into each fabric vane allow you to control them easily and provide smooth fabric flow.</Text>
          <Text style={styles.paragraph}>With an array of fabrics and vane options, Signature Series Fabric Vertical Blinds provide varying degrees of light control. In rooms requiring minimal light control, lightweight fabrics let the sunlight filter in. When you need room-darkening options or increased privacy, choose a heavier fabric. And whichever textile you choose, adding a channel panel increases light control. These opaque backing vanes provide stability, privacy, and a neutral outward-facing appearance but are nearly undetectable and won’t conceal the fabric you love.</Text>
        </View>
        <View style={styles.roomSceneContainer}>
          <Image source={require('../../assets/images/pc-2.jpg')} style={styles.roomSceneImage} />
          <Text style={styles.caption}>Fabric Vertical Blinds with Cord and Chain Control: Selene, Thoroughfare 90181; Drapery with Pinch Pleats: Mercedes, Steel 90024</Text>
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
  roomSceneContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  roomSceneImage: {
    height: 360
  },
  caption: {

  }
});

module.exports = PCFabricVerticalBlindsView;
