import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer/reducer";
import thunk from "redux-thunk";

// Verifica si la extensión Redux DevTools está instalada y habilitada
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
