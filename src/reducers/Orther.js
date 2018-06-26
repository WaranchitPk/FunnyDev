import {chiangmaiType,loadOrtherStat} from '../actions/types'
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
};

export const FindRatingCourse = (state={},action) =>{
  switch (action.type){
    case loadOrtherStat:
      return {
        ...state,
        dataT: action.payload
      };
    default:
      return state
  }
};