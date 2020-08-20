import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageTitle from './components/pageTitle.js';
import HelloKitty from './components/helloKitty.js'

function App() {
  return (
    <div className="App">
          <PageTitle />
          <HelloKitty />
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
    </div>
  );
}

export default App;
