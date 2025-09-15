import './StartMenu.css'
import Btn from '../Btn/Btn';
import type { Category, HangmanType } from '../../main/HangmanType';
import SingleMode from './SingleMode/SingleMode';
import { useState } from 'react';

type HangmanMode =  HangmanType;

export type MenuProps = {
    hangmanValues: HangmanMode;
    selectedMode: string;
    setMode: (value: string) => void;
    handleCategoryClick: (value: string) => void;
    handleModeClick: (value: string) => void;
    isCategoryClicked: string;
}

const StartMenu = ({hangmanValues, selectedMode, setMode, handleModeClick, handleCategoryClick, isCategoryClicked}: MenuProps) => {
    const [ isModeSelected, setSelectedMode ] = useState(hangmanValues.modes)
    
    const displayMode = () => Object.entries(isModeSelected).map(selected => <SingleMode hangmanValues={hangmanValues} setMode={setMode} selectedMode={selectedMode} selected={selected} setSelectedMode={setSelectedMode}/>)

    const displayCategories = () => {
        return Object.keys(hangmanValues.modes[selectedMode].categories).map(category => (<Btn key={category} onClick={() => {handleCategoryClick(category)}}>{category}</Btn>));
    }
    
    return(
        !isCategoryClicked ? (<div className='overlay'>
            <div className="start-menu">
                <h2>Chose mode:</h2>
                <div className='easy-hard-btns'>
                    {displayMode()}
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