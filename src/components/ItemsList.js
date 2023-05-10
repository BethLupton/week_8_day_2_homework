import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ItemsList = ({ items, onBasketAdd }) => {

  const ItemList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `
  const itemComponents = items.map(item => (
    <Item id="item" key={item.id} item={item} onBasketAdd={onBasketAdd} />
  ));

  return (
    <ItemList id="item-list">
      {itemComponents}
    </ItemList>
  );
};

export default ItemsList;
