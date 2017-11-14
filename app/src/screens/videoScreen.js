import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import style from '../../themes/styles/videoStyle';
import Header from '../components/headerComponent';
import { IMAGE_HOST_URL } from '../../config/settings';
import { connect } from 'react-redux';
import { fetchListVideos } from '../actions/videoAction';

class VideoScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	componentDidMount() {
		this.props.fetchListVideos();
	}

	list(item) {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.listContainer}>
				<TouchableHighlight onPress={() => navigate('VideoPlayer', {url: item.video_clip_url})}>
					<Image style={style.image} source={{uri:`${IMAGE_HOST_URL}/${item.video_clip_image}`}} />
				</TouchableHighlight>
				<Text onPress={() => navigate('VideoPlayer', {url: item.video_clip_url})} style={style.title}>{item.video_clip_title}</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} />
				<Text style={style.labelHeader}>Video Clip</Text>
				<FlatList
				    data={ this.props.video }
				    keyExtractor={item => item.video_clip_id}
				    renderItem={({item}) => this.list(item)}
				    contentContainerStyle={style.flatList}
				    numColumns={2}
				/>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { video: state.video }
}

export default connect(mapStateToProps, { fetchListVideos })(VideoScreen);