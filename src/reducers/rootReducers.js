import { combineReducers } from "redux";
import { DashBoardCoursesReducers,FacuntyCoursesReducers} from "./Courses";
import {ChiangmaiCorse,FindRatingCourse} from './Orther';
import {Y2018Reducer} from './Users';
import {DashBoardReducer} from './Home';
const reducers = combineReducers({
  ChiangmaiCorse,
  Y2018Reducer,
  DashBoardReducer,
  DashBoardCoursesReducers,
  FacuntyCoursesReducers,
  FindRatingCourse
});

export default reducers;