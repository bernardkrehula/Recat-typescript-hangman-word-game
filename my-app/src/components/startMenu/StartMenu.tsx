import './StartMenu.css'
import Btn from '../Btn/Btn';
import type { HangmanType } from '../../main/HangmanType';

type HangmanMode = {
    hangman: HangmanType;
}

const StartMenu = ({hangman}: HangmanMode) => {
    
    
    const displayModes = () => {
       return Object.keys(hangman.mode).map(mode => (<Btn key={mode}>{mode}</Btn>));
    }
    
    const displayCategories = () => {

    }
    return(
        <div className='overlay'>
            <div className="start-menu">
                <h2>Chose mode:</h2>
                <div className='easy-hard-btns'>
                    {displayModes()}
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