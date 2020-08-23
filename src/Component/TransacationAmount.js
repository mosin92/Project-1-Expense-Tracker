import React from 'react'
import '../App.css';

export const TransacationAmount = () => {
    return (
        <div className="transacation-main">
         <div className="transacation-input"> 
             <input id="input-1" type="text" placeholder="Enter Desciption" ></input>
            </div>
            <div className="transaction-icon">
               <button className="transacation-button">+</button>
            </div>
    </div>
    )
}
