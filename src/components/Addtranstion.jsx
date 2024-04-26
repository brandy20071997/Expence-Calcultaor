import React, { useState,useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'


export default function Addtranstion() {
    const {Addfunction} = useContext(GlobalContext)
    const [text,setText] = useState('')
    const [amount,setAamount] = useState("")

    const onSubmit =(e)=>{
        e.preventDefault()
        const newTraction = {
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        Addfunction(newTraction)
        setAamount("")
        setText("")
    }
  return (
    <div>
       <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">-
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>{setAamount(e.target.value)}}  id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
