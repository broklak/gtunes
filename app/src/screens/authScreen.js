import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, AsyncStorage } from 'react-native';
import style from '../../themes/styles/authStyle';
import images from '../../themes/settings/images';
import { connect } from 'react-redux';
import { login } from '../actions/authAction';
import { NavigationActions } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

class AuthScreen extends Component {
	static navigationOptions = {
	   header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			screenType: "login",
			username: null,
			password: null,
			loading: false
		}
	}

	onSubmit() {
		let { username , password } = this.state;
		const { navigate, setParams } = this.props.navigation;
		this.setState({"loading":true});
		this.props.login(username, password, (response) => {
			if(response.status == 200) {
				const { package_name, msisdn, random_key } = response.data.data;
				try {
					let setKeys = [
						['msisdn', msisdn],
						['package', package_name],
						['random_key', random_key]
					];
				  	AsyncStorage.multiSet(setKeys).then( (err) => {
				  		navigate('News', { logged: true });
				  	});

				} catch (error) {
					this.setState({"loading":false});
				  	alert("Failed to save your login data");
				}
			} else if(response.status != 200) {
				this.setState({"loading":false});
				alert(""+response.data.error.userMsg);
			} else {
				this.setState({"loading":false});
				alert("Failed to login");
			}
		}, (error) => {
				if(error.response.data.error.userMsg) {
					this.setState({"loading":false});
					alert(error.response.data.error.userMsg);
				} else {
					this.setState({"loading":false});
					alert(error);
				}
			});
	}

	render() {
		const { navigate } = this.props.navigation;

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

		return (
			<View style={style.container}>
				<View style={style.componentGroup}>
					<Image 
						style={style.logoImage} 
						source={images.logo} 
						resizeMode="contain"
					/>
					<Text style={style.header}>Masuk dengan Nomor HP Kamu</Text>
					<View style={style.inputGroup}>
						<TextInput 
							placeholder="Nomor HP"
							placeholderTextColor= "#fff"
					        editable = {true}
					        keyboardType="numeric"
					        onChangeText={(username) => this.setState({username})}
					        value={this.state.username}
					        style={{marginBottom:10}}
						/>
						<TextInput 
							placeholder="Password"
							placeholderTextColor= "#fff"
					        editable = {true}
					        secureTextEntry
					        onChangeText={(password) => this.setState({password})}
					        value={this.state.password}
						/>
					</View>
					<View style={style.buttonGroup}>
						<Button 
							title="Masuk" 
							onPress={() => this.onSubmit()} 
							color="#000"
						/>
					</View>
					<View style={style.buttonGroup}>
						<Button 
							title="Beli Paket" 
							onPress={() => navigate('Package')} 
							color="#000"
						/>
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return { auth: state.auth }
}

export default connect(mapStateToProps, { login })(AuthScreen);