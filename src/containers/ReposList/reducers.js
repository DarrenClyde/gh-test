import { Map } from 'immutable';
import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  REPOS_FILTER,
  LICENSE_LOAD,
  LICENSE_LOAD_SUCCESS,
  LICENSE_LOAD_ERROR,
  LICENSE_FILTER
} from './constants';

const initialState = Map({
  loading: false,
  error: false,
  repos: [],
  license: [],
  licenseFilter: 'all',
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
    case LICENSE_LOAD:
      return state
        .set('loading', true)
        .set('error', false)
        .set('license', []);
    case LICENSE_LOAD_SUCCESS:
      return state
        .set('license', action.licenses)
        .set('loading', false);
    case LICENSE_LOAD_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LICENSE_FILTER:
      return state
        .set('licenseFilter', action.licenseFilter);
    default:
      return state;
  }
}

export default appReducer;