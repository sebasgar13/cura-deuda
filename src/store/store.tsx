import { configureStore } from '@reduxjs/toolkit';
import menuHamSlice from '../features/menu/menuHambSlice';

export default configureStore({
    reducer: {
        menu: menuHamSlice
    }
})