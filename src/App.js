import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageTitle from './components/pageTitle.js';
import HelloKitty from './components/helloKitty.js'
import Person from './components/person.js'
import PersonTemplate from './components/personTemplate.js'
import Adder from './components/adder.js'

function App() {
  return (
    <div className="App">
          <PageTitle />
          <HelloKitty />
          <PersonTemplate name={'John', 'Richard'} age={20, 27} />
          <Adder number1={1} number2={2} />
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
