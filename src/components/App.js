import React from 'react';
import {data} from '../data';
import Navbar from './Navbar'
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component{

  componentDidMount() { 
    const {store} = this.props;
    store.subscribe(() => {//used the update the state 
      console.log('UPDATED');
      this.forceUpdate(); //not a very handy method to update an app. used to forcefully update the app component.
    });
    //Make an API call
    //dispatch an action to add into store.

    //the flow:
    // We dispatch an action to update the movies and then the subscribe is called and then the console.log in line 23 is called.
    store.dispatch(addMovies(data));

    console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index !== -1){
      //found the movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render () {
    console.log('RENDER', this.props.store.getState());
    const { list, favourites, showfavourites } = this.props.store.getState();
    
    const displayMovies = showfavourites ? favourites : list;
    console.log('Display movies', displayMovies);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showfavourites ? '' : 'active-tabs'}`} onClick = {() => this.onChangeTab(false)}> Movies </div>
            <div className={`tab ${showfavourites ? 'active-tabs' : ''}`} onClick = {() => this.onChangeTab(true)}> Favourites </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`}  //'$' sign is used for a varying string/object as here the 'index' varies for each movie so we use a dollar sign. As for the ``, these work exactly like '' but inside '', everything is converted into a string but the case is not the same with ``/ 
                dispatch={this.props.store.dispatch} 
                isMovieFavourite = {this.isMovieFavourite(movie)}
              /> 
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies"> No movies to display! </div> : null}
        </div>
      </div>
    );
  }
}

export default App;
