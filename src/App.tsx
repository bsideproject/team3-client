import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react <br />
          environment: {process.env.REACT_APP_ENV} <br />
          SOME_VALUE: {process.env.REACT_APP_SOME_VALUE}
        </a>
      </header>
    </div>
  )
}

export default App
