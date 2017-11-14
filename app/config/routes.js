import NewsScreen from '../src/screens/newsScreen';
import NewsDetailScreen from '../src/screens/newsDetailScreen';
import GenreScreen from '../src/screens/genreScreen';
import GenreDetailScreen from '../src/screens/genreDetailScreen';
import ArtistScreen from '../src/screens/artistScreen';
import VideoScreen from '../src/screens/videoScreen';
import ArtistDetailScreen from '../src/screens/artistDetailScreen';
import MusicPlayerScreen from '../src/screens/musicPlayerScreen';
import VideoPlayerScreen from '../src/screens/videoPlayerScreen';

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
	  }
}

export default Routes;