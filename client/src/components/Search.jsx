import React from 'react';

var Search = (props) => (
  <form className="search-bar" onSubmit={props.searchSubmitClick}>
    <input className="search-input" type="text" value={props.value} onChange={props.searchTextChangeHandler} />
    <input type="submit" value="Search" className="search-submit" />
  </form>
);

export default Search;