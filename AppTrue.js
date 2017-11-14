import React, { Component } from 'react';
import DrawerMenu from './app/src/components/drawerMenuComponent';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './app/src/reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class App extends Component<{}> {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
    	<Provider store={createStoreWithMiddleware(reducers)}>
      		<DrawerMenu />
      	</Provider>
    );
  }
}
import React, { Component } from 'react';
import DrawerMenu from './app/src/components/drawerMenuComponent';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './app/src/reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class App extends Component<{}> {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
    	<Provider store={createStoreWithMiddleware(reducers)}>
      		<DrawerMenu />
      	</Provider>
    );
  }
}
