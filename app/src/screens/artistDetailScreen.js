import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView, Dimensions } from 'react-native';
import Header from '../components/headerComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import style from '../../themes/styles/artistDetailStyle';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { fetchDetailArtist } from '../actions/artistAction';
import { connect } from 'react-redux';
import { IMAGE_HOST_URL } from '../../config/settings';
import striptags from 'striptags';
import _ from 'lodash';

class ArtistDetail extends Component {
	static navigationOptions = ({ navigation }) => ({
	    title: `${navigation.state.params.artist_name}`
	  });
	componentDidMount() {
		const { state } = this.props.navigation;
		this.props.fetchDetailArtist(state.params.artist_id);
	}

	list(item, songs) {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.listContainer}>
				<Entypo
					name= 'controller-play'
					size={18}
					style={style.songIcon}
				/>
				<Text onPress={() => navigate('MusicPlayer', { current: item, all: songs})}>{item.music_title}</Text>
			</View>
		);
	}

	render() {
		const { height } = Dimensions.get('window');
		const headerHeight = Math.ceil(height * 40 / 100);
		if(this.props.detailArtist) {
			const { artist, songs } = this.props.detailArtist;
			return (
				<ParallaxScrollView
			      parallaxHeaderHeight={headerHeight}
			      stickyHeaderHeight={50}
			      renderForeground={() => (
					<View style={style.imageContainer}>
						<Image 
							style={style.image}
							source={{uri:`${IMAGE_HOST_URL}/${artist.artist_image}`}}
						/>
					</View>
			      )}>
			      <View style={style.songContainer}>
			      		<View style={style.descContainer}>
							<Text style={style.desc}>
								{striptags(artist.artist_bio)}
							</Text>
						</View>
						<Text style={style.songHeader}>Semua Lagu</Text>
						<FlatList
				          data={ songs }
				          keyExtractor={item => item.music_id}
				          renderItem={({item}) => this.list(item, songs)}
				        />
					</View>
					<View style={style.listCloser}></View>
			    </ParallaxScrollView>
			);
		}
	}
	
}

const mapStateToProps = state => {
	return { detailArtist: state.detailArtist }
}

export default connect(mapStateToProps, { fetchDetailArtist })(ArtistDetail);

