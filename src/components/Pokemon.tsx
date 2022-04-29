import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReqResPok } from "../interfaces/reqResponse";
import { Chip, ContainerCenter, Cuadrado, GridCols, Logo } from "../styles";
import { ItemBar } from "./ItemBar";
import { PokemonContainer } from "./PokemonContainer";

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
        <Cuadrado padding={20}>
            {!!pokemon && 
                <div>
                    <h2 style={{textAlign: 'center', position: 'sticky', top: 0, width: '100%', background: 'white'}}>{pokemon.name}</h2>
                    <ContainerCenter>
                        <Logo size={200} src={pokemon.sprites.front_default} alt="" />
                    </ContainerCenter>
                    <div>
                        <PokemonContainer title="Tipo:">
                            <>
                                { pokemon.types.map((type, index) => <Chip key={`${index}-type`}>{type.type.name}</Chip> ) }
                            </>
                        </PokemonContainer>
                        <PokemonContainer title="Habilidades:">
                            <>
                                { pokemon.abilities.map((abilitie, index) => <Chip key={`${index}-abilitie`}>{abilitie.ability.name}</Chip> )}
                            </>
                        </PokemonContainer>
                        <PokemonContainer titleFull title="Estadísticas:">
                            <GridCols cols={2}>
                                { pokemon.stats.map((stat, index) => <ItemBar key={`${index}-stat`} title={stat.stat.name} size={stat.base_stat} />) }
                            </GridCols>
                        </PokemonContainer>
                    </div>
                </div>
            }
        </Cuadrado>
    )
}
