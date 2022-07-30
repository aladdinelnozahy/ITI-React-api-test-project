import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig/instance';

const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axiosInstance
            // axios
            .get('movie/popular')
            // .get('movie/popular')

            .then((res) => {
                // console.log(res.data);
                setMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err);
            });

    }, [])


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
