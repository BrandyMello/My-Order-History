import React from 'react';
import Purchase from '../Purchase/Purchase'

const History = ({purchases}) => {
    let purchase = purchases.map(purchase => {
        return <Purchase 
              id = {purchase.id}
              img = {purchase.image}
              name = {purchase.name}
              description = {purchase.description}
              price = {purchase.price}
              key = {purchase.id}
            />
    });

    return (
        <article>
            <section>{purchase}</section>
        </article>
    )
}

export default History;
