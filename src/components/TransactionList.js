import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Globalstate"
import Trasaction from './Trasaction'


export default function TransactionList() {
    const {Transcation} = useContext(GlobalContext)
    
  return (
    <div>
       <h3>History</h3>
      <ul id="list" className="list">
        {Transcation.map((transaction)=>(<Trasaction key={transaction.id} transaction ={transaction} />
         
        ))}
        
      </ul>
    </div>
  )
}
