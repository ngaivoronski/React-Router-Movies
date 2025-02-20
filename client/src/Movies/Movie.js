import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const id = props.match.params.movieID;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
      axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log("rerender");
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.movieID]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie}/>
      <div onClick={saveMovie} className="save-button">Save</div>
    </div>
    
  );
}

export default Movie;
