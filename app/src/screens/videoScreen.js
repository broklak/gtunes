import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableHighlight, AsyncStorage } from 'react-native';
import style from '../../themes/styles/videoStyle';
import Header from '../components/headerComponent';
import { IMAGE_HOST_URL } from '../../config/settings';
import { connect } from 'react-redux';
import { fetchListVideos } from '../actions/videoAction';
import { check } from '../actions/authAction';
import { bindActionCreators } from 'redux';

class VideoScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	componentDidMount() {
		this.props.fetchListVideos();
	}

	playMusicClip(item) {
		const { navigate } = this.props.navigation;
		AsyncStorage.getItem('msisdn').then((msisdn) => {
			if(msisdn === null) { // NO LOGIN
				navigate('Package');
			} else { // LOGGED IN
				// CHECK PACKAGE
				this.props.check(msisdn, (response) => {
					if(response.status == 200) { // PAKET AKTIF
						navigate('VideoPlayer', {url: item.video_clip_url})
					} else { // PAKET EXPIRED / TIDAK AKTIF
						navigate('Package');
					}
				});
			}
		});
	}

	list(item) {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.listContainer}>
				<TouchableHighlight onPress={() => this.playMusicClip(item)}>
					<Image style={style.image} source={{uri:`${IMAGE_HOST_URL}/${item.video_clip_image}`}} />
				</TouchableHighlight>
				<Text onPress={() => this.playMusicClip(item)} style={style.title}>{item.video_clip_title}</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} title="Video Clip" />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ check, fetchListVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoScreen);