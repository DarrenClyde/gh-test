import React, { Component } from 'react';
import './ActionPanel.css';

export default class ActionPanel extends Component {
  state = {
    
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
          <input type="text" placeholer="Найти"/>
        </div>
      </div>
    );
  }
}