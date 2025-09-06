import { useState } from 'react'
import './App.css'
import hangmanData from './data/hangmanData'

function App() {
  const [ hangman, setHangman ] = useState(hangmanData);

  return (
    <>
      <div className='main'>
        <div className='words'>
          {hangman.alphabet.map((word: string) => {
            return(
              <h2 key={word}>{word}</h2>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
