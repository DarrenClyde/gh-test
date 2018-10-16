import React from 'react';
import moment from 'moment';
import './RepoItem.css';
import star from './images/star.svg';

const RepoItem = (props) => {
  const { repo: {
    full_name,
    svn_url,
    watchers_count,
    forks_count,
    created_at,
    license,
    language }} = props;
  return (
    <a href={svn_url} className="repo-item">
      <div className="main-info">
        <div href={svn_url} className="name">{full_name}</div>
        <div className="stars">
          <img src={star} alt="star" className="star-image" />
          <span>{watchers_count}</span>
        </div>
      </div>
      <div className="forks">Forks: {forks_count}</div>
      {license && <div className="license">License: {license.name}</div>}
      <div className="created">Created: {moment(created_at).format('LL')}</div>
      {language && <div className="language">Language: {language}</div>}
    </a>
  );
}
  
export default RepoItem;
