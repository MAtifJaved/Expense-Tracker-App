import React, { createContext, useReducer } from 'react'

//import the AppReducer from AppReducer.js File

import AppReducer from './AppReducer';


/* creating the initial state

const initialState = {
  transactions: [
       { id: 1, description: 'Flower', transactionAmount: -20 },
       { id: 2, description: 'Salary', transactionAmount: 500  },
       { id: 3, description: 'Book', transactionAmount: -1000  },
       { id: 4, description: 'Camera', transactionAmount: 150  },
       
    ] 
    }
    These transactions were used before for taking the data but now these transactions has been mapped at
    AddTransaction Component.
    */

//
    // Creating Initial State
const initialState = {
    transactions: [ ] 
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
