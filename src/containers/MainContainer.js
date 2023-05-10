import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import ItemsList from '../components/ItemsList';
import storedItems from '../data/ShopItems';
import Basket from '../components/Basket'

const MainContainer = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [items, setItems] = useState(storedItems);

  const addItemToBasket = (item) => {
    const newBasketItems = [...basketItems]
    newBasketItems.push(item)
    setBasketItems(newBasketItems)
  }

  const removeBasketItem = (item) => {
    const newBasketItems = [...basketItems]
    const index = newBasketItems.indexOf( item );
    newBasketItems.splice( index, 1 );
    setBasketItems(newBasketItems)

  }

  return (
      <Router>
      <Header basketItems={basketItems} />
      <Routes>
      <Route path="/" element={ <ItemsList items={items} onBasketAdd={addItemToBasket} />} />
      <Route path="/basket" element={<Basket basketItems={basketItems} onRemoveItem={removeBasketItem} />} />
      </Routes>
      </Router>
    );
    
};

export default MainContainer;