import React from 'react'
import { ContainerMenuHamb, MenuHambBar } from '../../styles'

interface Props {
    showMenu: () => void;
}

export const MenuHamb = ({showMenu}:Props) => {
    return (
        <ContainerMenuHamb onClick={showMenu}>
            <MenuHambBar/>
            <MenuHambBar/>
            <MenuHambBar/>
        </ContainerMenuHamb>
    )
}
