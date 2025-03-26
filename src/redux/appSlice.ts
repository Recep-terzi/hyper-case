'use client'
import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
  data?:any;
  basket?:any;
}

const initialState: AppState = {
    data:[],
    basket:[]
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setData : (state,payload) => {
      state.data = payload
    },
    setBasket : (state,payload) => {
      state.basket = [...state.basket, payload]
    }
  },
})

export const { setData,setBasket } = appSlice.actions

export default appSlice.reducer