import { useState } from 'react'
import './App.css'
import hangmanData from '../data/hangmanData';
import Alphabet from '../components/alphabet/Aphabet';
import StartMenu from '../components/startMenu/StartMenu';

//Prebaciti hangman data u neki objekt a guessedWord u state

type HangmanType = {
  easy: {
    category: {
      movie: string[],
      tvshow: string[],
      country: string[],
      animal: string[]
    },
    alphabet: string
  },
  hard: {
    category: {
      movie: string[],
      tvshow: string[],
      country: string[],
      animal: string[]
    },
    alphabet: string
  }
}

function App() {
  const [ guessedWord, setGuessedWord ] = useState('');
  const hangman: HangmanType = hangmanData.mode;



  return (
    <>
      <div className='main'>
        <StartMenu hangman={hangman}/>
        {/* <Alphabet alphabet={hangman.alphabet}/> */}
      </div>
    </>
  )
}

export default App
