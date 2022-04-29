import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import { Home } from '../components/Home';
import { Pokemon } from '../components/Pokemon';
import { ListPokemons } from '../components/ListPokemons';
import { ListBerries } from '../components/ListBerries';
import { Welcome } from '../components/Welcome';
import { Search } from '../components/Search';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<Home />}>
                    <Route
                        index
                        element={<>
                            <Welcome />
                        </>
                        }
                    />
                    <Route path="pokemon" element={
                        <>
                            <Outlet />
                        </>
                    }>
                        <Route
                            index
                            element={<>
                                <ListPokemons />
                            </>
                            }
                        />
                        <Route path=":pokemonId" element={<Pokemon />} />
                    </Route>
                    <Route path="berries" element={<ListBerries />} />
                    <Route path='search' element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
