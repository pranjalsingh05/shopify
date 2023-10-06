import React from 'react'
import { Routes, Route } from "react-router-dom";
import Directory from "../../components/Directory/Directory.component";
import Navigation from '../navigation/Navigation.component';
import SignIn from '../sign-in/Sign-in.component';
import Shop from '../shop/Shop.component';
import CheckOut from '../checkout/CheckOut.component';






const Home = () => {
  
  const categories = [
          {
              id: 1,
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          },
          {
              id: 2,
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          },
          {
              id: 3,
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          },
          {
              id: 4,
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          },
          {
              id: 5,
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          },
        ]
  return (
      <Routes>
          <Route path="/" element={<Navigation />}>
              <Route index element={<Directory categories={categories} />} />
              <Route path="/shop/*" element={<Shop />} />
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/checkout" element={<CheckOut />} /> 

          </Route>
      </Routes>
  )
}

export default Home;