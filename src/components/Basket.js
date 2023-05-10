import React from 'react';
import styled from 'styled-components';

const Basket = ( { basketItems, onRemoveItem } ) => {

    const Basketlist = styled.div`
        width:80%;
        margin: auto;
        padding: 10px;
        background-color: lightgrey;
        color: black;
        box-shadow: 4px 4px 4px 4px grey;
    `

    const Button = styled.button `
        background-color: white;
        color: black;
        margin: 5px;
        border: 2px solid grey; 
        border-radius: 8px;
     `

    const removeItem = ( itemToRemove ) => {
        onRemoveItem( itemToRemove );
    };

    const basketComponents = basketItems.map( item => (
        <li>
            <hr />
            <span>
                { item.name } £{ item.price }
                <img src={ require( "../images/" + item.image ) } alt="item" />
            </span>
            <Button onClick={() => {removeItem(item)}}>Remove</Button>
        </li >
    ) );

    return (
        <Basketlist>
            <h2>Your items: </h2>
            { basketItems.length > 0
                ? <ul >
                    { basketComponents }
                </ul>
                : <p>Basket Is Empty</p> }
        </Basketlist>
    );
};

export default Basket;
