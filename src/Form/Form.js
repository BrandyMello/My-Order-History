import React, { Component } from 'react'
// import App from '../App/App'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
            name: '',
            description: '',
            price: ''
        }
    }

    handleEventInputs = (e) => {
        this.setState({[e.target.name]: [e.target.value]})
    }

    submitPurchase = (e) => {
        e.preventDefault();
        const newPurchase = {
            id: this.props.purchases.length,
            key: this.props.purchases.length,
            ...this.state
        }
        this.props.addPurchase(newPurchase);

        console.log(this.props.purchases)
    } 

    render() {
        return (
            <form className='form'>
               <input onChange={e => this.handleEventInputs(e)}
                type='text' 
                className='image-url-input input' 
                name='img'
                placeholder='Image URL:'
                value={this.state.img}
              >
              </input>
              <input onChange={e => this.handleEventInputs(e)}
                type='text' 
                className='name-input input' 
                name='name'
                placeholder='Naem:'
                value={this.state.name}
              >
              </input>
              <input onChange={e => this.handleEventInputs(e)}
                type='text' 
                className='description-input input' 
                name='description'
                placeholder='Description:'
                value={this.state.description}
              >
              </input>
              <input onChange={e => this.handleEventInputs(e)}
                type='text' 
                className='price-input input' 
                name='price'
                placeholder='Price:'
                value={this.state.price}
              >
              </input>
              <button className='purchase-btn' onClick={e => this.submitPurchase(e)} >Add Purchase</button> 
            </form>
        )
    }
}
