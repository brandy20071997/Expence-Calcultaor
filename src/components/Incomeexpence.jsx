import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'

export default function Incomeexpence() {
    const {Transcation} = useContext(GlobalContext)
 const  Amount = Transcation.map((transactions)=>transactions.amount)
 const income = Amount.filter((ele)=>ele>0).reduce((acc,ele)=>(acc+=ele),0).toFixed(2)
 const expence = Amount.filter((ele)=>ele<0).reduce((acc,ele)=>(acc+=ele),0).toFixed(2)
 

    // const income = Transcation.filter((ele)=>{ele>0})
    // console.log(income,"income")`
  return (
    
      <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">${expence}</p>
        </div>
      
    </div>
  )
}
