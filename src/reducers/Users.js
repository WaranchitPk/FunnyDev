import {y2018Type} from '../actions/types';

export function Y2018Reducer(state={},action) {
  switch (action.type){
    case y2018Type:
      return{
        ...state,
        ...action.payload
      };
    default:
      return state
  }
}