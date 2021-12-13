import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "@mui/material";

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
        
        <Button onClick={() => setNext(next > 0 && next-10)} variant="outlined">
        Anterior
        </Button>

        <Button onClick={() => setNext(next+10)} variant="outlined">
        Proximo
        </Button>
     </ul>

    );
       
}