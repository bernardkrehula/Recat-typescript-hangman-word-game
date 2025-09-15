import type { MenuProps } from "../StartMenu";
import Btn from "../../Btn/Btn";
import { useState } from "react";

const SingleMode = ({hangmanValues, setMode, selectedMode, selected, setSelectedMode}: MenuProps) => {
    console.log(selected)
    return(<Btn  varitaion={selected ? 'clicked' : ''} onClick={() => {
            setMode(mode)
            setSelectedMode(prev => prev.map(isClicked => !isClicked))
        }}>{selectedMode}</Btn>);
}

export default SingleMode;