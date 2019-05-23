import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Content/>
       <h1>{this.props.headertext}</h1>
       <h2>{this.props.Content}</h2>
       <h1>Hello,{this.props.propString}</h1>
       <h2>array:{this.props.propArray}</h2>
      </div>
    );
  }
}
App.propTypes = {
  propString: PropTypes.string,
  propArray: PropTypes.array.isRequired,
};
App.defaultProps = {
  propString: 'Aman',
  propArray:[1,2,3,4]
};

class Header extends Component {
  render() {
    return (
      <div>
      <h1>Welcome to React</h1>
      <img src={logo} className="App-logo" alt="logo"></img>
      </div>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <div>
       <h2>Hello World!</h2>
       <p>I am Aman Prateek</p>
      </div>
    );
  }
}

export default App;
