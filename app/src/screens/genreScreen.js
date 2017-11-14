import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import style from '../../themes/styles/genreStyle';
import Header from '../components/headerComponent';
import { IMAGE_HOST_URL } from '../../config/settings';
import { connect } from 'react-redux';
import { fetchListGenre } from '../actions/genreAction';

class GenreScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	componentDidMount() {
		this.props.fetchListGenre();
	}

	list(item) {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.listContainer}>
				<TouchableHighlight onPress={() => navigate('GenreDetail', item)}>
					<Image style={style.image} source={{uri:`${IMAGE_HOST_URL}/${item.genre_image}`}} />
				</TouchableHighlight>
			</View>
		);
	}

	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} />
				<Text style={style.labelHeader}>Genre</Text>
				<FlatList
				    data={ this.props.genre.list }
				    keyExtractor={item => item.genre_id}
				    renderItem={({item}) => this.list(item)}
				    contentContainerStyle={style.flatList}
				    numColumns={2}
				/>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { genre: state.genre }
}

export default connect(mapStateToProps, { fetchListGenre })(GenreScreen);