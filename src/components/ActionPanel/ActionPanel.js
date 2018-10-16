import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reposFilter } from 'containers/ReposList/actions';
import { getFilter } from 'containers/ReposList/selectors';
import './ActionPanel.css';

class ActionPanel extends Component {

  onFilter = e => {
    this.props.reposFilter(e.target.value);
  }

  render() {
    return (
      <div className="actionPanel">
        <div className="license-filter">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className="search">
          <input type="text" onChange={e => this.onFilter(e)} placeholer="Найти"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: getFilter(state),
  }
}

export default connect(mapStateToProps, { reposFilter })(ActionPanel)