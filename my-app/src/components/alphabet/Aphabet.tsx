import './Alphabet.css'
import Btn from '../Btn/Btn'

type AlphabetProps = {
    alphabet: string[];
}

const Alphabet = ({alphabet}: AlphabetProps) => {

    return(
        <div className='words'>
          <div className='header'>
            <h2>Hangman. Do (or) Die</h2>
            <h3>Guessed wrong: 0</h3>
            <Btn varitaion='change-category'>Change Category</Btn>
          </div>
          
          {/* alphabet.map((word: string, index: number) => {
            return(
              <div key={index} className='word'>
                <h2 key={word}>{word}</h2>
              </div>
            )
          }) */}
        </div>
    )
}
export default Alphabet;