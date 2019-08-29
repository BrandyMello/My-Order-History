import React from 'react';
import Purchase from '../Purchase/Purchase'

const History = ({purchases, deleteitem}) => {
    let purchase = purchases.map(purchase => {
        return <Purchase 
              id = {purchase.id}
              img = {purchase.img}
              name = {purchase.name}
              description = {purchase.description}
              price = {purchase.price}
              key = {purchase.id}
              deleteitem={deleteitem}
            />
    });

    return (
        <article>
            <section>{purchase}</section>
        </article>
    )
}

export default History;
