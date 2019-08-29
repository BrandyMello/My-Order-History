import React from 'react';
import './Purchase.css';

const Purchase = ({id, name, description, price, img}) => {
    return (
        <article className='card'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <img src={img} alt={name} className='card-image' />
            <button>remove from History</button>    
        </article>
    )
}

export default Purchase
