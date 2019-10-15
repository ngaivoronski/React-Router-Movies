import React, { useState, useEffect } from 'react';
import {Route, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        {/* <Route exact path="/" component={MovieList} /> */}
        <Route exact path="/" component={MovieList} />
        {/* <Route path="/movies/:movieID" component={Movie} /> */}
        <Route path="/movies/:movieID" render={props => <Movie {...props} addToSavedList={addToSavedList} /> } />
      </div>
      

    </div>
  );
};

export default App;
