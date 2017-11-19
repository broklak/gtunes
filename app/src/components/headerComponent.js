import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'; // 4.4.2
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // 4.4.2
import style from '../../themes/styles/headerStyle';

export default MenuToggle = ({ navigation, title, type = "menu" }) => {
	let iconLeft = (type == 'menu') ? 'menu' : 'arrow-left';
	return (
		<View style={style.container}>
			<View>
				<Text 
					onPress={() => (type == 'menu') ? navigation.navigate('DrawerToggle') : navigation.goBack()}
					style={style.menuToggle}
				>
				<Entypo
		          name= {iconLeft}
		          size={28}
		        />
				</Text>
			</View>
			<View>
				<Text style={style.header}>
					{title}
				</Text>
			</View>
		</View>
	);
}