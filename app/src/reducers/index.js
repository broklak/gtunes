import { combineReducers } from 'redux';
import NewsReducer from './newsReducer';
import ArtistReducer from './artistReducer';
import GenreReducer from './genreReducer';
import DetailArtistReducer from './detailArtistReducer';
import DetailGenreReducer from './detailGenreReducer';
import SongReducer from './songReducer';
import VideoReducer from './videoReducer';
import PaymentReducer from './paymentReducer';
import AuthReducer from './authReducer';

export default combineReducers({
	news: NewsReducer,
	artist: ArtistReducer,
	genre: GenreReducer,
	detailGenre: DetailGenreReducer,
	detailArtist: DetailArtistReducer,
	song: SongReducer,
	video: VideoReducer,
	payment: PaymentReducer,
	auth: AuthReducer,
});