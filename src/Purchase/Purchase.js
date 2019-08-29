import React from 'react';
import './Purchase.css';

const Purchase = ({id, name, description, price, img, deleteitem}) => {
    return (
        <article className='card'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <img src={img} alt={name} className='card-image' />
            <button className='remove-btn' onClick={() => deleteitem(id)}>Remove from Page</button>    
        </article>
    )
}

export default Purchase
