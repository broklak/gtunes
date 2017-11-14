import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import style from '../../themes/styles/newsStyle';
import { IMAGE_HOST_URL } from '../../config/settings';
import striptags from 'striptags';
import Entypo from 'react-native-vector-icons/Entypo';

class NewsDetailScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
	    title: `${navigation.state.params.whats_new_title}`,
	  });
	constructor(props) {
		super(props);
		const { state } = this.props.navigation;
		this.state = {
			params: state.params
		}
	}

	render() {
		return(
			<View style={style.detailContainer}>
				<View style={style.imageDetailContainer}>
					<Image 
						style={style.imageDetail} 
						source={{uri:`${IMAGE_HOST_URL}/${this.state.params.whats_new_image}`}} 
					/>
				</View>
				<View style={style.textGroup}>
					<Text style={style.title}>{this.state.params.whats_new_title}</Text>
					<Text style={style.description}>
						{striptags(this.state.params.whats_new_desc)}
					</Text>
				</View>
			</View>
		);
	}
}

export default NewsDetailScreen;