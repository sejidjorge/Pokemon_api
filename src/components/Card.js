import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Card } from "@mui/material";

export default function UserCard(){

    const [next, setNext] = useState(0)

    const [skill, setSkill] = useState(null)

    const selectPokemon = (pokemon) => {
        if (pokemon){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
            setSkill([...response.data?.abilities])
        })
        }
    }

    const [listPokemon, setlistPokemon] = useState(null)

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${next}`).then((response) =>{
            setlistPokemon([...response.data?.results])
    })
    }, [next]);

    return(
    <><div className="container">
        <div className="flex justify-center items-center">
                <div className="grid grid-cols-4 gap-4">
                    {listPokemon?.map((value, index) => (
                        <div>
                            <Card key={index}>
                                <h1 className="text-red-900">Pokemon</h1>
                                <p>Nome: {value.name}</p>
                                {skill?.map((value) => (
                                <p>Habilidade: {value.nome}</p>
                                ))}
                                <Button className="m-4" onClick={() => selectPokemon(value.name)} variant="contained">
                                    Ver mais
                                </Button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
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