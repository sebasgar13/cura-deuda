import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import { Home } from '../components/Home';
import { Pokemon } from '../components/Pokemon';
import { ListPokemons } from '../components/ListPokemons';
import { ListBerries } from '../components/ListBerries';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<Home />}>
                    
                    <Route path="pokemon" element={<>
                        <Outlet />
                    </>}>
                        <Route
                            index
                            element={<>
                                <ListPokemons />
                            </>
                            }
                        />
                        <Route path=":pokemonId" element={<Pokemon />} />
                    </Route>
                    <Route path="berries" element={<>
                        <Outlet />
                    </>}>
                        <Route
                            index
                            element={<>
                                <ListBerries />
                            </>
                            }
                        />
                        <Route path=":berriesId" element={<Pokemon />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
