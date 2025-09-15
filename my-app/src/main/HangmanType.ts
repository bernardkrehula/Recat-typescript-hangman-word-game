export type Mode = 'easy' | 'hard';
export type Category = 'movie' | 'tvshow' | 'country' | 'animal';

export type HangmanType = {
  modes: {
    easy: {
        isClicked: boolean,
        categories: {
          movie: string[],
          tvshow: string[],
          country: string[],
          animal: string[]
        }
      },
      hard: {
        isClicked: boolean,
        categories: {
          movie: string[],
          tvshow: string[],
          country: string[],
          animal: string[]
        }
      }
    },
    wrongGuessImages: string[],
    alphabet: string
}
