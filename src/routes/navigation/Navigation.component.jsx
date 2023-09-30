import React from 'react'
import {Outlet,Link} from "react-router-dom"
import { Fragment,useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import {ReactComponent as ShopifyLogo } from "../../assets/shopify-2.svg"
import { signOutUser } from '../../utils/firebase/firebase.util'
import CardIcon from '../../components/card-icon/Card-Icon.component'
import CardDropdown from '../../components/card-dropdown/CardDropdown.component'

const Navigation = () => {


    const{currUser}=useContext(UserContext);
    const{isCardOpen,setIsCardOpen}=useContext(CartContext);
  
   
    return (
        <Fragment>
            <div className="navigation h-16 w-full flex justify-between mb-6">
                <Link className=" logo-container h-full w-16 p-4 mb-5" to="/"><ShopifyLogo /></Link>
                <div className="nav-links-container w-1/2 h-full flex items-center justify-end border-box">
                    <Link className="nav-link px-4 py-2 cursor-pointer" to="/shop">SHOP</Link>

                    {currUser?(
                            <span className="nav-link px-4 py-2 cursor-pointer" onClick={signOutUser}>
                                
                                SIGN OUT
                            </span>)
                        :
                           ( <Link className="nav-link px-4 py-2 cursor-pointer" to="/signin">SIGN IN</Link>)

                    }
                    <CardIcon />
                </div>
              {  isCardOpen &&  <CardDropdown />}
            </div>
            <Outlet />
        
  </Fragment>
            
    )
}

export default Navigation;