import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Card, CardMedia, Typography } from "@mui/material";

export default function UserCard(){

    const [next, setNext] = useState(0)

    const [pokemon, setPokemon] = useState(null)

    const selectPokemon = (pokemon) => {
        if (pokemon){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
            setPokemon({...response.data})
        })
        }
    }

    const [listPokemon, setlistPokemon] = useState(null)

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${next}`).then((response) =>{
            setlistPokemon([...response.data?.results])
    })
    }, [next]);

    return(
    <>
        <div className="container">
            <div className="flex justify-center mt-4">
                    <div className="grid grid-cols-5 gap-4">
                        {listPokemon?.map((value, index) => (
                            <div>
                                <Card key={index} className="min-h-min items-center" style={{ width: '12vw'}}>
                                    <Typography gutterBottom variant="h5" component="div">Pokemon</Typography>
                                    <Typography gutterBottom variant="p" component="div" >Nome: {value.name}</Typography>
                                    {value?.name === pokemon?.name ? 
                                        pokemon?.abilities.map((ability, index) => (
                                            <Typography gutterBottom variant="p" component="div" key={index}>{index+1+"°"} Habilidade: {ability.ability.name}</Typography>
                                            ))
                                    : null}
                                    {value?.name === pokemon?.name ? (
                                        <CardMedia
                                        component="img"
                                        style={{width: '100%'}}
                                        image={pokemon?.sprites?.other["official-artwork"].front_default}
                                        alt=""
                                            />
                                    ) : null}
                                        <Button className="m-4" onClick={() => selectPokemon(value.name)} variant="contained" size="small">
                                        Ver mais
                                        </Button>
                                    
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-around m-4">
                    {next > 0 && (
                        <Button className="m-4" onClick={() => setNext(next > 0 && next - 10)} variant="contained">
                        Anterior
                        </Button>
                    )}
                    <Button className="m-4" onClick={() => setNext(next + 10)} variant="contained">
                        Proximo
                    </Button>
                </div>
            </div>
        </>
    );
       
}