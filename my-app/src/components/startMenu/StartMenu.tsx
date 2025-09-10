import './StartMenu.css'
import Btn from '../Btn/Btn';

const StartMenu = ({hangman}) => {
    console.log(hangman.mode)
    return(
        <div className="start-menu">
            <h2>Chose mode:</h2>
            <div className='easy-hard-btns'>
                <Btn>Easy</Btn>
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
    )
}
export default StartMenu;