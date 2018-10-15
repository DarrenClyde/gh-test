import React from 'react';
import moment from 'moment';
import './RepoItem.css';
import star from './images/star.svg';

const RepoItem = ({ repo }) => (
  <li className="repo-item">
    <div className="main-info">
      <a href={repo.svn_url} className="name">{repo.full_name}</a>
      <div className="stars">
        <img src={star} alt="star" className="star-image" />
        <span>{repo.watchers_count}</span>
      </div>
    </div>
      <div className="forks">Forks: {repo.forks_count}</div>
    {repo.license && <div className="license">License: {repo.license.name}</div>}
    <div className="created">Created: {moment(repo.created_at).format('LL')}</div>
    {repo.language && <div className="language">Language: {repo.language}</div>}
  </li>
);
export default RepoItem;
