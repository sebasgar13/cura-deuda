import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReqResListPok, PokLink } from '../interfaces/reqResponse';
import { ButtonPrimary, ContainerAround, Cuadrado } from '../styles';

import '../styles/listPokemons.css';

export const Welcome = () => {
    const [pokemons, setPokemons] = useState<PokLink[]>([]);
    const [prev, setPrev] = useState<string|null>(null);
    const [next, setNext] = useState<string|null>(null);
    const [uri, setUri] = useState<string>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');

    
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

    const getIdPokemon = (sentence:string):string => {
        let size = sentence.length; 
        let id = '';
        for (let i = 4; i > 0; i--) {
            if(!!parseInt(sentence[size-i]) || sentence[size-i] === '0'){
                id += sentence[size-i];
            }
        }
        console.log(id);
        return id;
    }

    return (
        <div className='relative'>
            {pokemons.length > 0 && 
                <Cuadrado>
                    {pokemons.map(pokemon => {
                        const id = getIdPokemon(pokemon.url);
                        return(
                            <div key={pokemon.name}>
                                <Link to={`/pokemon/${id}`}>
                                    <h3>{pokemon.name}</h3>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
                                </Link>
                                <hr />
                            </div>
                        )
                    })}
                </Cuadrado>
            }
            <div className='absoluteBottom'>
                <ContainerAround>
                    {!!prev && <ButtonPrimary onClick={() =>  setUri(prev)}>Prev</ButtonPrimary>}
                    {!!next && <ButtonPrimary onClick={() => setUri(next)}>Next</ButtonPrimary>}
                </ContainerAround>
            </div>
        </div>
    )
}
