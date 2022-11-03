import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";
import { connexionReducer } from "./connexionReducer";



export const rootReducer = combineReducers({
    questionReducer:questionReducer,
    connexionReducer :connexionReducer
})