import React, { useState, useContext, createContext } from "react";
import { ProductData } from "../components/home/ProductData";


export const ShopContext = createContext();
export const ShopContextProvider = ({ children }) => {


 const [cartProducts, setCartProducts] = useState([])

 const addCart = (product) => {
   setCartProducts(prevProduct =>[...prevProduct, product])
 }



  return (
   <ShopContext.Provider value={{ProductData, addCart, cartProducts}}>
    {children}
   </ShopContext.Provider>
  )
}

export const useShopContext = () => {
  return useContext(ShopContext)
}

