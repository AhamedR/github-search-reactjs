import { combineReducers } from 'redux';

import userData from './userDataReducer';

const allReducers = combineReducers({
    userData,
});

export default allReducers;
