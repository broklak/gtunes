import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView, Dimensions } from 'react-native';
import Header from '../components/headerComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import style from '../../themes/styles/genreDetailStyle';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { fetchDetailGenre } from '../actions/genreAction';
import { connect } from 'react-redux';
import { IMAGE_HOST_URL } from '../../config/settings';
import striptags from 'striptags';

class GenreDetail extends Component {
	static navigationOptions = ({ navigation }) => ({
	    title: `${navigation.state.params.genre_name}`
	  });
	componentDidMount() {
		const { state } = this.props.navigation;
		this.props.fetchDetailGenre(state.params.genre_id);
	}

	list(item, songs) {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.listContainer}>
				<Entypo
					name= 'controller-play'
					onPress={() => navigate('MusicPlayer', params)}
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
		if(this.props.detailGenre) {
			const { genre, songs } = this.props.detailGenre;
			return (
				<ParallaxScrollView
			      parallaxHeaderHeight={headerHeight}
			      stickyHeaderHeight={50}
			      renderForeground={() => (
					<View style={style.imageContainer}>
						<Image 
							style={style.image}
							source={{uri:`${IMAGE_HOST_URL}/${genre.genre_image}`}}
						/>
					</View>
			      )}>
			      <View style={style.songContainer}>
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
	return { detailGenre: state.detailGenre }
}

export default connect(mapStateToProps, { fetchDetailGenre })(GenreDetail);