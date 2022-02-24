import {SEND_VALUE} from '../action/type'
const INITIAL_STATE = {
  text: '',
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_VALUE: 
    return{
      ...state,
      text: action.payload
    }
    default:
      return state;
  }
};

export default taskReducer;
