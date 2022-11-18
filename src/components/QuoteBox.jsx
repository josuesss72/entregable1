import React from 'react' 
import {FaQuoteLeft} from "react-icons/fa"

const QuoteBox = ({handleClick, quoteRandom, textColor, objBgColor}) => {

  let objStyle = {
    color: textColor
  }

  return (
    <div className='box_quote'>
        <div className='box_paragraph'>
          <div className='box_icon_quote'>
            <FaQuoteLeft className='icon_quote' color={textColor}/>
          </div>
          <p style={objStyle}>{quoteRandom.quote}</p>
        </div>
        <h1 style={objStyle}>{quoteRandom.author}</h1>
        <button style={objBgColor} className='btnNext' onClick={handleClick}>&gt;</button>
    </div>
  )
}

export default QuoteBox