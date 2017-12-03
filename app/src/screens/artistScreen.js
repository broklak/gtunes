import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import style from '../../themes/styles/artistStyle';
import { IMAGE_HOST_URL } from '../../config/settings';
import { NavigationActions } from 'react-navigation';
import Header from '../components/headerComponent';
import { connect } from 'react-redux';
import { fetchListArtist } from '../actions/artistAction';
import { CachedImage } from "react-native-img-cache";

class ArtistScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	setNativeProps = (nativeProps) => {
	    this._root.setNativeProps(nativeProps);
	 }
	
	componentDidMount() {
		this.props.fetchListArtist();
	}

	list(item) {
		const { navigate } = this.props.navigation;
		return (
			<TouchableHighlight  onPress={() => navigate('ArtistDetail', item)}>
			<View 
				style={style.listContainer}
				ref={component => this._root = component} {...this.props}
			>
					<CachedImage
						style={style.image} 
						source={{uri:`${IMAGE_HOST_URL}/${item.artist_image}`}}
					/>
				<Text style={style.title}>{item.artist_name}</Text>
			</View>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} title="Artis" />
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