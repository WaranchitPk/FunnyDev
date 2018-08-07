import {
  dashboardCourseCampus,
  facultyCourseCampus,
} from './types';
import axios from 'axios';
import { api } from '../config';

export const dashBoardCoursesCampus = () => {
  return dispatch => {
    return axios.get(`${api}/courses`)
      .then((result) => {
        dispatch({
          type: dashboardCourseCampus,
          payload: result,
        });
      });
  };
};
export const facultyCourse = () => {
  return dispatch => {
    return axios.get(`${api}/courses/faculty`)
      .then((result) => {
        dispatch({
          type: facultyCourseCampus,
          payload: result
        })
      })
  }
};

