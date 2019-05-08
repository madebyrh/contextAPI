import React, {useState, useContext} from 'react';
import Movie from './Movie'
import { MovieContext } from './MovieContext'

const MovieList = () => {
    //const value = useContext(MovieContext);
    const [movies, setMovies] = useContext(MovieContext);


    
    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    );
    
   /*
   return (
       <div>
           <h1>{value}</h1>
       </div>
   )
   */
}

export default MovieList;