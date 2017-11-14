import React, { Component } from 'react';
import { View, Text, Button, Image, DeviceEventEmitter } from 'react-native';
import RNAudioStreamer from 'react-native-audio-streamer';
import style from '../../themes/styles/musicPlayerStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import Slider from 'react-native-slider';
import { IMAGE_HOST_URL } from '../../config/settings';

var listener = true;

class MusicPlayerScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	constructor(props) {
		super(props);
		const { state } = this.props.navigation;

		this.state = {
			params: state.params,
			status: 1,
			duration: 0,
			currentTime: 0
		}
		RNAudioStreamer.setUrl(encodeURI(this.state.params.musicUrl));
		RNAudioStreamer.play();
	}

	componentDidMount() {
	    streamListener = DeviceEventEmitter.addListener('RNAudioStreamerStatusChanged',this._statusChanged.bind(this));
	}

	componentWillUnmount() {
		RNAudioStreamer.pause();
		listener = false;
	}

	_statusChanged(status) {
		if(listener) {
			if(status == 'PLAYING' || status == 'BUFFERING')
			  this.setState({status: 1});
			else if(status == 'PAUSED')
			  this.setState({status: 2});
			else // NOT PLAYING
			  this.setState({status: 3});
		}
	}

	renderPlayPause() {
		if(this.state.status == 3) { // STOPPED / FINISHED
			return (
				<Entypo
					onPress={() => this.play()}
					name= 'controller-play'
					size={18}
					style={style.playIcon}
				/>
			);
		}

		if(this.state.status == 2) { // PAUSED
			return (
				<Entypo
					onPress={() => this.resume()}
					name= 'controller-play'
					size={18}
					style={style.playIcon}
				/>
			);
		}

		return ( // PLAYING
			<Entypo
				onPress={() => this.pause()}
				name= 'controller-paus'
				size={18}
				style={style.playIcon}
			/>
		);
	}

	play() {
		RNAudioStreamer.play();
		this.setState({status: 1});

	}

	pause() {
		RNAudioStreamer.pause();
		RNAudioStreamer.currentTime((err, currentTime)=>{
		 	this.setState({currentTime: currentTime})
		})
		this.setState({status: 2});
	}

	resume() {
		RNAudioStreamer.seekToTime(this.state.currentTime);
		RNAudioStreamer.play();
		this.setState({status: 1});
	}

	render() {
		return (
			<View style={style.container}>
				<View style={style.artistContainer}>
					<Text style={style.artist}>{this.state.params.artistName}</Text>
				</View>
				<View style={style.imageContainer}>
					<Image 
						style={style.image}
						source={{uri:`${IMAGE_HOST_URL}/${this.state.params.musicArt}`}}
					/>
				</View>
				<View style={style.detail}>
					<Text style={style.title}>{this.state.params.musicTitle}</Text>
				</View>
				<View style={style.controlGroup}>
					<Entypo
						name= 'controller-jump-to-start'
						size={18}
						style={style.songIcon}
					/>

					{this.renderPlayPause()}

					<Entypo
						name= 'controller-next'
						size={18}
						style={style.songIcon}
					/>
				</View>
			</View>
		);
	}
}

export default MusicPlayerScreen;