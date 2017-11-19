import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  labelHeader: {
  	fontSize: 20,
  	paddingTop: 15,
  	paddingLeft: 15,
  	paddingRight: 15,
  	paddingBottom: 15,
  },
  listContainer: {
  	paddingLeft: 15,
  	paddingRight: 15,
  	marginBottom: 20,
  	backgroundColor: '#fff'
  },
  image: {
  	alignItems: 'center',
  	height: 125,
  	width: '99%'
  },
  imageDetailContainer: {
    height: '100%'
  },
  imageDetail: {
    alignSelf: 'stretch',
    flex: 1,
    height: undefined,
    width: undefined,
  },
  textGroup: {
  	marginLeft: 15,
  	marginTop: 10,
  },
  title: {
  	fontSize: 18,
  },
  description: {
  	marginTop: 5
  },
  dateGroup: {
  	marginTop: 5,
  	flexDirection: 'row'
  },
  dateIcon : {
  	marginTop: 4,
  	marginRight: 5
  }
});


