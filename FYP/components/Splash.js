import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
} from 'react-native';

export default function Splash({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/background1.png')}
      style={styles.mainView}>
      <View style={styles.Logo}>
        <Image source={require('../assets/icons8.png')} style={styles.img1} />
        <Text style={styles.txtStyl}>Caption It'</Text>
        <Text
          style={{
            alignContent: 'center',
            marginLeft: 15,
            fontSize: 15,
            fontWeight: 'bold',
            color: 'lightgrey',
          }}>
          Generate Amazing Captions!
        </Text>
      </View>
      <View style={styles.buttonNormal}>
        <View style={styles.buttons3}>
          <Button
            color="black"
            title="SignUp"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <View style={styles.buttons3}>
          <Button
            color="black"
            title="SignIn"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
        <View style={styles.buttons3}>
          <Button
            color="black"
            title="Use as Guest"
            onPress={() => navigation.navigate('Welcome')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  Logo: {
    marginTop: 15,
    padding: 0,
  },
  buttonFb: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 30,
    marginBottom: 10,
  },
  buttonNormal: {
    flex: 3,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  txtStyl: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 0,
    marginLeft: 20,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    color: 'white',
  },
  img1: {
    alignContent: 'flex-start',
    marginBottom: 0,
    marginTop: 50,
    scaleX: 1,
    scaleY: 1,
  },
  btntxtStyl: {
    color: 'white',
    fontStyle: 'italic',
  },
  buttons3: {
    justifyContent: 'center',
    padding: 20,
  },
});
