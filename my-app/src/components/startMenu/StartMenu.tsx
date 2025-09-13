import './StartMenu.css'
import Btn from '../Btn/Btn';
import type { HangmanType } from '../../main/HangmanType';

type HangmanMode =  HangmanType;

export type MenuProps = {
    hangman: HangmanMode;
    selectedMode: string;
    setMode: (value: string) => void;
    handleCategoryClick: (value: string) => void;
    handleModeClick: (value: string) => void;
    isCategoryClicked: string;
}

const StartMenu = ({hangman, selectedMode, setMode, handleModeClick, handleCategoryClick, isCategoryClicked}: MenuProps) => {
    

    const displayModes = () => {
       return Object.keys(hangman.modes).map((mode, index) => (<Btn key={index} varitaion={hangman.modes[mode].isClicked ? 'clicked' : ''} onClick={() => {
        handleModeClick(mode)
        setMode(mode)
       }}>{mode}</Btn>));
    }

    const displayCategories = () => {
        return Object.keys(hangman.modes[selectedMode].categories).map(category => (<Btn key={category} onClick={() => {handleCategoryClick(category)}}>{category}</Btn>));
    }
    
    
    
    return(
        !isCategoryClicked ? (<div className='overlay'>
            <div className="start-menu">
                <h2>Chose mode:</h2>
                <div className='easy-hard-btns'>
                    {displayModes()}
                </div>
                <h2>Chose Category to start the game:</h2>
                <div className='categories'>
                    {displayCategories()}
                </div>
            </div>
        </div>) : ''
    )
}
export default StartMenu;