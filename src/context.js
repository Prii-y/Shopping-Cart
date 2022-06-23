import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

 const initialstate={
  loading:false,
  cart:cartItems,
  total:0,
  amount:0,
 };

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer,initialstate)

  const clearcart=()=>{
    dispatch({type:'CLEAR'})
  }
 
  const remove=(id)=>{
    dispatch({type:'REMOVE',payload:id})
  }

  const increase=(id)=>{
    dispatch({type:'INCRZ',args:id});
  }

  const decrease=(id)=>{
    dispatch({type:'DECRZ',args:id});
  }

  const totalhandler =()=>{
    dispatch({type:'TOTAL'})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearcart,
        remove,
        increase,
        decrease,
        totalhandler
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
