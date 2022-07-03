const INITIAL_STATE = {
    cards: [
        {
            id: 1,
            name: 'man t-shirt summer season',
            image: '1.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 2,
            name: 'man t-shirt summer season',
            image: '2.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 3,
            name: 'man t-shirt summer season',
            image: '3.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 4,
            name: 'man t-shirt summer season',
            image: '4.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 5,
            name: 'man t-shirt summer season',
            image: '5.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 6,
            name: 'man t-shirt summer season',
            image: '6.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },

    ],



}

const cardsReducer = (state = INITIAL_STATE, action) => {


    switch(action.type){
        case "PRODUCT": 
        return {...state, card: state.cards.find(card => card.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export {
    cardsReducer,

}