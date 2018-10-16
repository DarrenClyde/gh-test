import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLoader } from 'react-spinners';
import { getReposList, getError, getLoadingStatus, getFilter, getLicenseFilter } from './selectors';
import { loadRepos } from './actions';
import RepoItem from 'components/RepoItem';
import Empty from 'components/Empty';
import './ReposList.css';

class ReposList extends Component {

  componentDidMount() {
    this.props.loadRepos();
  }

  renderList = (repos, licenseFilter, filter) => {
    if(licenseFilter === 'all' && !filter && repos.length < 1) {
      return <div className="loader"><HashLoader /></div>;
    } else if(repos.length < 1) {
      return <Empty />;
    }
    return (
      <div className="repos-list">
        {repos.map((repo, idx) => <RepoItem key={idx} repo={repo} />)}
      </div>
    )
  }

  render() {
    const { repos, licenseFilter, filter } = this.props;

    return this.renderList(repos, licenseFilter, filter);
  }
}

const mapStateToProps = state => {
  return {
    repos: getReposList(state),
    error: getError(state),
    loading: getLoadingStatus(state),
    licenseFilter: getLicenseFilter(state),
    filter: getFilter(state),
  }
}

export default connect(
  mapStateToProps,
  { loadRepos }
)(ReposList);