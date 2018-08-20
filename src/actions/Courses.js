import {
  dashboardCourseCampus,
  facultyCourseCampus,
  CourseAllCampusGraph,
  CourseEachCampusGraph
} from "./types";
import axios from "axios";
import { api } from "../config";

export const dashBoardCoursesCampus = () => {
  return dispatch => {
    return axios.get(`${api}/courses`)
      .then((result) => {
        dispatch({
          type: dashboardCourseCampus,
          payload: result
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
        });
      });
  };
};

export const findGraphtrain = (year) => (
  dispatch => {
    dispatch({
      type: CourseAllCampusGraph,
      payload: axios.get(`${api}/courses/sumcourse/${year}`)
    });
  }
);

export const findEachGraph = (id, year) => (
  dispatch => {
    dispatch({
      type: CourseEachCampusGraph,
      payload: axios.get(`${api}/courses/findTrain/${id}/${year}`)
    });
  }
);