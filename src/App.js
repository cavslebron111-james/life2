import React, { Component } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Child from './Child';





class App extends Component {
  constructor(props){
    super()
    this.state = {
      name: "ruel"
    }
  console.log('constructor')
  }
    componentWillMount(){
     //before rendering is component will mount
      //we can set state in component will mount
     
      if(window.innerWidth < 500){
       this.setState({innerWidth:window.innerWidth})
     }
     
      console.log('component will mount')
    }
  
    componentDidMount(){
      // after render is component did mount
      console.log('component did mount')
    }
 
 
 
    render() {
   // do not call set state in render
    console.log('render')
    return (
  <div className="container">
  <h2>life cycle mode</h2>
  <h3>my name  is {this.state.name} innerwidth:{this.state.innerWidth}</h3>
  <Child name ={this.state.name} />
  
  </div>
  
 
 

 





  
    );
  }
}

export default App;
