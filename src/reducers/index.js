import { bindActionCreators } from 'redux';
import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES } from '../actions'; 

const initialMovieState={
    list: [],
    favourites: [],
    showfavourites: false
}

export function movies (state = initialMovieState, action ) {
    console.log('MOVIES REDUCER')
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


// a separate state to store search results

const initialSearchState = {
    result: {}
};

export function search (state = initialSearchState, action){
    console.log('SEARCH REDUCER')
    return state;
}

// creating a reducer to store search results

const initialRootState = {
    movies: initialMovieState,
    search: initialSearchState
};

// export default function rootReducer (state = initialRootState, action){
//     return{
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// } 

export default combineReducers({ //combineReducers simply calls the reducers in the same format as above and still occupies less space.
    movies: movies, //movies is the reducer here
    search: search //search reducer
});

// Every time we call an action, the movie reducer and the search reducer is called because now both are states are in the rootReducer and whenever any action is called, the root reducer is called, hence calling both the states.