import{SIDEBAR_OPEN, SIDEBAR_CLOSE} from "../actions"
import React from 'react'

const products_reducer = (state,action) => {
 if(action.type===SIDEBAR_OPEN){
    return{...state, isSidebarOpen:true}
 }
 if(action.type===SIDEBAR_CLOSE){
    return {...state, isSidebarOpen:false}

 }
 throw new Error("No matching  ")
}

export default products_reducer