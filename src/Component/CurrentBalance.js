import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalContext'
import '../App.css'
export const CurrentBalance = () => {

  const { IncomeTransacation } = useContext(GlobalContext);
  const amount = IncomeTransacation.map(transacation => transacation.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="bal">
        <h2 id="text-current-balance" >Current Balance ${total}</h2>
      </div>
    )
}
