import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from '../../themes/styles/discoverStyle';
import Header from '../components/headerComponent';

class DiscoverScreen extends Component {
	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} />
				<Text>GTUNES DISCOVER</Text>
			</View>
		)
	}
}

export default DiscoverScreen;