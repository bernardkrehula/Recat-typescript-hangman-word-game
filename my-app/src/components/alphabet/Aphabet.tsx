import './Alphabet.css'
import Btn from '../Btn/Btn'
import { useEffect, useState } from 'react'
import type { MenuProps } from '../startMenu/StartMenu'
import SingleLetter from '../SingleLetter/SingleLetter'

const Alphabet = ({hangman, selectedMode, guessedWord}: MenuProps) => {
    const [ wrongLetters, setWrongLetter ] = useState([]);
    const [ chosenWord, setChosenWord ] = useState('');
    const [ hiddenWord, setHiddenWord ] = useState([]);

    useEffect(() => {
      const hiddenValue = Object.values(guessedWord).map(() => '_')
      setHiddenWord(hiddenValue)
      setChosenWord(Object.values(guessedWord))
    }, [guessedWord])

    const displayAlphabet = () => {
      return hangman.modes['easy'].alphabet
      .split('')
      .map((letter, index) => (<SingleLetter key={index} index={index} letter={letter} guessTheWord={guessTheWord}/>))
    };
    const guessTheWord = (letter) => {
      const clickedLetter = guessedWord.includes(letter);
      if(!clickedLetter) setWrongLetter(prev => [...prev, letter]);
      if(clickedLetter) displayHidenGuessedWord(letter);
    }
    const displayHidenGuessedWord = (guessedLetter) => {
      if(guessedLetter){
          setHiddenWord(prev => prev.map((hiddenLetter, index) => chosenWord[index] === guessedLetter ? guessedLetter : hiddenLetter))
      }
    }

    return(
      <>
        <div className='header'>
            <h2>Hangman. Do (or) Die</h2>
            <h3>Guessed wrong: {wrongLetters.length}</h3>
            <Btn varitaion='change-category'>Change Category</Btn>
          </div>
        <img src='./0wrongGuess.jpeg' className='hangman'/>
        <h4>Guess the TVSHOW:</h4>
        <div className='guessed-words'>
          {hiddenWord.map(letter => <h5 className='guessed-word'>{letter}</h5>)}
        </div>
        <div className='words'>
        {displayAlphabet()}
          
          {/* alphabet.map((word: string, index: number) => {
            return(
              <div key={index} className='word'>
                <h2 key={word}>{word}</h2>
              </div>
            )
          }) */}
        </div>
      </>
    )
}
export default Alphabet;