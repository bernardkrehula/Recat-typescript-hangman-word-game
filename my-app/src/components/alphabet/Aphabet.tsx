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
    timeLeft: number;
    hiddenWord: string[];
    setHiddenWord: Dispatch<SetStateAction<string[]>>;
    showAlphabet: boolean;
    setShowAlphabet: (value: boolean) => void;
}

const Alphabet = ({hangmanValues, timeLeft, setClickedCategory, hiddenWord, setHiddenWord, guessedWord, selectedCategory, selectedMode, showAlphabet, setShowAlphabet}: alphabetType) => {
    const [ wrongLetters, setWrongLetter ] = useState<string[]>([]);
    const [ chosenWord, setChosenWord ] = useState<string[]>([]);
    const [ winnerAnnoucment, setWinnerAnnoucment ] = useState(false);
    const hangamanImagesLength = hangmanValues.wrongGuessImages.length - 2;

    useEffect(() => {
      const hiddenValue: string[] = guessedWord.split('').map(() => '_')
      console.log(hiddenValue)
      setHiddenWord(hiddenValue)
      setChosenWord(guessedWord.split(''))
    }, [guessedWord])

    const displayAlphabet = () => {
      return(
        <div className='words'>{hangmanValues.alphabet
          .split('')
          .map((letter, index) => (<SingleLetter key={index} index={index} letter={letter} guessTheWord={guessTheWord}/>))}
        </div>)
    };
    const guessTheWord = (letter: string) => {
      const clickedLetter = guessedWord.includes(letter);
      if(!clickedLetter) setWrongLetter(prev => [...prev, letter]);
      if(clickedLetter) displayHidenGuessedWord(letter);
      if(wrongLetters.length === hangamanImagesLength){
        setShowAlphabet(false)
        setHiddenWord(Object.values(guessedWord))
      }
    }
    const displayHidenGuessedWord = (guessedLetter: string) => {
      if(!guessedLetter) return

      if(guessedLetter){
          setHiddenWord((prev) => {
            const updated = prev.map((hiddenLetter: string, index: number) => chosenWord[index] === guessedLetter ? guessedLetter : hiddenLetter)
            
            if(updated.every((hiddenLetter: string) => hiddenLetter !== '_')){
              setWinnerAnnoucment(true)
              setShowAlphabet(false)
            }  
            return updated;
          })
      }
    }
    
    const resetGame = () => {
      setWinnerAnnoucment(false)
      setShowAlphabet(true)
      setWrongLetter([]);
      setHiddenWord([])
      setClickedCategory(false)
    }
    const changeCategory = () => {
      setClickedCategory(false)
      setShowAlphabet(true)
      setWinnerAnnoucment(false)
      setWrongLetter([]);
      setHiddenWord([]);
    }
    const formatTime = (num: number) => {
      return String(num).padStart(2, '0')
    }

    return(
      <>
        <div className='header'>
            <h2>Hangman. Do (or) Die</h2>
            <h3>Guessed wrong: {wrongLetters.length}</h3>
            <Btn variation='change-category' onClick={changeCategory}>Change Category</Btn>
          </div>
          {selectedMode === 'hard' && showAlphabet ? <h4 className='timmer'>Time left: 00:{formatTime(timeLeft)}</h4> : ''}
        <img src={`./${hangmanValues.wrongGuessImages[wrongLetters.length]}`} className='hangman'/>
        <h4>Guess the {selectedCategory.toUpperCase()}:</h4>
        <div className='guessed-letters'>
          {hiddenWord.map((letter, index) => <h5 key={index} className='guessed-letter'>{letter}</h5>)}
        </div>
        {showAlphabet ? displayAlphabet() : 
        <div className='winner-annoucment'>
          {winnerAnnoucment ? <h4>You Won...</h4> : <h4>You lost...</h4>} 
          <Btn variation='reset' onClick={resetGame}>Reset</Btn>
        </div>}
      </>
    )
}
export default Alphabet;