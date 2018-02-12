import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { DeviceEventEmitter } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './app/src/reducers';
import promise from 'redux-promise';
import { DrawerNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import Routes from './app/config/routes';
import { menuOptions } from './app/themes/settings/menu';
import AuthScreen from './app/src/screens/authScreen';
import PushNotification from 'react-native-push-notification';
import RNAudioStreamer from 'react-native-audio-streamer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Stack = StackNavigator(Routes);

const GTunes = DrawerNavigator({
  Home: { screen: Stack },
  Auth: { screen: AuthScreen },
}, menuOptions);

export default class App extends Component {

  componentWillMount() {
    (function() {
      // Register all the valid actions for notifications here and add the action handler for each action
      PushNotification.registerNotificationActions(['Play','Pause', 'Stop']);
      DeviceEventEmitter.addListener('notificationActionReceived', function(action){
        const info = JSON.parse(action.dataJSON);
        if (info.action == 'Play') {
          RNAudioStreamer.play();
        } else if (info.action == 'Pause') {
          RNAudioStreamer.pause();
        } else if (info.action == 'Stop') {
          RNAudioStreamer.pause();
          PushNotification.cancelAllLocalNotifications();
        }
        // Add all the required actions handlers
      });
    })();
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
