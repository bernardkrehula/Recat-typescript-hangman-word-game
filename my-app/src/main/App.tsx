import { useEffect, useState } from 'react'
import './App.css'
import hangmanData from '../data/hangmanData';
import Alphabet from '../components/Aphabet';

type HangmanType = {
  mode: string[],
  category: string[],
  alphabet: string[]
}
function App() {
  const [ hangman, setHangman ] = useState<HangmanType>({
    mode: [],
    category: [],
    alphabet: []});

  useEffect(() => {
    setHangman(hangmanData);
  },[])

  return (
    <>
      <div className='main'>
        <Alphabet alphabet={hangman.alphabet}/>
      </div>
    </>
  )
}

export default App
