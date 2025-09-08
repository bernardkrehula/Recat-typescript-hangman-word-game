import { useState } from 'react'
import './App.css'
import hangmanData from '../data/hangmanData';
import Alphabet from '../components/alphabet/Aphabet';

//Prebaciti hangman data u neki objekt a guessedWord u state

type HangmanType = {
  mode: 'hard' | 'easy',
  category: string[],
  alphabet: string
}

function App() {
  const [ guessedWord, setGuessedWord ] = useState('');
  const hangman: HangmanType = hangmanData;



  return (
    <>
      <div className='main'>
        <Alphabet alphabet={hangman.alphabet}/>
      </div>
    </>
  )
}

export default App
