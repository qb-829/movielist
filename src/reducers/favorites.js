

const setFavoriteReducer = (state = false, action) => {
    switch(action.type) {
        case "ISCHECKED":
            return true;
        default:
            return state;    
    }
}

//FAVORITES LIST INCLUDES MOVIES WHERE FAVORITE IT CHECKED ONLY
//IT IS AN EMPTY ARRAY THAT IS THEN POPULATED WITH MOVIES THAT HAVE A CHECK
//...STATE, ACTION.PAYLOAD.FAVORITE IS TRUE