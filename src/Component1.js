import React, { Component } from 'react';

//import App from './App';

class Component1 extends Component {
    constructor(props){
        super(props);
        this.state = { actors: []
        };

        
}  

componentDidMount() {
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c9778c63')
.then( response => response.json() )
.then(data=> { 

  this.setState({actors: data.Actors});
  console.log("state", this.state.actors);
})

  }






render() {  
  
  
   return (
<div>
    
{this.state.actors}
<button onClick={this.props.newpet}>NEW PET</button>
 
 </div>

        );
}
}
export default Component1;
