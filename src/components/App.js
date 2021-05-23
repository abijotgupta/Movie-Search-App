import React from "react";
import NavBar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>  
          <div className="favourite">Favourites</div>
        </div>
        <div className="moviesList">
          { data.map((movie,index) => (
              <MovieCard 
                movie = { movie } 
                key = { `movies-${index}` }
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
