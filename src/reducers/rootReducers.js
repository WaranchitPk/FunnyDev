import { combineReducers } from "redux";
import { MainCourses,Faculty} from "./Courses";
import {ChiangmaiCorse} from './Orther';
import {Y2018Reducer} from './Users';
import {DashBoardReducer} from './Home';
const reducers = combineReducers({
  MainCourses,
  Faculty,
  ChiangmaiCorse,
  Y2018Reducer,
  DashBoardReducer
});

export default reducers;