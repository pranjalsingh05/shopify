import React from 'react'

const FormInput = ({label, ...otherprops}) => {
  return (
      <div className="relative mb-8 mt-8">
          
          
              <input {...otherprops} className="bg-white text-gray-500 text-xl py-2 px-2 block w-full border-black border-b-2 focus:outline-none focus:border-gray-500 " />

          {label && (<label className={`${otherprops.value.length?`shrinkable`:''}}      text-gray-500 text-base font-normal absolute left-2 -top-3 transition-all duration-300`}> 
              {label}
          </label>
          )}
          
          
          
      </div>

  )
}

export default FormInput