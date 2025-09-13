import './Alphabet.css'
import Btn from '../Btn/Btn'
import { useEffect, useState } from 'react'
import type { MenuProps } from '../startMenu/StartMenu'
import SingleLetter from '../SingleLetter/SingleLetter'

const Alphabet = ({hangman, setClickedCategory, guessedWord, selectedCategory}: MenuProps) => {
    const [ wrongLetters, setWrongLetter ] = useState([]);
    const [ chosenWord, setChosenWord ] = useState('');
    const [ hiddenWord, setHiddenWord ] = useState([]);
    const [ showAlphabet, setShowAlphabet ] = useState(false);
    const [ winnerAnnoucment, setWinnerAnnoucment ] = useState(false);
    const hangamanImagesLength = hangman.wrongGuessImages.length - 2;

    useEffect(() => {
      const hiddenValue = Object.values(guessedWord).map(() => '_')
      setHiddenWord(hiddenValue)
      setChosenWord(Object.values(guessedWord))
    }, [guessedWord])

    const displayAlphabet = () => {
      return(
        <div className='words'>{hangman.modes['easy'].alphabet
          .split('')
          .map((letter, index) => (<SingleLetter key={index} index={index} letter={letter} guessTheWord={guessTheWord}/>))}
        </div>)
    };
    const guessTheWord = (letter) => {
      const clickedLetter = guessedWord.includes(letter);
      if(!clickedLetter) setWrongLetter(prev => [...prev, letter]);
      if(clickedLetter) displayHidenGuessedWord(letter);
      if(wrongLetters.length === hangamanImagesLength){
        setShowAlphabet(prev => !prev)
        setHiddenWord(Object.values(guessedWord))
      }
    }
    const displayHidenGuessedWord = (guessedLetter) => {      
      if(guessedLetter){
          setHiddenWord(prev => {
            const updated = prev.map((hiddenLetter, index) => chosenWord[index] === guessedLetter ? guessedLetter : hiddenLetter)
            
            if(updated.every(hiddenLetter => hiddenLetter !== '_')){
              setWinnerAnnoucment(true)
              setShowAlphabet(true)
            }  
            return updated;
          })
      }
    }
    const resetGame = () => {
      setWinnerAnnoucment(false)
      setShowAlphabet(false)
      setWrongLetter([]);
      setHiddenWord([])
      setClickedCategory(false)
    }
    const changeCategory = () => {
      setClickedCategory(false)
      setShowAlphabet(false)
      setWinnerAnnoucment(false)
      setWrongLetter([]);
      setHiddenWord([]);
    }

    return(
      <>
        <div className='header'>
            <h2>Hangman. Do (or) Die</h2>
            <h3>Guessed wrong: {wrongLetters.length}</h3>
            <Btn varitaion='change-category' onClick={changeCategory}>Change Category</Btn>
          </div>
        <img src={`./${hangman.wrongGuessImages[wrongLetters.length]}`} className='hangman'/>
        <h4>Guess the {selectedCategory.toUpperCase()}:</h4>
        <div className='guessed-words'>
          {hiddenWord.map((letter, index) => <h5 key={index} className='guessed-word'>{letter}</h5>)}
        </div>
        {!showAlphabet ? displayAlphabet() : 
        <div className='winner-annoucment'>
          {winnerAnnoucment ? <h4>You Won...</h4> : <h4>You lost...</h4>} 
          <Btn varitaion='reset' onClick={resetGame}>Reset</Btn>
        </div>}
      </>
    )
}
export default Alphabet;