import type { Dispatch, SetStateAction } from 'react'
import './Alphabet.css'
import Btn from '../Btn/Btn'
import { useEffect, useState } from 'react'
import SingleLetter from '../SingleLetter/SingleLetter'
import type { HangmanType } from '../../main/HangmanType'

type alphabetType = {
    hangmanValues: HangmanType;
    setClickedCategory: Dispatch<SetStateAction<boolean>>;
    guessedWord: string;
    selectedCategory: string;
    selectedMode: string;
}

const Alphabet = ({hangmanValues, setClickedCategory, guessedWord, selectedCategory, selectedMode}: alphabetType) => {
    const [ wrongLetters, setWrongLetter ] = useState<string[]>([]);
    const [ chosenWord, setChosenWord ] = useState<string[]>([]);
    const [ hiddenWord, setHiddenWord ] = useState<string[]>([]);
    const [ showAlphabet, setShowAlphabet ] = useState(false);
    const [ winnerAnnoucment, setWinnerAnnoucment ] = useState(false);
    const [ timeLeft, setTimeLeft ] = useState(30);
    const hangamanImagesLength = hangmanValues.wrongGuessImages.length - 2;

    useEffect(() => {
      const hiddenValue = Object.values(guessedWord).map(() => '_')
      setHiddenWord(hiddenValue)
      setChosenWord(guessedWord.split(''))
    }, [guessedWord])

    const displayAlphabet = () => {
      return(
        <div className='words'>{hangmanValues.modes.easy.alphabet
          .split('')
          .map((letter, index) => (<SingleLetter key={index} index={index} letter={letter} guessTheWord={guessTheWord}/>))}
        </div>)
    };
    const guessTheWord = (letter: string) => {
      const clickedLetter = guessedWord.includes(letter);
      if(!clickedLetter) setWrongLetter(prev => [...prev, letter]);
      if(clickedLetter) displayHidenGuessedWord(letter);
      if(wrongLetters.length === hangamanImagesLength){
        setShowAlphabet(prev => !prev)
        setHiddenWord(Object.values(guessedWord))
      }
    }
    const displayHidenGuessedWord = (guessedLetter: string) => {      
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
        <img src={`./${hangmanValues.wrongGuessImages[wrongLetters.length]}`} className='hangman'/>
        <h4>Guess the {selectedCategory.toUpperCase()}:</h4>
        <div className='guessed-letters'>
          {hiddenWord.map((letter, index) => <h5 key={index} className='guessed-letter'>{letter}</h5>)}
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