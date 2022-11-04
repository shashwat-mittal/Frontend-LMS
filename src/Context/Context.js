import React from 'react';
import {createContext } from 'react';
const initialState=[
    {
    month:"January",
    payment:"123456",
    receipt:"0",
    },
    {
        month:"Feb",
        payment:"13456",
        receipt:0,
    },
    {
        month:"January",
        payment:"123456",
        receipt:"0",
        },
        {
            month:"January",
            payment:"123456",
            receipt:"0",
        }
]
export const AppContext=createContext(initialState);
const Context = (props) => {
  return (
    <AppContext>
      {props}
    </AppContext>
  )
}

export default Context