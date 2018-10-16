import React from 'react';
import './Empty.css';
import notFound from './images/not-found.svg';

const Empty = () => (
  <div className="empty">
    <img src={notFound} alt="Not found" className="empty-image"/>
    <div className="empty-text">Nothing found...</div>
  </div>
);

export default Empty;
