import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalContext'
import '../App.css';
export const AccountSummary = () => {
    const { IncomeTransacation } = useContext(GlobalContext);
    const amounts = IncomeTransacation.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);
    return (
        <div className="ac-summary-main">
            
        <div className="ac-income">
            <h4> Income  <span id="ac-text">+</span>
              
              <br />
              ${income}
             </h4>
        </div>
        <div className="ac-expense">
            <h4>
             Expense   <span id="ac-minus">-</span>
             <br />
             ${expense}
            </h4>
            </div>
        
    </div>
    )
}
