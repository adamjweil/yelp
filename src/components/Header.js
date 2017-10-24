import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
      <ul className="main-nav">
        <li><NavLink exact to="/" activeStyle={{background: 'tomato'}}>Home</NavLink></li>
        <li><NavLink to="/restaurants" activeClassName="actyMcActiveFace">Restaurants</NavLink></li>
        <li><NavLink to="/post">Post New Spot!</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
      </ul>
  </header>
);

export default Header;
