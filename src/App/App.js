import React, { Component } from 'react';
import History from '../History/History';
import Form from '../Form/Form'
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
      .then(data => this.setState({purchases: data}))
      .catch(error => console.error(error));

  }
  
  addPurchase = (newPurchase) => {
    this.setState({purchases: [...this.state.purchases, newPurchase]});
  }

  deleteitem = (id) => {
    const filteredItems = this.state.purchases.filter(item => item.id !==id);
    this.setState({purchases: filteredItems})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
          <Form purchases={this.state.purchases} addPurchase={this.addPurchase} />
          </div>
        </header>
        <div className='purchase-container'>
          <History purchases={this.state.purchases} deleteitem={this.deleteitem}/>
        </div>
      </div>
    );
  }
}

export default App;
