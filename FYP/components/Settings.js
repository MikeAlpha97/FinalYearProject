/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  CheckBox,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function Settings({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/background1.png')}
      style={styles.mainView}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.btnView}>
          <Button
            color="black"
            title="Sign out of app"
            onPress={() => navigation.navigate('Splash Screen')}
          />
        </View>
        <View style={styles.btnView}>
          <Button
            color="black"
            title="About App"
            padding={100}
            onPress={() => navigation.navigate('AboutApp')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btnView: {
    justifyContent: 'center',
    marginTop: 100,
    paddingHorizontal: 60,
  },
  mainView: {
    flex: 1,
    alignContent: 'center',
  },
});
