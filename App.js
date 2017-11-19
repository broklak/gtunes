import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './app/src/reducers';
import promise from 'redux-promise';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Routes from './app/config/routes';
import { menuOptions } from './app/themes/settings/menu';
import firebase from 'firebase';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Stack = StackNavigator(Routes);

const GTunes = DrawerNavigator({
  Home: { screen: Stack }
}, menuOptions);

export default class App extends Component {
  componentWillMount() {
    firebase,intitializeApp({
      apiKey: "AIzaSyCwUAl7fYjoy5dtLFkeJuOgHlY4XwEFiCE",
      authDomain: "gtunes-b03a3.firebaseapp.com",
      databaseURL: "https://gtunes-b03a3.firebaseio.com",
      projectId: "gtunes-b03a3",
      storageBucket: "gtunes-b03a3.appspot.com",
      messagingSenderId: "488634945750"
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <GTunes />
      </Provider>
    );
  }
}
