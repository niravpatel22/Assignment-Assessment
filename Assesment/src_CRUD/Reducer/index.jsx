import { combineReducers } from "redux";
import reducer from "./Reducer";


const rootReducer = combineReducers({
    reducer: reducer,// there are many cases in redcuer to thats why storing it into object 
})

export default rootReducer;