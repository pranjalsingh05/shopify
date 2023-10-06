import React from 'react'
import {useNavigate} from "react-router-dom"

const Categoryitem= ({category}) => {
    const {title,id,imageUrl,route}=category
    const navigate=useNavigate();
    const shopHandler=()=>{
        navigate(`${route}`)
    }
  return (
      <div
         onClick={shopHandler}
          key={id}
          className=" min-w-[30%] h-[240px] flex flex-1 items-center justify-center border border-black mt-0 mr-7.5 mb-15 ml-0 overflow-hidden group transition-transform duration-600 ease-in-out transform-gpu scale-100 hover:scale-110 hover:cursor-pointer hover:opacity-90"
      >
          <div
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-600 ease-in-out transform-gpu scale-100 group-hover:scale-110"
              style={{
                  backgroundImage: `url(${imageUrl})`,
              }}
          />
          <div className="h-[90px] px-[25px] flex flex-col items-center justify-center border border-black bg-white opacity-70 absolute">
              <h1 className="font-bold text-2xl text-[#4a4a4a] mb-1">
                  {title}
              </h1>
              <p className="font-light text-base">Shop Now</p>
          </div>
      </div>
  )
}

export default Categoryitem