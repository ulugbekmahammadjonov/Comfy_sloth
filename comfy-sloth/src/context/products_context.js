import React, { useContext, useEffect, useReducer, useState } from "react";
 import reduser from "../reducers/products_reducer"
import {SIDEBAR_CLOSE, SIDEBAR_OPEN} from "../actions"

const initialState = {
    isSidebarOpen:false
}
const ProductContext = React.createContext()
export const ProductProvider = ({children})=>{
    const [state, dispatch] = useReducer(reduser, initialState)
    const openSidebar =()=>{
        dispatch({type:SIDEBAR_OPEN})
    }
    const closeSidebar =()=>{
        dispatch({type:SIDEBAR_CLOSE})
    }
    return(
        <ProductContext.Provider value={{...state,openSidebar, closeSidebar}}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProductsContext = ()=>{
    return useContext(ProductContext)
}