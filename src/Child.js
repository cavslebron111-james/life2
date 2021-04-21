import React, { Component } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";





class Child extends Component {
  constructor(props){
    super()
    
  console.log('child constructor')
  }
    componentWillMount(){
     //before rendering is component will mount
      //we can set state in component will mount
     
      console.log('child component will mount')
    }
  
 componentDidMount(){
     console.log('child component did mount')
 }
 
 
 
 
    render() {
   // do not call set state in render
    console.log('child render')
    return (
  <div className="container">
   child name :{this.props.name}
  
  
  </div>
  
 
 

 





  
    );
  }
}

export default Child;
