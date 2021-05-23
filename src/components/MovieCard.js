import React from "react";

class MovieCard extends React.Component {
  render () {
    const { movie } = this.props;
    return (
        <div className="movie-card">
            <div className="left">
              <img src={movie.poster} alt="movie-poster" />
            </div>
            <div className="right">
              <div className="title"><h1>{movie.title}</h1></div> 
              <div className="overview"><h3>{movie.overview}</h3></div> 
              <div className="footer">
                <div className="genres"><h6>{movie.genres}</h6></div> 
                <button className="favourite-btn">Favourite</button>
              </div> 
            </div>
        </div>
      );
  }
}

export default MovieCard;
