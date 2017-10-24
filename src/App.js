import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import Profile from './components/Profile';
import Post from './components/Post';

class App extends Component {
  constructor(){
    super();
    this.state = {
      restaurants: [],
      restaurantName: "",
      restaurantCuisine: "",
      restaurantStreetAddress: "",
      restaurantCity: "",
      restaurantState: "",
      restaurantZip: ""
    }
  }

  //
  // fetchRestaurants = () =>
  //   fetch('https://adams-eatandreview.herokuapp.com/restaurants')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then((obj) => {
  //     console.log(obj)
  //     this.setState({restaurants: obj})
  //   });
  handleNameInput = e =>
    this.setState({restaurantName: e.target.value});
  handleCuisineInput = e =>
    this.setState({restaurantCuisine: e.target.value});
  handleStreetAddressInput = e =>
    this.setState({restaurantStreetAddress: e.target.value});
  handleCityInput = e =>
    this.setState({restaurantCity: e.target.value});
  handleStateInput = e =>
    this.setState({restaurantState: e.target.value});
  handleZipInput = e =>
    this.setState({restaurantZip: e.target.value});

  newRestaurantSubmitHandler = e => {
    e.preventDefault();
    fetch('https://adams-eatandreview.herokuapp.com/restaurants', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.restaurantName,
        cuisine: this.state.restaurantCuisine,
        address: this.state.restaurantCuisine,
        city: this.state.restaurantCuisine,
        state: this.state.restaurantCuisine,
        zip: this.state.restaurantZip,
        user_id: 1
      })
    })
    .then(function(response){
      return response.text();
    })

  }
  componentDidMount(){
    fetch('https://adams-eatandreview.herokuapp.com/restaurants')
    .then(function(response) {
      return response.json();
    })
    .then((obj) => {
      console.log(obj)
      this.setState({restaurants: obj})
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" render={ () => <Home title='Home' /> } />
            <Route path="/restaurants"
                  render={ () => <RestaurantList
                                  title='Restaurants'
                                  restaurants={this.state.restaurants} /> } />
            <Route path="/post"
                render={ () => <Post
                                title='Post New Restaurant'
                                newRestaurantSubmitHandler={this.newRestaurantSubmitHandler}
                                handleNameInput={this.handleNameInput}
                                handleCuisineInput={this.handleCuisineInput}
                                handleStreetAddressInput={this.handleStreetAddressInput}
                                handleCityInput={this.handleCityInput}
                                handleStateInput={this.handleStateInput}
                                handleZipInput={this.handleZipInput} /> } />
            <Route path="/profile" render={ () => <Profile title='Profile' /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
