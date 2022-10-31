import { combineReducers } from "redux";
import { homeReducer } from './homeReducer';
import { rentHomeReducer } from "./rentHomeReducer";
import { categoryReducer } from "./categoryReducer";



export const rootReducer = combineReducers({
    homeReducer : homeReducer,
    rentHomeReducer : rentHomeReducer,
    categoryReducer : categoryReducer
})