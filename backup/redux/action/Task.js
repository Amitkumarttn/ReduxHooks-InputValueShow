import {SEND_VALUE} from '../action/type';

export const addValue = task => ({
  type: SEND_VALUE,
  payload: task,
});