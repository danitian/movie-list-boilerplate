import React from 'react';

var Search = (props) => (
  <form className="search-bar" onSubmit={props.onSubmitClick}>
    <input className="search-input" type="text" value={props.value} onChange={props.onSearchTextChangeHandler} />
    <input type="submit" value="submit" className="search-submit" />
  </form>
);

export default Search;