import React, { Component } from 'react';
import { View, Text, FlatList, Button, TouchableHighlight } from 'react-native';
import Header from '../components/headerComponent';
import style from '../../themes/styles/paymentStyle';
import { connect } from 'react-redux';
import { fetchListPackage } from '../actions/paymentAction';
import numeral from 'numeral';
import DeviceInfo from 'react-native-device-info';

class PackageScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	componentDidMount() {
		this.props.fetchListPackage();
	}

	list(item) {
		let tarif = numeral(item.paket_tarif);
		const { navigate } = this.props.navigation;
		return(
			<View style={style.listContainer}>
				<TouchableHighlight onPress={() => navigate('PaymentOptions', item)}>
					<View 
						style={style.buttonContainer}
					>
						<Text style={style.buttonPackage}>
							{item.paket_hari} HARI Rp.{numeral(item.paket_tarif).format('0,0')}
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}

	render() {
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} title="Beli Paket" />
				<View style={style.headerContainer}>
					<Text style={style.header}>Silahkan pilih paket untuk menikmati layanan kami</Text>
				</View>
				<View>
					<FlatList
			          data={ this.props.payment.package }
			          keyExtractor={item => item.paket_id}
			          renderItem={({item}) => this.list(item)}
			         />
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { payment: state.payment }
}

export default connect(mapStateToProps, { fetchListPackage })(PackageScreen);