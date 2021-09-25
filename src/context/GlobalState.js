import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'

const initialState = {
  pies: [],
  stores: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  async function getStores() {
    try {
      const res = await axios.get('https://superpie-api.herokuapp.com/stores/');

      dispatch({
        type: 'GET_STORES',
        payload: res.data[0].storename
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    stores: state.stores,
    pies: state.pies,
    loading: state.loading,
    getStores,

  }}>
    {children}
  </GlobalContext.Provider>);
}