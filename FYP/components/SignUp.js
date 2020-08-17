/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  AsyncStorage,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
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

  submit() {
    console.log(this.state);
    axios.post('http://192.168.137.1:8080/user/signup', this.state).then(
      response => {
        console.log(response.data);
        this.storeData();
        Alert.alert('user Registered Successfully');
        this.props.navigation.navigate('Welcome');
      },
      error => {
        console.log(error.data);
      },
    );
  }
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
          style={{marginLeft: 20, marginTop: 40, marginBottom: 50}}
        />
        <Text
          style={{
            marginTop: 30,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Create an Account
        </Text>

        <View>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            onChangeText={text => {
              this.setState({first_name: text});
            }}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            onChangeText={text => {
              this.setState({last_name: text});
            }}
          />
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
            secureTextEntry={true}
            onChangeText={text => {
              this.setState({password: text});
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            color="black"
            title="Sign Up"
            onPress={() => {
              this.submit();
            }}
          />
        </View>
        <Text style={styles.text}>
          By pressing Sign Up you agree with Terms and Services and Privacy
          Policy
        </Text>
        <View style={styles.button}>
          <Button
            color="black"
            title="Already have an account?"
            onPress={() => this.props.navigation.navigate('SignIn')}
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
