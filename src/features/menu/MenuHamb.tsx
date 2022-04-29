import { ContainerMenuHamb, MenuHambBar } from '../../styles'
import { useDispatch } from 'react-redux'
import {
    show
} from './menuHambSlice';

export const MenuHamb = () => {
    const dispatch = useDispatch()
    return (
        <ContainerMenuHamb onClick={() => dispatch(show())}>
            <MenuHambBar/>
            <MenuHambBar/>
            <MenuHambBar/>
        </ContainerMenuHamb>
    )
}
