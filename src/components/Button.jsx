import React from 'react'

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`${backgroundColor ? `${textColor} ${backgroundColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'} flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth && 'w-full'}`}>
      {label}
      {iconUrl &&
        (<img
          src={iconUrl}
          alt={label}
          className='ml-2 rounded-full w-5 h-5'
        />)}
    </button>
  )
}

export default Button