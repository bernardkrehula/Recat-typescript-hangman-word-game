import { useEffect, useState } from 'react'
import './App.css'
import hangmanData from '../data/hangmanData';
import Alphabet from '../components/alphabet/Aphabet';
import StartMenu from '../components/startMenu/StartMenu';
import type { HangmanType } from './HangmanType';

function App() {
  const [ hangmanValues, setHangmanValues ] = useState({
      modes: {
          easy: {
              isClicked: true,
              category: {
                  movie: [],
                  tvshow: [],
                  country: [],
                  animal: []
              },
              alphabet: ''
          },
          hard: {
                  isClicked: false,
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
  const [ selectedCategory, setCategory ] = useState('');

  useEffect(() => {
    setHangmanValues(hangmanData);
  },[])

  const handleClick = (mode) => {
    setHangmanValues(prev => ({
      ...prev,
      modes: {
        ...prev.modes, [mode]: {
          ...prev.modes[mode], isClicked: !prev.modes[mode].isClicked,
        },
      },
    }))
    console.log(hangmanValues)
  }
  const hangman: HangmanType = hangmanValues;

  return (
    <>
      <div className='main'>
        <StartMenu hangman={hangman} selectedMode={selectedMode} setMode={setMode} setCategory={setCategory} handleClick={handleClick}/>
        <Alphabet hangman={hangman} selectedMode={selectedMode} selectedCategory={selectedCategory}/>
      </div>
    </>
  )
}

export default App;
