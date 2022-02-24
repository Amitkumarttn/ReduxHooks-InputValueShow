import {ADD_VALUE} from '../action/type';

const INITIAL_STATE = {
  value: '',
};

const inputValueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default inputValueReducer;
