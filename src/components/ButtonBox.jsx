import React from 'react'

const ButtonBox = ({handleClick, objBgColor}) => {
  return (
    <button style={objBgColor} className='btnNext' onClick={handleClick}>&gt;</button>
  )
}

export default ButtonBox