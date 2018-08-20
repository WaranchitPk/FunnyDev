import { combineReducers } from 'redux';
import {
  DashBoardCoursesReducers,
  FacuntyCoursesReducers,
  FindCourseAllCampusGraph,
  FindCourseEachCampusGraph
} from './Courses';
import {
  ChiangmaiCorse,
  FindRatingCourse,
} from './Orther';
import {
  Y2018Reducer,
  UserViewFindChooseYear,
  findValueYear,
  findValueMonth,
  UserViewFindChooseMonth,
  UserUseFindChooseYear,
  UserUseFindChooseMonth,
  UserViewFindSumYear
} from './Users';
import { DashBoardReducer } from './Home';

const reducers = combineReducers({
  ChiangmaiCorse,
  Y2018Reducer,
  DashBoardReducer,
  DashBoardCoursesReducers,
  FacuntyCoursesReducers,
  FindRatingCourse,
  FindValueYear: findValueYear,
  FindValueMonth: findValueMonth,
  UserViewFindChooseYear,
  UserViewFindChooseMonth,
  UserUseFindChooseYear,
  UserUseFindChooseMonth,
  UserViewFindSumYear,
  FindCourseAllCampusGraph,
  FindCourseEachCampusGraph
});

export default reducers;
