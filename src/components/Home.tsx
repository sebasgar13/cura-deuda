import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ContainerCenter, Cuadrado } from '../styles';
import { Header } from './pokedex/Header';
import { NavBar } from '../styles/index';
import { NavBarLink } from './pokedex/NavBarLink';
import { FAB } from './FAB';

export const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <ContainerCenter height={100}>
            <div style={{position: 'relative', borderRadius: "16px", padding: "50px 20px" , backgroundColor: 'brown', width: '100%', maxWidth: '400px'}}>
                <Header showMenu={() => setShowMenu(prev => !prev)} />
                <Cuadrado overflowF >
                    <Outlet />
                    <NavBar show={showMenu}>
                        <NavBarLink route='pokemon' title='Pokemon' />
                        <NavBarLink route='berries' title='Bayas' />
                    </NavBar>
                </Cuadrado>
                <FAB />
            </div>
        </ContainerCenter>
    )
}
