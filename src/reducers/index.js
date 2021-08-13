import { bindActionCreators } from 'redux';
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES } from '../actions'; 

const initialMovieState={
    list: [],
    favourites: [],
    showfavourites: false
}

export default function movies (state = initialMovieState, action ) {
    // if(action.type==ADD_MOVIES){ //Here we simply pass action.movies instead of adding the values in the state array and then changing the state.
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

//we use switch case because of better use and readibility.
    switch (action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title != action.movie.Title
            );
            return{
                ...state,
                favourites: filteredArray 
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showfavourites: action.val
            }
        
        default:
            return state;
    }
}

//Here the function name is movies and that is the reducer name as well.

// const ADD_MOVIES = 'ADD_MOVIES'; //string comparison is not appriciated much so we store the string in a variable and then use it. Makes it easy for us to change in a larger code as well.
// we move the above to the actions file/