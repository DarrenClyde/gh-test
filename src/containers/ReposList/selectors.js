import { createSelector } from 'reselect';

const selectReposData = state => state.get('reposData');

export const getFilter = createSelector(
  selectReposData,
  reposState => reposState.get('filter')
);

const getRepos = createSelector(
  selectReposData,
  reposState => reposState.get('repos')
);

export const getError = createSelector(
  selectReposData,
  reposState => reposState.get('error')
);

export const getLoadingStatus = createSelector(
  selectReposData,
  reposState => reposState.get('loading')
);

export const getLicenses = createSelector(
  selectReposData,
  reposState => reposState.get('license')
);

export const getLicenseFilter = createSelector(
  selectReposData,
  reposState => reposState.get('licenseFilter')
);

export const getReposList = createSelector(
  [getRepos, getFilter, getLicenseFilter],
  (reposState, filter, licenseFilter) => {
    if(licenseFilter !== 'all') {
      const sortedByLicense = reposState.filter(repo => repo.license && (repo.license.key === licenseFilter));
      return sortedByLicense.filter(({ full_name }) => new RegExp(filter, 'i').test(full_name));
    } else {
      return reposState.filter(({ full_name }) => new RegExp(filter, 'i').test(full_name))
    }
  }
);
