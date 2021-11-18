import { createStore } from "redux";
import Reducer from "./Reducers";

let store = createStore(Reducer);
export default store;
