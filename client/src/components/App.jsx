import React from 'react';
import ExampleMovieData from './ExampleMovieData.jsx';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.allMovies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];

    this.watchedMovies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'}
    ];

    this.toWatchMovies = [
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}
    ];

    this.state = {
      searchTextValue: '',
      addMovieTextValue: '',
      tab: 'All',
      displayedMovies: this.allMovies
    }
  }

  addMovieTextChangeHandler(event) {
    this.setState({
      addMovieTextValue: event.target.value
    })
  }

  addMovieSubmitClick(event) {
    var alreadyExists = false;
    var addedMovieObj = {title: this.state.addMovieTextValue};
    // console.log(addedMovieObj);

    for (let i = 0; i < this.allMovies.length; i++) {
      if (addedMovieObj.title === this.allMovies[i].title) {
        alreadyExists = true;
      }
    }

    if (alreadyExists) {
      alert('The movie ' + this.state.addMovieTextValue + ' is already on your lists!');
    } else {
      if (this.state.tab === "Watched") {
        this.allMovies.push(addedMovieObj);
        this.watchedMovies.push(addedMovieObj);
        this.setState({
          displayedMovies: this.watchedMovies
        });

        alert('The movie ' + this.state.addMovieTextValue + ' has been added to your ' + this.state.tab + ' list!');
      } else if (this.state.tab === "To Watch") {
        this.allMovies.push(addedMovieObj);
        this.toWatchMovies.push(addedMovieObj);
        this.setState({
          displayedMovies: this.toWatchMovies
        });

        alert('The movie ' + this.state.addMovieTextValue + ' has been added to your ' + this.state.tab + ' list!');
      } else {
        alert('Please choose one of the tabs first: Watched or To Watch');
      }

    }

    event.preventDefault();
  }

  searchTextChangeHandler(event) {
    this.setState({
      searchTextValue: event.target.value
    })
  }

  searchSubmitClick(event) {
    let movieMatches = [];

    for (let i = 0; i < this.state.displayedMovies.length; i++) {
      console.log(this.state.displayedMovies[i]);

      if (this.state.searchTextValue === this.state.displayedMovies[i].title) {
        movieMatches.push(this.state.displayedMovies[i]);
      }
    }

    if (movieMatches.length === 0) {
      alert('No movies match your search of \"' + this.state.searchTextValue + '\" in your ' + this.state.tab + ' list');
    } else {
      alert('Movie match found for \"' + this.state.searchTextValue + '\" in your ' + this.state.tab + ' list');
    }

    this.setState({
      displayedMovies: movieMatches
    })

    event.preventDefault();
  }

  allTabClick(event) {
    this.setState({
      tab: 'All',
      displayedMovies: this.allMovies
    })
  }

  watchedTabClick(event) {
    this.setState({
      tab: 'Watched',
      displayedMovies: this.watchedMovies
    })
  }

  toWatchTabClick(event) {
    this.setState({
      tab: 'To Watch',
      displayedMovies: this.toWatchMovies
    })
  }

  render() {
    return (
      <div>
        <div className="inputbar">
          <div><AddMovie value={this.state.addMovieTextValue} addMovieSubmitClick={this.addMovieSubmitClick.bind(this)} addMovieTextChangeHandler={this.addMovieTextChangeHandler.bind(this)}/></div>
        </div>
        <div className="tabs-and-search-bar">
          <div className="searchbar"><Search value={this.state.searchTextValue} searchTextChangeHandler={this.searchTextChangeHandler.bind(this)} searchSubmitClick={this.searchSubmitClick.bind(this)} /></div>
          <div className="watch-tab">
          <button className="all-tab" onClick={this.allTabClick.bind(this)}>All</button>
            <button className="watched-tab" onClick={this.watchedTabClick.bind(this)}>Watched</button>
            <button className="to-watch-tab" onClick={this.toWatchTabClick.bind(this)}>To Watch</button>
          </div>
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