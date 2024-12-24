import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    count:0,

}
const reducerCounter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count +=action.payload;
        },
        decrement: (state, action) => {
            state.count -=action.payload;
        },
        incrementTen: (state, action) => {
            state.count +=action.payload;
        },
        decrementTen: (state, action) => {
            state.count -=action.payload;
        },
        reset: (state) => {
                state.count = 0; // Простой способ сброса
        }
    }

})
export const {increment,incrementTen,reset, decrement, decrementTen} = reducerCounter.actions
export default reducerCounter.reducer;