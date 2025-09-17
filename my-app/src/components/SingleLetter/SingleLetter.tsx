import { useState } from "react";
import Btn from "../Btn/Btn";
import './SingleLetter.css'

type SingleLetterTypes = {
    index: number;
    letter: string;
    guessTheWord: (value: string) => void;
}

const SingleLetter = ({index, letter, guessTheWord}: SingleLetterTypes) => {
    const [ isClicked, setIsClicked ] = useState(false);

    return(
        <Btn key={index} variation={isClicked ? 'clicked-letter' : 'letter'} onClick={() => {
            setIsClicked(true)
            guessTheWord(letter)}}><span className={isClicked ? 'single-letter' : ''}>{letter}</span></Btn>
    )
}

export default SingleLetter;