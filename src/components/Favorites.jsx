import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Favorites() {
  //function to add favorites and show them on screen
  const movieList = useSelector(state => state.titleFavorite)
  const dispatch = useDispatch();

  return <>
    <div>
    {

    }
        <h1>
            Favorites
        </h1>
        <div>
    {
        movieList.map((movie) => {
          if (movie.favorite.favorite) {
            return (
            <div>
            <h2>Movie Name: {movie.title.movieTitle}</h2>
            <p>Fav: {movie.favorite.favorite}</p>
            </div>
            )
          }
        })
        
    }
    </div>
    </div>
  </>
}
//convert the string of false to an actual booolean value 
