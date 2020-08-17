/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ImagePicker from 'react-native-image-picker';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Alert,
  ImageBackground,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      myText: 'No caption to show \nInsert an Image to Caption...',
    };
  }

  // CaptionPressed = async () => {
  //   // alert(this.state.filePath.path);
  //   try {
  //     var res = await fetch(
  //       'http://192.168.137.1:8080/generated/' + this.state.filePath.fileName,
  //     );
  //     var data = await res.json();
  //     console.log(data);
  //     this.setState({myText: 'Captioned Successfully'});
  //   } catch (err) {
  //     alert(err + " HOLY SHITT!");
  //   }
  // };

  UploadImage = async () => {
    try {
      const fd = new FormData();
      fd.append('file', {
        uri: this.state.filePath.uri,
        name: this.state.filePath.fileName,
        type: 'image/jpeg',
      });
      var req = await fetch('http://192.168.137.1:8080/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: fd,
      });
      var data = await req.json();
      console.log('Data Returned!');
      console.log(data);
      console.log(data.caption);
      var capTxt = data.caption;
      var capLen = capTxt.length;
      var capText = capTxt.substr(7, capLen - 12);
      // this.setState({myText: data.caption});
      this.setState({myText: capText});
    } catch (err) {
      Alert.alert('OOPS !' + err);
    }
  };

  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({filePath: source});
      }
    });
  };

  readText = async () => {
    Tts.stop();
    Tts.speak(this.state.myText);
  };

  saveCaption = async () => {
    console.log(this.state.filePath.fileName);
    console.log(this.state.myText);
    var params = {
      fileName: this.state.filePath.fileName,
      caption: this.state.myText,
      username: await AsyncStorage.getItem('username'),
    };
    axios.post('http://192.168.137.1:8080/user/addpost', params).then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error.data);
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View
            style={[
              styles.imgView,
              {
                transform: [{scaleX: 20}, {scaleY: 20}],
              },
            ]}>
            <Image
              source={{uri: this.state.filePath.uri}}
              style={{width: 200, height: 200}}
            />
          </View> */}
        <ImageBackground style={styles.imgView}>
          <ScrollView style={{marginBottom: 10}}>
            <Text
              style={{
                textAlign: 'justify',
                marginHorizontal: 20,
                marginVertical: 10,
                fontFamily: 'sans-serif-thin',
                fontSize: 25,
              }}
              onPress={this.updateText}>
              {this.state.myText}
            </Text>
          </ScrollView>
          <Image
            source={{uri: this.state.filePath.uri}}
            style={{
              width: 300,
              height: 300,
              alignSelf: 'center',
              padding: 10,
              marginTop: 0,
              marginBottom: 10,
            }}
          />
        </ImageBackground>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'space-around',
            backgroundColor: '#17202A',
          }}>
          <TouchableHighlight style={styles.iconOptions}>
            <View>
              <Icon
                name="camera"
                onPress={this.chooseFile.bind(this)}
                size={35}
                color="darkgrey"
                style={styles.Icons}
              />
              <Text style={styles.textButtons}>Insert Photo</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.iconOptions}>
            <View>
              <Icon
                name="edit"
                onPress={this.UploadImage.bind(this)}
                size={35}
                color="darkgrey"
                style={styles.Icons}
              />
              <Text style={styles.textButtons}>Caption It</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.iconOptions}>
            <View>
              <Icon
                name="volume-up"
                onPress={this.readText.bind(this)}
                size={35}
                color="darkgrey"
                style={styles.Icons}
              />
              <Text style={styles.textButtons}>Read Aloud</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={(styles.iconOptions, {marginLeft: 38, marginTop: 18})}>
            <View>
              <Icon
                name="arrow-circle-o-down"
                onPress={this.saveCaption.bind(this)}
                color="darkgrey"
                size={35}
                style={styles.Icons}
              />
              <Text style={styles.textButtons}>Save</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonNormal: {
    flexDirection: 'row',
    position: 'relative',
    flex: 0.1,
    left: 1,
    right: 0,
    bottom: 50,
    marginTop: 60,
  },
  imgView: {
    backgroundColor: 'lightgrey',
    alignSelf: 'stretch',
  },
  textButtons: {
    paddingHorizontal: 24,
    fontSize: 15,
    marginTop: 0,
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
  },
  Icons: {
    alignSelf: 'center',
    marginHorizontal: 45,
  },
  iconOptions: {
    backgroundColor: '#17202A',
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginTop: 18,
    marginLeft: 20,
  },
});
