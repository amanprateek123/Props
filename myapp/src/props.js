import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <h1>Hello,{this.props.propString}</h1>
       <h2>array:{this.props.propArray}</h2>
      </div>
    
  }
  App.propTypes = {
      name: propType.string,
      array: PropType.array.isRequired,
  };
  App.defaultProps = {
      name: Aman,
      array:[1,2,3,4]
  });
}
export default App;