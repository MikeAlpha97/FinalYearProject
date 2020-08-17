/* eslint-disable no-alert */
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Item,
} from 'react-native';

import Splash from './components/Splash';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Settings from './components/Settings';
import SavedPosts from './components/SavedPosts';
import MyAccount from './components/MyAccount';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UpdateProfile from './components/UpdateProfile';
import Captioned from './components/Captioned';
import CaptionIt from './components/CaptionIt';
import AboutApp from './components/AboutApp';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash Screen"
          component={Splash}
          options={{title: 'Header Shown', headerShown: false}}
        />

        <Stack.Screen
          name="Home Screen"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#17202A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: false,
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Header Shown', headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Header Shown', headerShown: false}}
        />

        <Stack.Screen
          name="CaptionIt"
          component={CaptionIt}
          options={{
            title: '            Caption It',
            headerStyle: {
              backgroundColor: '#17202A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen name="Captioned" component={Captioned} />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: '              Settings',
            headerStyle: {
              backgroundColor: '#17202A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            title: '          My Account',
            headerStyle: {
              backgroundColor: '#17202A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="SavedPosts"
          component={SavedPosts}
          options={{
            title: '          Saved Posts',
            headerStyle: {
              backgroundColor: '#17202A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{
            title: '         Update Profile',
            headerStyle: {
              backgroundColor: '#17202A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="AboutApp"
          component={AboutApp}
          options={{
            title: '            About App',
            headerStyle: {
              backgroundColor: '#17202A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Header Shown', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  buttons: {
    padding: 50,
    marginTop: 50,
    fontWeight: 'bold',
  },
});
