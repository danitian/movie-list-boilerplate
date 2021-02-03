import React from 'react';
import ExampleMovieData from './ExampleMovieData.jsx';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTextValue: '',
      displayedMovies: ExampleMovieData
    }
  }

  onSearchTextChangeHandler(event) {
    this.setState({
      searchTextValue: event.target.value
    })
  }

  onSubmitClick(event) {
    // console.log(this.state.displayedMovies);
    // console.log('Movie search submitted: ' + this.state.searchTextValue);

    let movieMatches = [];

    for (let i = 0; i < this.state.displayedMovies.length; i++) {
      console.log(this.state.displayedMovies[i]);

      if (this.state.searchTextValue === this.state.displayedMovies[i].title) {
        movieMatches.push(this.state.displayedMovies[i]);
      }
    }

    if (movieMatches.length === 0) {
      alert('No movies match your search of ' + this.state.searchTextValue);
    } else {
      alert('Movie match found: ' + this.state.searchTextValue);
    }

    // console.log(movieMatches);

    this.setState({
      displayedMovies: movieMatches
    })

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="searchbar">
          <div><Search value={this.state.searchTextValue} onSearchTextChangeHandler={this.onSearchTextChangeHandler.bind(this)} onSubmitClick={this.onSubmitClick.bind(this)} /></div>
        </div>
        <div>
          <MovieList movies={this.state.displayedMovies} />
        </div>
      </div>
    )
  }
}

export default App;

// const App = (props) => (
//   <div>Hello World!!</div>
// );