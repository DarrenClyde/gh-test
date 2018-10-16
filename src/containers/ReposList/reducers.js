import { Map } from 'immutable';
import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  REPOS_FILTER
} from './constants';

const initialState = Map({
  loading: false,
  error: false,
  repos: [],
  filter: '',
});

function appReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('repos', []);
    case LOAD_REPOS_SUCCESS:
      return state
        .set('repos', action.repos)
        .set('loading', false);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case REPOS_FILTER:
      return state
        .set('filter', action.pattern);
    default:
      return state;
  }
}

export default appReducer;