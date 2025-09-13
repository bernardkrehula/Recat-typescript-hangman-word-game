export type HangmanType = {
  modes: {
    easy: {
        category: {
          movie: string[],
          tvshow: string[],
          country: string[],
          animal: string[]
        },
        alphabet: string
      },
      hard: {
        category: {
          movie: string[],
          tvshow: string[],
          country: string[],
          animal: string[]
        },
        alphabet: string
      }
    },
  wrongGuessImages: string[]
}
