import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DialogExampleSimple from './dialog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      animal: '',
      changeOnce: true
    };
  }

  dice = () => {
    if (this.state.changeOnce) {
      this.setState({ name: ['DOGGY', 'CAT', 'HORSE', 'RABBIT', 'GOAT', 'SHEEP'], age: 1, life: 5, animal: '' })
      let result = Math.floor(Math.random() * 6);
      this.setState({ animal: this.state.name[result] });
      this.setState({ changeOnce: false })
    }

  }

  handleClick = () => {
    console.log('Click happened');
  }

  changePet = (event) => {
    const target = event.target;
    for (let i = 0; i < this.state.name.length; i++) {
      if (target.value.toUpperCase() === this.state.name[i]) {
        console.log(target.value)
        return this.setState({ animal: this.state.name[i] })
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
    if (this.state.age < 10) {
      alert('pet living well')
      setTimeout(() => {
        this.setState({ age: updatedAge });
      }, 2000);
    }
    else if (this.state.age === 10) {
      alert('your pet has died choose another')
      this.setState({ changeOnce: true })
    }


  }

  render() {
    return (
      <div className="App">
        <Component1 name={this.state.name} newpet={this.dice} />

        <Component2 age={this.state.age} />

        <Component3 life={this.state.life} />


        <h2>Your pet is called: {this.state.animal}</h2>
        <h2>Your pet is: {this.state.age} years old</h2>
        <h2>Your pet has: {this.state.life} life left</h2>

        <MuiThemeProvider>
          <div>
          <RaisedButton onClick={this.displayLife} label="Show Life" style={style} />
          <RaisedButton onClick={this.increaseLife} label="+Life" style={style} />
          <RaisedButton onClick={this.decreaseLife} label="-Life" style={style} />
          <RaisedButton onClick={this.increaseAge} label="Age+ 2sec after click" style={style} />
          <RaisedButton onClick={this.dice} label="Choose Pet (Allowed only once)" style={style} />
          
          <DialogExampleSimple style={style} />
          </div>
          <div>
            <br />
            <TextField
              hintText="Type of Pet:" style={style} onChange={this.changePet}
            /><br />
            <br />
            <TextField
              hintText="Input your Name"
              floatingLabelText="Character Name" style={style}
            /><br />
            <TextField
              hintText="username:" type="text" style={style} onChange={this.changePet}
            /><br />
            <TextField
              hintText="password:" type="password" style={style} onChange={this.changePet}
            /><br />
            <FlatButton label="Login" hoverColor='rgb(156,204,101)' />

          </div>
        </MuiThemeProvider>

        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/App">App Home</Link></li>
              <li><Link to="/App">App Home 2</Link></li>

            </ul>
            <Route path="/App" exact render={() => <h1>App Home</h1>} />
            <Route path="/App" exact render={() => <h1>App Home 2</h1>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
