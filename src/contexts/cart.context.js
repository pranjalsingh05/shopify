import { useState } from "react";
import { createContext } from "react";

const addCartItem=(cartItems,productToAdd,itemCount,setItemCount,totalPrice,SetTotalPrice)=>{
    setItemCount(itemCount+1);
    
   const existingItem= cartItems.find((cartItem)=>{return cartItem.id===productToAdd.id});
   SetTotalPrice(totalPrice+productToAdd.price);
   if(existingItem)
   {
    return cartItems.map((cartItem)=>cartItem.id===productToAdd.id?
    {...cartItem, quantity:cartItem.quantity+1}:
    cartItem
    

    )
    
   }
   return [...cartItems,{...productToAdd,quantity:1}];



}
const removeCartItem = (cartItems, productToRemove, itemCount, setItemCount, totalPrice, SetTotalPrice)=>{
    if(itemCount!==0){
    setItemCount(itemCount - 1);
    }
   
    const existingItem = cartItems.find((cartItem) => { return cartItem.id === productToRemove.id})
    SetTotalPrice(totalPrice - productToRemove.price);

      if(existingItem.quantity===1)
      {
        return cartItems.filter((cartItem)=>{
            return (
              cartItem.id!==existingItem.id
            )
        })
      }

    if(existingItem)
    {
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity-1 } :
            cartItem)
    }
   

}

const remove = (cartItems, itemCount, itemToRemove, setItemCount, totalPrice, SetTotalPrice)=>{
    const q = cartItems.find((cartItem) => {
        return cartItem.id === itemToRemove.id;
    });
    
   setItemCount(()=>{
    const count=q.quantity;
    return itemCount-count
   })
    SetTotalPrice(totalPrice - (q.quantity * q.price) );
   
    return cartItems.filter((cartItem) => {
        return (
            cartItem.id !== itemToRemove.id
        )
    })

}

export const CartContext=createContext({
    isCardOpen:false,
    setIsCardOpen:()=>{},
    cartItems:[],
    addItemtoCart:()=>{},
    itemCount:0,
    removeItemfromCart:()=>{},
    remove:()=>{},
    totalPrice:0



})

export const CartProvider=({children})=>{
    const [isCardOpen,setIsCardOpen]=useState(false)
    const [cartItems,setCartItems]=useState([]);
    const [itemCount,setItemCount]=useState(0);
    const [totalPrice,SetTotalPrice]=useState(0);

     const addItemtoCart=(productToAdd)=>{
          
         setCartItems(addCartItem(cartItems, productToAdd, itemCount, setItemCount, totalPrice, SetTotalPrice));
        console.log(cartItems);
     }
    const removeItemfromCart = (productToRemove)=> {

        setCartItems(removeCartItem(cartItems, productToRemove, itemCount, setItemCount, totalPrice, SetTotalPrice));
        console.log(cartItems);
    }
    const removeItem=(itemToRemove)=>{
        setCartItems(remove(cartItems, itemCount, itemToRemove, setItemCount, totalPrice, SetTotalPrice));

    }
   


    const value = { isCardOpen, setIsCardOpen, addItemtoCart,removeItemfromCart, cartItems, itemCount, setItemCount ,removeItem,totalPrice,SetTotalPrice};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}