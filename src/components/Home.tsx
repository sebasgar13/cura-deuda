import { Outlet } from 'react-router-dom'
import { ContainerCenter, Cuadrado } from '../styles';
import { Header } from './pokedex/Header';
import { NavBar } from '../styles/index';
import { useSelector } from 'react-redux'
import { FAB } from './FAB';
import { NavBarLink } from './pokedex/NavBarLink';

export const Home = () => {
    const menu = useSelector((state:any) => state.menu.value)
    return (
        <ContainerCenter height={100}>
            <div style={{position: 'relative', borderRadius: "16px", padding: "50px 20px" , backgroundColor: 'brown', width: '100%', maxWidth: '400px'}}>
                <Header />
                <Cuadrado overflowF >
                    <Outlet />
                    <NavBar show={menu}>
                        <NavBarLink route='pokemon' title='Pokemon' />
                        <NavBarLink route='berries' title='Bayas' />
                    </NavBar>
                </Cuadrado>
                <FAB />
            </div>
        </ContainerCenter>
    )
}
