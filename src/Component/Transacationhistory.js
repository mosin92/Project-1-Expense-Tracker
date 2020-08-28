import React, { useContext, useState } from 'react'
import {GlobalContext} from '../Context/GlobalContext'

export const Transacationhistory = () => {
    const context = useContext(GlobalContext)
    console.log(context);
    return (
        <div className="history-main">
         
            <ul id="list-style">
            {/* <button className="btn">x</button>
                <li className="list-item">Income1 asff
                 
                </li> */}
                <li className="list-item" id="minus">Income2 Bill Expense
                    <span id="invoice">$500</span>
                 <span className="btn"> <button className="btn-1">x</button> </span>    
                </li>
                <li className="list-item" id="plus">Income2 Bill Expense
                    <span id="invoice">$500</span>
                 <span className="btn"> <button className="btn-1">x</button> </span>    
                </li>
                <li className="list-item">Income2 Bill Expense
                    <span id="invoice">$500</span>
                 <span className="btn"> <button className="btn-1">x</button> </span>    
                    </li>


                <li className="list-item">Income2 Bill Expense
                    <span id="invoice">$500</span>
                 <span className="btn"> <button className="btn-1">x</button> </span>    
                    </li>
                </ul>
              
                
                   
                    
                   
        </div>
       
    )
}
