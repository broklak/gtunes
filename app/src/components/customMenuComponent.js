import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage ,TouchableHighlight} from 'react-native';
import style from '../../themes/styles/menuStyle';
import { NavigationActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import images from '../../themes/settings/images';
import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

class CustomMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msisdn: null,
			package_name: null,
			random_key: null
		}

		this.getLocalStorage();
	}

	getLocalStorage() {
		AsyncStorage.getItem('msisdn').then((msisdn) => {
			this.setState({msisdn});
		});

		AsyncStorage.getItem('package').then((package_name) => {
			this.setState({package_name});
		});

		AsyncStorage.getItem('random_key').then((random_key) => {
			this.setState({random_key});
		});
	}

	componentWillReceiveProps() {
		this.getLocalStorage();
	}

	navigateToScreen = (route) => () => {
	    const navigateAction = NavigationActions.navigate({
	      routeName: route
	    });
	    this.props.navigation.dispatch(navigateAction);
	}

	logout() {
		let keys = ['msisdn', 'package', 'redis_key'];
		const { navigate } = this.props.navigation;
		axios.get(`${API_HOST_URL}/logout`, {
				params: {
					redis_key: this.state.random_key,
				}
			})
			.then(function (response) {
			})
			.catch(function (error) {
				alert(error);
			});

			AsyncStorage.multiRemove(keys).then((err) => {
				this.setState({
					msisdn: null,
					package_name: null,
					random_key: null,
				});
				navigate('Auth');
			});
	}

	showHeader() {
		let { msisdn, package_name } = this.state;

		if(msisdn != null && package_name != null) {
			return (
				<View style={style.header}>
					<Image style={style.userImage} source={images.noLogin} />
					<Text style={style.loginHeader}>Hi, {msisdn}</Text>
					<Text style={style.loginButton}>Paket Kamu : {package_name}</Text>
					<Text onPress={() => this.logout() } style={style.loginButton}>Logout</Text>
				</View>
			);
		} else {
			return (
				<TouchableHighlight onPress={this.navigateToScreen('Auth')}>
					<View onPress={this.navigateToScreen('Auth')} style={style.header}>
						<Image style={style.userImage} source={images.noLogin} />
						<Text style={style.loginHeader}>Kamu belum login</Text>
						<Text style={style.loginButton}>Klik untuk login</Text>
					</View>
				</TouchableHighlight>
			);
		}

	}

	render() {
		return (
			<View>
				{this.showHeader()}
				<View style={style.childContainer}>
					<View style={style.menuGroup}>
						<Entypo name= 'news' size={22} style={style.icon} />
						<Text style={style.label} onPress={this.navigateToScreen('News')}>Berita</Text>
					</View>
					<View style={style.menuGroup}>
						<Entypo name= 'users' size={22} style={style.icon} />
						<Text style={style.label} onPress={this.navigateToScreen('Artist')}>Artis</Text>
					</View>
					<View style={style.menuGroup}>
						<Entypo name= 'beamed-note' size={22} style={style.icon} />
						<Text style={style.label} onPress={this.navigateToScreen('Genre')}>Genre</Text>
					</View>
					<View style={style.menuGroup}>
						<Entypo name= 'video' size={22} style={style.icon} />
						<Text style={style.label} onPress={this.navigateToScreen('Video')}>Video</Text>
					</View>
					<View style={style.menuGroup}>
						<Entypo name= 'shop' size={22} style={style.icon} />
						<Text style={style.label} onPress={this.navigateToScreen('Package')}>Beli Paket</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default CustomMenu;