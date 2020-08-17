import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  AsyncStorage,
  FlatList,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

export default class SavedPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  getUserName = async () => {
    const value = await AsyncStorage.getItem('username');
    return value;
  };
  componentDidMount = async () => {
    var params = {
      username: await AsyncStorage.getItem('username'),
    };
    axios.post('http://192.168.137.1:8080/user/getPosts', params).then(
      response => {
        console.log(response.data.msg[0].post);
        this.setState({posts: response.data.msg[0].post});
        console.log(this.state);
      },
      error => {
        console.log(error.data);
      },
    );
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/background1.png')}
        style={styles.mainView}>
        <ScrollView>
          <FlatList
            data={this.state.posts}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignContent: 'space-between',
                }}>
                <View style={styles.ImgView}>
                  <Image
                    source={{
                      uri: 'http://192.168.137.1:8080/uploads/' + item.filename,
                    }}
                    style={styles.ImgProfile}
                  />
                </View>
                <View>
                  <Text style={styles.txte}>Date: {item.date}</Text>
                  <Text style={styles.txted}>Caption:</Text>
                  <Text style={styles.txtemail}>{item.caption}</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  ImgProfile: {
    height: 150,
    width: 150,
    borderWidth: 2,
    borderColor: 'black',
    marginLeft: 100,
  },
  ImgView: {
    padding: 10,
    marginTop: 50,
  },
  btnView: {
    alignSelf: 'center',
    padding: 20,
    marginLeft: 10,
  },
  view1: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  txte: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 15,
    marginLeft: 70,
    marginRight: 40,
    color: 'white',
  },
  txted: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 25,
    marginLeft: 15,
    marginRight: 40,
    color: 'white',
  },
  txtemail: {
    alignSelf: 'center',
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 30,
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 20,
  },
  mainView: {
    flex: 1,
    alignContent: 'center',
  },
});
