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
              categories: {
                  movie: [],
                  tvshow: [],
                  country: [],
                  animal: []
              },
              alphabet: ''
          },
          hard: {
                  isClicked: false,
                  categories: {
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
  const [ guessedWord, setGuessedWord ] = useState('');
  const [ isCategoryClicked, setClickedCategory ] = useState(false);

  const hangman: HangmanType = hangmanValues;

  useEffect(() => {
    setHangmanValues(hangmanData);
  },[])

  const handleModeClick = (mode) => {
    if(hangmanValues.modes[mode].isClicked != true){
        setHangmanValues(prev => ({
        ...prev,
        modes: Object.fromEntries(Object.entries(prev.modes).map(([key, mode]) => [key, {...mode, isClicked: !mode.isClicked}]))
      }))
    }
  }

  const handleCategoryClick = (chosenCategory) => {
    getGuessedWord(chosenCategory)
    setClickedCategory(prev => !prev)
  }

  const getGuessedWord = (chosenCategory) => {
    const randomIndex = Math.floor(Math.random() * hangmanValues.modes[selectedMode].categories[chosenCategory].length);
    const randomWord = hangmanValues.modes[selectedMode].categories[chosenCategory][randomIndex];
    setGuessedWord(randomWord);  
  }
  return (
    <>
      <div className='main'>
        <StartMenu hangman={hangman} selectedMode={selectedMode} setMode={setMode} handleModeClick={handleModeClick} handleCategoryClick={handleCategoryClick} isCategoryClicked={isCategoryClicked}/>
        <Alphabet hangman={hangman} selectedMode={selectedMode} guessedWord={guessedWord}/>
      </div>
    </>
  )
}

export default App;
