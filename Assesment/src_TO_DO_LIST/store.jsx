import { combineReducers, createStore } from "redux";
import returndata from "./Reducers/Reducer";


const store = createStore(combineReducers({
    listdata: returndata,
}))

export default store;