import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#1ab667',
    paddingTop: 10,
    paddingBottom: 10
  },
  container: {
    flex: 1,
    height:500,
    backgroundColor: '#fff'
  },
  imageContainer: {
    height: '100%'
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  header: {
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    justifyContent: 'center'
  },
  descContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  },
  backIcon: {
    color: '#fff',
    marginRight: 20,
    marginLeft: 10
  },
  songContainer: {
    marginTop: 10,
  },
  songHeader: {
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 10
  },
  songIcon: {
    marginRight: 8,
    marginLeft: 20,
    color: '#1ab667'
  },
  listContainer: {
    borderTopColor: '#000',
    borderTopWidth: 1,
    flexDirection: 'row',
    marginTop: 10,
    paddingTop: 10
  },
  listCloser: {
    borderTopColor:'#484848',
    borderTopWidth:1,
    marginTop:10
  },
  titleHeaderContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  titleHeader: {
    color: '#000'
  },
});




