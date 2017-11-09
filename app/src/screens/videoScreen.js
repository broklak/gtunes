import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from '../../themes/styles/videoStyle';
import Header from '../components/headerComponent';

class VideoScreen extends Component {
	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} />
				<Text>GTUNES VIDEO</Text>
			</View>
		)
	}
}

export default VideoScreen;