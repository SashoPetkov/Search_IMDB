import React from 'react'
import FilmItem from './film-item'

export default function({dataFilms, searchType}) {

  return (
    <ul className="list">
      {
        dataFilms.map((oneFilm, index) => {
          // remove all other languages except EN
          if (dataFilms[index].original_language === 'en' ||
            // only for peoples because they haven`t language
            dataFilms[index].original_language === undefined) {
            return (
              <FilmItem

                key={index}
                filmDetails={ dataFilms[index] }
                // push searchType to film item for rendering different details
                searchType={ searchType }
              />
            )
          }
        })
      }
    </ul>
  )
}
