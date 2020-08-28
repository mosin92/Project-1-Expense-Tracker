import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalContext'

export const ListRendering = ({ transaction }) => {
    const { deletetransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div>
             <li className="list-item" id={transaction.amount < 0 ? 'minus':'plus'}>{transaction.description}
                        
                        <span id="invoice">{sign}${Math.abs(transaction.amount)}</span>
                 <span className="btn"> <button onClick={()=>deletetransaction(transaction.id)} className="btn-1">x</button> </span>    
                </li>
        </div>
    )
}
