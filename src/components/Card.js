import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Card, CardMedia, Typography } from "@mui/material";

export default function UserCard(){

    const [next, setNext] = useState(1)

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${next}`).then((response) => {
        setPokemon({...response.data})

        })
    }, [next]);

    return(
    <>
        <div className="container">
            <div className="flex justify-center mt-4">
                    <div className="grid grid-cols-1 gap-1">
                            <div>
                                <Card className="min-h-min">
                                    <Typography className="font-bold capitalize" gutterBottom variant="h5" component="div">{pokemon?.name}</Typography>
                                    <div>
                                    <Typography gutterBottom variant="p" component="div">Habilidades: </Typography>
                                    {pokemon?.name && 
                                        pokemon?.abilities.map((ability, index) => (
                                            <><Typography className="text-sm" gutterBottom variant="p" component="div" key={index}>{ability.ability.name}</Typography></>
                                            ))
                                    }
                                    </div>
                                    <div>
                                    </div>
                                    {pokemon?.name && 
                                        <CardMedia
                                        component="img"
                                        style={{width: '100%'}}
                                        image={pokemon?.sprites?.other["official-artwork"].front_default}
                                        alt=""
                                            />
                                    }
                                </Card>
                            </div>
                    </div>
                </div>
                <div className="flex justify-around m-4">
                    {next > 1 && (
                        <Button className="m-4" onClick={() => setNext(next > 1 && next - 1)} variant="contained">
                        Anterior
                        </Button>
                    )}
                    <Button className="m-4" onClick={() => setNext(next + 1)} variant="contained">
                        Proximo
                    </Button>
                </div>
            </div>
        </>
    );
       
}