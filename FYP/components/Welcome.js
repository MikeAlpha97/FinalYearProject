import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

export default function Welcome({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/background1.png')}
      style={styles.mainView}>
      <Text style={styles.text}>Welcome !</Text>
      <Image source={require('../assets/well.png')} style={styles.image} />
      <View style={styles.button}>
        <Button
          color="black"
          title="Great! Let's Get Started"
          onPress={() => navigation.navigate('Home Screen')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainVu: {
    flex: 1,
  },
  button: {
    height: 60,
    marginBottom: 60,
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 5,
    paddingHorizontal: 50,
    fontSize: 30,
    borderRadius: 100,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 80,
    marginBottom: 0,
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'sans-serif',
    color: 'white',
    fontWeight: 'bold',
  },
  mainView: {
    flex: 1,
    alignContent: 'center',
  },
});
