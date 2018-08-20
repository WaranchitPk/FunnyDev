import {
  dashboardCourseCampus,
  facultyCourseCampus,
  CourseAllCampusGraph,
  UserAnalyticUserViewSumYear,
  CourseEachCampusGraph
} from "../actions/types";

export const DashBoardCoursesReducers = (state = {}, action) => {
  switch (action.type) {
    case dashboardCourseCampus:
      return {
        ...state,
        dataT: action.payload
      };
    default:
      return state;
  }
};
export const FacuntyCoursesReducers = (state = {}, action) => {
  switch (action.type) {
    case facultyCourseCampus:
      return {
        ...state,
        dataFaculty: action.payload
      };
    default:
      return state;
  }
};

export const FindCourseAllCampusGraph = (state = {}, action) => {
  switch (action.type) {
    case `${CourseAllCampusGraph}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${CourseAllCampusGraph}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${CourseAllCampusGraph}_REJECTED`:
      return {
        ...state,
        data: "err"
      };
    default:
      return state;
  }
};

export const FindCourseEachCampusGraph = (state = {}, action) => {
  switch (action.type) {
    case `${CourseEachCampusGraph}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${CourseEachCampusGraph}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${CourseEachCampusGraph}_REJECTED`:
      return {
        ...state,
        data: "err"
      };
    default:
      return state;
  }
};