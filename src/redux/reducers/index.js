import { combineReducers } from 'redux';
import bookReducers from './book';
import genreReducers from './genre';
import userReducers from './user'

const reducers = combineReducers({
    book: bookReducers,
    genre: genreReducers,
    user: userReducers,
})

export default reducers