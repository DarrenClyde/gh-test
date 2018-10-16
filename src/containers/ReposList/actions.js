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

export function loadLicense() {
  return {
    type: LICENSE_LOAD,
  }
}

export function licenseLoaded(licenses) {
  return {
    type: LICENSE_LOAD_SUCCESS,
    licenses,
  }
}

export function licenseLoadError(error) {
  return {
    type: LICENSE_LOAD_ERROR,
    error,
  }
}

export function filterByLicense(licenseFilter) {
  return {
    type: LICENSE_FILTER,
    licenseFilter,
  }
}