import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/reducer";
const store = configureStore({
    reducer:{
        counterReducer
    }
})
export default store;