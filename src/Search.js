import React from 'react'
import preloadData from './sample.json'
import './App.css'


const Search=()=> (
 <div className='search'>
    {preloadData.shows.map(show=> (
    <div className='show-card'>
    <img alt={`${show.title} Show Poster`} src={`/public/img/posters/${show.poster}`} />
           
        <div>
        <h3>{show.title}</h3>
        <h4>{show.year}</h4>
        <p>{show.description}</p>
        </div>
    </div>
   ))}
 </div>    
);
//number of spacing <pre><code>{JSON.stringify(preloadData, null, 4)}</code></pre>
export default Search;
