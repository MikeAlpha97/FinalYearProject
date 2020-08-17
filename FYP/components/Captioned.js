import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, ScrollView, Image} from 'react-native';

export default function Captioned({navigation}) {
  return (
    <ScrollView>
      <View>
        <View style={styles.imgView}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{width: 200, height: 200}}
          />
        </View>
        <Text style={styles.txt}>Generated Caption</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNormal: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    alignContent: 'center',
  },
  imgView: {
    backgroundColor: 'lightgrey',
    alignContent: 'center',
    height: 200,
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  txt: {
    fontWeight: 'bold',
  },
});
