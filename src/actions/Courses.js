import { data, faculty } from "../mockData/Courses";
import { mainCourse, facultyStat, dashboardCourseCampus } from "./types";
import axios from "axios";
import { api } from "../config";

export const MainCourse = () => {
  return dispatch => {
    dispatch({
      type: mainCourse,
      payload: data
    });
  };
};
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

export const StatFaculty = () => {
  return dispatch => {
    dispatch({
      type: facultyStat,
      payload: faculty
    });
  };
};