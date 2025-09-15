import { useState } from 'react'
import './App.css'
import hangmanData from '../data/hangmanData';
import Alphabet from '../components/alphabet/Aphabet';
import StartMenu from '../components/startMenu/StartMenu';
import type { HangmanType } from './HangmanType';

function App() {
  //Pomaknuti sve sto se ne mjenja u constante
  //
  const hangmanValues: HangmanType = hangmanData;
  const [ selectedMode, setMode ] = useState<Mode>('easy');
  const [ guessedWord, setGuessedWord ] = useState('');
  const [ isCategoryClicked, setClickedCategory ] = useState(false);
  const [ selectedCategory, setSelectedCategory ] = useState('');

  type Mode = 'easy' | 'hard'

  type category = 'movie' | 'tvshow' | 'country' | 'animal';

  

  const handleCategoryClick = (chosenCategory: category) => {
    getGuessedWord(chosenCategory)
    setClickedCategory(prev => !prev)
    setSelectedCategory(chosenCategory)
  }

  const getGuessedWord = (chosenCategory: category) => {
    const randomIndex = Math.floor(Math.random() * hangmanValues.modes[selectedMode].categories[chosenCategory].length);
    const randomWord = hangmanValues.modes[selectedMode].categories[chosenCategory][randomIndex];
    setGuessedWord(randomWord);  
  }
  return (
    <>
      <div className='main'>
        <StartMenu hangmanValues={hangmanValues} selectedMode={selectedMode} setMode={setMode} handleCategoryClick={handleCategoryClick} isCategoryClicked={isCategoryClicked}/>
        <Alphabet hangmanValues={hangmanValues} selectedMode={selectedMode} guessedWord={guessedWord} selectedCategory={selectedCategory} setClickedCategory={setClickedCategory}/>
      </div>
    </>
  )
}

export default App;
