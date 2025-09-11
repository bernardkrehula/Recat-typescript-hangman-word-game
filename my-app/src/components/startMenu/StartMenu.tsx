import './StartMenu.css'
import Btn from '../Btn/Btn';
import type { HangmanType } from '../../main/HangmanType';
import { useState } from 'react';

type HangmanMode = {
    hangman: HangmanType;
}

export type MenuProps = {
    hangman: HangmanMode;
    selectedMode: string;
    setMode: string;
    setCategory: string;
}

const StartMenu = ({hangman, selectedMode, setMode, setCategory}: MenuProps) => {
    
    
    const displayModes = () => {
       return Object.keys(hangman.mode).map(mode => (<Btn key={mode} onClick={() => {setMode(mode)}}>{mode}</Btn>));
    }

    const displayCategories = () => {
        return Object.keys(hangman.mode[selectedMode].category).map(key => (<Btn key={key} onClick={() => setCategory(key)}>{key}</Btn>));
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
                    {displayCategories()}
                </div>
            </div>
        </div> 
    )
}
export default StartMenu;