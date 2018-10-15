import { combineReducers } from 'redux-immutable';

import appReducer from 'containers/ReposList/reducers';

const rootReducer = combineReducers({
  reposData: appReducer,
});

export default rootReducer;
