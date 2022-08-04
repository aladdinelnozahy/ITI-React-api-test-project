import React from "react";
import {useSelector,useDispatch} from "react-redux";
import FavouriteStoreArray from "../store/actions/newFavDel"


const Favourites=()=>{
    var movies= useSelector((state)=> state.loader.favMovies);
    const dispatch= useDispatch();



    const removeFromFav= (removeId)=>{
        let removeMovie= movies.find((fav)=>{
            return fav.id === removeId
        })
        movies.splice(movies.indexOf(removeMovie),1)
        dispatch(FavouriteStoreArray(movies))
    }
}    
return (
    <>
        
    </>
)
