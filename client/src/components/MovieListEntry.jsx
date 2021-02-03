import React from 'react';

var MovieListEntry = (props) => {
  const movieListEntryStyle = {
    color: 'blue',
    margin: '10px',
  };

  return (
    <div className="movieListEntry" style={movieListEntryStyle} >{props.movie.title}</div>
  )
}

export default MovieListEntry;