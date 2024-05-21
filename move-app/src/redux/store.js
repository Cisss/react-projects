import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import shipReducer from "./reducers/shipReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        ships: shipReducer,
    }
})

export default store;