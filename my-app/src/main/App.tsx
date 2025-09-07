import { useEffect, useState } from 'react'
import './App.css'
import hangmanData from '../data/hangmanData';
import Alphabet from '../components/alphabet/Aphabet';
//Prebaciti hangman data u neki objekt a guessedWord u state
type HangmanType = {
  mode: 'normal' | 'hard',
  category: string[],
  alphabet: string[],
  guessedWords: string[] 
}

function App() {
  const [ hangman, setHangman ] = useState<HangmanType>({
    mode: 'hard',
    category: [],
    alphabet: [],
    guessedWords: []
  });

  useEffect(() => {
    setHangman(hangmanData);
  },[])

  return (
    <>
      <div className='main'>
        <Alphabet alphabet={hangman.alphabet}/>
      </div>
    </>
  )
}

export default App
