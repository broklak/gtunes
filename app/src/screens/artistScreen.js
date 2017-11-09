import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from '../../themes/styles/artistStyle';
import Header from '../components/headerComponent';

class ArtistScreen extends Component {
	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} />
				<Text>GTUNES ARTIST</Text>
			</View>
		)
	}
}

export default ArtistScreen;