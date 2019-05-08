import React, { useState, createContext } from 'react';
import { tsPropertySignature } from '@babel/types';

//外に書く
export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}