import {data,faculty} from '../mockData/Courses';
import {mainCourse,facultyStat} from './types';

export const MainCourse = () =>{
  return dispatch =>{
    dispatch({
      type: mainCourse,
      payload: data
    })
  }
};

export const StatFaculty = () =>{
  return dispatch => {
    dispatch({
      type:facultyStat,
      payload: faculty
    })
  }
};