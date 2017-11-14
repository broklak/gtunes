import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import style from '../../themes/styles/artistStyle';
import { IMAGE_HOST_URL } from '../../config/settings';
import { NavigationActions } from 'react-navigation';
import Header from '../components/headerComponent';
import { connect } from 'react-redux';
import { fetchListArtist } from '../actions/artistAction';

class ArtistScreen extends Component {
	static navigationOptions = {
	   header: null
	};
	
	componentDidMount() {
		this.props.fetchListArtist();
	}

	list(item) {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.listContainer}>
				<TouchableHighlight onPress={() => navigate('ArtistDetail', item)}>
					<Image 
						style={style.image} 
						source={{uri:`${IMAGE_HOST_URL}/${item.artist_image}`}}
					/>
				</TouchableHighlight>
				<Text onPress={() => navigate('ArtistDetail', item)} style={style.title}>{item.artist_name}</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} />
				<Text style={style.labelHeader}>Artis</Text>
				<FlatList
				    data={ this.props.artist }
				    keyExtractor={item => item.artist_id}
				    renderItem={({item}) => this.list(item)}
				    contentContainerStyle={style.flatList}
				    numColumns={2}
				/>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { artist: state.artist }
}

export default connect(mapStateToProps, { fetchListArtist })(ArtistScreen);