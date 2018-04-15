import React, { Component } from 'react';
import preloadData from './sample.json'
import './App.css'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: preloadData
        }
    }

    movieHandler = () => {
        console.log('Movie handler!')
        console.log(this.state.shows)
    }

    filterMovie = (event) => {

        let filtered=this.state.data.shows.filter(x=>x.title===event.target.value)
        console.log(filtered)
        
      }

    render() {

        const style = {
            backgroundColor: "blue",
            color: "white",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            
            
          };
         
        return (
         
            <div>

            <div>
            <input type="text" value={this.state.searchValue} placeholder="Enter Movie Name" onChange={this.filterMovie} />
            <button onClick={this.filterMovie}>Search</button>    
            </div>

            <div className='flex-container'>
                {this.state.data.shows.map(show => (
                    <div className='show-card'>
                        <img alt={`${show.title} Show Poster`} style={style} src={`/imageFiles/${show.poster}`} />

                        <div>
                            <h3 style={style}>{show.title}</h3>
                            <h4>{show.year}</h4>
                            <p>{show.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            </div>
        )
    }


}
//number of spacing <pre><code>{JSON.stringify(preloadData, null, 4)}</code></pre>
export default Search;
