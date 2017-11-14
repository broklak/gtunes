import React, { Component } from 'react';
import { Text, View, Image, FlatList, Alert, TouchableHighlight } from 'react-native';
import style from '../../themes/styles/newsStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import { IMAGE_HOST_URL } from '../../config/settings';
import Header from '../components/headerComponent';
import { connect } from 'react-redux';
import striptags from 'striptags';
import { fetchListNews } from '../actions/newsAction';

class NewsScreen extends Component {
	static navigationOptions = {
	   header: null
	};
	
	componentDidMount() {
		this.props.fetchListNews();
	}

	list(item) {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.listContainer}>
				<TouchableHighlight onPress={() => navigate('NewsDetail', item)}>
					<Image style={style.image} source={{uri:`${IMAGE_HOST_URL}/${item.whats_new_image}`}} />
				</TouchableHighlight>
				<View style={style.textGroup}>
					<Text style={style.title}>{item.whats_new_title}</Text>
					<Text style={style.description}>
						{striptags(item.whats_new_short_desc)}
					</Text>
					<View style={style.dateGroup}>
						<Entypo
				          name= 'clock'
				          size={12}
				          style={style.dateIcon}
				        />
						<Text>{item.dateHuman}</Text>
					</View>
				</View>
			</View>
		)
	}

	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} />
					<Text style={style.labelHeader}>What's New</Text>
					<FlatList
			          data={ this.props.news }
			          keyExtractor={item => item.whats_new_id}
			          renderItem={({item}) => this.list(item)}
			         />
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { news: state.news }
}

export default connect(mapStateToProps, { fetchListNews })(NewsScreen);