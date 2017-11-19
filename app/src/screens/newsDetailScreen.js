import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import style from '../../themes/styles/newsStyle';
import { IMAGE_HOST_URL } from '../../config/settings';
import striptags from 'striptags';
import Entypo from 'react-native-vector-icons/Entypo';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

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
		const { height } = Dimensions.get('window');
		const headerHeight = Math.ceil(height * 30 / 100);
		return(
			<ParallaxScrollView
			    parallaxHeaderHeight={headerHeight}
			    renderForeground={() => (
					<View style={style.imageDetailContainer}>
						<Image 
							resizeMode="cover"
							style={style.imageDetail} 
							source={{uri:`${IMAGE_HOST_URL}/${this.state.params.whats_new_image}`}} 
						/>
					</View>
			      )}>
					<View style={style.textGroup}>
						<Text style={style.title}>{this.state.params.whats_new_title}</Text>
						<Text style={style.description}>
							{striptags(this.state.params.whats_new_desc)}
						</Text>
					</View>
			 </ParallaxScrollView>
		);
	}
}

export default NewsDetailScreen;