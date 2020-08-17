/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function MyAccount({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/background1.png')}
      style={styles.mainView}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.btnView}>
          <Button
            color="black"
            title="View Saved Posts"
            onPress={() => navigation.navigate('SavedPosts')}
          />
        </View>
        <View style={styles.btnView}>
          <Button
            color="black"
            title="Update Profile"
            onPress={() => navigation.navigate('UpdateProfile')}
          />
        </View>
        <View style={styles.btnView}>
          <Button
            color="black"
            title="Log out"
            onPress={() => navigation.navigate('Splash Screen')}
            padding={100}
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
