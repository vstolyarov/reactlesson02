import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ['DOGGY','CAT','HORSE','RABBIT','GOAT','SHEEP'],
      age: 1,
      life: 5,
      animal: ''
    };
  }

dice=()=> {
    let result = Math.floor(Math.random() * 6);
    let currentState=this.state.name;
    let updatedState=currentState[result];
    this.setState({animal: this.state.name[result]})
    }

  

displayLife=()=> {
  console.log('life');
  alert('this dog has ' + this.state.life + ' life left');
}

increaseLife=()=> {
  let currentlife = this.state.life;
  //current life 5
  let updatedlife = currentlife+1;
  this.setState({life: updatedlife})
}

decreaseLife=()=> {
  let currentlife = this.state.life;
  let updatedlife = currentlife-1;
  this.setState({life: updatedlife});
}

increaseAge=()=> {
  let currentAge=this.state.age
  let updatedAge=currentAge+1 
  setTimeout(
    function(){
     this.setState({age: updatedAge});
     }.bind(this), 2000);
}

render() {
  return (
    <div className="App">
      <Component1 name={this.state.name} onClicked={this.showLife1}/>
      
      <Component2 age={this.state.age}/>

      <Component3 life={this.state.life}/>

    
      <h2>Your pet is called: {this.state.animal}</h2>
      <h2>Your pet is: {this.state.age} years old</h2>
      <h2>Your pet has: {this.state.life} life left</h2>
      <button onClick={this.displayLife}>SHOW LIFE</button>
      <button onClick={this.increaseLife}>+ LIFE</button>
      <button onClick={this.decreaseLife}>- LIFE</button>
      <button onClick={this.increaseAge}>+ Age every 2sec after click</button>
      <button onClick={this.dice}>TOSTRING_SLICE_SORT</button>
    </div>

  );
}
}

export default App;
