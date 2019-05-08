import React, {useState, useContext} from 'react';
import { MovieContext } from './MovieContext'

const Nav = ({ name, price }) => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            <h3>RH</h3>
            <h4>List of Movies: {movies.length}</h4>
        </div>
    );
}

export default Nav;