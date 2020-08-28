import React, { createContext,useReducer } from 'react'
//import AppReducer from './AppReducer';
const initalState = 
    { 
    transacations: [
             
        ]
}


export const GlobalContext = createContext(initalState);

//reducer funcation

const reducer = (state, action) => {
    switch (action.type) {
        case 'DeleteTransaction':
            return {
                ...state, transacations:
                    state.transacations.filter(transaction => transaction.id !== action.payload) 
            }
        case 'AddTransaction':
            return {
                ...state,transacations:[...state.transacations,action.payload]
            }
      
        default:
            return state;
    }
}

export const GlobalContextProvider = ({children}) => {
    const [newstate, dispatch] = useReducer(reducer, initalState);
    
    const deletetransaction = (id) => {
        dispatch({
            type: 'DeleteTransaction',
            payload:id
        })
    }

    const addtransaction = (transacation) => {
        dispatch({
            type: 'AddTransaction',
            payload:transacation
        })
    }
 
    return (
        <GlobalContext.Provider value={
            {
                IncomeTransacation: newstate.transacations,
                addtransaction,
                deletetransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )

}

