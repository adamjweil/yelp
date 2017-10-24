import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Restaurant = (props) => (
  <div className="restaurantsquare">
    <center><h3>{props.name}</h3></center>
    <center><h5>{props.city}, {props.state}</h5></center>
  </div>
);

export default Restaurant;
