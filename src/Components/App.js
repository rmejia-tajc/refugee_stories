import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import { HomeView, StoriesView, AddStoryFormView, AboutUsView, ThankYouView, StoryView } from '../views';
import AdminPage from './AdminPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    }
  };


  componentDidMount() {
    localStorage.setItem("username", this.state.username)
  }


  render() {
    return (
      <div className="App">

        <div className="topBar">

          <nav className="navbar">
            <div className="nav-links">
              {/* <NavLink className="navLink" to="/about-us">About Us</NavLink> */}
              <NavLink className="navLink" exact to="/">Home</NavLink>
              <NavLink className="navLink" to="/stories">Stories</NavLink>
              <NavLink className="navLink" to="/add-story">Share Your Story</NavLink>
            </div>

            <NavLink className="navLink" to="/admin">Admin</NavLink>
          </nav>

        </div>

          <Route path="/about-us" component={AboutUsView} />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/stories" component={StoriesView} />
          <Route path="/stories/:id" component={StoryView} />
          <Route path="/add-story" render={props => <AddStoryFormView {...props} />} />
          <Route path="/thank-you" component={ThankYouView} />
          <Route path="/admin" component={AdminPage} />

        
      
      </div>
    );
  }
}

export default App;