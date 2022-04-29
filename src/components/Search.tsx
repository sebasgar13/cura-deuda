import React, {useState} from 'react'
import { ContainerCenter, Title } from '../styles'
import { ListBerries } from './ListBerries'

export const Search = () => {
    const [berrySearch, setBettySerach] = useState('');
    return (
        <div>
            <Title>Busqueda de bayas</Title>
            <ContainerCenter>
                <input type="text" value={berrySearch} onChange={e => setBettySerach(e.target.value)} />
            </ContainerCenter>
            <ListBerries nameSearch={berrySearch} />
        </div>
    )
}
