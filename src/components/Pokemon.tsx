import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReqResPok } from "../interfaces/reqResponse";

export const Pokemon = () => {
    let { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState<ReqResPok | null>(null);
    

    useEffect(() => {
        const getData = async (url = '') => {
            const response = await fetch(url);
            const respuesta: ReqResPok = await response.json();
            setPokemon(respuesta);
        }
        getData(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    }, [pokemonId]);
    return (
        <div>
            {!!pokemon && 
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
            }
        </div>
    )
}
