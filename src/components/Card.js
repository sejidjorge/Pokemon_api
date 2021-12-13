import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Card } from "@mui/material";

export default function UserCard(){

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
    <div className="container">
            {listPokemon?.map((value,index) =>(
            <div className="m-1 p-1">
                <Card>
                    <h1 key={index} >Pokemon</h1>
                    <p>Nome: {value.name}</p>
                </Card>
            </div>
            ))}
    
        <div className="flex justify-around">
            <Button onClick={() => setNext(next > 0 && next-10)} variant="outlined">
            Anterior
            </Button>
            <Button onClick={() => setNext(next+10)} variant="outlined">
            Proximo
            </Button>
        </div>
    </div>

    );
       
}