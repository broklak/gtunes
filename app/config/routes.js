import NewsScreen from '../src/screens/newsScreen';
import NewsDetailScreen from '../src/screens/newsDetailScreen';
import GenreScreen from '../src/screens/genreScreen';
import GenreDetailScreen from '../src/screens/genreDetailScreen';
import ArtistScreen from '../src/screens/artistScreen';
import VideoScreen from '../src/screens/videoScreen';
import ArtistDetailScreen from '../src/screens/artistDetailScreen';
import MusicPlayerScreen from '../src/screens/musicPlayerScreen';
import VideoPlayerScreen from '../src/screens/videoPlayerScreen';
import PackageScreen from '../src/screens/packageScreen';
import PaymentOptionsScreen from '../src/screens/paymentOptionsScreen';
import PaymentSuccessScreen from '../src/screens/paymentSuccessScreen';
import SmartfrenScreen from '../src/screens/telco/smartfrenPaymentScreen';
import AuthScreen from '../src/screens/authScreen';

const Routes = {
	  News: {
	    screen: NewsScreen
	  },
	  NewsDetail: {
	    screen: NewsDetailScreen
	  },
	  Artist: {
	    screen: ArtistScreen
	  },
	  Genre: {
	    screen: GenreScreen
	  },
	  GenreDetail: {
	    screen: GenreDetailScreen
	  },
	  Video: {
	    screen: VideoScreen
	  },
	  ArtistDetail: {
	    screen: ArtistDetailScreen
	  },
	  MusicPlayer: {
	    screen: MusicPlayerScreen
	  },
	  VideoPlayer: {
	    screen: VideoPlayerScreen
	  },
	  Package: {
	    screen: PackageScreen
	  },
	  PaymentOptions: {
	    screen: PaymentOptionsScreen
	  },
	  PaymentSuccess: {
	    screen: PaymentSuccessScreen
	  },
	  Smartfren: {
	    screen: SmartfrenScreen
	  }
}

export default Routes;