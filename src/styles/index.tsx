import styled, {css} from 'styled-components';
import { BarBackgroundProps, ContainerAroundProps, ContainerCenterProps, ContainerModalProps, CuadradoProps, GridColsProps, LogoProps, NavBarProps } from '../interfaces/styledComponent';

export const BarBorder = styled.div`
    width: 60%;
    height: 10px;
    margin-left: 5px;
    border: 1px solid #333;
    border-radius: 10px;
    overflow: hidden;
`

export const BarBackground = styled.div<BarBackgroundProps>`
    height: 100%;
    width: ${ props => `${!!props.size? props.size : '10'}%` };
    background-color: ${ props => `${!!props.backgroundColor? props.backgroundColor : '#d2e2f2'}` };
`

export const ButtonPrimary = styled.button`
    padding: 10px 16px;
    background-color: #d3e3f3;
    color: #222;
    font-weight: bold;
    ${ props => !!props.disabled && css`
        color: #d3e3f3;
        border: none;
    `}
`;

export const Chip = styled.span`
    display: inline-block;
    margin: 5px 10px;
    padding: 5px 10px;
    border-radius: 16px;
    background-color: #a3f08c;
    font-weight: bold;
    color: #222;
`


export const ContainerAround = styled.div<ContainerAroundProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    ${ props => !!props.hover && css`
        &:hover{
            background-color: #a3f08c;
        },
        &:focus {
            background-color: white;
        }
        &:active {
            background-color: #a3f08c;
        }
    `}
`;

export const ContainerCenter = styled.div<ContainerCenterProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${ props => props.height ? props.height+"vh" : 'auto'};
`;

export const ContainerEnd = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ContainerFab = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 26px;
    @media  (min-width: 640px) {
        position: fixed;
        margin-top: 0;
        right: 30px;
        bottom: 30px;
    }
`;

export const ContainerMenuHamb = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 40px;
    right: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 8px;
    padding: 4px;
    overflow: hidden;
`;

export const ContainerModal = styled.div<ContainerModalProps>`
    position: absolute;
    background-color: #d3e3f3;
    bottom: 0;
    width: 100%;
    height: 50vh;
    max-height: 250px;
    overflow-X: hidden;
    overflow-Y: scroll; 
    padding-bottom: 100px;
    transform: translateY(${props => props.show? '100': 0}%);
    transition: all 0.5s ease-in;
`;

export const ContainerStart = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;


export const Cuadrado = styled.div<CuadradoProps>`
    width: 100%;
    height: 80vh;
    position: relative;
    max-height: 500px;
    max-width: 360px;
    background-color: #fefefe;
    overflow-x: hidden;
    overflow-y: ${ props => props.overflowF ? "hidden" : "scroll"};
    padding: 0 ${ props => props.padding ? props.padding : 0}px ;
    border-radius: 10px;
    scrollbar-width: none;
`;

export const GridCols = styled.div<GridColsProps>`
    display: grid;
    gap: 2px;
    width: 100%;
    justify-items: center;
    grid-template-columns: repeat( ${props => props.cols ? props.cols : 1} ,1fr);
`;

export const Logo = styled.img<LogoProps>`
    width: ${props => props.size ? props.size : 80}px;
    height: ${props => props.size ? props.size : 80}px;
    border-radius: 100%;
`
export const MenuHambBar = styled.div`
    width: 100%;
    height: 7px;
    border-radius: 1px;
    background-color: #888;
`; 


export const NavBar = styled.div<NavBarProps>`
    position: absolute;
    right: 0px;
    top: 0;
    bottom: 0px;
    background-color: #F67270;
    transform: translateX(${props => props.show ? 0 : 200 }%);
    transition: 0.4s all ease-in;
    z-index: 100;
`;


export const Title = styled.h3`
    width: 100%;
    text-align: center;
    text-decoration: none;
    font-size: larger;
    font-weight: bold;
    color: #222;
`