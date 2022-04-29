import React, { useEffect, useState } from 'react';
import { ReqResListPok, PokLink } from '../interfaces/reqResponse';
import { Chip, ContainerAround, Cuadrado, GridCols, Logo, Title } from '../styles';

import '../styles/listPokemons.css';
import { ContainerEnd, ContainerModal } from '../styles/index';
import { Berries } from '../interfaces/reqResponseBerries';
import { PokemonContainer } from './PokemonContainer';
import { ItemBar } from './ItemBar';
import { QuitButton } from './QuitButton';

export const ListBerries = () => {
    const [berries, setBerries] = useState<PokLink[]>([]);
    const [uri, setUri] = useState<string>("");
    const [berry, setBerry] = useState<Berries | null>(null);
    const [showModal, setShowModal] = useState<boolean>(true);
    
    useEffect(() => {
        const getData = async (url = '') => {
            const response = await fetch(url);
            const respuesta: ReqResListPok = await response.json();
            setBerries(respuesta.results);
        }
        getData("https://pokeapi.co/api/v2/berry/?offset=0&limit=64");
    }, []);

    useEffect(() => {
        const getData = async (url = '') => {
            const response = await fetch(url);
            const respuesta = await response.json();
            setBerry(respuesta);
        }
        if(uri !== ''){
            getData(uri);
        }
    }, [uri]);

    const showResponse = (url:string) => {
        setUri(url);
        setShowModal(false);
    }

    return (
        <div className='relative'>
            {(berries.length > 0 && true )?
                <Cuadrado>
                    {berries.map(berryMap => { 
                        return(
                            <div key={berryMap.name} onClick={() => showResponse(berryMap.url)}>
                                <ContainerAround hover>
                                    <Logo src={`https://cdn.pixabay.com/photo/2015/09/07/09/50/christmas-928319_1280.png`} alt="" />
                                    <Title>{berryMap.name}</Title    >
                                </ContainerAround>
                                <hr />
                            </div>
                        )
                    })}
                </Cuadrado>
                : 
                <Cuadrado>
                    {berries.map(berryMap => { 
                        return(
                            <div key={berryMap.name} onClick={() => showResponse(berryMap.url)}>
                                <ContainerAround hover>
                                    <Logo src={`https://cdn.pixabay.com/photo/2015/09/07/09/50/christmas-928319_1280.png`} alt="" />
                                    <Title>{berryMap.name}</Title    >
                                </ContainerAround>
                                <hr />
                            </div>
                        )
                    })}
                4</Cuadrado>
            }
            <div className='absoluteBottom'>
                <div style={{height: '50px'}} className='fondoBotones'></div>
                <div className='relative'>
                    <ContainerEnd>
                       <ContainerModal show={showModal}>
                            {   !!berry &&
                                <div style={{padding: "0px 10px", width: '100%'}}>
                                    <ContainerEnd>
                                        <Title>{berry.name}</Title>
                                        <QuitButton press={() => setShowModal(true)}/>
                                    </ContainerEnd>
                                    <PokemonContainer title='Naturaleza: '>
                                        <Chip>{berry.natural_gift_type.name}</Chip>
                                    </PokemonContainer>
                                    <PokemonContainer titleFull title="Estadísticas:">
                                        <GridCols cols={2}>
                                            <ItemBar title={'Tamaño'} size={berry.size} />
                                            <ItemBar title={'Poder'} size={berry.natural_gift_power} />
                                            <ItemBar title={'Tranquilidad'} size={berry.smoothness} />
                                            <ItemBar title={'Sequedad'} size={berry.soil_dryness} />
                                        </GridCols>
                                    </PokemonContainer>
                                </div>
                            }
                       </ContainerModal>
                    </ContainerEnd>
                </div>
            </div>
        </div>
    )
}