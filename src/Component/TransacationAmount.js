import React, { useState, useContext } from 'react'
    import {GlobalContext} from '../Context/GlobalContext'
    import '../App.css';


export const TransacationAmount = () => {
  const [description, settext] = useState('');
  const [amount, setamount] = useState();
  const { addtransaction } = useContext(GlobalContext);

  const Onsubmit = () => {
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount:+amount
    }

    addtransaction(newTransaction);
  }
  
          return (
              <div className="master">
                <div className="transacation-main">
                    <div className="transacation-input"> 
                  <input id="input-1" type="text" value={description}
                    placeholder="Enter Desciption" onChange={(e)=>settext(e.target.value)} >
                    
                          </input>
                    </div>
                    <div className="transaction-icon">
                    {/* <button className="transacation-button">+</button> */}
                    </div>
                  
                    
                  </div>
                  <div className="transacation-input-2-main">
                    <div className="input-2">
                  <input id="input-2-field" type="text" placeholder="Enter Amount"
                            value={amount} onChange={(e)=>setamount(e.target.value)}></input>
                      </div>
                      <div className="btn-2">
                    <button className="btn-action" onClick={Onsubmit}>+</button>
                      </div>
              </div>
                
          
              </div>
          )
    }
