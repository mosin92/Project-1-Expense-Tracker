    import React ,{useState} from 'react'
    import '../App.css';


export const TransacationAmount = () => {
  const [text, settext] = useState('');
  const [amount, setamount] = useState(0);
  
          return (
              <div className="master">
                <div className="transacation-main">
                    <div className="transacation-input"> 
                  <input id="input-1" type="text" value={text}
                    placeholder="Enter Desciption" onChange={(e)=>settext(e.target.value)} >
                    
                          </input>
                    </div>
                    <div className="transaction-icon">
                    <button className="transacation-button">+</button>
                    </div>
                  
                    
                  </div>
                  <div className="transacation-input-2-main">
                    <div className="input-2">
                  <input id="input-2-field" type="text" placeholder="Enter Amount"
                            value={amount} onChange={(e)=>setamount(e.target.value)}></input>
                      </div>
                      <div className="btn-2">
                    <button className="btn-action">+</button>
                      </div>
              </div>
                
          
              </div>
          )
    }
