import React from 'react'
//import { Component } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState ('Maria');
  const [age, setAge] = useState (35);

  const updateData = () => {
    setName("Andy");
    setAge (44);
  }
  return(
    <div>
<h1>Hello {name}</h1>
<h2>You are {age}</h2>
<button onClick = {updateData}>Click Here</button>

    </div>
  )
}


export default App;



/*class App extends Component{

state ={
  name: 'Maria'
}

changeName() {
  this.setState(
    {name: 'Andy'}
  )
}

  render(){
  return (
    <div >
     <h1>Hello {this.state.name}</h1>
     <button onClick= {()=> this.changeName()}>Click Here</button>
    </div>
  );
}
}*/