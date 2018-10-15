import React from 'react';
import './App.css';
import Header from 'components/Header';
import ActionPanel from 'components/ActionPanel';
import ReposList from 'containers/ReposList';

const App = () => (
  <div className="App">
    <Header title="Github popular repos" />
    <main className="container">
      <ActionPanel />
      <ReposList />
    </main>
  </div>
);

export default App;
