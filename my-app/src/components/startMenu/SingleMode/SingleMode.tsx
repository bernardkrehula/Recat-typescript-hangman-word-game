import Btn from "../../Btn/Btn";
import type { SingleModProps } from "../StartMenu";

const SingleMode = ({selectedMode, mode, handleModClick}: SingleModProps) => {
    
    return(<Btn  variation={mode === selectedMode ? 'clicked' : ''} onClick={() => {
            handleModClick(mode)
        }}>{mode}</Btn>);
}

export default SingleMode;