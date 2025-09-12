import './Alphabet.css'
import Btn from '../Btn/Btn'
import { useState } from 'react'
import type { MenuProps } from '../startMenu/StartMenu'

const Alphabet = ({hangman, selectedMode, guessedWord}: MenuProps) => {
    const [ wrongLetters, setWrongLetter ] = useState([]);

    const displayAlphabet = () => { 
      return hangman.modes['easy'].alphabet
      .split('')
      .map((letter, index) => (<Btn key={index} onClick={() => returnLetter(letter)} varitaion='letter'>{letter}</Btn>))
    };
    const returnLetter = (letter) => {
      const clickedLetter = guessedWord.includes(letter);
      if(!clickedLetter) setWrongLetter(prev => [...prev, letter]);
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