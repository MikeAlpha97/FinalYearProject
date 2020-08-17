import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

export default function AboutApp({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/background1.png')}
      style={styles.mainView}>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            padding: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'lightgrey',
          }}>
          CAPTION IT
        </Text>
        <Text
          style={{
            fontWeight: 'normal',
            paddingHorizontal: 30,
            fontSize: 16,
            textAlign: 'justify',
            textAlignVertical: 'top',
            color: 'white',
          }}>
          {' '}
          “Caption It!”, Now as the name suggests, it will be some description
          about something, but the question is, “description of what?”. What
          actually I aim to achieve through making this Deep Learning based
          application is that I want my application to process a given image and
          generate its caption. Now the work I intend to do with this
          application is of a kind that seems really simple and handy on the
          outlook but the backend processing of the huge amount of data that
          consequently generate the caption itself is not as simple as it seems.
          The end outcome (the caption itself) will be achieved through rigorous
          phases of teaching the software, “How to caption it?”, training and
          running the software properly. These phases include the collection of
          huge amount of data and its labelling on which the target images will
          be trained though the complex algorithms of Deep Learning, Neural
          Networks, Machine Learning, Image Processing and also the Natural
          Language Processing. NLP is a core part of generating the sentences
          regarding the image or describing the image in a sentence which in my
          domain of work will simply be known as a caption.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignContent: 'center',
  },
});