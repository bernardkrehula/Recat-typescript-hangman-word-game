
const hangmanData = {
    modes: {
        easy: {
            isClicked: true,
            categories: {
                movie: ['joker', 'titanic', 'spiderman', 'avatar', 'batman'],
                tvshow: ['supertalent', 'voice', 'friends', 'dexter'],
                country: ['spain', 'france', 'sweden', 'norway', 'egypt'],
                animal: ['lion', 'dog', 'cow', 'bird', 'shark']
            },
            alphabet: 'abcdefghijklmnopqrstuvwxyz'
        },
        hard: {
                isClicked: false,
                categories: {
                    movie: ['descent', 'interstellar', 'babadook', 'conjuring', 'saw'],
                    tvshow: ['fbi', 'bones', 'ncis', 'mentalist'],
                    country: ['tanzania', 'moldova', 'laos', 'haiti', 'senegal'],
                    animal: ['camel', 'antelope', 'kangaro', 'pinguin']
                },
                alphabet: 'abcdefghijklmnopqrstuvwxyz'
        }
    }
}
export default hangmanData;