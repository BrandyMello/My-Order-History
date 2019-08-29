import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      purchases: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/purchases')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>

          </div>
        </header>
        <div className='purchase-container'>

        </div>
      </div>
    );
  }
}

export default App;
