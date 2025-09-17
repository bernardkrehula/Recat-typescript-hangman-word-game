import './StartMenu.css'
import type { Category, HangmanType, Mode } from '../../main/HangmanType';
import SingleMode from './SingleMode/SingleMode';
import SingleCategory from './SingleCategory/SingleCategory';

type HangmanMode =  HangmanType;

export type MenuProps = {
    hangmanValues: HangmanMode;
    selectedMode: Mode;
    handleCategoryClick: (value: Category) => void;
    isCategoryClicked: boolean;
    handleModClick: (value: Mode) => void;
}
export type SingleModProps = {
    mode: Mode;
    handleModClick: (value: Mode) => void;
    selectedMode: Mode;
}

const StartMenu = ({hangmanValues, selectedMode, handleCategoryClick, isCategoryClicked, handleModClick}: MenuProps) => {
    
    
    const displayMode = () => { return Object.keys(hangmanValues.modes).map((modeKey, key) => {
        const mode = modeKey as Mode;
        return <SingleMode key={key} selectedMode={selectedMode} mode={mode} handleModClick={handleModClick}/>
    })}

    const displayCategories = () => {
        return Object.keys(hangmanValues.modes[selectedMode].categories).map((categoryKey, index) => {
            const category = categoryKey as Category;
            return(
                <SingleCategory key={index} index={index} category={category} handleCategoryClick={handleCategoryClick}/>
            )
    });
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