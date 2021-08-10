export default function movies (state = [], action ) {
    if(action.type=='ADD_MOVIES'){ //Here we simply pass action.movies instead of adding the values in the state array and then changing the state.
        return action.movies;
    }
    return state;
}