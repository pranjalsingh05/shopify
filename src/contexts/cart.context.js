import { useState } from "react";
import { createContext } from "react";

const addCartItem=(cartItems,productToAdd,itemCount,setItemCount)=>{
    setItemCount(itemCount+1);
   const existingItem= cartItems.find((cartItem)=>{return cartItem.id===productToAdd.id});
   if(existingItem)
   {
    return cartItems.map((cartItem)=>cartItem.id===productToAdd.id?
    {...cartItem, quantity:cartItem.quantity+1}:
    cartItem
    

    )
    
   }
   return [...cartItems,{...productToAdd,quantity:1}];



}

export const CartContext=createContext({
    isCardOpen:false,
    setIsCardOpen:()=>{},
    cartItems:[],
    addItemtoCart:()=>{},
    itemCount:0


})

export const CartProvider=({children})=>{
    const [isCardOpen,setIsCardOpen]=useState(false)
    const [cartItems,setCartItems]=useState([]);
    const [itemCount,setItemCount]=useState(0);

     const addItemtoCart=(productToAdd)=>{
          
        setCartItems(addCartItem(cartItems,productToAdd,itemCount,setItemCount));
        console.log(cartItems);
     }

    const value = { isCardOpen, setIsCardOpen, addItemtoCart, cartItems, itemCount, setItemCount };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}