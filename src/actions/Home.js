import {dashBType} from './types';
import {dashBoardHome} from '../mockData/Home';
export const DashBoardAction = () =>{
  return dispatch =>{
    dispatch({
      type: dashBType,
      payload: dashBoardHome
    })
  }
};