import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Header from '../../components/headerComponent';
import style from '../../../themes/styles/paymentStyle';
import numeral from 'numeral';
import { API_SUBSCRIBE_URL } from '../../../config/settings';
import axios from 'axios';

class SmartfrenPaymentScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			phoneNumber: null
		}
	}

	hitSubscriber(gpackage) {
		const { navigate } = this.props.navigation;
		let packageCode = gpackage.paket_code;
		let phoneNumber = this.state.phoneNumber;
		if(phoneNumber) {
			axios.get(`${API_SUBSCRIBE_URL}/api/user/sub/${phoneNumber}`, {
				params: {
				telco: "smart",
				package: packageCode,
				shortcode: "92468",
			}
			})
			.then(function (response) {
				let params = {
					package: gpackage,
					telco: "SMARTFREN"
				}
				navigate('PaymentSuccess', params);
			})
			.catch(function (error) {
				alert(error);
			});
		} else {
			alert('Masukkan Nomor Smartfren Kamu');
		}
	}

	render() {
		const { state } = this.props.navigation;
		return (
			<View style={style.container}>
				<Header navigation={this.props.navigation} title="Konfirmasi Pembelian Paket" type="back" />
				<View style={style.instructionGroup}>
					<Text style={style.instruction}>Kamu akan melakukan pembelian paket</Text>
					<Text style={style.packageName}>GTUNES Rp. {numeral(state.params.package.paket_tarif).format('0,0')} / {state.params.package.paket_hari} hari.</Text>
					<Text>Jika pulsa tidak cukup akan dicoba 3 hari sekali selama 30 hr kedepan (otomatis diperpanjang).</Text>
					<Text style={style.instructionNumber}>Silahkan masukan nomor <Text style={style.packageName}>{state.params.telco.name}</Text> kamu</Text>
					<Text>ex: 628888xxxxxxxx</Text>
					<View style={style.inputContainer}>
					<TextInput 
						{...this.props}
				        editable = {true}
				        maxLength = {20}
				        keyboardType="numeric"
				        onChangeText={(text) => this.setState({phoneNumber: text})}
				        value={this.state.phoneNumber}
					/>
					</View>
					<Button 
						title="Beli" 
						onPress={() => this.hitSubscriber(state.params.package)} 
						color="#1ab667"
					/>
				</View>
			</View>
		);
	}
}

export default SmartfrenPaymentScreen;