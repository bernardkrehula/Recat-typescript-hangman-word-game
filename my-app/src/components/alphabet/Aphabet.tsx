import './Alphabet.css'

type AlphabetProps = {
    alphabet: string[];
}

const Alphabet = ({alphabet}: AlphabetProps) => {

    return(
        <div className='words'>
          {alphabet.map((word: string, index: number) => {
            return(
              <div key={index} className='word'>
                <h2 key={word}>{word}</h2>
              </div>
            )
          })}
        </div>
    )
}
export default Alphabet;