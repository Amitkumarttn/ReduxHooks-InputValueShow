import {ADD_VALUE} from './type';

export const addValue = text => ({
  type: ADD_VALUE,
  payload: text,
});
