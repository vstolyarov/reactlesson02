import React, { Component } from 'react';
import preloadData from './sample.json'
import './App.css'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: preloadData,
            value: ''
        }
    }

    handleSubmit = (event) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    filterMovie = (event) => {

        //        let filtered = this.state.data.shows.filter(x => x.title === event.target.value)
        //        console.log(filtered)
        this.setState({ value: event.target.value });
        console.log(this.state.value)

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
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
          <input type="text" value={this.state.value} placeholder="Enter Movie Name" onChange={this.filterMovie} />
                        </label>
                        <input type="submit" value="Find Movie Name" />
                    </form>
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
                                <iframe width={'50%'} height={'50%'} src={`http://www.youtube.com/embed/${show.trailer}`}></iframe>
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
