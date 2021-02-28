import React, { createContext, useReducer } from 'react'

//import the AppReducer from AppReducer.js File

import AppReducer from './AppReducer';


//creating the initial state

const initialState = {
  transactions: [
       { id: 1, text: 'Flower', amount: -20 },
       { id: 2, text: 'Salary', amount: 500  },
       { id: 3, text: 'Book', amount: -1000  },
       { id: 4, text: 'Camera', amount: 150  },
       { id: 5, text: 'payment', amount: 182490  }
    ] 
}

//create the Global Context

export const GlobalContext = createContext(initialState);


    


//create a provider for GlobalContext

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions

function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION' ,
        payload : id
    });
}

function addTransaction(transaction){
    dispatch(
        {
            type : 'ADD_TRANSACTION' ,
            payload : transaction
        });

}

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }

        }>
        
            { children }

        </GlobalContext.Provider>
    )

}
