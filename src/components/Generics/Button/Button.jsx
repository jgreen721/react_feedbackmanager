import React from 'react'

const Button = ({color,handleAction,children}) => {
  return (
    <button onClick={handleAction} className={`btn ${color}-btn`}>
        {children}
    </button>
  )
}

export default Button