import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig/instance';
import { useDispatch, useSelector } from 'react-redux';
import { favouriteMovies } from '../store/actions/newFavDel';
import {BsFillHeartFill} from "react-icons/bs";
const Movies = () => {

    const [movies, setMovies] = useState([]);
    var [pageStart,setPageStart]= useState(1);

    useEffect(() => {
        axiosInstance
            // axios
            .get('movie/popular',{params:{page:pageStart}})
            .then((res) => {
                // console.log(res.data);
                setMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err);
            });

    }, [pageStart]);
    function prev(){
        if(pageStart>1){
            setPageStart(--pageStart)
        }
    }
    function next(){
        setPageStart(++pageStart)
    }
// ------------------------------

    // const favs =useSelector(state=>state)
    // const dispatch =useDispatch();

    // const removeFromFav= (removeId)=>{
    //     let removeMovie= favs.favMovies.find((fav)=>{
    //         return fav.id === removeId
    //     })
    //     favs.favMovies.splice(favs.favMovies.indexOf(removeMovie),1)
    //     favs.counter= favs.counter-1
    // }
    // const addToFav=(mov)=>{
    //     let FindMovie= favs.favMovies.find((fav)=>{
    //         return fav.id === mov.id;
    //     });
    //     if(!FindMovie){
    //         dispatch(favouriteMovies(mov))
    //     }
    //     if (FindMovie){
    //         removeFromFav
    //     }
    // }
    
    return (
        <>
            {/* 
            <div className="row g-5 mt-3 container-fluid mx-auto bg-light m-2 p-3">
                {movies.map((movie) => {
                    console.log(movie)
                    return <div className='col-md-3' key={movie.id}>
                        <div className="d text-center border">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="item" style={{ maxWidth: "400px" }} />
                            
                            <Link to={`/details/${movie.id}`} key={movie.id}>
                            <h4 style={{  }}>{movie.original_title}</h4>
                            </Link>
                        </div>
                    </div>


                })}
            </div> */}

            <div className='container my-5'>
                <div className='album py-5 bg-light'>
                <button className="btn btn-group bg-warning text-dark  " onClick={()=>prev()} >Previous</button>
                 
                <button className="btn btn-group bg-success text-light" onClick={()=>next()} >Next</button>
                <p>Page Number: {pageStart}</p>
                    <div className='container'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                            {movies.map((movie) => {
                                return (
                                    <div className='col h-25 text'>

                                        <div className='card shadow-sm'>
                                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="item" style={{ maxWidth: "400px" }} />

                                            <div className='card-body text-center'>
                                            <h4>{movie.original_title}</h4>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    
                                                    <div className='btn-group'>
                                                        <Link to={`/details/${movie.id}`} key={movie.id}>
                                                        <button type="button" className='btn btn-sm btn-success m-1'>details</button>
                                                        </Link>
                                                        {/* <BsFillHeartFill color={favs.favMovies.find((fav)=> fav.id ===movie.id)?"red":"black"} onClick={()=> addToFav(movie)}/> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;
