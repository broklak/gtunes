import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../components/headerComponent';
import style from '../../themes/styles/paymentStyle';
import numeral from 'numeral';

class PaymentSuccessScreen extends Component {
	static navigationOptions = {
	   header: null
	};
	render() {
		const { navigate, state } = this.props.navigation;
		return(
			<View style={style.container}>
				<Header navigation={this.props.navigation} title="GTunes" />
				<View style={style.successMsgGroup}>
					<View style={{alignItems: 'center'}}>
						<Text>Terima kasih atas pembelian paket</Text>
						<Text style={{fontWeight:'500', marginBottom:10}}>GTunes {state.params.package.paket_hari} Hari / Rp.{numeral(state.params.package.paket_tarif).format('0,0')}</Text>
					</View>
					<View style={{alignItems: 'center'}}>
						<Text>Kamu bisa menikmati layanan kamu setelah</Text>
						<Text style={{marginBottom: 20}}>menerima SMS Konfirmasi dari <Text style={{fontWeight:'500'}}> {state.params.telco}</Text></Text>
					</View>
					<Button 
						title="Kembali ke halaman utama" 
						onPress={() => navigate('News')} 
						color="#1ab667"
					/>
				</View>
			</View>
		);
	}
}

export default PaymentSuccessScreen;