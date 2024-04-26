import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'


export default function Trasaction({transaction}) {
    const {deletefunction} = useContext(GlobalContext)
   

    const sign = transaction.amount <0 ? "-" :"+"
  return (
    <li className={transaction.amount <0 ?"minus":"plus"}>
    {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span><button onClick={()=>{deletefunction(transaction.id)}} className="delete-btn">x</button>
  </li> 
  )
}
