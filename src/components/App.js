import React from 'react';
import {data} from '../data';
import Navbar from './Navbar'
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

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
  }

  render () {
    console.log('RENDER', this.props.store.getState());
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies </div>
            <div className="tab"> Favourites </div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} /> //'$' sign is used for a varying string/object as here the 'index' varies for each movie so we use a dollar sign. As for the ``, these work exactly like '' but inside '', everything is converted into a string but the case is not the same with ``/ 
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
