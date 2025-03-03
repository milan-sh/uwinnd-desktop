import React from 'react'

const Button = ({children, className,}) => {
  return (
    <button className={`rounded-full text-sm px-6 py-1.5 border-2 border-gray-200 focus:border-primary ${className}`}>
      {children}
    </button>
  )
}

export default Button
