import React from 'react'
import preloadData from './sample.json'
import './App.css'

const Search=()=> (
    <div className='search'>
       {preloadData.shows.map(show=> <h3>{show.title}</h3>)}
    
    </div>
);
//number of spacing <pre><code>{JSON.stringify(preloadData, null, 4)}</code></pre>
export default Search;
