import {y2018Type} from './types';
import {y2018,y2017} from '../mockData/Users';
export const y2018Action = (id) =>{
  if (id === 2018){
    return dispatch => {
      dispatch({
        type: y2018Type,
        payload: y2018
      })
    }
  }else{
    return dispatch => {
      dispatch({
        type: y2018Type,
        payload: y2017
      })
    }
  }
};