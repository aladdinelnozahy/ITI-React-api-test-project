import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig/instance';

const MovieDetails = (props) => {
    const params = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // axios
        axiosInstance
            .get(`movie/${params.id}`)
            .then((res) => {
                console.log(res);
                setMovie(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className=' card border rounded text-center container p-3'>
            <h1 className='text-primary m-5' >{movie.original_title}</h1>
            <small className='text-danger'>Release Date: {movie.release_date}</small>
            <small className='text-danger'>popularity: {movie.popularity}</small>

            <p className='p-3'>{movie.overview}</p>
            <div className='container' >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="item m-2 container-fluid" style={{ maxWidth: "1000px" }} />

            </div>
        </div>
    );

}
export default MovieDetails;
