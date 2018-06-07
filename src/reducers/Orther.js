import {chiangmaiType} from '../actions/types'
export function ChiangmaiCorse(state={},action) {
  switch (action.type){
    case  chiangmaiType:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
}