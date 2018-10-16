import { createSelector } from 'reselect';

const selectReposData = state => state.get('reposData');

export const getFilter = createSelector(
  selectReposData,
  reposState => reposState.get('filter')
)

const getRepos = createSelector(
  selectReposData,
  reposState => reposState.get('repos'),
)

export const getReposList = createSelector(
  [getRepos, getFilter],
  (reposState, filter) => reposState.filter(({ full_name }) => new RegExp(filter, 'i').test(full_name))
);

export const getError = createSelector(
  selectReposData,
  reposState => reposState.get('error')
);

export const getLoadingStatus = createSelector(
  selectReposData,
  reposState => reposState.get('loading')
);
