import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const logoHeight = Math.ceil(height * 30 / 100);

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1ab667'
	},
	componentGroup: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	logoImage: {
		height: logoHeight,
	},
	header: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '500',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		marginTop: 10
	},
	buttonGroup: {
		marginTop: 20,
		width: '90%'
	},
	inputGroup: {
		width: '85%'
	}
});