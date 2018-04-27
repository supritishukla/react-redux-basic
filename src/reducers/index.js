import { combineReducers } from 'redux';

import movieListReducer from "./reducer_movieList";

const rootReducer = combineReducers({
    movies: movieListReducer

});

export default rootReducer;
