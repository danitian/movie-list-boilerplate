import React from 'react';
import MovieListEntry from "./MovieListEntry.jsx"

var MovieList = (props) => {
  return(
    <div className="movielist">
      {props.movies.map(movie =>
        <MovieListEntry movie={movie} key={movie.title} />)}
    </div>
  )
};

export default MovieList;