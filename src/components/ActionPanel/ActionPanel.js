import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reposFilter, loadLicense, filterByLicense } from 'containers/ReposList/actions';
import { getFilter, getLicenses, getLicenseFilter } from 'containers/ReposList/selectors';
import './ActionPanel.css';

class ActionPanel extends Component {

  onFilter = e => {
    this.props.reposFilter(e.target.value);
  }

  onSelect = e => {
    this.props.filterByLicense(e.target.value);
  }

  componentDidMount() {
    this.props.loadLicense();
  }

  render() {
    const { license, licenseFilter } = this.props;
    return (
      <div className="actionPanel">
        <div className="license-filter">
          <select value={licenseFilter} onChange={this.onSelect}>
            <option value="all">All</option>
            {license.map((license, idx) => 
              <option
                value={license.key}
                key={idx}
              > {license.name}
              </option>
            )}
          </select>
        </div>
        <div className="search">
          <input type="text" onChange={this.onFilter} placeholder="Найти..."/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: getFilter(state),
    license: getLicenses(state),
    licenseFilter: getLicenseFilter(state),
  }
}

export default connect(mapStateToProps, { reposFilter, loadLicense, filterByLicense })(ActionPanel)