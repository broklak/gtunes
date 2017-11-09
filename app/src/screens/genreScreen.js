import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from '../../themes/styles/genreStyle';
import Header from '../components/headerComponent';

class GenreScreen extends Component {
	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} />
				<Text>GTUNES GENRE</Text>
			</View>
		)
	}
}

export default GenreScreen;