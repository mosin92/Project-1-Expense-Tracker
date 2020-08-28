import React from 'react'
import pic2 from './pic2.png';
//import './App.css';
import { CurrentBalance } from './Component/CurrentBalance';
import { AccountSummary } from './Component/AccountSummary';
import { TransacationAmount } from './Component/TransacationAmount';
import { Transacationhistory } from './Component/Transacationhistory';

export const MainDesign = () => {
    return (
       
        <div className="App">
    
      
            <div className="main">
                <div className="block-1">
                    <div className="img-block">
                        <img src={pic2} alt="osin-logo" height="80%" width="80%" />
                    </div>
                    <div className="block-2">
                        <div className="heading">
                            <h3 id="main-text">Expense Tracker</h3>
                        </div>
                        <CurrentBalance />
            <AccountSummary />
              <TransacationAmount />
              <Transacationhistory/>
                    </div>
                </div>
      
            </div>
    
        </div>
       
    );
}
