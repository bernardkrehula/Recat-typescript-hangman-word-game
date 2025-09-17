import { useEffect, useState } from 'react'
import './App.css'
import hangmanData from '../data/hangmanData';
import Alphabet from '../components/alphabet/Aphabet';
import StartMenu from '../components/startMenu/StartMenu';
import type { HangmanType } from './HangmanType';
import type { Mode, Category } from './HangmanType';

function App() {
  const hangmanValues: HangmanType = hangmanData;
  const [ selectedMode, setMode ] = useState<Mode>('easy');
  const [ guessedWord, setGuessedWord ] = useState<string>('');
  const [ isCategoryClicked, setClickedCategory ] = useState<boolean>(false);
  const [ selectedCategory, setSelectedCategory ] = useState('');
  const [ timeLeft, setTimeLeft ] = useState<number>(0);
  const [ showAlphabet, setShowAlphabet ] = useState(true);
  const [ hiddenWord, setHiddenWord ] = useState<string[]>([]);
  
  const handleCategoryClick = (chosenCategory: Category) => {
    getGuessedWord(chosenCategory)
    setClickedCategory(prev => !prev)
    setSelectedCategory(chosenCategory)
    setTimeLeft(30);
  }
  useEffect(() => {
    if(selectedMode === 'hard' && isCategoryClicked) handleTimmer()
  }, [selectedMode, isCategoryClicked, timeLeft])

  const handleModClick = (mode: Mode) => {
    setMode(mode);
  }
  const handleTimmer = () => {
    setTimeout(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : prev)
    },1000)
    if(timeLeft === 0) {
      setShowAlphabet(false)
      setHiddenWord(Object.values(guessedWord))
    };
  }

  const getGuessedWord = (chosenCategory: Category) => {
    const randomIndex = Math.floor(Math.random() * hangmanValues.modes[selectedMode].categories[chosenCategory].length);
    const randomWord = hangmanValues.modes[selectedMode].categories[chosenCategory][randomIndex];
    setGuessedWord(randomWord);  
  }
  return (
    <>
      <div className='main'>
        <StartMenu hangmanValues={hangmanValues} selectedMode={selectedMode} isCategoryClicked={isCategoryClicked} handleCategoryClick={handleCategoryClick} handleModClick={handleModClick}/>
        <Alphabet hangmanValues={hangmanValues} timeLeft={timeLeft} selectedMode={selectedMode} guessedWord={guessedWord} selectedCategory={selectedCategory} setClickedCategory={setClickedCategory} showAlphabet={showAlphabet} setShowAlphabet={setShowAlphabet} hiddenWord={hiddenWord} setHiddenWord={setHiddenWord}/>
      </div>
    </>
  )
}

export default App;
