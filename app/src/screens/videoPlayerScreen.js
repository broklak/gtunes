import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import style from '../../themes/styles/videoPlayerStyle';
import { Bubbles } from 'react-native-loader';
import { IMAGE_HOST_URL } from '../../config/settings';

class VideoPlayerScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	onLoad() {
		return (
			<View style={style.loaderContainer}>
				<Text style={style.textLoader}>Mohon Tunggu...</Text>
			</View>
		)
	}

	render() {
		const { state } = this.props.navigation;
		return(
				<Video source={{uri: `${IMAGE_HOST_URL}/${encodeURI(state.params.url)}`}}
					ref={(ref) => {
			         this.player = ref
			       }}                                      // Store reference 
			       rate={1.0}                              // 0 is paused, 1 is normal. 
			       volume={1.0}                            // 0 is muted, 1 is normal. 
			       muted={false}                           // Mutes the audio entirely. 
			       paused={false}                          // Pauses playback entirely. 
			       resizeMode="cover"                      // Fill the whole screen at aspect ratio.* 
			       repeat={true}                           // Repeat forever. 
			       playInBackground={false}                // Audio continues to play when app entering background. 
			       onLoadStart={this.onLoadStart}            // Callback when video starts to load 
			       onLoad={this.onLoad}               // Callback when video loads 
			       onProgress={this.setTime}               // Callback every ~250ms with currentTime 
			       onEnd={this.onEnd}                      // Callback when playback finishes 
			       onError={this.videoError}               // Callback when video cannot be loaded 
			       onBuffer={this.onBuffer}                // Callback when remote video is buffering 
			       style={style.video} />
			);
	}
}

export default VideoPlayerScreen;