import { Link } from 'react-router-dom';
import { Cuadrado, Title } from '../styles';


export const Welcome = () => {

    return (
        <Cuadrado>
            <div style={{padding:8}}>
                <h2 style={{textAlign: 'center'}}>Bienvenido a esta aplicación web.</h2>
                <Title>Aplicación realizada con la pokeapi</Title>
                <h3>El diseño y la implementación de esta API fue realizada por Sebastián García</h3>
                <p>Esta aplicación esta hecha con <strong>ReactJS</strong>. 
                <br/> Los estilos de los componentes fueron realizados con <strong>styled-component.</strong> 
                <br/> El <strong>Boton de acción flotante</strong> es un botón azúl dispuesto en la parte inferior derecha de la pantalla y al presionarlo redirige al inicio de la aplicación 
                <br/>El estado global es manejado con  <strong>REDUX</strong></p>

                <h4>Las rutas a las que se puede acceder son:</h4>
                <ul>
                    <li>
                        <Link to='pokemon'>Pokemons</Link>
                    </li>
                    <li>
                        <Link to='berries'>Bayas</Link>
                    </li>
                </ul>
            </div>
        </Cuadrado>
    )
}
