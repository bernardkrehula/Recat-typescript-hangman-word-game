import Btn from "../../Btn/Btn";

const SingleMode = ({setMode, selectedMode, mode}: SingleModProps) => {
    
    return(<Btn  varitaion={mode === selectedMode ? 'clicked' : ''} onClick={() => {
            setMode(mode)
        }}>{mode}</Btn>);
}

export default SingleMode;