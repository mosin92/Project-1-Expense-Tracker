import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalContext'
import {ListRendering} from './ListRendering'
export const Transacationhistory = () => {
    const {IncomeTransacation} = useContext(GlobalContext);
    // console.log(context);
    
    return (
        <div className="history-main">
         
            <ul id="list-style">
                {
                    IncomeTransacation.map(transaction =>
                        (<ListRendering key={transaction.id} transaction={transaction} />
                       
                    ))
               }
               
                </ul>
            </div>
       
    )
}
