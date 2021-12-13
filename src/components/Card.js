import React, { useEffect, useState } from "react";
import axios from 'axios';
// import Button from '@mui/material/Button';

export default function Card(){

    const [next, setNext] = useState(0)

    const [listPokemon, setlistPokemon] = useState(null)

    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`).then(function(response){
    // })
    // }, [search])

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${next}`).then((response) =>{
            setlistPokemon([...response.data?.results])
    })
    }, [next])
    
    return(
        <ul>

           
        {listPokemon?.map((value,index) =>(
            <li>
                <p key={index}>{index} Pokemon: {value.name}</p>
            </li>
        ))}
        {/* <div className="w-screen h-screen bg-"/>
        <input type="search" onChange={(e) => setSearch(e.target.value)}/> */}
        <button type="button" onClick={() => setNext(next+10)}>
        Proximo
        </button>
     </ul>

    );
       
}