import { createSelector } from 'reselect';

const selectRepos = state => state.get('reposData');

export const getReposList = createSelector(
  selectRepos,
  reposState => reposState.get('repos')
);

export const getError = createSelector(
  selectRepos,
  reposState => reposState.get('error')
);

export const getLoadingStatus = createSelector(
  selectRepos,
  reposState => reposState.get('loading')
);
