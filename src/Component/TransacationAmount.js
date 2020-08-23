    import React from 'react'
    import '../App.css';

    export const TransacationAmount = () => {
        return (
            <div className="master">
              <div className="transacation-main">
                   <div className="transacation-input"> 
                   <input id="input-1" type="text" placeholder="Enter Desciption" ></input>
                   </div>
                   <div className="transaction-icon">
                  <button className="transacation-button">+</button>
                  </div>
                 
                  
                </div>
                <div className="transacation-input-2-main">
                  <div className="input-2">
                    <input id="input-2-field" type="text" placeholder="Enter Amount"></input>
                    </div>
                    <div className="btn-2">
                   <button className="btn-action">+</button>
                    </div>
                </div>
            </div>
        )
    }
