import { createSlice } from '@reduxjs/toolkit'

export const menuHambSlice = createSlice({
  name: 'menuShow',
  initialState: {
    value: false
  },
  reducers: {
    show: state => {
      state.value = !state.value;
    }
  }
})

export const { show } = menuHambSlice.actions

export default menuHambSlice.reducer