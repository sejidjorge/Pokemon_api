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

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${next}`).then((response) =>{
            setlistPokemon([...response.data?.results])
    })
    }, [next])
    
    return(
    <><div className="flex items-center justify-center">
            <div className="grid grid-cols-5 gap-4">
                {listPokemon?.map((value, index) => (
                    <div>
                        <Card>
                            <h1 key={index}>Pokemon</h1>
                            <p>Nome: {value.name}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="flex justify-around m-4">
                    <Button className="m-4" onClick={() => setNext(next > 0 && next - 20)} variant="contained">
                        Anterior
                    </Button>
                    <Button className="m-4" onClick={() => setNext(next + 20)} variant="contained">
                        Proximo
                    </Button>
            </div>
        </div></>
    );
       
}