
import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteMovie, setFavorite } from '../actions';



export default function Home() {
  const [movieTitle, setMovieTitle] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [movieYear, setMovieYear] = useState('')

  const movieList = useSelector(state => state.titleFavorite)

  console.log("THE CONSOLE LOG: ", movieList);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieObject = {
      title: {movieTitle},
      favorite: {favorite}
    }
    console.log(movieObject)

    dispatch(addFavoriteMovie(movieObject))
    

    // cool code
    // create movie object and dispatch the action with the movie object in it
  }
  //onChange use in input field, using hooks to get the value that somebody types in and save it, then hooking up redux to the app
  //first get the value
  // submit saves it to the state
  //set up a store, reducer and action
  // alreadyWatched is the Favorites
  
  
  return <>
  <div className='pb-5'>
    <form action="">
    <label>Movie Title: </label>
    <br/>
    <input value={movieTitle}
    name='movieTitle' type="text" placeholder='Enter Movie Title' onChange={(e) => setMovieTitle(e.target.value)}/>
    <br/>
    <br/>
    <label>Movie Year: </label>
    <br/>
    <input value={movieYear} type="text" placeholder='Enter the Year' onChange={(e) => setMovieYear(e.target.value)}/>
    <br/>
    <br/>
    <label>Favorite: </label>
    <br/>
    <input type="checkbox" name="favorite" id="favorite" onChange={(e) => setFavorite(e.target.checked)}/>
    <br/>
    <br/>
    <button type='submit'  onClick={(e) => handleSubmit(e)} className='btn btn-primary' id='btn-submit'>Submit</button>

  </form>
  <div>
    <h1>
      I have watched:{movieTitle}
    </h1>
    <h3>
      it was released: {movieYear}
    </h3>
    <div>
    {
        movieList.map((movie) => {
          return (
          <div>
          <h2>Movie Name: {movie.title.movieTitle}</h2>
          <p>Fav: {movie.favorite.favorite}</p>
          </div>
          )
        })
        
    }
    </div>
  </div>
  </div>
  </>

}
