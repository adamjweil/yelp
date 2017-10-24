import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Restaurant from './Restaurant';

const RestaurantList = (props) => (
  <div className="main-content restaurants">
    <h1>{props.title}</h1>
        {props.restaurants.map((restaurant, index) =>
          <Restaurant
            key={index}
            name={restaurant.name}
            city={restaurant.city}
            state={restaurant.state}
            cuisine={restaurant.cuisine} />
        )}
  </div>
);

export default RestaurantList;
