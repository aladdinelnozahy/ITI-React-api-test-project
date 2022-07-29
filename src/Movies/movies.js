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
                alert(err);
            });

    }, [])
    // axios.post("url","data".{})


    return (
        <>
            {/* <ul>
          {movies.map((movie)=>{
            return (
            <Link to={`/details/${movie.id}`} key={movie.id}>
                <li >{movie.title}</li>                
            </Link>
            );
        })}

       </ul>  */}





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
            </div>

        </>
    );
}

export default Movies;
