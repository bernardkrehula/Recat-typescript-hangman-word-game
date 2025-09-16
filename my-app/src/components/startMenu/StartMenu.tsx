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
    isCategoryClicked: string;
}
export type SingleModProps = MenuProps & {
    mode: string;
}

const StartMenu = ({hangmanValues, selectedMode, setMode, handleCategoryClick, isCategoryClicked}: MenuProps) => {
    
    
    const displayMode = () => Object.keys(hangmanValues.modes).map((mode, key) => <SingleMode key={key} setMode={setMode} selectedMode={selectedMode} mode={mode}/>)

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