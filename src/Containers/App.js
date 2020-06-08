import React, { Component } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../Components/ErrorBoundary.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
  }

  render () {
    const { robots, searchField} = this.state;
    const filteredRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(searchField.toLowerCase());
    })
    //What if user data is large, takes too long to download?
    return !robots.length ?
      <h1>Loading Robots</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={ filteredRobots } />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
}

export default App;
