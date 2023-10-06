import React from 'react'
import { Routes, Route } from "react-router-dom";
import Directory from "../../components/Directory/Directory.component";
import Navigation from '../navigation/Navigation.component';
import SignIn from '../sign-in/Sign-in.component';
import Shop from '../shop/Shop.component';
import CheckOut from '../checkout/CheckOut.component';






const Home = () => {
  
 
  return (
      <Routes>
          <Route path="/" element={<Navigation />}>
              <Route index element={<Directory  />} />
              <Route path="/shop/*" element={<Shop />} />
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/checkout" element={<CheckOut />} /> 

          </Route>
      </Routes>
  )
}

export default Home;