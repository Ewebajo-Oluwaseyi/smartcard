import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import hospitalReducer  from './hospital/reducer';


const rootReducer = combineReducers({
    hospitalReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));