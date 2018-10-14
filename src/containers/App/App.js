import React, { Component } from 'react';
import './App.css';
import ActionPanel from 'components/ActionPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">Github popular repos</header>
        <main className="container">
          <ActionPanel />
          <div className="repos-list">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
