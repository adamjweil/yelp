import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PostRestaurant = (props) => (
  <div className="main-content post">
    <h1>{props.title}</h1>
      <form onSubmit={this.newRestaurantSubmitHandler}>
        <input
          type="text"
          onChange={props.handleNameInput}
          value={props.restaurantName}
          placeholder="Restaurant Name" />
        <input
          type="text"
          onChange={props.handleCuisineInput}
          value={props.restaurantCuisine}
          placeholder="Cuisine" />
        <input
          type="text"
          onChange={props.handleStreetAddressInput}
          value={props.restaurantStreetAddress}
          placeholder="Street Address" />
        <input
          type="text"
          onChange={props.handleCityInput}
          value={props.restaurantCity}
          placeholder="City" />
        <input
          type="text"
          onChange={props.handleStateInput}
          value={props.restaurantState}
          placeholder="State" />
        <input
          type="text"
          onChange={props.handleZipInput}
          value={props.restaurantZip}
          placeholder="Zip" />
        <button type="submit" name="submit" value="submit">Submit</button>
      </form>
  </div>
);
// curl -H "Content-Type: application/json" -X POST -d '{"name":"test","cuisine":"test","address":"123 Wall","city":"New York","state":"NY","zip":"10024","user_id":"1"}' https://adams-eatandreview.herokuapp.com/restaurants

export default PostRestaurant;
