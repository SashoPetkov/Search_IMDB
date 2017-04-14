import React, { Component } from 'react';

class Search extends Component {

  constructor(){
    super();
    this.submitForm = this.submitForm.bind(this);
    this.changeType = this.changeType.bind(this);
    this.animation = this.animation.bind(this);
    this.type = ['movie','tv','person'];
  };

  animation() {
    const btn = this.btn;

    btn.classList.add('click-send');
    setTimeout(() => {
      btn.classList.remove('click-send');
    }, 100);
  }

  submitForm(event) {
    event.preventDefault();
    const filmName = {
      name: this.filmName.value
    };
    // start Parent function - (setFilmName) with parameter from input field
    this.props.setFilmName(filmName);
    this.filmName.value = "";
  };

  changeType(event) {
    this.props.searchType(event.target.value);
  }
  
  render() {
    return (
      <form className="mainSearch" onSubmit={ this.submitForm }>
        <section>
          <label htmlFor="search">Choose movie/tv show/actor:</label>
          <input
            id="search"
            placeholder="choose your film / tv show / actor"
            type="text"
            ref={(input) => this.filmName = input}
          />

          <input
                 type="submit"
                 value="GO!"
                 onClick={ this.animation }
                 ref={ btn => this.btn = btn }
          />
        </section>
        <label htmlFor="select">Choose category:</label>
        <select id="select" onChange={ this.changeType }>
          {
            this.type.map(oneType => {
              return <option key={oneType}>{oneType}</option>
            })
          }
        </select>
      </form>
    )
  }
}

export default Search;
