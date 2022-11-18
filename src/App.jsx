import { useState } from 'react'
import './App.css'
import quotes from './JSON/quote.json'
import QuoteBox from './components/QuoteBox'
import colors from './JSON/colors.json'

function App() {

  const getQuoteRandomForArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }
  const [quoteRandom, setQuoteRandom] = useState(getQuoteRandomForArray(quotes))
  const [colorRandom, setColorRandom] = useState(getQuoteRandomForArray(colors))

  const handleClick = () => {
    setQuoteRandom(getQuoteRandomForArray(quotes))
    setColorRandom(getQuoteRandomForArray(colors))
  }

  let objStyleBox = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={objStyleBox}>
        <QuoteBox 
            quoteRandom = {quoteRandom}
            handleClick = {handleClick}
            textColor = {colorRandom}
            objBgColor = {objStyleBox}
        />
    </div>
  )
}

export default App
