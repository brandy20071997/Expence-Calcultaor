import React,{useReducer,useContext,createContext} from "react";
import Appreducer from "../Context/Appreducer"

const intialState={
    Transcation: []
}


 export const GlobalContext = createContext(intialState)


export const GlobalProvider = ({children})=>{
    const [state,disptach] = useReducer(Appreducer,intialState)

    // Action 
    const deletefunction=(id)=>{
        disptach({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    const Addfunction=(Transaction)=>{
        disptach({
            type:'ADD_TRANSACTION',
            payload:Transaction
        })
    }

    return<GlobalContext.Provider value={{Transcation:state.Transcation,deletefunction,Addfunction}}>
        {children}

    </GlobalContext.Provider>

}