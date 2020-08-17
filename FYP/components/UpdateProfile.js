import 'react-native-gesture-handler';
import React, {Component} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  AsyncStorage,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
    };
    this.getData();
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      this.setState({username: value});
      await axios
        .post('http://192.168.137.1:8080/user/getUser', this.state)
        .then(
          response => {
            var user = response.data.msg;
            console.log(user.first_name);
            this.setState({
              first_name: user.first_name,
              last_name: user.last_name,
              password: user.password,
            });
            console.log(this.state);
          },
          error => {
            console.log(error.data);
          },
        );
    } catch (error) {}
  };
  // componentDidMount() {
  //   this.getData();
  //   console.log(this.state);
  // }
  submit() {
    console.log(this.state);
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
          style={{marginLeft: 20, marginTop: 40, marginBottom: 40}}
        />
        <Text
          style={{
            marginTop: 30,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Update Profile
        </Text>

        <View>
          <Text style={styles.textLabels}>Enter new first name</Text>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            onChangeText={text => {
              this.setState({first_name: text});
            }}
          />
          <Text style={styles.textLabels}>Enter new last name</Text>
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            onChangeText={text => {
              this.setState({last_name: text});
            }}
          />
          <Text style={styles.textLabels}>Enter new username</Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={text => {
              this.setState({username: text});
            }}
          />
          <Text style={styles.textLabels}>Enter new password</Text>
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
            title="Update Profile"
            onPress={() => {
              this.submit();
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
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
  textLabels: {
    color: 'lightgrey',
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 10,
  },
});
