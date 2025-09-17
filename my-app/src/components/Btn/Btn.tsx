import './Btn.css'

type BtnType = {
    variation: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const Btn = ({variation, onClick, children}: BtnType) => {

    return(
        <button className={`btn ${variation}`} onClick={onClick}>{children}</button>
    )
}
export default Btn;