import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import { Pokemon } from '../components/Pokemon';
import { Welcome } from '../components/Welcome';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<>
                        <Link to={"pokemon"}>Lista</Link>
                        <Outlet />
                    </>}>
                    
                    <Route path="pokemon" element={<>
                        <Outlet />
                    </>}>
                        <Route
                            index
                            element={<>
                                <h2>Hola</h2>
                                <Welcome />
                            </>
                            }
                        />
                        <Route path=":pokemonId" element={<Pokemon />} />
                    </Route>
                    <Route path='home' element={<Welcome />} />
                    <Route path='about' element={<h1>About</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
