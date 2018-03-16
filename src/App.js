import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ['DOGGY', 'CAT', 'HORSE', 'RABBIT', 'GOAT', 'SHEEP'],
      age: 1,
      life: 5,
      animal: ''
    };
  }

  dice = () => {
    let result = Math.floor(Math.random() * 6);
    this.setState({ animal: this.state.name[result]})
  }

  changePet = (event) =>
  {
    const target=event.target;
    for (let i =0; i<this.state.name.length; i++) {
      if (target.value==this.state.name[i]) {
        console.log(target.value)
        return this.setState({ animal: this.state.name[i]})
      }
    }
   
    
  }

  displayLife = () => {
    console.log('life');
    alert('this dog has ' + this.state.life + ' life left');
  }

  increaseLife = () => {
    let currentlife = this.state.life;
    //current life 5
    let updatedlife = currentlife + 1;
    this.setState({ life: updatedlife })
  }

  decreaseLife = () => {
    let currentlife = this.state.life;
    let updatedlife = currentlife - 1;
    this.setState({ life: updatedlife });
  }

  increaseAge = () => {
    let currentAge = this.state.age
    let updatedAge = currentAge + 1
    setTimeout(
      function () {
        this.setState({ age: updatedAge });
      }.bind(this), 2000);
  }

  render() {
    return (
      <div className="App">
        <Component1 name={this.state.name} onClicked={this.showLife1} />

        <Component2 age={this.state.age} />

        <Component3 life={this.state.life} />


        <h2>Your pet is called: {this.state.animal}</h2>
        <h2>Your pet is: {this.state.age} years old</h2>
        <h2>Your pet has: {this.state.life} life left</h2>

        <MuiThemeProvider>
          <RaisedButton onClick={this.displayLife} label="Show Life" style={style} />
          <RaisedButton onClick={this.increaseLife} label="+Life" style={style} />
          <RaisedButton onClick={this.decreaseLife} label="-Life" style={style} />
          <RaisedButton onClick={this.increaseAge} label="Age+ 2sec after click" style={style} />
          <RaisedButton onClick={this.dice} label="Choose Pet" style={style} />
          <div>
            <br />
            <TextField
              hintText="Input your name here" style={style} onChange={this.changePet}
            /><br />
            <br />
            <TextField
              hintText="Input your pet's Name"
              floatingLabelText="Character Name" style={style}
            /><br />
          </div>
        
        </MuiThemeProvider>
        </div>
        );
      }
      }
      
      export default App;
