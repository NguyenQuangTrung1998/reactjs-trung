import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Slider from './components/Slider';
import NewTrend from './products/NewTrend';
class App extends Component {
 render(){
  return (
    <div className="App">
     <Menu /> 
    <Slider />
    <NewTrend/>
    </div>
  );
 }
}

export default App;
