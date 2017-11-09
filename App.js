import React, { Component } from 'react';
import DrawerMenu from './app/src/components/drawerMenuComponent';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './app/src/reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// function configureStore(initialState) {
// 	const enhancer = compose(
// 		applyMiddleware(
// 			thunkMiddleware,
// 			loggerMiddleware
// 		)
// 	)
// 	return create(redu)
// }

export default class App extends Component<{}> {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      	<DrawerMenu />
    );
  }
}
