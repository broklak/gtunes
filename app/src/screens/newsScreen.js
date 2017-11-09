import React, { Component } from 'react';
import { Text, View, Image, FlatList, Alert } from 'react-native';
import style from '../../themes/styles/newsStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../components/headerComponent';
import images from '../../themes/settings/images.js';

class NewsScreen extends Component {
	constructor(props) {
		super(props);

		this.state = { FlatListItems: [
	      {key: 'One'},
	      {key: 'Two'},
	      {key: 'Three'},
	      {key: 'Four'}
	    ]}
	}

	FlatListItemSeparator = () => {
	    return (
	      <View
	        style={{
	          height: 1,
	          width: "100%",
	          backgroundColor: "#607D8B",
	        }}
	      />
	    );
	  }

	list() {
		return (
			<View style={style.listContainer}>
				<Image style={style.image} source={{uri:'http://gtunes.co.id/assets/file_upload/admin/images/whats_new/radhini.jpg'}} />
				<View style={style.textGroup}>
					<Text style={style.title}>New Single : "HAMPIR JADI"</Text>
					<Text style={style.description}>
						Description goes here. Lorem ipsum dolor sit amet my name is oxy and i will be tuler of the world of the jungle and no one will defeat me except my father who is the strongest of them all
					</Text>
					<View style={style.dateGroup}>
						<Entypo
				          name= 'clock'
				          size={12}
				          style={style.dateIcon}
				        />
						<Text>21 October 2017</Text>
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
			          data={ this.state.FlatListItems }
			          renderItem={({item}) => this.list()}
			         />
			</View>
		)
	}
}

export default NewsScreen;