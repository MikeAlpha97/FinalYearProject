/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Button,
  TextInput,
  Alert,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem('username', this.state.username);
      const value = await AsyncStorage.getItem('username');
      console.log(value);
    } catch (error) {}
  };

  submit = async () => {
    // console.log(this.state);
    await axios.post('http://192.168.137.1:8080/user/signin', this.state).then(
      response => {
        console.log('Sign in' + response.data);
        if (response.data.msg === 'success') {
          this.storeData();
          this.props.navigation.navigate('Welcome');
        } else {
          Alert.alert('Please Sign Up !');
        }
      },
      error => {
        console.log(error.data);
      },
    );
    // this.props.navigation.navigate('Welcome');
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/background1.png')}
        style={styles.mainView}>
        <Icon
          name="remove"
          size={30}
          color="lightgrey"
          onPress={() => this.props.navigation.goBack()}
          style={{marginLeft: 20, marginTop: 40, marginBottom: 80}}
        />
        <Text
          style={{
            marginTop: 70,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Sign In
        </Text>

        <View>
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={text => {
              this.setState({username: text});
            }}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            textContentType="password"
            secureTextEntry={true}
            onChangeText={text => {
              this.setState({password: text});
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            color="black"
            title="Sign In"
            onPress={() => {
              this.submit();
            }}
          />
        </View>
        <Text style={styles.text}>
          By pressing Sign In you agree with Terms and Services and Privacy
          Policy
        </Text>
        <View style={styles.button1}>
          <Button
            color="black"
            title="Don't have an account?"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 15,
    marginLeft: 50,
    marginRight: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 14,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  button: {
    color: 'purple',
    height: 40,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 5,
  },
  button1: {
    height: 40,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 5,
    tintColor: '#FF006C',
  },
  text: {
    marginTop: 0,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 8,
    color: 'grey',
  },
  mainView: {
    flex: 1,
    alignContent: 'center',
  },
});
