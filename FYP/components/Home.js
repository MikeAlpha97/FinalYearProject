import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.parentView}>
      <Image source={require('../assets/well.png')} style={styles.imagee} />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('CaptionIt')}
          style={styles.button}>
          <View>
            <Icon
              name="camera"
              size={35}
              color="darkgrey"
              style={styles.Icons}
            />
            <Text style={styles.optionsText}>Caption It</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('SavedPosts')}
          style={styles.button}>
          <View>
            <Icon name="star" size={35} color="darkgrey" style={styles.Icons} />
            <Text style={styles.optionsText}> Favourites </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Settings')}
          style={styles.button2}>
          <View>
            <Icon name="cog" size={35} color="darkgrey" style={styles.Icons2} />
            <Text style={styles.optionsText}>Settings </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('MyAccount')}
          style={styles.button2}>
          <View>
            <Icon
              name="user"
              size={35}
              color="darkgrey"
              style={styles.Icons2}
            />
            <Text style={styles.optionsText}>My Account</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnView: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#F7F7F9',
    marginBottom: 20,
    marginTop: 10,
  },

  text: {
    marginTop: 0,
    textAlign: 'left',
    fontSize: 25,
    fontFamily: 'Roboto',
    color: '#F7F7F9',
    fontWeight: 'bold',
  },
  imgView: {
    height: 35,
    width: 35,
    right: -130,
  },
  topacity: {
    backgroundColor: '#D2302C',
    height: 75,
    width: 325,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },
  imagee: {
    height: 280,
    width: 360,
    alignSelf: 'center',
  },
  textOnImage: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
  },
  parentView: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    alignItems: 'flex-end',
    backgroundColor: '#17202A',
    padding: 45,
    alignSelf: 'stretch',
    paddingVertical: 50,
  },
  button2: {
    alignContent: 'flex-end',
    backgroundColor: '#17202A',
    padding: 47,
    alignSelf: 'stretch',
    paddingVertical: 50,
  },
  optionsText: {
    color: 'white',
    fontFamily: 'sans-serif-thin',
    fontSize: 20,
  },
  Icons: {
    alignSelf: 'center',
    marginTop: 40,
  },
  Icons2: {
    alignSelf: 'center',
    marginTop: 0,
  },
});
