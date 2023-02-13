
import { createStore } from "redux"
function reducer(state = { counter: 0 ,name:"raju"}, action) {
    if (action.type === "add") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "sub") {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
        }
    }
    return state;
}
const store = createStore(reducer)

export default store;