import { call, put, takeLatest } from 'redux-saga/effects'
import moment from 'moment';
import { reposLoaded, loadReposError } from './actions';
import { LOAD_REPOS } from './constants';
import request from 'utils/request';

export function* loadRepos() {
  let date = new Date();
  date.setMonth(date.getMonth() - 1);
  const formattedDate = moment(date).format('YYYY-MM-DD');
  const url = `https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc`;
  try {
    const repos = yield call(request, url);
    yield put(reposLoaded(repos.items));
  } catch (err) {
    yield put(loadReposError(err));
  }
}

export default function* ghData() {
  yield takeLatest(LOAD_REPOS, loadRepos);
}