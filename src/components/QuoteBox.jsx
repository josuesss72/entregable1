import React from 'react' 
import ButtonBox from './ButtonBox'
// import {FaQuoteLeft} from "react-icons/fa"

const QuoteBox = ({handleClick, quoteRandom, textColor, objBgColor}) => {

  let objStyle = {
    color: textColor
  }

  return (
    <div className='box_quote'>
        <div className='box_paragraph'>
          <div className='box_icon_quote'>
            <i style={objStyle} className="fa-solid fa-quote-left icon_quote"></i>
          </div>
          <p style={objStyle}>{quoteRandom.quote}</p>
        </div>
        <h1 style={objStyle}>{quoteRandom.author}</h1>
        <ButtonBox handleClick={handleClick} objBgColor={objBgColor}/>
    </div>
  )
}

export default QuoteBox