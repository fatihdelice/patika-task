import { createSlice, nanoid } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [
            {
                id: nanoid(),
                title: "Big Mac",
                image: "https://neal.fun/spend/images/big-mac.jpg",
                price: 2,
                count: "0",
            },
            {
                id: nanoid(),
                title: "Flip Flops",
                image: "https://neal.fun/spend/images/flip-flops.jpg",
                price: 3,
                count: "0",
            },
            {
                id: nanoid(),
                title: "Coca-Cola Pack",
                image: "https://neal.fun/spend/images/coca-cola-pack.jpg",
                price: 3,
                count: "0",
            },
            {
                id: nanoid(),
                title: "Movie Ticket",
                image: "https://neal.fun/spend/images/movie-ticket.jpg",
                price: 12,
                count: "0",
            },
            {
                id: nanoid(),
                title: "Cruise Ship",
                image: "https://neal.fun/spend/images/cruise-ship.jpg",
                price: 930000000,
                count: "0",
            },
            {
                id: nanoid(),
                title: "NBA Team",
                image: "https://neal.fun/spend/images/nba-team.jpg",
                price: 2120000000,
                count: "0",
            },
        ],
        budget: 100000000000,
        initialMoney: 100000000000,
    },
    reducers: {
        updateCount: (state, action) => {
            const { count, id } = action.payload;

            const product = state.items.find((product) => product.id === id); 
            product.count = count;

            let price = 0; 

            state.items.forEach((product) => {
                price += Number(product.count) * Number(product.price);
            });

            state.budget = Number(state.initialMoney) - Number(price); 
        },
    },
});

export const { updateCount } = productsSlice.actions;
export default productsSlice.reducer;