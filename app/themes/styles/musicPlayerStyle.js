import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    height: '60%',
  },
  artistContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: '100%',
    width: '99%'
  },
  artist: {
    fontSize: 20,
    fontWeight: '500'
  },
  detail: {
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500'
  },
  controlGroup: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20
  },
  songIcon: {
    color: '#000',
    fontSize: 46,
  },
  playIcon: {
    color: '#000',
    fontSize: 76,
  },
  timeGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeStart: {
    marginLeft: 5,
    fontSize:11
  },
  timeEnd: {
    marginRight: 5,
    fontSize:11
  }
});