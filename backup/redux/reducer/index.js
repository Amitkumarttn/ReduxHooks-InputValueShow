import {combineReducers} from 'redux';
import taskReducer from './TaskReducer'

const CombineReducers = combineReducers({
    taskVal: taskReducer
})

export default CombineReducers;
