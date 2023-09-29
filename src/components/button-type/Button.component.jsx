import React from 'react'
const Button = ({ text, buttontype, ...otherprops }) => {
    const buttonClasses = `button-container ${buttontype === 'google' ? 'border border-black bg-blue-500 hover:bg-blue-700' : 'border border-black bg-black hover:bg-gray-800'} text-white ${buttontype === 'inverted' ? 'border border-black hover:bg-white hover:text-black' : ''
        }`;

    return (
        <button className={buttonClasses} {...otherprops}>
            {text}
        </button>
    );
};


export default Button