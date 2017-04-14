import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './components/search';
import FilmList from './components/film-list';


class App extends Component {

  constructor() {
    super();

    this.state = {
      filmName: [],
      type: 'movie'
    };

    this.showFilm = this.showFilm.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  changeType(type) {
    this.setState({ filmName: [] });
    this.setState({ type: type });
  }

  showFilm(filmName) {
      // remove all whitespaces
    const filmSearched = filmName.name.replace(/\s/g, '+');
    const film_db_key = 'dfc2b5d818098aceee2a4842af9097e6';
    const film_db_url = `https://api.themoviedb.org/3/search/${this.state.type}?api_key=${film_db_key}&query=${filmSearched}`;

      // make AJAX request
    if(filmName.name != '') {
      axios.get(film_db_url)
        .then(data => this.setState({ filmName: data.data.results }) )
    }
  }

  render() {
    return (
      <div>
        <h1>Search in IMDB:</h1>
        <Search
          setFilmName={ this.showFilm }
          searchType={ this.changeType }
        />
        <FilmList
          dataFilms={ this.state.filmName }
          // passing searchType to film item for rendering different details
          searchType={ this.state.type }
        />
      </div>
    )
  }
}

const wrapper = document.querySelector('#wrapper');
wrapper.style.minHeight = `${window.innerHeight}px`;

ReactDOM.render(<App />, wrapper);
