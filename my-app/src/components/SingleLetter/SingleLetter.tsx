import { useState } from "react";
import Btn from "../Btn/Btn";

const SingleLetter = ({index, letter, guessTheWord}) => {
    const [ isClicked, setIsClicked ] = useState(false);

    return(
        <Btn key={index} varitaion={isClicked ? 'clicked-letter' : 'letter'} onClick={() => {
            setIsClicked(true)
            guessTheWord(letter)}}>{letter}</Btn>
    )
}

export default SingleLetter;