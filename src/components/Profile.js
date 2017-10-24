import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => (
  <div className="main-content profile">
    <h1>{props.title}</h1>
  </div>
);

export default Profile;
