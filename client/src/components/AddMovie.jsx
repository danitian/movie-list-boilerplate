import React from 'react';

var AddMovie = (props) => {
  return(
    <form className="addMovie-bar" onSubmit={props.addMovieSubmitClick}>
      <input className="addMovie-input" type="text" onChange={props.addMovieTextChangeHandler} />
      <input type="submit" value="Add Movie" className="addMovie-submit" />
    </form>
  )
}

export default AddMovie;