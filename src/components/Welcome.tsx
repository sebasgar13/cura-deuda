import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReqResListPok, PokLink } from '../interfaces/reqResponse';

export const Welcome = () => {
    const [pokemons, setPokemons] = useState<PokLink[]>([]);
    const [prev, setPrev] = useState<string|null>(null);
    const [next, setNext] = useState<string|null>(null);
    const [uri, setUri] = useState<string>('https://pokeapi.co/api/v2/pokemon/');

    
    useEffect(() => {
        const getData = async (url = '') => {
            const response = await fetch(url);
            const respuesta: ReqResListPok = await response.json();
            setPokemons(respuesta.results);
            setNext(respuesta.next);
            setPrev(respuesta.previous);
        }
        getData(uri);
    }, [uri]);

    return (
        <div>
            {pokemons.length > 0 && 
                <>
                    {pokemons.map(pokemon => {
                        let size = pokemon.url.length;
                        let id = pokemon.url[size-3]+pokemon.url[size-2];
                        return(
                            <div key={pokemon.name}>
                                <Link to={`/pokemon${id}`}>
                                    <h3>{pokemon.name}</h3>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
                                </Link>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
            {
                !!next && <button onClick={() => setUri(next)}>Next</button>}
            {
                !!prev && <button onClick={() =>  setUri(prev)}>Prev</button>
            }
        </div>
    )
}
