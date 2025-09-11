import { useEffect, useState } from 'react'
import './App.css'
import hangmanData from '../data/hangmanData';
import Alphabet from '../components/alphabet/Aphabet';
import StartMenu from '../components/startMenu/StartMenu';
import type { HangmanType } from './HangmanType';

function App() {
  const [ hangmanValues, setHangmanValues ] = useState({
      mode: {
          easy: {
              category: {
                  movie: [],
                  tvshow: [],
                  country: [],
                  animal: []
              },
              alphabet: ''
          },
          hard: {
                  category: {
                      movie: [],
                      tvshow: [],
                      country: [],
                      animal: []
                  },
                  alphabet: ''
          }
      }
    }
  )
  const [ selectedMode, setMode ] = useState('easy');

  useEffect(() => {
    setHangmanValues(hangmanData);
  },[])
  const hangman: HangmanType = hangmanValues;

  return (
    <>
      <div className='main'>
        <StartMenu hangman={hangman} selectedMode={selectedMode} setMode={setMode}/>
        <Alphabet hangman={hangman}/>
      </div>
    </>
  )
}

export default App;
