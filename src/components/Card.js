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

                            </div>
                            <div>
                                <Card className="min-h-min">
                                    <Typography className="capitalize" gutterBottom variant="h5" component="div">{pokemon?.name}</Typography>
                                    <div className="felx grid grid-cols-2 gap-3">
                                        <div className="ml-2">
                                            <Typography gutterBottom className="font-bold capitalize" variant="p" component="div">Tipo:</Typography>
                                            {pokemon?.types.map((type, index) => (
                                                <Typography className="text-sm text-left capitalize" variant="p" component="div" key={index}>
                                                    {type.type.name}
                                                </Typography>
                                            ))}
                                        </div>
                                        <div className="ml-2">
                                            <Typography gutterBottom className="font-bold capitalize"  variant="p" component="div">Habilidades: </Typography>
                                            {pokemon?.abilities.map((ability, index) => (
                                                    <><Typography className="text-sm text-left capitalize" variant="p" component="div" key={index}>{ability.ability.name}</Typography></>
                                                    ))
                                            }
                                        </div>
                                    </div>
                                    <div className="ml-2">
                                        <Typography gutterBottom className="font-bold capitalize" variant="p" component="div">Estatisticas:</Typography>
                                            <div className="justify-between grid grid-cols-2 gap-2">
                                            {pokemon?.stats.map((stat, index) => (
                                                <Typography className="text-sm text-left capitalize" variant="p" component="div" key={index}>
                                                <span className="font-bold">{stat.stat.name}</span>: {stat.base_stat}
                                            </Typography>
                                            ) )}
                                            </div>
                                    </div>
                                    {
                                        <CardMedia
                                        className="m-auto"
                                        component="img"
                                        style={{width: '74%'}}
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