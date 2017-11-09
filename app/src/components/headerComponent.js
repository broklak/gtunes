import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'; // 4.4.2
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // 4.4.2
import style from '../../themes/styles/headerStyle';

export default MenuToggle = ({ navigation }) => {
	return (
		<View style={style.container}>
			<View>
				<Text 
					onPress={() => navigation.navigate('DrawerToggle')}
					style={style.menuToggle}
				>
				<Entypo
		          name= 'menu'
		          size={24}
		        />
				</Text>
			</View>
			<View>
				<Text style={style.header}>
					Gtunes
				</Text>
			</View>
			<View>
				<Text
					style={style.setting}
				>
				<MaterialIcon
		          name= 'settings'
		          size={24}
		        />
				</Text>
			</View>
		</View>
	);
}