import React from 'react';

var MovieListEntry = (props) => {
  const movieListEntryStyle = {
    color: 'blue',
    margin: '10px',
  };

  return (
    <div className="movieListEntry" >
      <div className="MovieTitle" style={movieListEntryStyle} onClick={() => {props.movieTitleClick(props.movie)}}>{props.movie.title}</div>
      {(props.clickedMovie === props.movie.title && props.selectMovie) &&
      <div className="MovieDetails">
        {/* this is where the condition lives, to toggle the movie details class. within the moviedetails div brackets above */}
        <div className="MovieDate">
          Release Date: {props.movie.release_date}
        </div>
        <div className="MovieRating">
          Rating /5: {props.movie.vote_average}
        </div>
        <div className="MovieVoteCount">
          Number of votes: {props.movie.vote_count}
        </div>
        <div>
          Watched: {props.watched}
        </div>
      </div>
      }
    </div>
  )
}

export default MovieListEntry;