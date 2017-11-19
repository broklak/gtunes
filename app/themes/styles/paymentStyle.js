import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const buttonWidth = Math.ceil(width * 80 / 100);
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  header: {
    fontSize: 14,
    fontWeight: '500'
  },
  headerOption: {
    fontSize: 16,
    fontWeight: '500'
  },
  listContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: '#1ab667',
    width: buttonWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonPackage: {
    fontWeight: '500',
    color: '#fff',
  },
  instructionGroup: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  instruction: {
    fontSize:16
  },
  packageName: {
    fontSize:16,
    fontWeight: '500',
    marginBottom: 10
  },
  instructionNumber: {
    fontSize:16,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10
  },
  successMsgGroup: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  }
});