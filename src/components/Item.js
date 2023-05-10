import React from 'react';
import styled from 'styled-components';

const Item = ({ item, onBasketAdd }) => {

  const StockItem = styled.div `
    margin: 5px;
    display: flex;
    flex-direction: column;
  `

  const ItemImage = styled.img `
    height: 300px;
    box-shadow: 2px 2px 4px grey;
  `

  const ItemPara = styled.p `
     margin: 5px;
  `

  const Button = styled.button `
  color: #fff;
  padding: 15px 25px;
  background-color: #38D2D2;
  background-image: radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 66% at 26% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);
  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25), inset 0px 3px 9px rgba(255, 255, 255, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px -8px 36px rgba(0, 0, 0, 0.3), inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  font-weight: bold;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  cursor: pointer;
  `


  const onClick = () => {
    onBasketAdd(item);
  };

  return (
    <StockItem>
      <ItemImage src={require("../images/" + item.image)} alt="item" />
      <Button onClick={onClick}>Add To Basket</Button>
      <p>{item.name}</p>
      <p>£{item.price}</p>
    </StockItem>
  );
};

export default Item;
