import React, { createContext,useReducer } from 'react'
//import AppReducer from './AppReducer';
const initalState = 
    { 
    transacations: [
             { id: 1, description: "Book", amount: 500, },
            { id: 2, description: "Bills", amount: -100 }
        ]
}


export const GlobalContext = createContext(initalState);

//reducer funcation

const reducer = (state, action) => {
    switch (action.type) {
         
        default:
            return state;
    }
}

export const GlobalContextProvider = ({children}) => {
 const [newstate, dispatch] = useReducer(reducer, initalState);
 
    return (
        <GlobalContext.Provider value={
            {
                IncomeTransacation:newstate.transacations
            }
        }>
            {children}
        </GlobalContext.Provider>
    )

}

