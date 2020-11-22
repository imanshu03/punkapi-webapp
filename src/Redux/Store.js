import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setItemReducer } from './Reducers';

const allReducers = combineReducers({
    items: setItemReducer
});

export const Store = createStore(allReducers, composeWithDevTools());