import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Entypo from 'react-native-vector-icons/Entypo'; // 4.4.2
import { Text, View, Button } from 'react-native';
import style from '../../themes/styles/headerStyle';
import { menuOptions } from '../../themes/settings/menu';
import NewsScreen from '../screens/newsScreen';
import DiscoverScreen from '../screens/discoverScreen';
import GenreScreen from '../screens/genreScreen';
import ArtistScreen from '../screens/artistScreen';
import VideoScreen from '../screens/videoScreen';

function navigationOptions(label, iconName) {
	return {
	      drawerLabel: label,
	      drawerIcon: ({ tintColor, focused }) => (
	        <Entypo
	          name= {iconName}
	          size={22}
	          style={style.icon}
	        />
	      ),
	    }	
}

const RootDrawer = DrawerNavigator({
	  News: {
	    screen: NewsScreen,
	    navigationOptions: navigationOptions('Whats New', 'news')
	  },
	  Discover: {
	    screen: DiscoverScreen,
	    navigationOptions: navigationOptions('Discover', 'network'),
	  },
	  Genre: {
	    screen: GenreScreen,
	    navigationOptions: navigationOptions('Genre', 'beamed-note'),
	  },
	  Artist: {
	    screen: ArtistScreen,
	    navigationOptions: navigationOptions('Artist', 'users'),
	  },
	  Video: {
	    screen: VideoScreen,
	    navigationOptions: navigationOptions('Video', 'video'),
	  }
	}, menuOptions);

class Menu extends Component {
	render() {
		return (
			<RootDrawer style={style.drawerMenu} />
		)
	}
}

export default Menu;