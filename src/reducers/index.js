import { bindActionCreators } from 'redux';
import { ADD_MOVIES } from '../actions'; 

const initialMovieState={
    list: [],
    favourites: []
}

export default function movies (state = initialMovieState, action ) {
    if(action.type==ADD_MOVIES){ //Here we simply pass action.movies instead of adding the values in the state array and then changing the state.
        return {
            ...state,
            list: action.movies
        }
    }
    return state;
}

//Here the function name is movies and that is the reducer name as well.

// const ADD_MOVIES = 'ADD_MOVIES'; //string comparison is not appriciated much so we store the string in a variable and then use it. Makes it easy for us to change in a larger code as well.
// we move the above to the actions file/