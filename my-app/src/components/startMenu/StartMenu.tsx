import './StartMenu.css'
import Btn from '../Btn/Btn';
import type { HangmanType } from '../../main/HangmanType';

type HangmanMode = {
    hangman: HangmanType;
}

const StartMenu = ({hangman}: HangmanMode) => {
    
    
    const displayData = () => {
        console.log(hangman)
        console.log(Object.keys(hangman.mode))
    }
    return(
        <div className='overlay'>
            <div className="start-menu">
                <h2>Chose mode:</h2>
                <div className='easy-hard-btns'>
                    {/* {Object.keys(hangman.mode).map()} */}
                    <Btn onClick={displayData}>Easy</Btn>
                    <Btn>Hard</Btn>
                </div>
                <h2>Chose Category to start the game:</h2>
                <div className='categories'>
                    <Btn>Movie</Btn>
                    <Btn>TvShow</Btn>
                    <Btn>Country</Btn>
                    <Btn>Animal</Btn>
                </div>
            </div>
        </div> 
    )
}
export default StartMenu;