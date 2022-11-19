

const addFavoriteTitleReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_FAVORITE_MOVIE": {
            return [...state, 
                {
                title: action.payload.title,
                favorite: action.payload.favorite
                }
            ]
        }
        case "UPDATE_FAVORITE_MOVIE": {
            return [...state, {
                title: action.payload.title,
                favorite: action.payload.favorite
                }
            ]
        }
        default:
            return state;    
    
    }
}
export default addFavoriteTitleReducer;
