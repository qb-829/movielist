

export const addFavoriteMovie = (movieObject) => {
    return {
        type: "ADD_FAVORITE_MOVIE",
        payload: movieObject
    }
}
export const updateFavoriteMovie = (movieObject) => {
    return {
        type: "UPDATE_FAVORITE_MOVIE",
        payload: movieObject
    }
}

export const setFavorite = () => {

    return {
        type: "SET_FAVORITE"
    }
}