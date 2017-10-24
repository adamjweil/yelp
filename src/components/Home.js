import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
  <div className="main-content home">
    <h1>{props.title}</h1>
  </div>
);


export default Home;
