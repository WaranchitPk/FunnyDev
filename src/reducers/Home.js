import {dashBType} from '../actions/types';

export function DashBoardReducer(state={},action) {
  switch (action.type){
    case dashBType:
      return{
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}