import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'
export default function Balance() {
    const {Transcation} = useContext(GlobalContext)

    const Amount = Transcation.map(Transcation =>Transcation.amount)
    const total = Amount.reduce((p,c)=>{
        return p+c
    },0).toFixed(2)
  return (
    <div>
      <h4>Your Balance</h4>
      <h1> ${total}</h1>
    </div>
  )
}
