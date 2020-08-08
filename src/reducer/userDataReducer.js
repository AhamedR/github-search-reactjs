const userDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_RESULT':
            let searchResult = action.payload ? action.payload : null;

            return { ...state, searchResult };

        case 'GET_USER_DETAILS':
            let userDetails = action.payload ? action.payload : null;

            return { ...state, userDetails };

        case 'GET_USER_FOLLOWERS':
            let followers = action.payload ? action.payload : null;

            return { ...state, followers };

        case 'GET_USER_FOLLOWINGS':
            let followings = action.payload ? action.payload : null;

            return { ...state, followings };

        case 'GET_USER_REPOS':
            let repos = action.payload ? action.payload : null;

            return { ...state, repos };
        default:
            return state;
    }
};

export default userDataReducer;
