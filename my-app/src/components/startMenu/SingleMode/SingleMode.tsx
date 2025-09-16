import Btn from "../../Btn/Btn";
import type { SingleModProps } from "../StartMenu";

const SingleMode = ({setMode, selectedMode, mode}: SingleModProps) => {
    
    return(<Btn  varitaion={mode === selectedMode ? 'clicked' : ''} onClick={() => {
            setMode(mode)
        }}>{mode}</Btn>);
}

export default SingleMode;