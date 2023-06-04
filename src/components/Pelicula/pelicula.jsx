import React from 'react';
import {useParams} from "react-router-dom";


const Pelicula = () => {

    let {id, title} = useParams();

    return (

        <h1>{title}</h1>


    );
}

export default Pelicula;