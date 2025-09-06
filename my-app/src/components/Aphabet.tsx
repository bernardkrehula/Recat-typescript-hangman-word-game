type AlphabetProps = {
    alphabet: string[]
}

const Alphabet = ({alphabet}: AlphabetProps) => {

    return(
        <div className='words'>
          {alphabet.map((word: string) => {
            return(
              <h2 key={word}>{word}</h2>
            )
          })}
        </div>
    )
}
export default Alphabet;