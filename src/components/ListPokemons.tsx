import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReqResListPok, PokLink } from '../interfaces/reqResponse';
import { ButtonPrimary, ContainerAround, Cuadrado, Logo, Title } from '../styles';

import '../styles/listPokemons.css';
import { ContainerEnd } from '../styles/index';

export const ListPokemons = () => {
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
                                <Link style={{textDecoration: 'none'}} to={`/pokemon/${id}`}>
                                    <ContainerAround hover>
                                        <Logo src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
                                        <Title>{pokemon.name}</Title    >
                                    </ContainerAround>
                                </Link>
                                <hr />
                            </div>
                        )
                    })}
                </Cuadrado>
            }
            <div className='absoluteBottom'>
                <div className='relative'>
                    <div className='fondoBotones'></div>
                    <ContainerEnd>
                        <ButtonPrimary disabled={!prev} onClick={() => setUri(prev!)}>Prev</ButtonPrimary>
                        <ButtonPrimary disabled={!next} onClick={() => setUri(next!)}>Next</ButtonPrimary>
                    </ContainerEnd>
                </div>
            </div>
        </div>
    )
}
