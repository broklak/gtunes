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

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Stack = StackNavigator(Routes);

const GTunes = DrawerNavigator({
  Home: { screen: Stack }
}, menuOptions);

export default class App extends Component {
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
