const userDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_DETAILS':
            let searchResult = action.payload ? action.payload : null;

            return { ...state, searchResult };

        default:
            return state;
    }
};

export default userDataReducer;