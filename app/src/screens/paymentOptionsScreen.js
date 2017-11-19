import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import Header from '../components/headerComponent';
import style from '../../themes/styles/paymentStyle';
import list_telco from '../../config/telco';
import numeral from 'numeral';

class PaymentOptionsScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	navigateTelcoPayment(telco, gpackage) {
		const { navigate } = this.props.navigation; 
		let params = {
			telco: telco,
			package: gpackage
		}
		if(telco.code == 'smart') {
			return navigate('Smartfren', params);
		}

		return alert('Unrecognized Telco');
	}

	list(item) {
		const { navigate, state } = this.props.navigation;
		return(
			<View style={style.listContainer}>
				<TouchableHighlight onPress={() => this.navigateTelcoPayment(item, state.params)}>
					<View 
						style={style.buttonContainer}
					>
						<Text style={style.buttonPackage}>
							{item.desc}
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}

	render() {
		const { state } = this.props.navigation;
		return(
			<View style={style.container}>
				<Header navigation={this.props.navigation} title={`GTunes ${state.params.paket_hari} Hari Rp.${numeral(state.params.paket_tarif).format('0,0')}`} type="back" />
				<View style={style.headerContainer}>
					<Text style={style.headerOption}>Silahkan pilih metode pembayaran</Text>
				</View>
				<FlatList
			       data={ list_telco }
			       keyExtractor={item => item.name}
			       renderItem={({item}) => this.list(item)}
			    />
			</View>
		);
	}
}

export default PaymentOptionsScreen;