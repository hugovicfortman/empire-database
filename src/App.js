import './App.css';
import React from 'react';
import Datasheets from './components/Datasheets';
import SecurityCheck from './components/SecurityCheck';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      loggedIn: true,
      user: null
    };
  }

  render()
  {

    return (
      <div className="App">
        <header className="App-header">
          <div>Imperial Database</div>
        </header>
        <div className="App-body">
          { this.state.loggedIn? <Datasheets /> : <SecurityCheck /> }
        </div>
        <footer className="App-footer">Some information</footer>
      </div>
    );
  }
}

export default App;
