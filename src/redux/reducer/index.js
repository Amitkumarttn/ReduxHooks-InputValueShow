import {combineReducers} from 'redux';
import inputValueReducer from './InputValueReducer';

const CombineReducers = combineReducers({
  inputVal: inputValueReducer,
});

export default CombineReducers;
