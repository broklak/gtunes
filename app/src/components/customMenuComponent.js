import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import style from '../../themes/styles/menuStyle';
import { NavigationActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import images from '../../themes/settings/images';

class CustomMenu extends Component {
	navigateToScreen = (route) => () => {
	    const navigateAction = NavigationActions.navigate({
	      routeName: route
	    });
	    this.props.navigation.dispatch(navigateAction);
	}

	render() {
		return (
			<View>
				<View style={style.header}>
					<Image style={style.userImage} source={images.noLogin} />
					<Text style={style.loginHeader}>Kamu belum login</Text>
					<Text style={style.loginButton}>Klik untuk login</Text>
				</View>
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
					<View style={style.menuGroup}>
						<Entypo name= 'shop' size={22} style={style.icon} />
						<Text style={style.label} onPress={this.navigateToScreen('PaymentSuccess')}>Sukses</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default CustomMenu;