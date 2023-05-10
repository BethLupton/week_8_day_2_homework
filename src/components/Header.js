import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from '../images/shoe_logo.png'
<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
</style>

const Header = ( { basketItems } ) => {

  const Header = styled.header`
    background-color: #38D2D2;
    color: white;
    display: flex;
    justify-content: space-between;
    font-family: 'Permanent Marker';
  `

  const HeaderGroup = styled.hgroup `
    display: flex;
    margin: 0;
    padding-left: 30px;
  `
  const Logo = styled.img`
  height: 150px;
  `

  return (
    <Header>
        <HeaderGroup>
          <div>
            <h1>DJ Sports</h1>
            <h4>Overpriced and OverStocked</h4>
          </div>
          <Logo src={logo} className="App-logo" alt="logo"/>
        </HeaderGroup>

      <nav>
        <ul>
          <li><Link to="/">View Stock</Link></li>
        </ul>


      </nav>
      <div id="user-info">
        <h3>Welcome back </h3>
        <h4>You have { basketItems.length } items in your basket</h4>
        <Link to="/basket">Go to Basket</Link>

      </div>
    </Header>
  );
};

export default Header;
