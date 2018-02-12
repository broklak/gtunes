import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import Header from '../components/headerComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import style from '../../themes/styles/artistDetailStyle';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { fetchDetailArtist } from '../actions/artistAction';
import { check } from '../actions/authAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IMAGE_HOST_URL } from '../../config/settings';
import striptags from 'striptags';
import _ from 'lodash';
import Spinner from 'react-native-loading-spinner-overlay';

class ArtistDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false
		}
	}

	static navigationOptions = ({ navigation }) => ({
	    title: `${navigation.state.params.artist_name}`
	  });
	componentDidMount() {
		const { state } = this.props.navigation;
		this.props.fetchDetailArtist(state.params.artist_id);
	}

	playSong(item, songs) {
		const { navigate } = this.props.navigation;
		AsyncStorage.getItem('msisdn').then((msisdn) => {
			if(msisdn === null) { // NO LOGIN
				navigate('Package');
			} else { // LOGGED IN
				// CHECK PACKAGE
				this.setState({"loading":true});
				this.props.check(msisdn, (response) => {
					if(response.status == 200) { // PAKET AKTIF
						this.setState({"loading":false});
						navigate('MusicPlayer', { current: item, all: songs, user: msisdn })
					} else { // PAKET EXPIRED / TIDAK AKTIF
						this.setState({"loading":false});
						navigate('Package');
					}
				});
			}
		});
	}

	list(item, songs) {
		return (
			<View style={style.listContainer}>
				<Entypo
					name= 'controller-play'
					size={18}
					style={style.songIcon}
				/>
				<Text onPress={() => this.playSong(item, songs) }>{item.music_title}</Text>
			</View>
		);
	}

	render() {
		if(this.state.loading) {
			return (
				<View style={{ flex: 1 }}>
					<Spinner 
						visible={this.state.loading}
						textContent={"Loading..."}
						textStyle={{color: '#1ab667'}}
						color="#1ab667" 
					/>
				</View>
			)
		}
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ check, fetchDetailArtist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);