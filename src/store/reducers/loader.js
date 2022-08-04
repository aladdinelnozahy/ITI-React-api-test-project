const INITIAL_STATE = {
   favMovies:[],
    counter: 0,
  };
  
  export default function loaderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

      case "FAV_MOVIES":

      state.favMovies.push(action.payload)
        return { 
          ...state, counter:state.favMovies.length };
        case'favouriteStoreArray':
        state.favMovies=new Array(...action.payload);
        return{
          ...state, counter:state.favMovies.length
        };
      default:
        return state
      
    }
  }
  