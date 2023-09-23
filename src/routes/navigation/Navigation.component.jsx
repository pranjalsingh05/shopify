import React from 'react'
import {Outlet,Link} from "react-router-dom"
import { Fragment } from 'react'
import {ReactComponent as ShopifyLogo } from "../../assets/shopify-2.svg"
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation h-16 w-full flex justify-between mb-6">
                <Link className=" logo-container h-full w-16 p-4 mb-5" to="/"><ShopifyLogo /></Link>
                <div className="nav-links-container w-1/2 h-full flex items-center justify-end border-box">
                    <Link className="nav-link px-4 py-2 cursor-pointer" to="/shop">SHOP</Link>
                    <Link className="nav-link px-4 py-2 cursor-pointer" to="/signin">SIGN IN</Link>
                </div>
               
            </div>
            <Outlet />
        
  </Fragment>
            
    )
}

export default Navigation;