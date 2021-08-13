//action types
export const ADD_MOVIES = 'ADD_MOVIES'; 
//action types are used as variables.

//these functoins are called action creators.
export function addMovies (movies){
    return{
        type: ADD_MOVIES,
        movies: movies
    }
}

//fucntion above is used to create actions 