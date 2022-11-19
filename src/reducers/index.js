

import { combineReducers } from "redux";
import setFavoriteReducer from "./favorites";
import addFavoriteMovieReducer from "./favoritesTitles";


const allReducers = combineReducers({
    ifFavorite: setFavoriteReducer,
    titleFavorite: addFavoriteMovieReducer
})

export default allReducers;