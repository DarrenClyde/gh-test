import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  REPOS_FILTER
} from './constants';

export function loadRepos() {
  return {
    type: LOAD_REPOS,
  }
}

export function reposLoaded(repos) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
  }
}

export function loadReposError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  }
}

export function reposFilter(pattern) {
  return {
    type: REPOS_FILTER,
    pattern,
  }
}