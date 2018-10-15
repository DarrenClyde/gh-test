import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLoader } from 'react-spinners';
import { getReposList, getError, getLoadingStatus } from './selectors';
import { loadRepos } from './actions';
import RepoItem from 'components/RepoItem';
import './ReposList.css';

class ReposList extends Component {

  componentDidMount() {
    this.props.loadRepos();
  }

  render() {
    const { repos } = this.props;
    if(!repos) {
      return <div className="loader"><HashLoader /></div>;
    }
    console.log(repos)

    return (
      <ul className="repos-list">
        {repos.items.map((repo, idx) => <RepoItem key={idx} repo={repo} />)}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    repos: getReposList(state),
    error: getError(state),
    loading: getLoadingStatus(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadRepos: () => dispatch(loadRepos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposList);