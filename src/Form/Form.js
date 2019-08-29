import React, { Component } from 'react'
import App from '../App/App'

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

    render() {
        console.log(this.props.purchases)
        return (
            <form className='form'>
               <input 
                type='text' 
                className='image-url-input input' 
                name='img'
                placeholder='Image URL:'
                value={this.state.img}
              >
              </input>
              <input 
                type='text' 
                className='name-input input' 
                name='name'
                placeholder='Naem:'
                value={this.state.name}
              >
              </input>
              <input 
                type='text' 
                className='description-input input' 
                name='description'
                placeholder='Description:'
                value={this.state.description}
              >
              </input>
              <input 
                type='text' 
                className='price-input input' 
                name='price'
                placeholder='Price:'
                value={this.state.price}
              >
              </input>
              <button className='purchase-btn'>Add Purchase</button> 
            </form>
        )
    }
}
