import './Alphabet.css'
import Btn from '../Btn/Btn'
import type { HangmanType } from '../../main/HangmanType'
import { useState } from 'react'

const Alphabet = ({hangman}: HangmanType) => {
  const [ guessedWord, setGuessedWord ] = useState('');

    const displayAlphabet = () => { 
      return hangman.mode['easy'].alphabet
      .split('')
      .map((letter, index) => (<Btn key={index} onClick={() => returnLetter(letter)} varitaion='letter'>{letter}</Btn>))
    };
    const returnLetter = (letter) => {
      setGuessedWord(prev => prev + letter)
      
      console.log(guessedWord)
    }

    return(
      <>
        <div className='header'>
            <h2>Hangman. Do (or) Die</h2>
            <h3>Guessed wrong: 0</h3>
            <Btn varitaion='change-category'>Change Category</Btn>
          </div>
        <img src='./0wrongGuess.jpeg' className='hangman'/>
        <h4>Guess the TVSHOW:</h4>
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