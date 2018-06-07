import {createSelector} from 'reselect';
export const  mainCourses = createSelector(
  (state) => state.MainCourses,
  (data) => data
);