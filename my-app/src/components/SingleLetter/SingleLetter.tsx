import { useState } from "react";
import Btn from "../Btn/Btn";
import './SingleLetter.css'

const SingleLetter = ({index, letter, guessTheWord}) => {
    const [ isClicked, setIsClicked ] = useState(false);

    return(
        <Btn key={index} varitaion={isClicked ? 'clicked-letter' : 'letter'} onClick={() => {
            setIsClicked(true)
            guessTheWord(letter)}}><span className={isClicked ? 'single-letter' : ''}>{letter}</span></Btn>
    )
}

export default SingleLetter;