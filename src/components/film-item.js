import React from 'react';

export default function({filmDetails, searchType}) {

  let url;

  if(filmDetails.poster_path !== null) {
    url = `https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`;
  } else if (filmDetails.poster_path == null){
    url = 'https://www.stjordalfoto.no/templates/newyork/images/no_image.png';
  }

  // rendering different details according to type of search
  if(searchType === 'movie') {

    // receiving MOVIE - RENDER this:
    return (
      <li className="list-items">
        <img src={url} alt=""/>
        <section>
          <h3>{filmDetails.title}</h3>
          <p>{filmDetails.overview}</p>
          <h5>release data: {filmDetails.release_date}</h5>
          <span className="rating">rating: {filmDetails.vote_average}</span>
        </section>
      </li>
    )
  } else if(searchType === 'tv') {

    // receiving TV SERIAL - RENDER this:
    return (
      <li className="list-items">
        <img src={url} alt=""/>
        <section>
          <h3>{filmDetails.name}</h3>
          <p>{filmDetails.overview}</p>
          <h5>release data: {filmDetails.first_air_date}</h5>
          <span className="rating">rating: {filmDetails.vote_average}</span>
        </section>
      </li>
    )
  } else {

    // receiving PERSON - RENDER this:
    if(searchType === 'person' && filmDetails.profile_path !== null) {
      url = `https://image.tmdb.org/t/p/w500/${filmDetails.profile_path}`;
    } else {
      url = 'https://www.logicprohelp.com/forum/styles/canvas/theme/images/no_avatar.jpg';
    }
    return (
      <li className="list-items">
        <img src={url} alt=""/>
        <section>
          <h3>{filmDetails.name}</h3>
          <ul>
            {
              filmDetails.known_for.map( oneFilm => {
                return (
                        <li
                          className="list-items-insideList"
                          key={oneFilm.poster_path}
                        >
                          <p>{oneFilm.original_title}</p>
                          <img src={`https://image.tmdb.org/t/p/w500/${oneFilm.poster_path}`} alt="" />
                        </li>
                )
              })
            }
          </ul>
        </section>
      </li>
    )
  }



}