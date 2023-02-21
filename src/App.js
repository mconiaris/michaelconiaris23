import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <Main/>
      </body>
    </div>
  );
}

export default App;
